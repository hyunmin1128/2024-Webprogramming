
let num = [];

let btnSample = document.querySelector("#lottoButton");
btnSample.addEventListener("click", function () {
  for (let i = 0; i < 6; ++i) {
    num[i] = Math.round(Math.random() * 45) + 1;
    // if(num[i].includes)
    for (let l = 0; l < i; ++l) {
      if (num[i] == num[l]) break;
    }
  }
  document.querySelector("#lottoNum1").innerHTML = num[0];
  document.querySelector("#lottoNum2").innerHTML = num[1];
  document.querySelector("#lottoNum3").innerHTML = num[2];
  document.querySelector("#lottoNum4").innerHTML = num[3];
  document.querySelector("#lottoNum5").innerHTML = num[4];
  document.querySelector("#lottoNum6").innerHTML = num[5];
  console.log(num);
});
