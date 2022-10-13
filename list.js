const elem = document.querySelectorAll(".elem")
const imgDiv = document.querySelector("#image")
const text = document.querySelector(".elem>h5")
elem.forEach(function(ele){
    
    ele.addEventListener("mouseenter",function(){
        let img = ele.getAttribute("data-image");
        let width = ele.getAttribute("data-width");
        let height = ele.getAttribute("data-height");
        let backgroundColor = ele.getAttribute("data-bgcolor")
        imgDiv.style.backgroundImage = `url(${img})`;
        imgDiv.style.width = width;
        imgDiv.style.height = height;
        ele.style.backgroundColor = "gray";
    })
    ele.addEventListener("mouseout",function(){
        ele.style.backgroundColor = "black"


    })
})


document.querySelector("#container").addEventListener("mouseover",function(){
    imgDiv.style.display = "block"
})
document.querySelector("#container").addEventListener("mouseout",function(){
    imgDiv.style.display = "none"
})











var flag =0;
document.querySelector(".ri-menu-line").addEventListener("click",function(){
    if(flag===0){
        gsap.to(".menulayer",{
            y:"100%",
            ease: "power1.out",
            duration:1.5
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
            y:"-100%",
            ease: "power1.out",
            duration:1.5

       
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