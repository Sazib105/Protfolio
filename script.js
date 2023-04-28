const navActive=document.querySelectorAll(".nav-link");




navActive.forEach(i => {
    i.addEventListener("click",(e)=>{
        navActive.forEach(x=>{
            x.classList.remove("active");
        })
         e.target.classList.add("active");
    })
 });



//  for type text

const typeTextEI=document.querySelector(".type-text");
var arr=["Programmar","Web-designer","Web-Developer","Freleancer","Instructor"];

    var s="";
    var item=0;
    var i=0;
    var time=0;
    outerLoop();

    function outerLoop(){
        i++;
        time=100;
        s=arr[item].slice(0,i);
        
        typeTextEI.innerHTML=`<h4> I am ${(arr[item].slice(0,1)=='I')?"an":"a"} ${s}|</h4> `
        if(i>arr[item].length){
            i=0;
            item++;
            time=1000;
        }
        if(item>=arr.length)item=0;
        setTimeout(() => {
            outerLoop();
        }, time);
    }
    

