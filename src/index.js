import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";



initScrollReveal(targetElements, defaultProps);
initTiltEffect();

window.onload = function() {
    Particles.init({
      selector: '.background'
    });
    
  };