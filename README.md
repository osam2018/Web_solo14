명령어 :: npm run serve 및 간단한 API서버구동인 node server 명령어를 치셔야 합니다.
1. 소속 : 공군 기상단
2. 계급 : 중위
3. 성명 : 주홍철
4. 프로젝트 : 국방매니저
5. 발사믹 주소 : readMeBalsamic.pdf에 저장했습니다.

6. 기획의도
저번에 철원군 총알을 맞아 일병이 사망하는 사건을 보고 왜 이런 사태가 벌어졌나...
생각해보았습니다. 사격연습을 하는데 그 장소로부터 안전장치나 안전통보를 안하다니요..
정말 안좋은.. 부대죠. 그런 부대라는 것을 알고 갔을까요? 그 병사는.
안좋은 부대 안좋은 시설을 갖춘 부대는 있어야 하지 말아야 하며 가지도 말아야 한다고 생각합니다..
언제까지 군대라는 구실하에 안좋은 시설과 환경속에서 살것입니까...
그런 생각에 좀 더 오픈되어있어야 한다는 생각에 부대평가를 만들었고
영내에 콜택시만을 이용하는 차없는 간부들의 편리성추구를 위해 카쉐어링 페이지를 만들었습니다.
간부들은 그럭저럭 문서를 받아서 대회가 열린것을 알 수 있지만 병사들은 잘 알지도 못하고.. 준비도 못하고 스펙도 못쌓는 경우가 많습니다.
더군다나 육군은 육군끼리 해군은 해군끼리 홍보를 하거든요.. 이를 해결하기 위해 스크래핑으로 한눈에 볼 수 있는
공모전 / 대회를 만들었습니다.
6. 프로젝트 설명
군대에서는 편리, 공유, 오픈성이 떨어집니다. 이 3가지들을 모두 해결하는 국방매니저입니다!
편리함을 더하다. 카쉐어링
영내콜택시로는 한계가 있습니다. 출퇴근이나 항상 가는 곳은 정해져있습니다. 같은 간부끼리 정답게 카쉐어링을 하면서 인맥과 편리를 다질 수 있습니다.

공유성을 더하다. 공모전 / 대회
육군, 공군, 해군은 공모전이나 대회를 많이 엽니다만 홍보가 부족합니다. 육, 해, 공 국방부까지 모든 공지사항을 스크래핑하여 제공합니다.

오픈성을 늘리다. 부대평가
더이상 부대를 나무위키만을 보고 가지 않습니다. 실제 병사, 간부들이 겪은 부대평가들을 모아 부대선택시 좀 더 오픈된 환경속에서 선택하는 것을 도와 줍니다.
7. 주요 완료 기능 :
 - 1. 간단한 서버 api에 요청해서 스크래핑된 데이타를 요청 및 fetch
 - 2. 매니저.ts를 이용한 데이타 list fetch, 추가요청시 push를 하는 메소드
 - 3. search 이벤트시 다이나믹 서치
 - 4. d3를 이용한 지도 줌, 무브 이벤트 및 카쉐어링 list 매핑
 - 5. 카쉐어링 신청시 emit을 App.vue가 파악, 오른쪽 상단의 badge의 숫자를 증가시키는 이벤트
 - 6. 간단한 api 서버
 - 7. 인터페이스 모듈화

8. 미완료기능
 - 카쉐어링 신청시 메시지 입력 부분

10. 향후계획
이번에는 클라이언트로만 기능들을 구현했습니다.
향후에는 백엔드까지 모두 구현하고 하이브리드앱을 만들 계획입니다.
백엔드는 socket.io, node.js nginx, request, cheerio, express 를 이용하여 스크래핑, 실시간 통신을 만들며
프론트엔드는 vue.js d3.js 를 이용해서 좀 더 다이나믹한 웹앱을 만들 계획입니다.
이번에 개발중간발표를 하는데 병사들 반응이 좋아서 꼭 만들려고 합니다ㅎㅎ
부대평가 등을 만들어서 꼭 군대를 좀 더 편리하게 할 계획입니다.


# mili-manager

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
