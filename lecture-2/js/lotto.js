// 로또 번호 생성하기
// case 1
function getRandNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let selcetedNumbers = [];
function selectLottoNumbers() {
  for (; selcetedNumbers.length < 6; ) {
    let selcetedNumber = getRandNumber(1, 45);

    if (selcetedNumbers.includes(selcetedNumber)) {
      selectLottoNumbers();
    } else {
      selcetedNumbers.push(selcetedNumber);
    }
  }
}
selectLottoNumbers();
console.log(
  "case1",
  selcetedNumbers.sort(function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  })
);

// case 2
let balls = [];
let selectedBalls = [];
for (let i = 0; i < 45; ++i) {
  balls[i] = i + 1;
}
console.log(balls);

for (let i = 0; i < 6; ++i) {
  let selectedIndex = getRandNumber(0, balls.length - 1);
  let selectedBall = balls.splice(selectedIndex, 1);
  selectedBalls.push(selectedBall[0]);
}
console.log(
  "case2",
  selectedBalls.sort(function compare(a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  })
);

// GPT가 생성한 함수
