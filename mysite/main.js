let clk=document.getElementById("box");
let clk1=document.getElementById("box1");
let sub1=document.getElementById("sub");
let ic=document.getElementById("logo1")
let arl=document.getElementById("r1");
let arr=document.getElementById("r2");
let nm=document.getElementById("but1");
let tx1=document.getElementById("tex1");
let pas=document.getElementById("but2");
let tx2=document.getElementById("tex2");

arr.addEventListener("click",clks);
arl.addEventListener("click",clks2);
nm.addEventListener("click",clks3);
pas.addEventListener("click",clks4);


function clks(){
    clk.style.display="None";
    clk1.style.display="block";
    arl.style.marginLeft="80px";
    arr.style.marginLeft="840px";
    
    
}

function clks2(){
    clk.style.display="block";
    clk1.style.display="none";
    arl.style.marginLeft="300px";
    arr.style.marginLeft="300px";
    
    
}

function clks3(){
    tx1.style.display="none";
}
function clks4(){
    tx2.style.display="none";
}