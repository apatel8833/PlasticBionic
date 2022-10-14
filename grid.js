
var flag =0;
document.querySelector(".ri-menu-line").addEventListener("click",function(){
    if(flag===0){
        gsap.to(".menulayer",{
            x:"100%",
            ease: "power1.out",
            duration:1
        })
        gsap.to(".ri-menu-line",{
            rotation:180,
            opacity:0,
            duration:1.5

        })
        gsap.to(".ri-close-fill",{
            rotation:-180,
            opacity:1,
            duration:1.5

        })
        flag=1;
    }
    else{
        gsap.to(".menulayer",{
            x:"-100%",
            ease: "power1.out",
            duration:1

       
        })
        gsap.to(".ri-menu-line",{
            rotation:-180,
            opacity:1,
            duration:1.5

        })
        gsap.to(".ri-close-fill",{
            rotation:180,
            opacity:0,
            duration:1.5

        })
        flag=0;
    }
})