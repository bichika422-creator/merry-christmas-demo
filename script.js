const snow=document.querySelector(".snow");
for(let i=0;i<40;i++){
    const flake=document.createElement("span");
    flake.className="snowflake";
    flake.textContent="❅";
    flake.style.left=Math.random()*100+"%";
    flake.style.fontSize=10+Math.random()*15+"px";
    flake.style.animationDuration=5+Math.random()*10+"s";
    flake.style.animationDelay=-Math.random()*15+"s";
    snow.appendChild(flake);
}
const balls=document.querySelectorAll(".yarn-ball");
const messages=[
    "いつもめっちゃ笑かしてくれてありがとう",
    "You are my sunshine！☀",
    "かなちゃんと一緒にいる時間が大好き",
    "これからも、二人でいろんなものを見に行こう",
    "メリークリスマス"
];
const ornaments=["😆","🌞","💝","⛄","🧦"];
let count= 0;
const opened=[false,false,false,false,false];
balls.forEach(function(ball,index){
    ball.addEventListener("click",function(){
        if(opened[index]===false){
            opened[index]=true;
            count++;
        }
        alert(messages[index]);
        ball.textContent=ornaments[index];
         if(count===5){
                alert("HO-HO-HO");
                document.getElementById("santa").style.display="block";
                document.getElementById("guide").textContent="サンタを捕まえて";
            }
    });   
});
const santa=document.getElementById("santa");
santa.addEventListener("click",function(){
    santa.style.setProperty("animation","none","important");
    santa.style.transition="transform 1.5s ease-in";
    santa.style.left="50%";
    santa.style.top="40%";
    santa.style.transform="translateX(-50%) scale(5)"
    console.log(santa.className);
    setTimeout(function(){
        document.getElementById("house-screen").style.display="block";        
    },4000);
});
const dragSanta=document.getElementById("drag-santa");
dragSanta.addEventListener("pointerdown",function(e){
    dragSanta.setPointerCapture(e.pointerId);
    dragSanta.style.cursor="grabbing";
});
dragSanta.addEventListener("pointermove",function(e){
    if (!dragSanta.hasPointerCapture(e.pointerId))return;
    const screen=document.getElementById("house-screen");
    const rect=screen.getBoundingClientRect();
    dragSanta.style.left=(e.clientX-rect.left-dragSanta.offsetWidth/2)+"px";
    dragSanta.style.top=(e.clientY-rect.top-dragSanta.offsetHeight/2)+"px";
    dragSanta.style.bottom="auto";
});
dragSanta.addEventListener("pointerup",function(e){
    dragSanta.releasePointerCapture(e.pointerId);
    dragSanta.style.cursor="grab";
    const house=document.getElementById("house");
    const houseRect=house.getBoundingClientRect();
    if (
        e.clientX>=houseRect.left &&
        e.clientX<=houseRect.right &&
        e.clientY>=houseRect.top &&
        e.clientY<=houseRect.bottom
    ){
        dragSanta.style.display="none";
        house.classList.add("shaking");
        setTimeout(()=>{
            document.getElementById("room-screen").style.display="block";
        },1600);
    }
});
const present=document.getElementById("present");
present.addEventListener("pointerdown", function(e){
    present.setPointerCapture(e.pointerId);
    present.style.cursor="grabbing";
});
present.addEventListener("pointermove", function(e){
    if (!present.hasPointerCapture(e.pointerId)) return;
    const screen=document.getElementById("room-screen");
    const rect=screen.getBoundingClientRect();
    present.style.left=(e.clientX-rect.left-present.offsetWidth/2)+"px";
    present.style.top=(e.clientY-rect.top-present.offsetHeight/2)+"px";
    present.style.bottom="auto";
});
present.addEventListener("pointerup",function(e){
    present.releasePointerCapture(e.pointerId);
    present.style.cursor="grab";
    const screen=document.getElementById("room-bg");
    const rect=screen.getBoundingClientRect();
    const x=(e.clientX-rect.left)/rect.width;
    const y=(e.clientY-rect.top)/rect.height;
    if (x>=0.55 && x<=0.8 &&
        y>=0.85 && y<=1.0){
            present.style.display="none";
            const teddy=document.getElementById("teddy");
            teddy.style.display="block";
            document.getElementById("room-guide").textContent="テディベアをクリック"
        }
});
const teddy=document.getElementById("teddy");
teddy.addEventListener("click",function(){
    document.getElementById("letter").style.display="block";
});