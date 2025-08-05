let btnitems=document.getElementById("btnitems");
let gemerallistdiv=document.getElementById("gemerallistdiv");
let container=document.getElementById("container");
let exitdiv=document.getElementById("exitdiv");

btnitems.addEventListener("click",()=>{
if(!gemerallistdiv.classList.contains("showss")){
    gemerallistdiv.classList.add("showss");
   
}  
})
exitdiv.addEventListener("click",clickexit);
function clickexit(){
    if(gemerallistdiv.classList.contains("showss")){
    gemerallistdiv.classList.remove("showss");
   
}
    
}