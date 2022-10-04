/* IMAGES */
import logo from '../../images/logo.png';
/* STYLES */
import '../../styles/layout/landing/Logo.scss'

const Logo = () => {

  const text = 'Elena Palomar • Front-end developer • ';
  const textLength = text.length;
  const deg = 360 / textLength;

  return (
    <main className="main">
      <section className="cover">
        <img src={logo} alt="Logo's portfolio - Caricature of Elena" className="cover__logo" />
        <div className="cover__text">
          <p>{text.split('').map((letter, i) =>
            <span
              key={i}
              className='spinningLetter'
              style={{ transform: `rotate(${deg * i}deg)` }}>
              {letter}
            </span>)}
          </p>
        </div>
      </section>
    </main >
  );

};


export default Logo;