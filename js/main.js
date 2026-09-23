/* Import *************************************/

gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);


/* Variables **********************************/


/* Fonctions **********************************/

/* Animation 1er block (ScrollTrigger) --------------*/

gsap.to("#moving-block1", { // Va à ..., contrairement à "from" qui part de ...
    scrollTrigger : {
        trigger : "#section1",
        start : 'top 50%',
        markers : false, //"true" pour montrer les marqueurs de ref d'animation (start & end), "false" pour les cacher
        scrub : 1, // selon la valeur, joue les animations de meme classe de manière saccadée
        toggleActions : 'play none reverse reset', // Permet que l'animation suive le scroll
    },

    y : '50vh',
    rotation : 720,
    duration : 2,
})

/* Animation 3e block (Timeline) ----------------*/

let tl = gsap.timeline({
    repeat : -1,
    // yoyo : true, permet que l'animation se joue aussi dans le sens inverse infiniement
})

tl.to("#moving-block3", {x : "100px",})
.to("#moving-block3", {y : "100px",})
.to("#moving-block3", {x : "-20px",})
.to("#moving-block3", {y : "-1px",})

/* Animation 4e block (Draggable) ----------------*/

Draggable.create("#moving-block4", {
    type : 'y', //objet uniquement draggable sur l'axe vertical
    bounds : "#section4" //interdit au block de sortir de la zone indiquée
})





