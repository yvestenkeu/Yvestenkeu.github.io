let icon = document.querySelector(".icons");
let links = document.querySelector(".linkss");
 
icon.onclick = function(){
   if(links.style.maxHeight == 0){
      links.style.maxHeight = links.scrollHeight + "px";
   }else{
      links.style.maxHeight = "";
   }
}