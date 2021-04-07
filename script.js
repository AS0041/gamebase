
function jump(){
    var Ob=document.getElementById("obstacle");
    var Dr=document.getElementById("dracula");
    
    if(Dr.classList !="animate"){
        Dr.classList.add("animate");
        Ob.classList.add("anime"); }
        setTimeout(function(){
            Dr.classList.remove("animate");
        },1000);
    }
    var check = setInterval(function(){
        var draculatop= parseInt(window.getComputedStyle(dracula).getPropertyValue("top"));
        var obstacleleft=parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
        if(obstacleleft<10 && obstacleleft>0 && draculatop>=100){
            obstacle.style.animation="none";
            obstacle.style.display="none";
            alert("You Lost");
        }
    })
        
   
        
    
   
