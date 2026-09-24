/* Sources : 
Aide de Gemini pour la fonction des sections 2 et 4 (draggables)
Documentation de gsap pour les animations
Slides de JB Dacquet pour les animations
*/


/* Import *************************************/

gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

/* Fonctions **********************************/

/* Animation 1er section (ScrollTrigger) --------------*/

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


/* Animation 2e section (Draggable) --------------*/

let successCount = 0;
const totalPairs = 3;

Draggable.create(".draggable-block", {
  type: "x,y",
  edgeResistance: 0.65,
  bounds: "#section2", // Limite le déplacement à la section
  
  onDragEnd: function() { // S'occupe des éléments lorsqu'on les lache quelque part
    const draggedElem = this.target;
    const targetKey = draggedElem.getAttribute("data-target");
    const targetZone = document.querySelector(`.target-zone[data-target="${targetKey}"]`); // Sélectionne la zone de dépôt correspondante
    
    if (this.hitTest(targetZone, "50%")) { // Vérifie si la  carte touche la bonne zone cible (au moins 50% de chevauchement)
      
      const targetBounds = targetZone.getBoundingClientRect(); // Aligne parfaitement l'élément sur la zone cible
      const dragBounds = draggedElem.getBoundingClientRect()
      
      const xOffset = targetBounds.left - dragBounds.left + this.x; // Calcule la différence de position pour replacer la carte correctement dans la zone
      const yOffset = targetBounds.top - dragBounds.top + this.y;

      gsap.to(draggedElem, {
        x: xOffset,
        y: yOffset,
        duration: 0.3,
        ease: "power2.out"
      });

      this.disable(); // Désactive le drag sur ce bloc
           
      targetZone.classList.add("matched"); // Changement de couleur si l'association est correcte
      gsap.to(draggedElem, { backgroundColor: "#22c55e", scale: 0.95 });

      successCount++; // Compte la victoire
      if (successCount === totalPairs) {
        onGameComplete();
      }

    } else { // Si la cible est ratée ou mauvaise, retour à la position initiale  
      gsap.to(draggedElem, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.5)"
      });
    }
  }
});

function onGameComplete() { // Animation de victoire globale
  gsap.to(".game-section h2", {
    scale: 1.2,
    color: "#22c55e",
    duration: 0.5,
    yoyo: true,
    repeat: 1
  });
}


/* Animation 3e section (Timeline) ----------------*/

let tl = gsap.timeline({
    repeat : -1,
    // yoyo : true, permet que l'animation se joue aussi dans le sens inverse infiniement
})

tl.to("#moving-block3", {x : "300px",})
.to("#moving-block3", {y : "300px",})
.to("#moving-block3", {x : "-50px",})
.to("#moving-block3", {y : "-5px",})

tl.timeScale(0.5); // Ralenti le mouvement du block mouvant


/* Animation 4e section (Draggable) ----------------*/

let pointsDeSucces = 0;
const pairesTotales = 3;

Draggable.create(".draggable-card", {
  type: "x,y",
  edgeResistance: 0.65,
  bounds: "#section4", // Limite le déplacement à la section
  
  onDragEnd: function() { // S'occupe des éléments lorsqu'on les lache quelque part
    const draggedElem = this.target;
    const targetKey = draggedElem.getAttribute("data-target");
    const targetZone = document.querySelector(`.target-zone[data-target="${targetKey}"]`); // Sélectionne la zone de dépôt correspondante
    
    if (this.hitTest(targetZone, "50%")) { // Vérifie si la  carte touche la bonne zone cible (au moins 50% de chevauchement)
      
      const targetBounds = targetZone.getBoundingClientRect(); // Aligne parfaitement l'élément sur la zone cible
      const dragBounds = draggedElem.getBoundingClientRect()
      
      const xOffset = targetBounds.left - dragBounds.left + this.x; // Calcule la différence de position pour replacer la carte correctement dans la zone
      const yOffset = targetBounds.top - dragBounds.top + this.y;

      gsap.to(draggedElem, {
        x: xOffset,
        y: yOffset,
        duration: 0.3,
        ease: "power2.out"
      });

      this.disable(); // Désactive le drag sur ce bloc
           
      targetZone.classList.add("matched"); // Changement de couleur si l'association est correcte
      gsap.to(draggedElem, { backgroundColor: "#22c55e", scale: 0.95 });

      pointsDeSucces++; // Compte la victoire
      if (pointsDeSucces === pairesTotales) {
        onGameComplete();
      }

    } else { // Si la cible est ratée ou mauvaise, retour à la position initiale  
      gsap.to(draggedElem, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.5)"
      });
    }
  }
});

function onGameComplete() { // Animation de victoire globale
  gsap.to(".game-section h2", {
    scale: 1.2,
    color: "#22c55e",
    duration: 0.5,
    yoyo: true,
    repeat: 1
  });
}





