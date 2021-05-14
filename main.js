// console.log("hell");

// const h1 = document.querySelector("h1");
// h1.innerHTML = "hell";
// const abc = document.querySelectorAll("h1");
// abc.innerHTML = "hell";

//https://velog.io/@blackwidow/9-17
// DOM 조작
// document.querySelector(); // HTML 요소 선택
// document.querySelectorAll(); // HTML 요소 선택
// document.querySelector();

// document.createElement(); // HTML 요소 생성
// .append;
// .appendChild;

// var spanElement = document.createElement("span");

var things = ["냉장고", "코끼리", "기린"];
var steps = [
  "냉장고 문을 연다",
  "기린을 꺼낸다",
  "코끼리를 넣는다",
  "냉장고 문을 닫는다",
];

// var thingsUl = document.querySelector(".testUl");
// for (var i = 0; i < things.length; i++) {
//   var li = document.createElement("li");
//   li.append(things[i]);
//   thingsUl.append(li);
// }

var stepsOl = document.querySelector(".testOl");
for (var i = 0; i < steps.length; i++) {
  var li = document.createElement("li");
  li.append(steps[i]);
  stepsOl.append(li);
}

let thingsUl = document.querySelector(".testUl");
for (let i = 0; i < things.length; i++) {
  let li = document.createElement("li");
  li.append(things[i]);
  thingsUl.append(li);

  // chaining? 이 안되나..;
  // const li = document.createElement("li");
  // thingsUl.append(li.append(things[i]));

  // const li = document.createElement("li").append(things[i]);
  // thingsUl.append(li);

  // thingsUl.append(document.createElement("li").append(things[i]));
}

var tableEl = document.createElement("table");
for (var i = 1; i < 10; i++) {
  var trEl = document.createElement("tr");
  for (var j = 1; j < 10; j++) {
    var tdEl = document.createElement("td");
    tdEl.append(i * j);
    trEl.append(tdEl);
  }
  tableEl.append(trEl);
}
document.querySelector(".tableEl").append(tableEl);

function insertThisTime() {
  const targetEl = document.querySelector(".timeTable");
  let log = document.createElement("li");
  log.append(new Date());
  targetEl.append(log);
}

// 팀 배정 function
const members = [
  "손흥민",
  "김영권",
  "이승우",
  "기성용",
  "황희찬",
  "황희조",
  "구자철",
  "이용",
  "조현우",
  "김승규",
  "이강인",
  "박주호",
  "문선민",
  "김민재",
  "황인범",
  "이정협",
  "김인성",
  "구성윤",
  "장현수",
  "나상호",
];

// function showNotAssigneds() {
//   let membersString = "";
//   for (let i = 0; i < members.length; i++) {
//     membersString += members[i];
//     if (i < members.length - 1) membersString += ", ";
//   }
//   document.querySelector("#not_assigned").innerHTML = membersString;
// }

// function assignMemberToTeam(teamNumber) {
//   if (members.length === 0) return;
//   // let member = members[0];
//   // member = members.splice(0, 1);
//   const member = members.splice(0, 1);
//   showNotAssigneds();

//   const liEl = document.createElement("li"); // <li></li>
//   liEl.append(member); // <li>기성용</li>
//   liEl.classList.add(member); // <li class="기성용">기성용</li>
//   document.querySelector("#team_" + teamNumber).append(liEl);
//   // createEventListener(liEl);

//   // // 제거 로직 추가
//   const playerName = document.querySelector(`.${member}`);
//   // playerName.addEventListener("click", function () {
//   //   removePlayer(playerName);
//   // });
//   playerName.addEventListener("click", function () {
//     removePlayer(member);
//   });
// }

// function removePlayer(member) {
//   // const parent = playerName.closet();
//   const parent = document.querySelector();
//   console.log("here");
//   const playerName = document.querySelector(`.${member}`);
//   const pp = playerName.closest();
//   // playerName.innerHTML("hell");
//   // console.log(parent);
//   // removeChild();
// }

// // const notAssigned = document.querySelector("#not_assigned");
// // notAssigned.addEventListener("click");

var checked = document.querySelector("#radio_1").checked;
console.log(checked);

var checked = document.querySelector("#radio_2").checked;
console.log(checked);

var checked = (document.querySelector("#radio_2").checked = true);
var checked = (document.querySelector("#radio_3").checked = true);
var value = document.querySelector("input[name=my-radio]:checked").value;
console.log(value);
