
const Texts = {
  title : "lorem ipsum",
  paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  color : ["#383838","#FFFFFF", "black"]
}

const root = document.getElementById('root');
let swc = 0;
//------------------------------------------------------------------------------------------------

//element 만드는 함수
function elementMaker(tagName, parent){
  const element = document.createElement(tagName);
  parent.appendChild(element);
}

function styleMaker(changeTagName, displayVal, widthVal, heightVal, textAlignVal){
  changeTagName.style.display = displayVal;
  changeTagName.style.width = widthVal;
  changeTagName.style.height = heightVal;
  // changeTagName.style.backgroundColor = backColorVal;
  changeTagName.style.textAlign = textAlignVal;
  // changeTagName.style.border = borderVal;
}
function fontStyleMaker(changeTagName, fontSizeVal, fontWeightVal, fontColorVal){
  changeTagName.style.fontSize = fontSizeVal;
  changeTagName.style.fontWeight = fontWeightVal;
  changeTagName.style.color = fontColorVal;
}
function flexProperty(tagName, directionVal, contentVal, itemsVal){
  
  if(directionVal === ""){
    tagName.style.flexDirection = "row";
  }
  else{
    tagName.style.flexDirection = directionVal;
  }
  tagName.style.justifyContent = contentVal;
  tagName.style.alignItems = itemsVal;
}
//------------------------------------------------------------------------------------

//root.innerHTML = "";


//header 생성
elementMaker("header", root);
const header = document.querySelector("#root > header");

//main 생성
elementMaker("main", root);
const main = document.querySelector("#root > main");

//footer생성
elementMaker("footer", root);
const footer = document.querySelector("#root > footer");

//cycle(동그라미)생성
elementMaker("div", footer);
const cycle = document.querySelector("#root > footer > div");
//-------------------------------------------------------------------

//root 스타일 설정
styleMaker(root, "flex", "430px", "932px", "");
flexProperty(root, "column", "center", "center");

//header 스타일
styleMaker(header, "", "199px", "40px", "center");
header.textContent = Texts.title;
header.style.borderBottom = "1px solid black";
header.style.marginBottom = "22px";
header.style.paddingBottom = "10px";
fontStyleMaker(header, "24px", "400", Texts.color[2]);

//main 스타일
styleMaker(main, "", "295px", "186px", "center");
main.textContent = Texts.paragraph;
fontStyleMaker(main, "12px", "400", Texts.color[2]);

//footer 스타일
styleMaker(footer, "flex", "295px", "382px", "");
flexProperty(footer, "", "center", "center");

//cycle(동그라미) 스타일
styleMaker(cycle, "", "82px", "82px", "");
cycle.style.borderRadius = "42px";
cycle.style.backgroundColor = Texts.color[0];
cycle.addEventListener('click', modeSwitching); 
//----------------------------------------------------------------

//화면 모드 변경 함수
function whiteMode(){
  //console.log(Texts.color);
  root.style.backgroundColor = Texts.color[1];
  header.style.color = Texts.color[0];
  header.style.borderColor = Texts.color[0];
  main.style.color = Texts.color[0];
  cycle.style.backgroundColor = Texts.color[0];
  
}
function darkMode(){
  root.style.backgroundColor = Texts.color[0];
  header.style.color = Texts.color[1];
  header.style.borderColor = Texts.color[1];
  main.style.color = Texts.color[1];
  cycle.style.backgroundColor = Texts.color[1];
}

function modeSwitching() {
  if(swc === 0){
    swc = 1;
    whiteMode();
  }
  else if(swc === 1){
    swc = 0;
    darkMode();
  }
  else{
    console.log("잘못된 접근입니다");
  }
  
  if(cnt > 30){
    cnt = 0;
  }
  
}