gsap.from(".text>h1:nth-child(1),.text>h1:nth-child(13)",{
    delay:"1",
    y:"100%"
})
gsap.from(".text>h1:nth-child(2),.text>h1:nth-child(12)",{
    delay:"1.2",
    y:"100%"
})
gsap.from(".text>h1:nth-child(3),.text>h1:nth-child(11)",{
    delay:"1.4",
    y:"100%"
})
gsap.from(".text>h1:nth-child(4),.text>h1:nth-child(10)",{
    delay:"1.6",
    y:"100%"
})
gsap.from(".text>h1:nth-child(5),.text>h1:nth-child(9)",{
    delay:"1.8",
    y:"100%"
})
gsap.from(".text>h1:nth-child(6),.text>h1:nth-child(8)",{
    delay:"2",
    y:"100%"
})
gsap.from(".text>h1:nth-child(7)",{
    delay:"2.2",
    y:"100%"
})
gsap.to(".mg1",{
    delay:"2",
    display:"block",
    opacity:"1"
})
gsap.to(".mg1",{
    delay:"2.4",
    display:"block",
    opacity:"0"
})

gsap.to(".mg2",{
    delay:"2.4",
    display:"block",
    opacity:"1"

})
gsap.to(".mg2",{
    delay:"2.9",
    display:"none",
    opacity:"0"

})
gsap.to(".mg3",{
    delay:"3",
    display:"block",
    opacity:"1"
})

gsap.to(".image",{
    delay:"3.6",
    display:"block",
    opacity:"1",
    height:"100%",
    width:"100%"
})
gsap.to("#sec>.txt",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sec",
        // markers:"true",
        start:"top 50%",
        end:"bottom 50%",
        // markers:true,
        scrub:true
    },
    display:"initial"
})


gsap.to("#third>.txt",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#third",
        start:"top 50%",
        end:"bottom 50%",
        // markers:true,
        scrub:true
    },
    display:"initial"
})


gsap.to("#fourth>.txt",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#fourth",
        start:"top 50%",
        end:"bottom 50%",
        // markers:true,
        scrub:true
    },
    display:"initial"
})
gsap.to("#fifth>.txt",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#fifth",
        start:"top 50%",
        end:"bottom 50%",
        // markers:true,
        scrub:true
    },
    display:"initial"
})
gsap.to("#sixth>.txt",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#sixth",
        start:"top 50%",
        end:"bottom 50%",
        // markers:true,
        scrub:true
    },
    display:"initial"
})
gsap.to("#seven>.txt",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#seven",
        start:"top 50%",
        end:"bottom 50%",
        // markers:true,
        scrub:true
    },
    display:"initial"
})
gsap.to("#eight>.txt",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#eight",
        start:"top 50%",
        end:"bottom 50%",
        // markers:true,
        scrub:true
    },
    display:"initial"
})

gsap.to("#ninth>.txt",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#ninth",
        start:"top 50%",
        end:"bottom 50%",
        // markers:true,
        scrub:true
    },
    display:"initial"
})
gsap.to("#ten>.txt>h1>a",{
    scrollTrigger:{
        scroll:"body",
        trigger:"#ten",
        start:"top 50%",
        end:"bottom 50%",
        // markers:true,
        scrub:true
    },
    display:"initial"
})





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


// document.querySelector(".ri-menu-line").addEventListener("click",function(){
//     gsap.to(".menulayer",{
//         y:"100%",
//         ease:"linear",
//         duration:1
//     })
//     gsap.to(".ri-menu-line",{
//         rotate:"180",
//         opacity:0
//     })
//     gsap.to(".ri-close-fill",{
//         rotate:"-180",
//         opacity:1,
//         zIndex:"99999999"
//     })

// })


// document.querySelector(".ri-close-fill").addEventListener("click",function(){
//     gsap.to(".menulayer",{
//         y:"-100%",
//         ease:"linear",
//         duration:1
//     })
//     gsap.to(".ri-close-fill",{
//         rotate:"-180",
//         opacity:0,
       
//     })
//     gsap.to(".ri-menu-line",{
//         rotate:"-180",
//         opacity:1
//     })

// })
