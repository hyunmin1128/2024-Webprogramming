let handsomeList = ["차은우", "장동건", "원빈", "현빈", "길현민"];

// document.getElementById("sadad");
let ulWellFaceList = document.querySelector("#wellFaceList");
console.log(ulWellFaceList);
// ulWellFaceList.innerHTML = "<li>" + handsomeList[0] + "</li>";
// ulWellFaceList.innerHTML += "<li>" + handsomeList[1] + "</li>";
// ulWellFaceList.innerHTML += "<li>" + handsomeList[2] + "</li>";

let btnSample = document.querySelector("#sampleButton");
btnSample.addEventListener("click", function () {
  ulWellFaceList.innerHTML = ""; // 빈문자열로 초기화해주지 않으면 html과 연속해서 나옴
  for (let i = 0; i < handsomeList.length; i++) {
    // ulWellFaceList.innerHTML += "<li>" + handsomeList[i] + "</li>";
    ulWellFaceList.innerHTML += `<li> ${handsomeList[i]}</li>`; //윗줄과 같음 리터럴 방식으로 바꾼거임
  }
  window.alert("업데이트 완료!");
});

console.log(document);

let sampleImage= document.querySelector("#sampleImage");
let btnChangeImage = document.querySelector("#changeImageButton");

btnChangeImage.addEventListener("click", function(e) {
    console.log(e);
    sampleImage.src = "./Hansei_university.jpg";
});

let textInput = document.querySelector("#textInput");
textInput.addEventListener("input",function(event) {
    console.log(event.data);
});
