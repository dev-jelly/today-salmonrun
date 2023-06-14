import { client_email, private_key } from "./credentials.json";
import { google } from "googleapis";
import { writeFileSync } from "fs";

async function generateWeapons() {
  const authorize = new google.auth.JWT(client_email, undefined, private_key, [
    "https://www.googleapis.com/auth/spreadsheets",
  ]);

  const googleSheet = google.sheets({
    version: "v4",
    auth: authorize,
  });

  const weaponType = ` export type WeaponInfo = {
  [name: string]: {
    monster: string;
    walkthrough: string;
    warning: string;
  };
};
`;

  const weapons = await googleSheet.spreadsheets.values.get({
    spreadsheetId: "1gaSLJobnvnigI4_Qg-RTb1iezQCHfGLuIUfyjecK2YI",
    range: "'Weapons'!D3:D",
  });

  const monsters = await googleSheet.spreadsheets.values.get({
    spreadsheetId: "1gaSLJobnvnigI4_Qg-RTb1iezQCHfGLuIUfyjecK2YI",
    range: "'Weapons'!E3:E",
  });

  const walkthroughs = await googleSheet.spreadsheets.values.get({
    spreadsheetId: "1gaSLJobnvnigI4_Qg-RTb1iezQCHfGLuIUfyjecK2YI",
    range: "'Weapons'!F3:F",
  });

  const warnings = await googleSheet.spreadsheets.values.get({
    spreadsheetId: "1gaSLJobnvnigI4_Qg-RTb1iezQCHfGLuIUfyjecK2YI",
    range: "'Weapons'!G3:G",
  });

  const generatedCode = generateWeaponVariables(
    weapons?.data?.values?.map((a) => `${a}`) ?? [],
    monsters?.data?.values?.map((a) => `${a}`) ?? [],
    walkthroughs?.data?.values?.map((a) => `${a}`) ?? [],
    warnings?.data?.values?.map((a) => `${a}`) ?? []
  );
  writeFileSync(
    process.cwd().replace("/script", "") + "/src/const/weapon-info.ts",
    weaponType + generatedCode
  );
}

function generateWeaponVariables(
  weapons: string[],
  monsters: string[],
  walkthroughs: string[],
  warnings: string[]
) {
  let variables = "export const weaponInfos = { ";
  let weaponInfos = [];
  for (let i = 0; i < weapons.length; i++) {
    if (!weapons[i].toString()) break;
    weaponInfos.push(
      generateVariable(weapons[i], monsters[i], walkthroughs[i], warnings[i])
    );
  }
  variables += weaponInfos.join(", ");
  variables += "};";

  return variables;
  function generateVariable(
    weapon: string,
    monster: string,
    walkthrough: string,
    warning: string
  ) {
    return `"${weapon.toString().replace(/"/g, '\\"')}":  {
          "monster": \`${monster.toString().replace(/"/g, '\\"')}\`,
          "walkthrough": \`${walkthrough.toString().replace(/"/g, '\\"')}\`,
          "warning": \`${warning.toString().replace(/"/g, '\\"')}\`
      }
      `;
  }
}

generateWeapons();
