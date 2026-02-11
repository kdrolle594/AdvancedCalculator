const screen = document.getElementById("screen");

function clearScreen(){
    screen.textContent = "";
}
function inputNum(element){
    if(element.textContent=="÷")
        return screen.textContent+='/';
    if(element.textContent=="×")
        return screen.textContent+='*';
    screen.textContent+=element.textContent;
}
function setPosNeg(){
    console.log("called pos neg");
    let ans=screen.textContent;
    if(ans[0]=="-"){
        screen.textContent=ans.slice(1);
        console.log("add neg");
    }
    else
    {
        screen.textContent="-"+ans;
        console.log("object");
    }
}
function useBrackets(){
    let count1 = 0;
    let count2 = 0;
    let eq=screen.textContent;
    for (let i = 0; i < eq.length; i++) {
        if(eq[i]=="("){
            count1++;
        }
        else if(eq[i]==")")
        {
            count2++;
        }
    }
    if(count1>count2){
        screen.textContent+=")";
    }
    else
    {
        screen.textContent+="(";
    }
}
function usePercent(){
    if(screen.textContent[screen.textContent.length-1]==NaN){

    }
    else
    {
        screen.textContent=eval(screen.textContent)/100;
    }
}
function solve(){
    screen.textContent = eval(screen.textContent);
}