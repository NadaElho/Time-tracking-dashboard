const arr= ["two","three","four","five","six","seven"];
const imgs= ["work","play","study","exercise","social","self-care"]
const colors=["#ff8b64","#56c2e6","#ff5e7d","#4bcf83","#7235d1","#f1c75b"]
const title=["Work","Play","Study","Exercise","Social","Self Care"]
const hours=["32","10","4","4","5","2"]
const lastHrs=["36","8","7","5","10","2"]
let div= document.querySelectorAll(".dashboard")[0];
for(let i=0;i<imgs.length;i++){
    let box=document.createElement("div");
    box.classList.add("box",arr[i])
    div.appendChild(box);
    let boxName=document.createElement("div");
    boxName.classList.add("name");
    box.appendChild(boxName);
    let image=document.createElement("img");
    image.src=`images/icon-${imgs[i]}.svg`;
    image.alt=" "
    boxName.appendChild(image);
    boxName.style.backgroundColor=colors[i];
    let work= document.createElement("div");
    work.classList.add("work");
    box.appendChild(work);
    let workTitle= document.createElement("div");  
    workTitle.classList.add("workTitle")
    work.appendChild(workTitle);
    let span= document.createElement("span");
    span.innerText=title[i];
    let img=document.createElement("img");
    img.src="./images/icon-ellipsis.svg"
    img.alt="icon"
    workTitle.appendChild(span);
    workTitle.appendChild(img);
    const hrs=document.createElement("div");
    hrs.classList.add("hrs")
    work.appendChild(hrs)
    const heading=document.createElement("h2");
    hrs.appendChild(heading);
    heading.innerText=`${hours[i]}hrs`;
    const p=document.createElement("p");
    p.innerText=`Last Week - ${lastHrs[i]}hrs`;
    hrs.appendChild(p)
}
