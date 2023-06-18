 export type WeaponInfo = {
  [name: string]: {
    monster: string;
    walkthrough: string;
    warning: string;
  };
};
export const weaponInfos: WeaponInfo = { ".52 Gal":  {
          "monster": `all`,
          "walkthrough": `연사력과 정밀도가 떨어지지만, 연어들은 크기가 크기 때문에 수월하게 연어들을 상대할 수 있다.`,
          "warning": `전반적으로 능력치가 다 좋은 무기이지만, 한발한발이 잉크를 많이 사용하므로 꼭 적절하게 필요한 만큼 발사하는 편이 좋다.`
      }
      , ".96 Gal":  {
          "monster": `Drizzler,Steelhead,Steel_Eel,Big_Shot,Fish_Stick`,
          "walkthrough": `화력이 좋지만 슈터중 연사력이 최악`,
          "warning": `화력이 좋지만 슈터중 연사력이 최악이다. 이로 칠 능력도 좋지 않기 때문에 다이버등을 상대할 때 조심하자.`
      }
      , "Bamboozler 14 Mk I":  {
          "monster": `Drizzler,Steelhead,Steel_Eel,Big_Shot`,
          "walkthrough": `박쥐는 탄을 못맞췄다면 차징 연사로 킬이 가능<br />폭탄은 풀차지 두방`,
          "warning": `차저이지만 관통성능이 없습니다<br />차징 없이 한방인 연어들은 외워두는 게 좋습니다 (꼬마연어, 타워의 냄비, 연어콥터 상자 등)`
      }
      , "H-3 Nozzlenose":  {
          "monster": `작성 필요`,
          "walkthrough": `작성 필요`,
          "warning": `작성 필요`
      }
      , "L-3 Nozzlenose":  {
          "monster": `Drizzler,Steelhead,Steel_Eel,Big_Shot`,
          "walkthrough": `딱히 의식해야할 것 없음`,
          "warning": `없음`
      }
      , "REEF-LUX 450":  {
          "monster": `all`,
          "walkthrough": `없음`,
          "warning": `없음`
      }
      , "N-ZAP '85":  {
          "monster": `Drizzler,Steelhead,Steel_Eel,Big_Shot`,
          "walkthrough": `타워 : 잡으러 가지 맡고 무조건 폭탄 던지기  던지기  던지기  던지기 <br />폭탄 : 풀 차지 두 방 나머지는 의식할 거 없음`,
          "warning": `없음`
      }
      , "Rapid Blaster Pro":  {
          "monster": `all`,
          "walkthrough": `딱히 의식해야할 것 없음`,
          "warning": `없음`
      }
      , "Snipewriter 5H":  {
          "monster": `작성 필요`,
          "walkthrough": `작성 필요`,
          "warning": `작성 필요`
      }
      , "Luna Blaster":  {
          "monster": `작성 필요`,
          "walkthrough": `작성 필요`,
          "warning": `작성 필요`
      }
      , "Nautilus 47":  {
          "monster": `작성 필요`,
          "walkthrough": `작성 필요`,
          "warning": `작성 필요`
      }
      , "Dynamo Roller":  {
          "monster": `작성 필요`,
          "walkthrough": `작성 필요`,
          "warning": `작성 필요`
      }
      , "Dualie Squelchers":  {
          "monster": `all`,
          "walkthrough": `딱히 의식해야할 건 없음`,
          "warning": `없음`
      }
      , "Splatana Wiper":  {
          "monster": `all`,
          "walkthrough": `사거리와 위력이 낮은 와이퍼. 다루기 어렵지만, 모든 연어에 대응할 수 있다.<br />가로베기는 빠르게 움직이거나, 작은연어들을 빠르게 처리할 때 사용하면 좋습니다<br />차징을 하여 세로 베기를 하면 굉장히 높은 데미지를 가지며 관통 공격이 가능`,
          "warning": `없음`
      }
      , "Rapid Blaster":  {
          "monster": `Fish_Stick,Stinger`,
          "walkthrough": `1발의 위력이 낮고 폭발 범위가 조금 좁지만 사거리와 연사력이 좋은 블래스터. 조무래기 처리는 조금 약하므로 사거리를 활용하자. 타워는 쉽게 쓰러뜨릴 수 있고, 기둥은 아래에서 처리할 수 있다. 타워나 철구슬 등 해안 근처에 머무는 거대 몬스터를 원거리에서 공격할 수 있다.`,
          "warning": `큰물고기는 모두 처리할 수 있지만, 다이버 색칠에는 약하다.`
      }
      , "Random":  {
          "monster": `?`,
          "walkthrough": `?`,
          "warning": `없음`
      }
      , "Range Blaster":  {
          "monster": `Fish_Stick,Stinger`,
          "walkthrough": `딱히 의식해야할 건 없음`,
          "warning": `없음`
      }
      , "E-liter 4K":  {
          "monster": `Drizzler,Steelhead,Steel_Eel`,
          "walkthrough": `타워 :<br />푹탄 던지기(3번) 혹은 스페셜 갈기기<br />나머지는 막히 의식할 건 없음`,
          "warning": `배 안쪽으로 들어오는 뱀, 박쥐, 폭탄만 빠르게 정리해 줘도 1인분입니다. 또한, 긴 사거리를 동해 좌우로 날아드는 박쥐의 로켓도 의식하면서 카운터 쳐줍시다.`
      }
      , "Unknown":  {
          "monster": `?`,
          "walkthrough": `?`,
          "warning": `?`
      }
      , "Tri-Slosher":  {
          "monster": `all`,
          "walkthrough": `딱히 의식해야할 것 없음`,
          "warning": `없음`
      }
      , "Heavy Splatling":  {
          "monster": `작성 필요`,
          "walkthrough": `작성 필요`,
          "warning": `작성 필요`
      }
      , "Slosher":  {
          "monster": `Steelhead`,
          "walkthrough": `한 번에 대량의 잉크를 발사하여 높은 곳이나 벽 뒤에 있는 적을 공격합니다. 이는 슬로셔의 탄도가 포물선을 그리기 때문에 가능합니다.<br />사정거리를 최대한 활용하여 움직이세요. 이는 슬로셔의 장점 중 하나입니다.<br />적의 위에서 잉크를 뿌리면, 공격 범위 내의 적에게 한 번에 피해를 줄 수 있습니다. 이 방법은 일직선으로 다가오는 적 처리에 특히 유용합니다.<br />주로 큰 적을 처리하면서, 주변의 작은 적도 처리하도록 하세요.`,
          "warning": `잉크 효율성을 유의하면서 게임을 진행하세요. 슬로셔는 한 번에 많은 잉크를 사용하므로 이 점을 주의해야 합니다.<br />폭탄 처리는 슬로셔가 잘하지만, 기둥이나 타워 처리는 약간 시간이 걸립니다. 이 점을 고려하여 전략을 세우세요.`
      }
      , "Flingza Roller":  {
          "monster": ``,
          "walkthrough": ``,
          "warning": ``
      }
      , "Squeezer":  {
          "monster": ``,
          "walkthrough": `1발째는 위력과 사거리는 있지만 잉크 효율이 좋지 않은 사격, 2발째부터는 위력과 사거리는 없지만 잉크 효율과 칠 성능이 좋은 사격이 가능한 슈터. 작은 연어 처리나 기둥 처리, 타워나 철구슬 등 해안 근처에 머물러 있는 거대 몬스터를 원거리에서 공격할 수 있다.`,
          "warning": `다이버 상대는 연사로 칠 하는 것이 좋다. 폭탄을 제외하고는 연사로 처리하자.`
      }
      , "Sploosh-o-matic":  {
          "monster": `작성 필요`,
          "walkthrough": `스플랫 슈터와 함께 타워, 철구 담당입니다. 조무래기가 너무 많다면 무조건 스페셜을 써서 잡으세요. 들어갔다가 죽는게 훠얼씬 손해입니다. 여유 있을 면 조무래기 정리, 기둥도 설치되면 바로 잡아주세요.`,
          "warning": `볼드 마커로는 폭탄을 기본적으로 처리하기 힘듭니다. 기동성이 좋은만큼 팀내에서 많은 일을 해내야 합니다`
      }
      , "Dark Tetra Dualies":  {
          "monster": `all`,
          "walkthrough": `전부 무난함`,
          "warning": `기동성과 데미지 둘 다 챙긴 효자 무기입니다. 타워는 물론 칠 구슬이 나올 경우 바로 달려 가세요. 단,쿼드호퍼는 구르기 역경직이 쎄기 때문에 해안가에 조무래기 연어가 많은 곳에서 구르면 안됩니다.`
      }
      , "Splatana Stamper":  {
          "monster": `all`,
          "walkthrough": `타워 :<br />검기로도 냄비 3개씩 걷어낼 수 있다 나머지는 딱히 의식할 건 없음`,
          "warning": `없음`
      }
      , "Splattershot Jr.":  {
          "monster": `all`,
          "walkthrough": `딱히 의식해야할 것 없음`,
          "warning": `없음`
      }
      , "Splash-o-matic":  {
          "monster": `all`,
          "walkthrough": `뭐든 지 할 수 있는 무기`,
          "warning": `없음`
      }
      , "Goo Tuber":  {
          "monster": `Drizzler,Steelhead,Steel_Eel,Big_Shot`,
          "walkthrough": `잉크 효율이 좋은 무기, 논차징이 총 데미지 대비 잉크 효율은 더 좋습니다<br />빛파리 때는 차징으로 빛파리를 노려주세요`,
          "warning": `논차지 상태가 잉크 효율은 더 좋지만, 관통성능이 없으니 적절하게 번갈아가면서 사용해주세요.`
      }
      , "Classic Squiffer":  {
          "monster": `타워 제외 전부`,
          "walkthrough": `타워:<br />멀리서 폭탄 던지기 혹은 스페셜 쓰기<br />나머지는 딱히 의식할 건 없음`,
          "warning": `없음`
      }
      , "Sloshing Machine":  {
          "monster": `타워 제외 전부`,
          "walkthrough": `타워 :<br />폭탄 or 스페셜<br />기둥 :<br />돌아가는 방향<br />역 방향으로 탄 쏘면 2방에 정리<br />가능<br />나머지는 의식할<br />건 없음`,
          "warning": `세탁기는 직격 대미지가 준수하고 사거리도 꽤 립니다.<br />조무래기 정리가 좀 힘듣기 때문에 둘러쌓이지 않게 조심하 면서 뱀, 폭탄, 박쥐 위주로 잡는걸 의식합시다.`
      }
      , "Undercover Brella":  {
          "monster": `작성 필요`,
          "walkthrough": `작성 필요`,
          "warning": `작성 필요`
      }
      , "Dapple Dualies":  {
          "monster": `all`,
          "walkthrough": `초당 데미지가 높은 편<br />사정거리가 짧은 것 외에는 전반적으로 좋은 무기`,
          "warning": `박쥐의 탄알을 공격하기가 어려운 편`
      }
      , "Splattershot Nova":  {
          "monster": `all`,
          "walkthrough": `연사력이나 칠 성능은 어느 정도 좋지만, 탄이 흔들리기 쉽고 위력이 낮은 중거리 슈터다. 일반 연어는 4발로 처치할 수 있다. 주로 작은 연어를 처리해가면서, 거물도 처리해 나가자. 타워나 철구슬과 같이 해안 근처 거물도 멀리서 처치 가능하다.`,
          "warning": `타워나 기둥 같은 대형 몬스터는 우선적으로 처리해야 한다.`
      }
      , "Splat Roller":  {
          "monster": `Steel_Eel,Big_Shot,Slammin_Lid`,
          "walkthrough": `전반적인 조무래기 연어들은 다 상대하기 좋다!`,
          "warning": `폭탄을 잡기가 어려운 편. 세로 스윙 2번으로 잡을 수 있지만 타이밍을 잘 맞춰야합니다`
      }
      , "Splat Dualies":  {
          "monster": ``,
          "walkthrough": `색칠, 연사력, 화력이 어느 정도 좋은 표준적인 매뉴버입니다. 적은 물론, 큰 적도 능숙하게 처리할 수 있는 만능 무기입니다. 적 처리나 타워, 기둥 처리를 우선적으로 수행하면 아군도 움직이기 쉬워질 것입니다.`,
          "warning": `없음`
      }
      , "Splattershot":  {
          "monster": `all`,
          "walkthrough": `딱히 의식해야할 것 없음`,
          "warning": `없음`
      }
      , "Mini Splatling":  {
          "monster": ``,
          "walkthrough": ``,
          "warning": ``
      }
      , "Splat Charger":  {
          "monster": `Drizzler,Steelhead,Steel_Eel,Big_Shot`,
          "walkthrough": `타워: 그냥 폭탄 던지기, 나머지는 의식할 거 없음`,
          "warning": `없음`
      }
      , "Bloblobber":  {
          "monster": `all`,
          "walkthrough": `딱히 의식해야할 것 없음`,
          "warning": `없음`
      }
      , "Big Swig Roller":  {
          "monster": `쉽게 잘 잡는 거물은 없고
조무래기 킬러`,
          "walkthrough": `폭탄 :<br />세로 + 가로 or<br />세로 + 세로 (거리가 멀 경우 세로 x 3)<br />나머지는 의식해야할 건 없음.`,
          "warning": `없음`
      }
      , "Explosher":  {
          "monster": `all`,
          "walkthrough": `폭발하는 탄환을 발사하는 슬로셔입니다. 진흙연어와 어깨패드는 폭탄이 아닌 메인 무기로 쓰러뜨릴 수 있다. 또한 타워는 멀리서 빠르게 처치할 수 있다. 기본적으로 기둥을 제외한 대형 몬스터를 처치하러 가는 전략이 좋다.`,
          "warning": `사격 후 경직이 크기 때문에 사거리를 잘 활용해야 합니다. 조무래기 처리에는 약하지만, 못 하는 건 아님.`
      }
      , "Jet Squelcher":  {
          "monster": `all`,
          "walkthrough": `딱히 의식해야할 것 없음`,
          "warning": `데미지가 좀 약하지만 매우 긴 사거리를 가진 무기입니다.<br />대부분의 타워는 외곽에 안 나가고도 정리할 수 있으므로　타워는 바로바로 정리해줍시다.<br />기둥은 설치 즉시 바로 잡아주세요.`
      }
      , "Carbon Roller":  {
          "monster": `타워 제외 전부`,
          "walkthrough": `타워 : 그냥 폭탄 던지세요.<br />폭탄 : 가까이서 세로베기 <br />2번 조무래기는 밀면 안되고 가로로 내려찍어야 합니다`,
          "warning": `빛파리에서 작은연어들은 밀어서 죽일 수 있습니다`
      }
      , "Tenta Brella":  {
          "monster": ``,
          "walkthrough": ``,
          "warning": ``
      }
      , "Glooga Dualies":  {
          "monster": `타워 제외 전부`,
          "walkthrough": `딱히 의식해야할 것 없음`,
          "warning": `켈빈은 데미지는 높지만 연사력이 낮아 조무래기들에게 둘러 쌓이면 탈출하기 힘듭니다. 둘러쌓일 것 같으면 스페셜 을 써서 달 하거나. 아예 스페셜을 쓰고 잡으세요`
      }
      , "Ballpoint Splatling":  {
          "monster": `all`,
          "walkthrough": `딱히 의식해야할 것 없음`,
          "warning": `쿠겔 슈라이버는 근거리 사격, 장거리 사격 모드가 나눠져 있는 특이한 스피너입니다. 근거리 사격으로는 뱀, 폭탄, 장거리 사격으로는 기둥, 철구습, 타워를 갈아버리시다.<br />+) 기둥을 잡음 땐 주변에 조무래기가 없는지 확인하기`
      }
      , "Clash Blaster":  {
          "monster": `Fish_Stick,Stinger`,
          "walkthrough": `딱히 의식해야할 것 없음`,
          "warning": `클래시 블래스티는 조무래기 정리를 잘하는 편에 속합니다.<br />이를 이용해 타워나 철구속을 잡으러 가는 이군과 함께<br />편하게 진입합시다. 이외에도 컨테이너 주변에 설치되는 기 둥은 설치 즉시 정리하는게 좋습니다.`
      }
      , "Tri-Stringer":  {
          "monster": `Drizzler,Steelhead,Steel_Eel,Big_Shot`,
          "walkthrough": `없음`,
          "warning": `알 컨테이너 주변으로 들어오는 뱀, 폭탄, 박쥐 정리하기, 차지 450데미지여서 날아가는 박쥐도 두방만에 정리가 가능합니다. 여유있을 때 철구습 잡는거 돕기`
      }
      , "Splat Brella":  {
          "monster": `Drizzler,Steelhead,Steel_Eel`,
          "walkthrough": `타워:<br />그냥 폭탄 던지기<br />나머지는 의식할<br />건 없음`,
          "warning": `파라셸터는 초근접 상태에서만 데미지가 준수하게 나오기<br />때문에 안쪽으로 들어오는 거물들을 위주로 잡아줘야 합니다<br />또한, 방어막을 펼친 상태에서 조무래기에 갖다대면 일반 연어들을 한꺼번에 정리할 수 있습니다. 철구슬 잡을 때 연어 정리하기 편합니다`
      }
      , "Inkbrush":  {
          "monster": `Fish_Stick,Stinger,Steel_Eel,Flipper_Flopper,Slammin_Lid`,
          "walkthrough": `밀고다니면 생존력이 매우 높은편. 꼬마연어 등 조무래기 처리가 쉽고, 지면 칠 성능은 좋은편`,
          "warning": `다른 무기들에 비해서 거물정리 능력이 매우 낮으므로 보조하는 느낌 으로 플레이 해주세요. 물론, 타워나 박쥐 카운터 등을 혼자서 정리할 수 있는 상황일  경우 정리해주세요. <br />초보자의 경우 공격 중 주변 시야를 잃지 않도록 조심해서 플레이 해주세요.`
      }
      , "Splattershot Pro":  {
          "monster": `all`,
          "walkthrough": `사거리가 있고, 위력과 연사력도 어느 정도 있는 슈터. 칠 성능과 잉크 효율은 그다지 좋지 않으므로 사거리를 살려서 돌아다녀야 합니다. 타워와 기둥을 포함한 대형 몬스터 처리를 우선적으로 진행하자. 타워나 철구슬 등 해안 근처에 머무는 거대 몬스터는 접근하지 않고도 공격할 수 있다.`,
          "warning": `타워나 기둥 같은 대형 몬스터는 우선적으로 처리해야 한다. 조무래기 처리는 가능하지만, 기동력이 좋지 않다.`
      }
      , "Aerospray MG":  {
          "monster": `all`,
          "walkthrough": `데미지가 약하지만 연사력이 높고, 칠 성능이 좋은 무기입 니다. 이 점을 살려 거물연어에 대한 살상력은 다른 무기들 이 더 좋으니 조무래기 정리에 힘을 싣는게 좋겠습니다.`,
          "warning": `박쥐의 탄알을 노리거나 폭탄을 잡기에는 사거리 짧아서 어려울 수 있습니다`
      }
      , "Hydra Splatling":  {
          "monster": `all`,
          "walkthrough": `차지 시간이 길고 이동력이 부족하지만, 사정거리, 연사력, 공격력, 총격 지속 시간이 우수한 스피너입니다. 이러한 장점을 살려 멀리서 큰 적을 차례로 처리하려고 노력하세요.<br />해변 근처에 머무르는 타워나 철구와 같은 큰 적에게 멀리서 공격할 수 있습니다.`,
          "warning": `주변의 작은 연어 처리가 어렵습니다. 스피너의 차지 시간이 긴 특성을 감안하여 게임을 진행하세요.`
      }
      , "Blaster":  {
          "monster": `all`,
          "walkthrough": `딱히 의식해야할 것 없음`,
          "warning": `없음`
      }
      , "Octobrush":  {
          "monster": `작성 필요`,
          "walkthrough": `작성 필요`,
          "warning": `작성 필요`
      }
      , "Painbrush":  {
          "monster": `Fish_Stick,Stinger,Steel_Eel,Flipper_Flopper,Slammin_Lid`,
          "walkthrough": `데미지가 높아 대량의 연어를 빠르게 처리할 수 있다. 조무래기는 살짝 위를 칠하는 느낌으로!`,
          "warning": `롤러와 다르게, 밀 때 잉크 사용량은 속도에 관계없이 똑같이 소모한다<br />한번 휘두를 때 속도가 매우 느리고 이동도 어려운 편이기 때문에 조심하자<br />폭탄을 던지면 5번 정도 밖에 휘두룰 수 없어, 잉크 소모량에 주의하자!`
      }
      };