const Header = () => {
  return (
    <header className="header">
      <nav className="header__menu">
        <ul className="header__list">
          <li>
            <a href="/" className='header__link'>About me</a>
          </li>
          <li>
            <a href="/" className='header__link'>Personal proyects</a>
          </li>
          <li>
            <a href="/" className='header__link'>Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;