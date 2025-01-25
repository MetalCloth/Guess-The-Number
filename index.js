let input=document.getElementById("input");
let guess=document.getElementById("btn");
let o=document.getElementById("o");
let card=document.querySelector(".card");
let attempts=document.getElementById("attempts");
attempts.innerText=7;
let secret=Math.floor(Math.random()*100)+1;
function s(){
    o.style.color="#ff0000";
    o.style.marginTop="10px";
    o.style.marginBottom="-12px";
    setTimeout(()=>{
        o.style.marginTop="0px";
        o.style.marginBottom="0px";
        o.innerText="";
    },1000);
}
guess.addEventListener("click",function(){
    if(input.value=="" || input.value<1 || input.value>100){
        o.innerText="Please enter a number between 1 and 100";
        s();
    }
    else{
        if(input.value!=secret){
            if(input.value>secret){
                o.innerText="Number is Too high";
                s();
            }
            else{
                o.innerText="Number is Too low";
                s();
            }
            card.classList.add("error");
            attempts.innerText--;
            input.value=null;
            setTimeout(()=>{
                card.classList.remove("error");
            },1000);
        }
         if(input.value==secret){
            alert("You won");
            window.location.reload();
        }
         if(attempts.innerText==0){
            alert("You lost");
            window.location.reload();
        }
    }
});

