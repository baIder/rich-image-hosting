import Logo from './logo.svg';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <img src={Logo} alt=""/>
      <nav>
        <Link to="/">首页</Link>
        <Link to="/history">上传历史</Link>
        <Link to="/about">关于我</Link>
      </nav>
    </header>
  );
}

export default Header;

