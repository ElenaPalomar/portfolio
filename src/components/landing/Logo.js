/* Images */
import logo from '../../images/logo.png';
/* Styles */
import '../../styles/layout/landing/Logo.scss';


const Logo = () => {

  const text = 'Elena Palomar • Front-end developer • ';
  const textLength = text.length;
  const deg = 360 / textLength;
  // Function to render each letter spinning around the logo
  const circleText = text.split('').map((letter, i) =>
    <span
      key={i}
      className='spinningLetter'
      style={{ transform: `rotate(${deg * i}deg)` }}>
      {letter}
    </span>)

  return (
    <section className="cover">
      <img src={logo} alt="Logo's portfolio - Caricature of Elena" className="cover__logo" />
      <div className="cover__text">
        {circleText}
      </div>
    </section>
  );

};


export default Logo;