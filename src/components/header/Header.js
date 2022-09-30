const Header = () => {
  return (
    <header className="header">

      <a
        href="/"
        className="header__home"
        title="Return home">
        <img src="" alt="Logo" />
      </a>

      <nav className="header__menu">
        <ul className="header__list">
          <li>
            <a
              href="/about"
              className='header__link'
              title="Go to know something about me">
              About me
            </a>
          </li>
          <li>
            <a href="/proyects" className='header__link' title="Go to see some of my personal proyects">Personal proyects</a>
          </li>
          <li>
            <a href="/contact" className='header__link' title="Do you want to contact me? Click here and fill the form">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;