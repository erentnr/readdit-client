function Header() {
  return (
    <header className="header">
      <div className="logo">Readdit</div>
      <div className="menu">
        <a href="#menu1" className="menu-item">
          Login
        </a>
        <a href="#menu1" className="menu-item">
          Signup
        </a>
        <a href="#menu1" className="menu-item">
          Dashboard
        </a>
        <a href="#menu2" className="menu-item">
          About
        </a>
        <a href="#menu3" className="menu-item">
          Contact
        </a>
      </div>
    </header>
  );
}

export default Header;
