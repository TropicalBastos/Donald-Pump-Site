
export function loadParticles(){

  particlesJS.load('background', '/js/json/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

 }
