import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="logo">Premier Nursing College</a>
      <div className="header-right">
        <a className="active" href="/Login">Student Portal</a>
        <a href="#contact">Staff Portal</a>
       
      </div>
    </div>
  );
}

export default Header;

  