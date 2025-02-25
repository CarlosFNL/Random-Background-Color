const Options = ["A","B","C","D","E","F","0","1","2","3","4","5","6","7","8","9"];
function RandomIndex(){
    const Index = Math.floor(Math.random()*15);
    return Index;
}
function CreateColor(){
    let color="#";
    for(let i=0;i<6;i++){
        color=color + Options[RandomIndex()];
    }
    return color;
}
const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
function ChangeBackgroundColor(){
    const RandomColor = CreateColor();
    bgHexCodeSpanElement.innerText = RandomColor;
    body.style.backgroundColor= RandomColor;

}
const btn = document.querySelector("#btn");
btn.onclick=ChangeBackgroundColor;