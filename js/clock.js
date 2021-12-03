const clock=document.querySelector('.clock');
const stopBtn=document.querySelector('.stop');
const startBtn=document.querySelector('.start');



function setClock(){
    clock.innerHTML=`<span>${new Date().getHours()}</span> : <span>${new Date().getMinutes()}</span> : <span>${new Date().getSeconds()}</span>`
}
setClock();
let intervalClock=setInterval(setClock,1000);


startBtn.addEventListener('click',function(){
    intervalClock=setInterval(setClock,1000);
    clock.style.color="#fff";
    clock.style.background="cornflowerblue";
})

stopBtn.addEventListener('click',function(){
    clearInterval(intervalClock);
    clock.style.color="#ccc";
    clock.style.outline="1px solid #ccc";
    clock.style.background="transparent"
})

