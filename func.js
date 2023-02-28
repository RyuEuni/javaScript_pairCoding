
const Texts = {
  title : "lorem ipsum",
  paragraph : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  color : ["#383838","#FFFFFF", "black"],
}

const root = document.getElementById('root');

//element 만드는 함수
function elementMaker(tagName, parent){
  const element = document.createElement(tagName);
  parent.appendChild(element);
}

function styleMaker(changeTagName, displayVal, widthVal, heightVal, backColorVal, textAlignVal){
  changeTagName.style.display = displayVal;
  changeTagName.style.width = widthVal;
  changeTagName.style.height = heightVal;
  changeTagName.style.backgroundColor = backColorVal;
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


  //root.innerHTML = "";

  //root 스타일 설정
  styleMaker(root, "flex", "430px", "932px", Texts.color[1], "");
  flexProperty(root, "column", "center", "center");

  //for문으로 머리, 가슴, 배 생성
  for(let i = 0; i < 3; i++){
    if(i === 0){
      elementMaker("header", root);
      const header = document.querySelector("#root > header");

      styleMaker(header, "", "199px", "40px", "", "center");
      header.textContent = Texts.title;
      header.style.borderBottom = "1px solid black";
      header.style.marginBottom = "22px";
      header.style.paddingBottom = "10px";
      fontStyleMaker(header, "24px", "400", Texts.color[2]);
    }
    else if(i === 1){
      elementMaker("main", root);
      const main = document.querySelector("#root > main");
      
      styleMaker(main, "", "295px", "186px", "", "center");
      main.textContent = Texts.paragraph;
      fontStyleMaker(main, "12px", "400", Texts.color[2]);
    }
    else if(i === 2){
      elementMaker("footer", root);
      const footer = document.querySelector("#root > footer");
      styleMaker(footer, "flex", "295px", "382px", "", "");
      flexProperty(footer, "", "center", "center");

      elementMaker("div", footer);
      const cycle = document.querySelector("#root > footer > div");
      styleMaker(cycle, "", "82px", "82px", Texts.color[2], "");
      cycle.style.borderRadius = "42px";
    }
    else{
      console.dir(root);
    }
  }    


  function darkMode(){
    root.style.backgroundColor = Texts.color[0];
    header.style.color = Texts.color[1];
    header.style.borderBottom = "1px solid white";
    main.style.color = Texts.color[1];
    cycle.style.backgroundColor = Texts.color[1];
    cycle.addEventListener('click', whiteMode);
}
function whiteMode(){
  root.style.backgroundColor = Texts.color[1];
  header.style.color = Texts.color[0];
  header.style.borderBottom = "1px solid Texts.color[0]";
  main.style.color = Texts.color[0];
  cycle.style.backgroundColor = Texts.color[0];
  cycle.addEventListener('click', darkMode);
}