/* Styles */
import '../styles/layout/MouseStars.scss';


const MouseStars = () => {

  const body = document.querySelector('body');

  /* HANDLE FUNCTIONS */
  const handleMouseStars = (event) => {
    event.preventDefault();

    const stars = document.createElement('span');
    stars.classList.add('stars');
    body.appendChild(stars);

    const x = event.clientX;
    const y = event.clientY;

    const size = Math.random() * 30;
    const transformValue = Math.random() * 360;

    stars.style.left = x + 'px';
    stars.style.top = y + 'px';
    stars.style.width = 2 + size + 'px';
    stars.style.height = 2 + size + 'px';
    stars.style.transform = `rotate(${transformValue}deg)`;

    setTimeout(() => {
      stars.remove();
    }, 1000);
  };


  /* LISTENERS */
  const mouseListener = () => document.addEventListener('mousemove', handleMouseStars);
  mouseListener();
  const mobileTouchListener = () => document.addEventListener('touchmove', handleMouseStars);
  mobileTouchListener();

};

export default MouseStars;