/* Styles */
import '../styles/layout/MouseParticles.scss';


const MouseParticles = () => {

  const body = document.querySelector('body');

  /* HANDLE FUNCTIONS */
  const handleMouseParticles = (event) => {
    const particles = document.createElement('span');
    particles.classList.add('particles');
    body.appendChild(particles);

    const x = event.clientX;
    const y = event.clientY;

    const size = Math.random() * 8;
    const transformValue = Math.random() * 360;

    particles.style.left = x + 'px';
    particles.style.top = y + 'px';
    particles.style.width = 2 + size + 'px';
    particles.style.height = 2 + size + 'px';
    particles.style.transform = `rotate(${transformValue}deg)`;

    setTimeout(() => {
      particles.remove();
    }, 1000);
  };


  /* LISTENERS */
  const mouseListener = () => document.addEventListener('mousemove', handleMouseParticles);
  mouseListener();

};

export default MouseParticles;