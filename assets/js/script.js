(function() {
  window.addEventListener("DOMContentLoaded", () => {
    // ScrollTriger initialization
    gsap.registerPlugin(ScrollTrigger);
    function chatAnimation() {
      let counter = 0;
      const letters = [
        "S",
        "o",
        "r",
        "r",
        "y",
        " ",
        "A",
        "n",
        "o",
        "t",
        "h",
        "e",
        "r",
        " ",
        "T",
        "i",
        "m",
        "e"
      ];
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#js-fans2",
            start: "top center"
          }
        })
        .to("#js-chat", {
          y: 250,
          duration: 1.2
        })
        .to("#js-chat", {
          y: 150,
          duration: 0.8
        })
        .to("#js-chat", {
          y: 50,
          duration: 0.8
        })
        .to("#js-chat", {
          y: 0,
          duration: 0.3
        })
        .to(
          "#js-chat-letter",
          {
            duration: 2.5,
            onUpdate: () => {
              if (counter >= letters.length) return;
              let text = document.createTextNode(letters[counter]);
              document.getElementById("js-chat-letter").appendChild(text);
              counter++;
            }
          },
          "-=0.3"
        );
    }
    gsap.from("#js-phone-left, #js-phone-right", {
      scrollTrigger: {
        trigger: "#js-phone",
        start: "top center"
      },
      rotation: 0,
      duration: 1
    });
    const imageAnim = gsap.to("#js-fans1-image", {
      scrollTrigger: {
        trigger: "#js-fans1",
        start: "top center",
        scrub: 0.7
      },
      x: "200%",
      stagger: 0.2
    });
    chatAnimation();
    //popup animation
    gsap.fromTo(
      "#js-popup",
      { y: -400, opacity: 0 },
      {
        scrollTrigger: {
          trigger: "#js-influencer2",
          start: "top center"
        },
        y: 0,
        opacity: 1,
        duration: 0.7
      }
    );
    // Pin effect for large screens only
    ScrollTrigger.matchMedia({
      "(min-width: 1025px)": function() {
        gsap.to("#js-fans1", {
          scrollTrigger: {
            trigger: "#js-fans1",
            endTrigger: "#js-fans1",
            pin: true
          }
        });
        gsap.to("#js-fans2", {
          scrollTrigger: {
            trigger: "#js-fans2",
            endTrigger: "#js-fans2",
            pin: true
          }
        });
        gsap.to("#js-influencer1", {
          scrollTrigger: {
            trigger: "#js-influencer1",
            endTrigger: "#js-footer",
            pin: true
          }
        });
      }
    });
    //mobile menu animation
    const menuBtn = document.querySelector("#js-menu-btn"),
      menuLink = document.querySelectorAll("#js-menu-link");
    const tl = gsap.timeline();
    tl
      .to("#js-menu-open", { duration: 0.2, top: "100%" })
      .to("#js-menu-close", { duration: 0.2, top: 0 }, "-=0.2")
      .to("#js-menu", {
        duration: 1,
        y: 0,
        ease: "Expo.easeInOut"
      })
      .to("#js-menu-link", { y: 0, stagger: 0.2 }, "-=0.5");
    tl.reverse();
    // bind event listeners to menu
    menuBtn.addEventListener("click", e => {
      tl.reversed(!tl.reversed());
    });
    menuLink.forEach(link => {
      link.addEventListener("click", e => {
        tl.reversed(!tl.reversed());
      });
    });
  });
})();
