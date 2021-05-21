// 총 질문 16개
const qnaList = [
    // 1. 교통
    {
      q: '1. 가까운 거리는 도보나 자전거를 이용하는 횟수는? ',
      a: [
        { answer: '이용하지 않는다', data: [0] }, 
        { answer: '1회 이상 3회 미만', data: [2] }, 
        { answer: '3회 이상 5회 미만', data: [4] }, 
        { answer: '5회 이상 7회 미만', data: [6] }, 
        { answer: '7회 이상', data: [7] },
      ]
    },
    {
      q: '2. 자동차 운행을 하시나요?', // 1번 인덱스
      a: [
        { answer: 'YES'},
        { answer: 'NO'},
      ]
    },
    {
      q: '2-1. 이용하는 자동차의 연료 종류는 무엇인가요?',
      a: [
        { answer: '휘발유', data:[0]},
        { answer: '경유', data:[1]},
        { answer: 'LPG', data:[2]},
      ]
    },
    {
      q: '2-2. 한달 평균 연료비는 얼마인가요?',
      a: [
        { answer: '15만원 미만', data: [15] },
        { answer: '15만원 이상 20만원 미만', data: [17.5]},
        { answer: '20만원 이상 25만원 미만', data: [22.5] },
        { answer: '25만원 이상 30만원 미만', data: [27.5] },
        { answer: '30만원 이상', data: [30] },
      ]
    },
    {
      q: '2-3. 일주일에 대중교통을 얼마나 이용하시나요?', // 4번 인덱스
      a: [
        { answer: '이용하지 않는다', data:[0]},
        { answer: '1회 이상 5회 미만', data:[3]},
        { answer: '5회 이상 10회 미만', data:[7.5] },
        { answer: '10회 이상 15회 미만', data:[12.5]},
        { answer: '15회 이상 20회 미만',data:[17.5]},
      ]
    },
    // 2. 냉/난방
    {
      q: '3. 여름철 에어컨 사용 시간이 어느정도 인가요?', //5번 인덱스
      a: [
        { answer: '사용하지 않는다', data: [0]},//시간
        { answer: '1시간 이상 4시간 미만', data: [2.5]}, 
        { answer: '4시간 이상 7시간 미만', data: [5.5]}, 
        { answer: '7시간 이상 11시간 미만', data: [9]}, 
        { answer: '11시간 이상 15시간 미만', data: [13]}, 
      ]
    },
    { //26도 : 1.8kWh(1시간당) -> 1도 낮아지면 +0.225kWh 로 계산하여 탄소계산기로 계산
      q: '3-1. 에어컨 평균 설정 온도는 몇 도인가요?',
      a: [
        { answer: '18도 이하', data: [3.6] }, //18도 
        { answer: '19도 이상 21도 미만', data: [3.15] },//20도
        { answer: '21도 이상 24도 미만', data: [2.7]  },//22도
        { answer: '24도 이상 26도 미만', data: [2.025]  },//25도
        { answer: '26도 이상', data: [1.8]},
      ]
    },
    {
      q: '4. 보일러가 아닌 단열재로 열 손실을 방지하고 있나요?', // 7번 인덱스
      a: [
        { answer: 'YES', data: [1]},
        { answer: 'NO', data: [0]},
      ]
    },
    // 3. 전기
    {
      q: '5. 하루에 TV를 몇 시간 정도 시청하나요?',
      a: [
        { answer: 'TV 시청을 하지 않는다', data : [0] },
        { answer: '0시간 이상 3시간 미만', data : [1.5] },
        { answer: '3시간 이상 6시간 미만', data : [4.5] },
        { answer: '6시간 이상 9시간 미만', data : [7.5] },
        { answer: '9시간 이상 12시간 미만', data : [10.5] },
      ]
    },
    {
      q: '6. 하루에 컴퓨터를 몇 시간 정도 이용하나요?',
      a: [
        { answer: '컴퓨터를 이용하지 않는다', data : [0] },
        { answer: '0시간 이상 3시간 미만', data : [1.5] },
        { answer: '3시간 이상 6시간 미만', data : [4.5] },
        { answer: '6시간 이상 9시간 미만', data : [7.5] },
        { answer: '9시간 이상 12시간 미만', data : [10.5] },
      ]
    },
    {
      q: '7. 세탁기를 일주일에 몇 번 돌리나요? ',
      a: [
        { answer: '세탁기를 사용하지 않는다',data : [0] },
        { answer: '1회', data : [1] },
        { answer: '2회', data : [2] },
        { answer: '3회', data : [3] },
        { answer: '4회', data : [4] },
      ]
    },
    {
      q: '8. 외출 시 또는 자리를 비울 시에 플러그를 뽑는 습관이 있나요?',
      a: [
        { answer: 'YES', data : [1]},
        { answer: 'NO' , data : [0]},
      ]
    },
    // 4. 자원
    {
      q: '9. 한 달에 종이청구서를 받는 횟수가 몇 번인가요?', //12번 인덱스
      a: [
        { answer: '종이청구서를 받지 않는다', data: [0] },
        { answer: '1회 이상 3회 미만', data: [2] },
        { answer: '3회 이상 5회 미만', data: [4] },
        { answer: '5회 이상 7회 미만', data: [6] },
        { answer: '8회 이상', data: [8] },
      ]
    },
    {
      q: '10. 평균 사워 시간이 몇 분인가요?',
      a: [
        { answer: '5분 미만', data: [3] },
        { answer: '5분 이상 10분 미만', data: [7.5] },
        { answer: '10분 이상 15분 미만', data: [12.5] },
        { answer: '15분 이상 20분 미만', data: [17.5] },
        { answer: '20분 이상', data: [20] },
      ]
    },
    {
      q: '11. 일주일에 몇 번 배달 음식 주문하나요?',
      a: [
        { answer: '배달음식을 주문하지 않는다', data: [0] },
        { answer: '1회 이상 4회 미만', data: [2.5] },
        { answer: '4회 이상 7회 미만', data: [5.5] },
        { answer: '7회 이상 10회 미만', data: [8.5] },
        { answer: '10회 이상', data: [10] },
      ]
    },
    {
      q: '12. 일주일에 몇 번 음식물 쓰레기를 배출하나요?',
      a: [
        { answer: '음식물 쓰레기를 배출하지 않는다', data: [0] },
        { answer: '1회 이상 3회 미만', data: [2] },
        { answer: '3회 이상 5회 미만', data: [4] },
        { answer: '5회 이상 7회 미만', data: [6] },
        { answer: '7회 이상', data: [7] },
      ]
    }
  ]

  const doList = [
    {
      car_yes: // 자동차 운행 O
      [
        {do : '내리막길 운전 시 가속페달 밟지 않기 - CO2 저감량 : 48.3 kg 비용절감 :	33,984원	나무심기효과 : 7.3 그루'},
        {do : '신호대기 시 기어를 중립으로 놓기 - CO2 저감량 : 13 kg 비용절감 :	9,062원	나무심기효과 : 2 그루'},
        {do : '자동차 에어컨 사용 - CO2저감량 : 22.7 kgC 비용절감 : 16,010원  나무심기효과 : 3.4 그루'},
        {do : '주기적으로 타이어 공기압 체크하기 - CO2 저감량 : 82.4 kg 비용절감 :	57,848원	나무심기효과 : 12.5 그루'},
        {do : '가까운 거리는 도보나 자전거 이용 - CO2 저감량 : 25.1 kg 비용절감 : 17,672원 나무심기효과 : 3.8그루'},
        
      ],
      car_no : // 자동차 운행 X
      [
        {do : '가까운 거리는 도보나 자전거 이용 - CO2 저감량 : 25.1 kg 비용절감 : 17,672원 나무심기효과 : 3.8그루'},
      ]  
    },
    {
      air_yes : // 에어컨 O
      [
        {heat_yes: // 에어컨 O 단열재 O
          [
            {do : '에어컨 사용 1시간 줄이고 온도 2℃ 높이기 - CO2 저감량 : 19.4 kg 비용절감 : 5,775원 나무심기효과 : 2.9 그루'},            
          ],
        },
        {heat_no:// 에어컨 O 단열재 X
          [
            {do : '에어컨 사용 1시간 줄이고 온도 2℃ 높이기 - CO2 저감량 : 19.4 kg 비용절감 : 5,775원 나무심기효과 : 2.9 그루'},
            {do : '단열재 사용으로 열손실 방지하기 - CO2 저감량 : 71.4 kg  비용절감 : 26,260원 나무심기효과 : 10.8 그루'},
          ], 
        },
      ],
      air_no:// 에어컨 X
      [
        {heat_yes: // 에어컨 X 단열재 O
        [
          {do : '정말 잘 하고 있네요! '}, // 멘트 나중에 수정하기
        ],
      },
      {heat_no:// 에어컨 X 단열재 X
        [
          {do : '단열재 사용으로 열손실 방지하기 - CO2 저감량 : 71.4 kg  비용절감 : 26,260원 나무심기효과 : 10.8 그루'},
        ], 
      },
      ]
    }, 
    {
      electric: // 전기
      [
        {do : 'TV 사용시간 1시간 줄이기 - CO2 저감량 : 7.9 kg 비용절감 : 2,351원  나무심기효과 : 1.2 그루'},
        {do : '사용 않는 가전제품의 플러그 뽑기 - CO2 저감량 : 12.6 kg 비용절감 : 3,731원	나무심기효과 : 1.9 그루'},
        {do : '세탁횟수 주 1회 줄이기 - CO2 저감량 : 2.5 kg  비용절감 : 732원 나무심기효과 : 0.4 그루'},
        
      ],    
    },
    {
      resource: //자원
      [       
        {do : '샤워시간 5분 줄이기 - CO2 저감량 : 7.5 kg 비용절감 : 14,588원 나무심기효과 : 1.1 그루'}, // 세제곱 m = 1000L, 19,439L, 샤워 1분에 12L 사용,  -> 4분을 1년동안 줄이면 나오는 효과
        {do : '음식물쓰레기 20% 줄이기 - CO2 저감량 : 36.2 kg 나무심기효과 : 5.5 그루'},
      ],    
    },
  ]