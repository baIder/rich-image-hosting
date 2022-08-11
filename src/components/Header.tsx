import LogoURL from './logo.svg';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  background: #02101f;
  color: #fff;
`;
const Logo = styled.img`
  height: 30px
`;
const StyledLink = styled(NavLink)`
  color: #fff;
  margin-left: 30px;

  &.active {
    border-bottom: 1px solid #fff;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Logo src={LogoURL} alt=""/>
      <nav>
        <StyledLink to="/">首页</StyledLink>
        <StyledLink to="/history">上传历史</StyledLink>
        <StyledLink to="/about">关于我</StyledLink>
      </nav>
    </StyledHeader>
  );
}

export default Header;

