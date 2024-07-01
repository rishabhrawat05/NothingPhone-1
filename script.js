ScrollTrigger.normalizeScroll(true);
ScrollTrigger.defaults({ ignoreMobileResize: true });

gsap.registerPlugin(ScrollTrigger);

// Initialize Locomotive Scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smoothMobile: 0.1,
  
});

// Sync ScrollTrigger with Locomotive Scroll
locoScroll.on("scroll", ScrollTrigger.update);

// Tell ScrollTrigger to use Locomotive Scroll's proxy methods
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
});

// Refresh ScrollTrigger and Locomotive Scroll on window resize
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

// Loader animation
const loader = document.getElementById("loader");
setTimeout(() => {
  loader.style.top = "-100%";
}, 5400);

// Menu interaction
const page0 = document.getElementById("page-0");
const menu = document.getElementById("men");
const close0 = document.getElementById("up");

menu.addEventListener("click", () => {
  page0.style.top = "0%";
  menu.style.opacity = "0";
});

close0.addEventListener("click", () => {
  page0.style.top = "-100%";
  menu.style.opacity = "1";
});

// GSAP timeline for animations
const t1 = gsap.timeline();

// Animation targets
const group3 = document.getElementsByClassName("Group3");
const group4 = document.getElementsByClassName("Group4");
const group50 = document.getElementsByClassName("Group50");
const phone1 = document.getElementById("phone1");
const phone2 = document.getElementById("phone2");
const pure = document.getElementsByClassName("pure");
const home = document.getElementById("home-page");
const snap = document.getElementsByClassName("snap");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

// Initial animations
t1.from(".el", {
  y: -100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.25,
  delay: 6,
});

t1.from([phone1, phone2], {
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
  y: 200,
});

t1.from("#text-box", {
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
  y: 50,
});

t1.from("#snap", {
  opacity: 0,
  duration: 0.5,
  stagger: 0.5,
  y: 10,
});

// Feature box animation with ScrollTrigger
t1.to("#feature-box", {
  opacity: 1,
  stagger: 0.25,
  duration: 2,
  scrollTrigger: {
    trigger: "#pag",
    scroller: "#main",
    scrub: 2,
    pin: true,
    start: "top top",
    end: "bottom 20%",
  },
});

// Page animations (responsive handling)
const media1 = window.matchMedia('(max-width: 600px)');

function setPageAnimations(media) {
  t1.to("#page", {
    scrollTrigger: {
      trigger: "#page",
      scroller: "#main",
      pin: true,
    },
  });

  t1.to("#page h2", {
    scale: 7,
    opacity: 1,
    scrollTrigger: {
      trigger: "#page h2",
      scroller: "#main",
      scrub: 2,
      preventOverlaps: true,
    },
  });

  if (media.matches) {
    t1.to("#page #splash1", {
      left: "10%",
      duration: 3,
      opacity: 1,
      scrollTrigger: {
        trigger: "#page #splash1",
        scroller: "#main",
        scrub: 2,
      },
    });
  } else {
    t1.to("#page #splash1", {
      left: "30%",
      duration: 3,
      opacity: 1,
      scrollTrigger: {
        trigger: "#page #splash1",
        scroller: "#main",
        scrub: 2,
      },
    });
  }

  if (media.matches) {
    t1.to("#page #splash2", {
      left: "55%",
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: "#page #splash2",
        scroller: "#main",
        scrub: 2,
      },
    });
  } else {
    t1.to("#page #splash2", {
      left: "55%",
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: "#page #splash2",
        scroller: "#main",
        scrub: 2,
      },
    });
  }
}

setPageAnimations(media1);
media1.addEventListener('change', (e) => setPageAnimations(e.matches));


// Page 1 animations
t1.to("#page1", {
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    pin: true,
  },
});

if (media1.matches) {
  t1.to("#page1 #imgdiv", {
    scale: 3,
    stagger: 0.25,
    duration: 3,
    opacity: 1,
    top: "110%",
    left: "110%",
    scrollTrigger: {
      trigger: "#page1 #imgdiv",
      scroller: "#main",
      scrub: 2,
    },
  });
} else {
  t1.to("#page1 #imgdiv", {
    scale: 3,
    stagger: 0.25,
    duration: 3,
    opacity: 1,
    top: "145%",
    scrollTrigger: {
      trigger: "#page1 #imgdiv",
      scroller: "#main",
      scrub: 2,
    },
  });
}

t1.to("#page1 h1", {
  opacity: 1,
  top: "5%",
  stagger: 0.25,
  duration: 2,
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    start: "top 50%",
    end: "top 10%",
    scrub: 2,
  },
});

t1.to("#page1 h2", {
  opacity: 1,
  stagger: 0.25,
  duration: 3,
  scrollTrigger: {
    trigger: "#page1 h2",
    scroller: "#main",
    start: "top 30%",
    end: "top 10%",
    scrub: 2,
  },
});

t1.to(one, {
  opacity: 1,
  stagger: 0.25,
  duration: 3,
  scrollTrigger: {
    trigger: one,
    scroller: "#main",
    start: "top 30%",
    end: "top 10%",
    scrub: 2,
  },
});

t1.to(two, {
  opacity: 1,
  stagger: 0.25,
  duration: 3,
  scrollTrigger: {
    trigger: two,
    scroller: "#main",
    start: "top 20%",
    end: "top 5%",
    scrub: 2,
  },
});

// Page 00 animations
t1.to("#page00", {
  scrollTrigger: {
    trigger: "#page00",
    scroller: "#main",
    pin: true,
  },
});

if (media1.matches) {
  t1.to("#page00 #imgdiv00", {
    scale: 3,
    stagger: 0.25,
    duration: 3,
    top: "110%",
    left: "100%",
    opacity: 1,
    scrollTrigger: {
      trigger: "#page00 #imgdiv00",
      scroller: "#main",
      scrub: 2,
    },
  });
} else {
  t1.to("#page00 #imgdiv00", {
    scale: 3,
    stagger: 0.25,
    duration: 3,
    top: "145%",
    opacity: 1,
    scrollTrigger: {
      trigger: "#page00 #imgdiv00",
      scroller: "#main",
      scrub: 2,
    },
  });
}

t1.to(three, {
  opacity: 1,
  stagger: 0.25,
  duration: 3,
  scrollTrigger: {
    trigger: three,
    scroller: "#main",
    start: "top 20%",
    end: "top 5%",
    scrub: 2,
  },
});

t1.to("#page00 h2", {
  opacity: 1,
  stagger: 0.25,
  duration: 3,
  scrollTrigger: {
    trigger: "#page00 h2",
    scroller: "#main",
    start: "top 30%",
    end: "top 10%",
    scrub: 2,
  },
});

t1.to("#page00 h1", {
  opacity: 1,
  top: "5%",
  stagger: 0.25,
  duration: 2,
  scrollTrigger: {
    trigger: "#page00 h1",
    scroller: "#main",
    start: "top 50%",
    end: "top 10%",
    scrub: 2,
  },
});

// Page 2 animations
t1.to("#page2", {
  scrollTrigger: {
    trigger: "#page2",
    scroller: "#main",
    pin: true,
  },
});

t1.to("#page2 #imgdiv2", {
  scale: 1.4,
  rotation: -90,
  opacity: 1,
  duration: 3,
  smooth: true,
  scrollTrigger: {
    trigger: "#page2 #imgdiv2",
    scroller: "#main",
    scrub: 2,
  },
});

t1.to("#page2 h3", {
  opacity: 1,
  top: "0%",
  stagger: 0.25,
  duration: 2,
  scrollTrigger: {
    trigger: "#page2 h3",
    scroller: "#main",
    start: "top 50%",
    end: "top 10%",
    scrub: 2,
  },
});

t1.to("#page2 p", {
  opacity: 1,
  top: "20%",
  stagger: 0.25,
  duration: 2,
  scrollTrigger: {
    trigger: "#page2 p",
    scroller: "#main",
    start: "top 50%",
    end: "top 10%",
    scrub: 2,
  },
});

// t1.to("#page2 #imgdiv3", {
//     scale: 4,
//     duration: 3,
//     rotation: -90,
//     opacity: 0,
//     scrollTrigger: {
//         trigger: "#page2 #imgdiv3",
//         scroller: "#main",
//         scrub: 2,
//         start: "top 15%",
//     }
// });

t1.from("#page2 h4", {
  y: -100,
  scale: 3.5,
  stagger: 3,
  duration: 3,
  opacity: 0,
  scrollTrigger: {
    trigger: "#page2 h4",
    scroller: "#main",
    scrub: 2,
  },
});

// Page 3 animations
t1.to("#page3 h3", {
  opacity: 1,
  top: "0%",
  stagger: 0.25,
  duration: 2,
  scrollTrigger: {
    trigger: "#page3 h3",
    scroller: "#main",
    start: "top 50%",
    end: "top 10%",
    scrub: 2,
  },
});

t1.to("#page3", {
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    pin: true,
  },
});

t1.to("#page3 #imgdiv5", {
  top: "78%",
  stagger: 0.25,
  duration: 1,
  opacity: 1,
  scrollTrigger: {
    trigger: "#page3 #imgdiv5",
    scroller: "#main",
    scrub: 2,
  },
});

t1.to("#page3 p", {
  opacity: 1,
  top: "30%",
  stagger: 0.25,
  duration: 2,
  scrollTrigger: {
    trigger: "#page3 p",
    scroller: "#main",
    start: "top 50%",
    end: "top 10%",
    scrub: 2,
  },
});

// Page 4 animations
t1.to("#page4", {
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    pin: true,
  },
});

if (media1.matches) {
  t1.to("#page4 #imgdiv6", {
    left: "30%",
    duration: 4,
    scrollTrigger: {
      trigger: "#page4 #imgdiv6",
      scroller: "#main",
      scrub: 2,
    },
  });
} else {
  t1.to("#page4 #imgdiv6", {
    x: 600,
    duration: 4,
    scrollTrigger: {
      trigger: "#page4 #imgdiv6",
      scroller: "#main",
      scrub: 2,
    },
  });
}

if (media1.matches) {
  t1.to("#page4 #imgdiv7", {
    right: "-60%",
    duration: 4,
    scrollTrigger: {
      trigger: "#page4 #imgdiv7",
      scroller: "#main",
      scrub: 2,
    },
  });
} else {
  t1.to("#page4 #imgdiv7", {
    x: -600,
    duration: 4,
    scrollTrigger: {
      trigger: "#page4 #imgdiv7",
      scroller: "#main",
      scrub: 2,
    },
  });
}

if (media1.matches) {
  t1.to("#page4 #txt1", {
    left: "15%",
    duration: 4,
    opacity: 1,
    scrollTrigger: {
      trigger: "#page4 #txt1",
      scroller: "#main",
      scrub: 2,
    },
  });
} else {
  t1.to("#page4 #txt1", {
    left: "8%",
    duration: 4,
    opacity: 1,
    scrollTrigger: {
      trigger: "#page4 #txt1",
      scroller: "#main",
      scrub: 2,
    },
  });
}

if (media1.matches) {
  t1.to("#page4 #txt2", {
    left: "25%",
    duration: 4,
    opacity: 1,
    scrollTrigger: {
      trigger: "#page4 #txt2",
      scroller: "#main",
      scrub: 2,
    },
  });
} else {
  t1.to("#page4 #txt2", {
    left: "17%",
    duration: 4,
    opacity: 1,
    scrollTrigger: {
      trigger: "#page4 #txt2",
      scroller: "#main",
      scrub: 2,
    },
  });
}

// Page 5 animations
t1.to("#page5", {
  scrollTrigger: {
    trigger: "#page5",
    scroller: "#main",
    pin: true,
  },
});

t1.to("#page5 #imgdiv8", {
  left: "20%",
  duration: 4,
  scrollTrigger: {
    trigger: "#page5 #imgdiv8",
    scroller: "#main",
    scrub: 2,
  },
});

if (media1.matches) {
  t1.to("#page5 #imgdiv9", {
    left: "80%",
    duration: 4,
    scrollTrigger: {
      trigger: "#page5 #imgdiv9",
      scroller: "#main",
      scrub: 2,
    },
  });
} else {
  t1.to("#page5 #imgdiv9", {
    left: "80%",
    duration: 4,
    scrollTrigger: {
      trigger: "#page5 #imgdiv9",
      scroller: "#main",
      scrub: 2,
    },
  });
}

t1.to("#page5 p", {
  scale: 1.1,
  opacity: 1,
  duration: 4,
  scrollTrigger: {
    trigger: "#page5 p",
    scroller: "#main",
    scrub: 2,
  },
});

t1.to("#page5 #up", {
  top: "8%",
  duration: 4,
  opacity: 1,
  scrollTrigger: {
    trigger: "#page5 #up",
    scroller: "#main",
    scrub: 2,
  },
});

t1.to("#page5 #down", {
  top: "27%",
  opacity: 1,
  duration: 4,
  scrollTrigger: {
    trigger: "#page5 #up",
    scroller: "#main",
    scrub: 2,
  },
});

// Accordion functionality
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

document.querySelectorAll('.elem').forEach(el => el.addEventListener('click', handleClick));
document.querySelectorAll('.elem2').forEach(el => el.addEventListener('click', handleClick));

// No need for additional code within the media query, as the page animations are already set up to be responsive.
// The setPageAnimations function handles the adjustments based on the media query.

// ...rest of your code...