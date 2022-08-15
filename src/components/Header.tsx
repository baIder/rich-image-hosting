import LogoURL from './logo.svg';
import {NavLink, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {Button} from 'antd';
import {useStores} from '../stores';
import {observer} from 'mobx-react';
import React from 'react';

const StyledHeader = styled.header`
  height: 52px;
  display: flex;
  align-items: center;
  padding: 10px;
  background: #02101f;
  color: #fff;
`;
const Logo = styled.img`
  height: 30px;
  @media (max-width: 500px) {
    display: none;
  }
`;
const Nav = styled.nav`
  height: 52px;
  display: flex;
  align-items: end;
`;
const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  color: #fff;
  margin-left: 10px;
  @media (min-width: 500px) {
    margin-left: 30px;
    width: 100px;
    height: 42px;
    position: relative;
    background: rgba(240, 242, 245, 0.5);
    color: #ddd;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
}

&.active {
  border-bottom: 1px solid #fff;
  @media (min-width: 500px) {
    border-bottom: none;
    background: rgba(240, 242, 245, 1);
    color: #333;
    &:before {
      content: '';
      position: absolute;
      bottom: 0;
      left: -10px;
      width: 10px;
      height: 10px;
      border-bottom-right-radius: 10px;
      box-shadow: 5px 5px 2px 2px #F0F2F5;
    }

    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      right: -10px;
      width: 10px;
      height: 10px;
      border-bottom-left-radius: 10px;
      box-shadow: -5px 5px 2px 2px #F0F2F5;
    }
  }
`;
const Login = styled.div`
  margin-left: auto;
`;
const StyledButton = styled(Button)`
  margin-left: 10px;
`;


const Header: React.FC = () => {
  const navigate = useNavigate();
  const {UserStore, AuthStore} = useStores();
  const handleLogin = () => {
    navigate('/login');
  };
  const handleLogout = () => {AuthStore.logout();};
  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <StyledHeader>
      <Logo src={LogoURL} alt=""/>
      <Nav>
        <StyledLink to="/">
          <div>首页</div>
        </StyledLink>
        <StyledLink to="/history">
          <div>上传历史</div>
        </StyledLink>
      </Nav>
      <Login>
        {
          UserStore.currentUser ? <>
            Hello，{UserStore.currentUser}<StyledButton type="primary"
                                                       onClick={handleLogout}>注销</StyledButton>
          </> : <>
            <StyledButton type="primary" onClick={handleLogin}>登录</StyledButton>
            <StyledButton type="primary" onClick={handleRegister}>注册</StyledButton>
          </>
        }
      </Login>
    </StyledHeader>
  );
};

export default observer(Header);

