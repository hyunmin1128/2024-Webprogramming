console.log("Hello World!");
//document.querySelector("h1").innerHTML = "Hello Javascript!";
var h1Element = document.querySelector("h1");
h1Element.innerHTML = "Hello Javascript!";

/*
        var a = 10;
        var b = 20;
        const c = 100;
        let d = 50;

        a = 50;
        d = 10;
        // c = 50; 이 부분은 Constant에 변경하려 해서 에러!
        console.log("a + b + c + d=", a + b + c+d); 
        */

// const name; 오류! 상수는 정의 되어야 함
let name; // 변수는 정의 되지 않아도 가능
let firstName = "HyunMin"; // 따옴표는 상관없는데 전부 통일 해야함 그게 규칙임
let lastName = "Kil";
name = firstName + lastName;
console.log(name);

function sum(a, b) {
  let c = a + b;
  return c; // a+b
}

let result = sum(5, 5);
console.log(result);

// console.log(sum(5,7));

if (result > 10) {
  console.log("맞다");
} else if (result === 10) {
  console.log("같다");
} else {
  console.log("틀리다");
}

switch (result) {
  case 10:
    console.log("맞다");
    break;
  case 11:
    console.log("크다");
    break;
  case 12:
    console.log("크다");
    break;
  default:
    console.log("틀리다");
    break;
}

// 반복문, Loop
// 1부터 100까지 더해라
//   let a = 1;
//   a = a + 1; // 2
//   a = a + 1; // 3
//   a += 1; // 4
//   a -= 1; // 3
//   a++;
//   a--;
//   ++a;
//   --a;

let loopResult = 0;
for (let i = 1; i <= 100; i++) {
  console.log(loopResult, i);
  loopResult += i;
}
console.log(loopResult);

// Array 배열
let numberArray = [1, 2, 3, 4, 5, 6];
let charArray = ["a", "b", "c", "d"];

console.log("numberArray의 첫번째 값", numberArray[0]);
console.log("numberArray의 길이", numberArray.length);
console.log("numberArray의 범위를 벗어났을때", numberArray[6]); // undefined
console.log(numberArray.pop(), numberArray); //마지막 인덱스의 값을 가져옴
console.log(numberArray.pop(), numberArray);
console.log(numberArray.push(10), numberArray); //마지막 인데스에 값을 넣음
console.log(numberArray.push(20), numberArray);
console.log(numberArray.reverse(), numberArray); //배열을 뒤에서부터 출력 / 순서가 바뀜
console.log(numberArray.join("..."), numberArray); // 값을 다 합침, 순서대로 붙임, 배열의 요소들을 문자열로 취급하여 붙임

let sumValue = 0;
for (let i = 0; i < numberArray.length; i++) {
  sumValue += numberArray[i];
}
console.log("numberArray 합산 값", sumValue);

// 문자열
let hello = "Hello World!";
let myName = "My name is KK";
let sample = "Hello2";
let newChar = `Hello3`; // 리터럴, 물결 밑에꺼
console.log(hello.length);
console.log(hello.split(" ")); // 문자열을 배열로 바꿈 [ ]안에 문자열을 넣음, ' ' 공백으로 Hello와 World! 둘로 나눔
console.log(hello.concat(" ", myName)); // 두 문자열을 합침, ' '로 공백을 넣고 합침
console.log("안녕하세요를 영어로 하면 " + sample + "입니다"); // 두 문자열을 더함, 연속적으로 출력
console.log(`안녕하세요를 영어로 하면 ${newChar} 입니다.`);

// Object
let person1 = {
    name: "차은우", // 키 : 값
    age: 30,
    tall: 190,
    weight: 70,
    address: "군포시 산본 ...",
    sing: function() { // 메서드
        console.log("노래부르기");
    },
    run: function() {
        console.log("달리기");
    }
}
let person2 = {
    name: "길현민",
    age: 20,
    tall: 175,
    weight: 60,
    address: "서울시 관악구 ...",
    sing: function() { // 메서드
        console.log("노래부르기");
    },
    run: function() {
        console.log("달리기");
    }
}

console.log(person1.name, person1.age);
console.log(`안녕하세요 저는 ${person1.name} 입니다. 나이는 ${person1.age} 입니다.`);
person1.sing();