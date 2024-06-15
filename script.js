function locomotive(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  
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

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotive()
var t1=gsap.timeline();
const group3=document.getElementsByClassName("Group3");
const group4=document.getElementsByClassName("Group4");
const group5=document.getElementsByClassName("Group5");
t1.to("#page",{
    scrollTrigger:{
        trigger:"#page",
        scroller:"#main",
        pin:true,
        
    }
    
});
t1.to("#page h2",{
    scale:7,
    opacity:1,
    scrollTrigger:{
        trigger:"#page h2",
        scroller:"#main",
        scrub:2,
        
    }
    
});
t1.to("#page #splash1",{
    x:920,
    duration:3,
    opacity:1,
    scrollTrigger:{
        trigger:"#page #splash1",
        scroller:"#main",
        scrub:2,
        
    }
});
t1.to("#page #splash2",{
    x:-920,
    opacity:1,
    duration:3,
    scrollTrigger:{
        trigger:"#page #splash2",
        scroller:"#main",
        scrub:2,
        
    }
});
t1.to("#page1 #imgdiv",{
    scale:3,
    stagger:0.25,
    duration:3,
    y:600,
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        pin:true,
        scrub:2,
       
    }

});
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
t1.to(group3,{
    opacity:1,
    stagger:0.25,
    duration:3,
    scrollTrigger:{
        trigger:group3,
        scroller:"#main",
        start:"top 30%",
        end:"top 10%",
        scrub:2,
       
    }

});
t1.to(group4,{
    opacity:1,
    stagger:0.25,
    duration:3,
    scrollTrigger:{
        trigger:group4,
        scroller:"#main",
    
        start:"top 20%",
        end:"top 5%",
        scrub:2,
       
    }

});
t1.to("#page00 #imgdiv00",{
    scale:3,
    stagger:0.25,
    duration:3,
    y:600,
    scrollTrigger:{
        trigger:"#page00",
        scroller:"#main",
        pin:true,
        scrub:2,
       
    }

});
t1.to(group5,{
    opacity:1,
    stagger:0.25,
    duration:3,
    scrollTrigger:{
        trigger:group5,
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
t1.to("#page2 #imgdiv2",{
    scale:1.4,
    rotation: -90,
    stagger:0.25,
    duration:3,
    
    scrollTrigger:{
        trigger:"#page2",
        scroller:"#main",
        pin:true,
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
t1.to("#page2 #imgdiv3",{
    scale:4,
    stagger:0.25,
    duration:3,
    rotation:-90,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 #imgdiv3",
        scroller:"#main",
        scrub:2,
        start:"top 15%",
    }

});
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
t1.to("#page3",{
    scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        pin:true,
        
    }
    
});
t1.to("#page3 #imgdiv5",{
    y:-162,
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


t1.to("#page4",{
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        pin:true,
        
    }
    
});
t1.to("#page4 #imgdiv6",{
    x:700,
    duration:4,
    scrollTrigger:{
        trigger:"#page4 #imgdiv6",
        scroller:"#main",
        
        scrub:2,
        
    }
});
t1.to("#page4 #imgdiv7",{
    x:-700,
    duration:4,
    scrollTrigger:{
        trigger:"#page4 #imgdiv7",
        scroller:"#main",
        
        scrub:2,
        
    }
});
t1.to("#page4 #txt1",{
    x:700,
    duration:4,
    opacity:1,
    scrollTrigger:{
        trigger:"#page4 #txt1",
        scroller:"#main",
        
        scrub:2,
       
    }
});
t1.to("#page4 #txt2",{
    x:-430,
    duration:4,
    opacity:1,
    scrollTrigger:{
        trigger:"#page4 #txt2",
        scroller:"#main",
        
        scrub:2,
        
    }
});
t1.to("#page5",{
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        pin:true,
        
    }
    
});
t1.to("#page5 #imgdiv8",{
    x:700,
    duration:4,
    scrollTrigger:{
        trigger:"#page5 #imgdiv8",
        scroller:"#main",
        scrub:2,
        
    }
});
t1.to("#page5 #imgdiv9",{
    x:-700,
    duration:4,
    scrollTrigger:{
        trigger:"#page5 #imgdiv9",
        scroller:"#main",
        scrub:2,
    }
});
t1.to("#page5 p",{
    scale:1.2,
    opacity:1,
    duration:4,
    scrollTrigger:{
        trigger:"#page5 p",
        scroller:"#main",
        scrub:2,
    }
});
t1.to("#page5 #up",{
    y:60,
    duration:4,
    opacity:1,
    scrollTrigger:{
        trigger:"#page5 #up",
        scroller:"#main",
        scrub:2,
    }
});
t1.to("#page5 #down",{
    y:-60,
    opacity:1,
    duration:4,
    scrollTrigger:{
        trigger:"#page5 #up",
        scroller:"#main",
        scrub:2,
    }
});



