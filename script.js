let zero = document.querySelector(".para1");
let cross = document.querySelector(".para2");
let stat;
zero.addEventListener("click",()=>{
    stat="o";
    document.querySelector(".outerBox").classList.remove("hidden");
    document.querySelector(".chosing").classList.add("hidden2");
});
cross.addEventListener("click",()=>{
    stat="x";
    document.querySelector(".outerBox").classList.remove("hidden");
    document.querySelector(".chosing").classList.add("hidden2");

});
let jsb1 = document.querySelector("#b1");
let jsb2 = document.querySelector("#b2");
let jsb3 = document.querySelector("#b3");
let jsb4 = document.querySelector("#b4");
let jsb5 = document.querySelector("#b5");
let jsb6 = document.querySelector("#b6");
let jsb7 = document.querySelector("#b7");
let jsb8 = document.querySelector("#b8");
let jsb9 = document.querySelector("#b9");
let a = [jsb1,jsb2,jsb3,jsb4,jsb5,jsb6,jsb7,jsb8,jsb9];
let aS= [0,0,0,0,0,0,0,0,0];
const fn=(i)=>{
    if(stat=="o"){
        a[i-1].classList.add("zerotick");
        a[i-1].innerText="O";
        a[i-1].classList.add("oxox1");
        stat="x";
        aS[i-1]="o";
    }
    else{
        a[i-1].classList.add("crosstick");
        a[i-1].innerText="X";
        a[i-1].classList.add("oxox2");
        stat="o";
        aS[i-1]="x";
    }
    a[i-1].style.pointerEvents = "none";
}
const winner=()=>{
    if((aS[0]=="o"&&aS[1]=="o"&&aS[2]=="o")||(aS[3]=="o"&&aS[4]=="o"&&aS[5]=="o")||(aS[6]=="o"&&aS[7]=="o"&&aS[8]=="o")||(aS[0]=="o"&&aS[3]=="o"&&aS[6]=="o")||(aS[1]=="o"&&aS[4]=="o"&&aS[7]=="o")||(aS[2]=="o"&&aS[5]=="o"&&aS[8]=="o")||(aS[0]=="o"&&aS[4]=="o"&&aS[8]=="o")||(aS[4]=="o"&&aS[2]=="o"&&aS[6]=="o")){
        console.log("o won");
        document.querySelector(".outerBox").classList.add("hidden");
        document.querySelector(".result").classList.remove("hidden3");
        
        
    }
    if((aS[0]=="x"&&aS[1]=="x"&&aS[2]=="x")||(aS[3]=="x"&&aS[4]=="x"&&aS[5]=="x")||(aS[6]=="x"&&aS[7]=="x"&&aS[8]=="x")||(aS[0]=="x"&&aS[3]=="x"&&aS[6]=="x")||(aS[1]=="x"&&aS[4]=="x"&&aS[7]=="x")||(aS[2]=="x"&&aS[5]=="x"&&aS[8]=="x")||(aS[0]=="x"&&aS[4]=="x"&&aS[8]=="x")||(aS[4]=="x"&&aS[2]=="x"&&aS[6]=="x")){
        console.log("x won");
        document.querySelector(".outerBox").classList.add("hidden");
        document.querySelector(".result p").innerText="X - Won";
        document.querySelector(".result").classList.remove("hidden3");
        
    }
    if((!((aS[0]=="x"&&aS[1]=="x"&&aS[2]=="x")||(aS[3]=="x"&&aS[4]=="x"&&aS[5]=="x")||(aS[6]=="x"&&aS[7]=="x"&&aS[8]=="x")||(aS[0]=="x"&&aS[3]=="x"&&aS[6]=="x")||(aS[1]=="x"&&aS[4]=="x"&&aS[7]=="x")||(aS[2]=="x"&&aS[5]=="x"&&aS[8]=="x")||(aS[0]=="x"&&aS[4]=="x"&&aS[8]=="x")||(aS[4]=="x"&&aS[2]=="x"&&aS[6]=="x")) && !((aS[0]=="o"&&aS[1]=="o"&&aS[2]=="o")||(aS[3]=="o"&&aS[4]=="o"&&aS[5]=="o")||(aS[6]=="o"&&aS[7]=="o"&&aS[8]=="o")||(aS[0]=="o"&&aS[3]=="o"&&aS[6]=="o")||(aS[1]=="o"&&aS[4]=="o"&&aS[7]=="o")||(aS[2]=="o"&&aS[5]=="o"&&aS[8]=="o")||(aS[0]=="o"&&aS[4]=="o"&&aS[8]=="o")||(aS[4]=="o"&&aS[2]=="o"&&aS[6]=="o"))) && ((aS[0]=="x" ||aS[0]=="o")&&(aS[1]=="x" ||aS[1]=="o")&&(aS[2]=="x" ||aS[2]=="o")&&(aS[3]=="x" ||aS[3]=="o")&&(aS[4]=="x" ||aS[4]=="o")&&(aS[5]=="x" ||aS[5]=="o")&&(aS[6]=="x" ||aS[6]=="o")&&(aS[7]=="x" ||aS[7]=="o")&&(aS[8]=="x" ||aS[8]=="o"))){
        console.log("draw");
        document.querySelector(".outerBox").classList.add("hidden");
        document.querySelector(".result p").innerText="DRAW";
        document.querySelector(".result").classList.remove("hidden3");
    }
}
jsb1.addEventListener("click",()=>{
    fn(1);
    winner();
});
jsb2.addEventListener("click",()=>{
    fn(2);
    winner();
});
jsb3.addEventListener("click",()=>{
    fn(3);
    winner();
});
jsb4.addEventListener("click",()=>{
    fn(4);
    winner();
});
jsb5.addEventListener("click",()=>{
    fn(5);
    winner();
});
jsb6.addEventListener("click",()=>{
    fn(6);
    winner();
});
jsb7.addEventListener("click",()=>{
    fn(7);
    winner();
});
jsb8.addEventListener("click",()=>{
    fn(8);
    winner();
});
jsb9.addEventListener("click",()=>{
    fn(9);
    winner();
});
