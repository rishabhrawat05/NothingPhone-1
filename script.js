ScrollTrigger.normalizeScroll(true);
ScrollTrigger.defaults({ignoreMobileResize:true});
function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smoothMobile:0.1,
  
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.defaults({scroller:"#main"});
// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive()
var loader=document.getElementById("loader");
setTimeout(function(){
    loader.style.top="-100%"
},5400)
const page0=document.getElementById("page-0");
const menu=document.getElementById("men");
const close0=document.getElementById("up")
menu.addEventListener("click",function(){
    console.log("click");
    page0.style.top="0%";
    menu.style.opacity="0";
});
close0.addEventListener("click",function(){
    page0.style.top="-100%";
    menu.style.opacity="1";
});
var t1=gsap.timeline();
const group3=document.getElementsByClassName("Group3");
const group4=document.getElementsByClassName("Group4");
const group50=document.getElementsByClassName("Group50");
const phone1=document.getElementById("phone1");
const phone2=document.getElementById("phone2");
const pure=document.getElementsByClassName("pure");
const home=document.getElementById("home-page");
const snap=document.getElementsByClassName("snap");
const media1 = window.matchMedia('(max-width: 600px)');
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
// t1.to("#half1",{
//     duration:1,
//     stagger:2,
//     y:500,
// })
// t1.to("#half2",{
    
//     duration:1,
//     stagger:2,
//     y:-500,
// })
// t1.from(nothing,{
//     scale:5,
//     duration:1,
//     x:550,
//     y:300,
    

// })
t1.from(".el",{
    y: -100,
    opacity:0,
    duration:0.5,
    stagger:0.25,
    delay:6,
})
t1.from([phone1,phone2],{
    opacity:0,
    duration:0.5,
    stagger:0.5,
    y:200,
})
t1.from("#text-box",{
    opacity:0,
    duration:0.5,
    stagger:0.5,
    y:50,
})
t1.from("#snap",{
    opacity:0,
    duration:0.5,
    stagger:0.5,
    y:10,
})

t1.to("#feature-box",{
    opacity:1,
    stagger:0.25,
    duration:2,
    scrollTrigger:{
        trigger:"#pag",
        scroller:"#main",
        scrub:2,
        pin:true,
        start:"top top",
        end:"bottom 20%",
        
    }
});
if(media1.matches){
    t1.to("#page",{
  
        scrollTrigger:{
            trigger:"#page",
            scroller:"#main",
            pin:true,

        }
        
    });
}
else{
    t1.to("#page",{
  
        scrollTrigger:{
            trigger:"#page",
            scroller:"#main",
            pin:true,

        }
        
    });
}



t1.to("#page h2",{
    scale:7,
    opacity:1,
    scrollTrigger:{
        trigger:"#page h2",
        scroller:"#main",
        scrub:2,
        preventOverlaps:true,
        
    }
    
});
if(media1.matches){

    t1.to("#page #splash1",{
        left:"10%",
        duration:3,
        opacity:1,
        scrollTrigger:{
            trigger:"#page #splash1",
            scroller:"#main",
            scrub:2,
            
            
            
        }
    });
}
else{
    t1.to("#page #splash1",{
        left:"30%",
        duration:3,
        opacity:1,
        scrollTrigger:{
            trigger:"#page #splash1",
            scroller:"#main",
            scrub:2,
            
        }
    });
}
if(media1.matches){

    t1.to("#page #splash2",{
        left:"55%",
        opacity:1,
        duration:3,
        scrollTrigger:{
            trigger:"#page #splash2",
            scroller:"#main",
            scrub:2,
            
        }
    });
}
else{
    t1.to("#page #splash2",{
        left:"55%",
        opacity:1,
        duration:3,
        scrollTrigger:{
            trigger:"#page #splash2",
            scroller:"#main",
            scrub:2,
            
        }
    });
}
if(media1.matches){
    t1.to("#page1",{
  
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            pin:true,
           
            
            
    
            
        }
        
    });
}
else{
    t1.to("#page1",{
  
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            pin:true,
            
    
            
        }
        
    });
}





if(media1.matches){
    
    t1.to("#page1 #imgdiv",{
        scale:3,
        stagger:0.25,
        duration:3,
        opacity:1,
        top:"110%",
        left:"110%",
        scrollTrigger:{
            trigger:"#page1 #imgdiv",
            scroller:"#main",
           
            scrub:2,
            
            
        
        }
    
    });
    
}
else{
    t1.to("#page1 #imgdiv",{
        scale:3,
        stagger:0.25,
        duration:3,
        opacity:1,
        top:"145%",
        scrollTrigger:{
            trigger:"#page1 #imgdiv",
            scroller:"#main",
           
            scrub:2,
            
           
        }
    
    });
}



t1.to("#page1 h1",{
    opacity:1,
    top:"5%",
    stagger:0.25,
    duration:2,
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
       
        start:"top 50%",
        end:"top 10%",
        scrub:2,
       
       
    }

});
t1.to("#page1 h2",{
    opacity:1,
    stagger:0.25,
    duration:3,
    scrollTrigger:{
        trigger:"#page1 h2",
        scroller:"#main",

        start:"top 30%",
        end:"top 10%",
        scrub:2,
       
    }

});
t1.to(one,{
    opacity:1,
    stagger:0.25,
    duration:3,
    scrollTrigger:{
        trigger:one,
        scroller:"#main",
        start:"top 30%",
        end:"top 10%",
        scrub:2,
       
    }

});
t1.to(two,{
    opacity:1,
    stagger:0.25,
    duration:3,
    scrollTrigger:{
        trigger:two,
        scroller:"#main",
    
        start:"top 20%",
        end:"top 5%",
        scrub:2,
       
    }

});
if(media1.matches){
    t1.to("#page00",{
  
        scrollTrigger:{
            trigger:"#page00",
            scroller:"#main",
            pin:true,
           
            
            
    
            
        }
        
    });
}
else{
    t1.to("#page00",{
  
        scrollTrigger:{
            trigger:"#page00",
            scroller:"#main",
            pin:true,
            
    
            
        }
        
    });
}

if(media1.matches){
    t1.to("#page00 #imgdiv00",{
        scale:3,
        stagger:0.25,
        duration:3,
        top:"110%",
        left:"100%",
        opacity:1,
        scrollTrigger:{
            trigger:"#page00 #imgdiv00",
            scroller:"#main",
        
            scrub:2,
            
            
        }
    
    });
}
else{
    t1.to("#page00 #imgdiv00",{
        scale:3,
        stagger:0.25,
        duration:3,
        top:"145%",
        opacity:1,
        scrollTrigger:{
            trigger:"#page00 #imgdiv00",
            scroller:"#main",
           
            scrub:2,
           
        }
    
    });
}

t1.to(three,{
    opacity:1,
    stagger:0.25,
    duration:3,
    scrollTrigger:{
        trigger:three,
        scroller:"#main",
    
        start:"top 20%",
        end:"top 5%",
        scrub:2,
       
    }

});
t1.to("#page00 h2",{
    opacity:1,
    stagger:0.25,
    duration:3,
    scrollTrigger:{
        trigger:"#page00 h2",
        scroller:"#main",

        start:"top 30%",
        end:"top 10%",
        scrub:2,
       
    }

});
t1.to("#page00 h1",{
    opacity:1,
    top:"5%",
    stagger:0.25,
    duration:2,
    scrollTrigger:{
        trigger:"#page00 h1",
        scroller:"#main",
       
        start:"top 50%",
        end:"top 10%",
        scrub:2,
       
       
    }

});
if(media1.matches){
    t1.to("#page2",{
  
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            pin:true,
           
            
            
    
            
        }
        
    });
}
else{
    t1.to("#page2",{
  
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            pin:true,
            
    
            
        }
        
    });
}

t1.to("#page2 #imgdiv2",{
    scale:1.4,
    rotation: -90,
    opacity:1,
    duration:3,
    smooth:true,
    scrollTrigger:{
        trigger:"#page2 #imgdiv2",
        scroller:"#main",
       
        scrub:2,
       
    }

});

t1.to("#page2 h3",{
    opacity:1,
    top:"0%",
    stagger:0.25,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 h3",
        scroller:"#main",
       
        start:"top 50%",
        end:"top 10%",
        scrub:2,
       
       
    }

});
t1.to("#page2 p",{
    opacity:1,
    top:"20%",
    stagger:0.25,
    duration:2,
    scrollTrigger:{
        trigger:"#page2 p",
        scroller:"#main",
       
        start:"top 50%",
        end:"top 10%",
        scrub:2,
       
       
    }
});
// t1.to("#page2 #imgdiv3",{
//     scale:4,
   
//     duration:3,
//     rotation:-90,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#page2 #imgdiv3",
//         scroller:"#main",
//         scrub:2,
//         start:"top 15%",
//     }

// });
t1.from("#page2 h4",{
    y:-100,
    scale:3.5,
    stagger:3,
    duration:3,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 h4",
        scroller:"#main",
        scrub:2,
    }
});
t1.to("#page3 h3",{
    opacity:1,
    top:"0%",
    stagger:0.25,
    duration:2,
    scrollTrigger:{
        trigger:"#page3 h3",
        scroller:"#main",
        start:"top 50%",
        end:"top 10%",
        scrub:2,
        
    }

});
if(media1.matches){
    t1.to("#page3",{
  
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            pin:true,
           
            
            
    
            
        }
        
    });
}
else{
    t1.to("#page3",{
  
        scrollTrigger:{
            trigger:"#page3",
            scroller:"#main",
            pin:true,
            
    
            
        }
        
    });
}
t1.to("#page3 #imgdiv5",{
    top:"78%",
    stagger:0.25,
    duration:1,
    opacity:1,
    scrollTrigger:{
        trigger:"#page3 #imgdiv5",
        scroller:"#main",
        
        scrub:2,
        
    }
});
t1.to("#page3 p",{
    opacity:1,
    top:"30%",
    stagger:0.25,
    duration:2,
    scrollTrigger:{
        trigger:"#page3 p",
        scroller:"#main",
       
        start:"top 50%",
        end:"top 10%",
        scrub:2,
       
       
    }
});


if(media1.matches){
    t1.to("#page4",{
  
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            pin:true,
           
            
            
    
            
        }
        
    });
}
else{
    t1.to("#page4",{
  
        scrollTrigger:{
            trigger:"#page4",
            scroller:"#main",
            pin:true,
            
    
            
        }
        
    });
}
if(media1.matches){

    t1.to("#page4 #imgdiv6",{
        left:"30%",
        duration:4,
        scrollTrigger:{
            trigger:"#page4 #imgdiv6",
            scroller:"#main",
            
            scrub:2,
            
        }
    });
}
else{
    t1.to("#page4 #imgdiv6",{
        x:600,
        duration:4,
        scrollTrigger:{
            trigger:"#page4 #imgdiv6",
            scroller:"#main",
            
            scrub:2,
            
        }
    });
}
if(media1.matches){
    t1.to("#page4 #imgdiv7",{
        right:"-60%",
        duration:4,
        scrollTrigger:{
            trigger:"#page4 #imgdiv7",
            scroller:"#main",
            
            scrub:2,
            
        }
    });
}
else{
    t1.to("#page4 #imgdiv7",{
        x:-600,
        duration:4,
        scrollTrigger:{
            trigger:"#page4 #imgdiv7",
            scroller:"#main",
            
            scrub:2,
            
        }
    });
}
if(media1.matches){
    t1.to("#page4 #txt1",{
        left:"15%",
        duration:4,
        opacity:1,
        scrollTrigger:{
            trigger:"#page4 #txt1",
            scroller:"#main",
            
            scrub:2,
           
        }
    });
}
else{
    t1.to("#page4 #txt1",{
        left:"8%",
        duration:4,
        opacity:1,
        scrollTrigger:{
            trigger:"#page4 #txt1",
            scroller:"#main",
            
            scrub:2,
           
        }
    });
}
if(media1.matches){

    t1.to("#page4 #txt2",{
        left:"25%",
        duration:4,
        opacity:1,
        scrollTrigger:{
            trigger:"#page4 #txt2",
            scroller:"#main",
            
            scrub:2,
            
        }
    });
}
else{
    t1.to("#page4 #txt2",{
        left:"17%",
        duration:4,
        opacity:1,
        scrollTrigger:{
            trigger:"#page4 #txt2",
            scroller:"#main",
            
            scrub:2,
            
        }
    });
}

if(media1.matches){
    t1.to("#page5",{
  
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            pin:true,
           
            
            
    
            
        }
        
    });
}
else{
    t1.to("#page5",{
  
        scrollTrigger:{
            trigger:"#page5",
            scroller:"#main",
            pin:true,
            
    
            
        }
        
    });
}
t1.to("#page5 #imgdiv8",{
    left:"20%",
    duration:4,
    scrollTrigger:{
        trigger:"#page5 #imgdiv8",
        scroller:"#main",
        scrub:2,
        
    }
});
if(media1.matches){

    t1.to("#page5 #imgdiv9",{
        left:"80%",
        duration:4,
        scrollTrigger:{
            trigger:"#page5 #imgdiv9",
            scroller:"#main",
            scrub:2,
        }
    });
}
else{
    t1.to("#page5 #imgdiv9",{
        left:"80%",
        duration:4,
        scrollTrigger:{
            trigger:"#page5 #imgdiv9",
            scroller:"#main",
            scrub:2,
        }
    });
}

t1.to("#page5 p",{
    scale:1.1,
    opacity:1,
    duration:4,
    scrollTrigger:{
        trigger:"#page5 p",
        scroller:"#main",
        scrub:2,
    }
});
t1.to("#page5 #up",{
    top:"8%",
    duration:4,
    opacity:1,
    scrollTrigger:{
        trigger:"#page5 #up",
        scroller:"#main",
        scrub:2,
    }
});
t1.to("#page5 #down",{
    top:"27%",
    opacity:1,
    duration:4,
    scrollTrigger:{
        trigger:"#page5 #up",
        scroller:"#main",
        scrub:2,
    }
});


let currentlyOpenElement = null;


function handleClick(event) {
    const detailsElement = this.querySelector('.details');
    if (currentlyOpenElement && currentlyOpenElement !== detailsElement) {
    
        gsap.to(currentlyOpenElement, {
            height: "0vh"
        });
    }

    
    if (detailsElement === currentlyOpenElement) {
        gsap.to(detailsElement, {
            height: "0vh"
        });
        currentlyOpenElement = null;
    } else {
        gsap.to(detailsElement, {
            height: "auto"
        });
        currentlyOpenElement = detailsElement;
    }
}


document.querySelectorAll('.elem').forEach(function(el) {
    el.addEventListener('click', handleClick);
});


document.querySelectorAll('.elem2').forEach(function(el) {
    el.addEventListener('click', handleClick);
});

// mm.add("(max-width: 600px)",()=>{
//     const t2 = gsap.timeline();
//     t1.to("#page #splash1",{
//         left:"-20%",
//         duration:2,
//         opacity:1,
        
//     });
//     t1.to("#page #splash2",{
//         right:"-40%",
//         opacity:1,
//         duration:2,
//         scrub:2,
//         // scrollTrigger:{
//         //     trigger:"#page #splash2",
//         //     scroller:"#main",
//         //     scrub:2,
            
//         // }
//     });
//     t1.to("#page1 #imgdiv",{
//         scale:3,
//         stagger:0.25,
//         duration:3,
//         opacity:1,
//         top:"120%",
//         left:"110%",
//         // scrollTrigger:{
//         //     trigger:"#page1",
//         //     scroller:"#main",
//         //     pin:true,
//         //     scrub:2,
           
//         // }
    
//     });
// });
