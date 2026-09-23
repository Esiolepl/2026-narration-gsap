/* Import ******************************/

gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);


/* Variables **************************/


/* Fonctions **************************/

/* Animation 2e block *****/

gsap.to("#moving-block2", { /* Va à ..., contrairement à "from" qui part de ... */
    scrollTrigger : {
        trigger : "#section2",
        start : 'top 50%',
        markers : true,
        scrub : 1,
        toggleActions : 'play none reverse reset',
    },

    y : '50vh',
    rotation : 360,
    duration : 2,
})




