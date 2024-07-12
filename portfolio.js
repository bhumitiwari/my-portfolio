var typed=new Typed(".text",{
    strings:["Frontend Developer","Backend Developer","Competitive Programmer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

});
const observer = new IntersectionObserver((entries)=>
{
    entries.forEach((entry)=>
    {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
       
    })
})
const anima=document.querySelectorAll('.hidden');
anima.forEach((el)=>observer.observe(el));

function myfunction(){
    document.getElementById("form1").reset();
}