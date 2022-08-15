import LogoURL from './logo.svg';
import {NavLink, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {Button} from 'antd';
import {useStores} from '../stores';
import {observer} from 'mobx-react';
import React from 'react';

const StyledHeader = styled.header`
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
const StyledLink = styled(NavLink)`
  color: #fff;
  margin-left: 30px;
  @media (max-width: 500px) {
    margin-left: 10px;
  }

  &.active {
    border-bottom: 1px solid #fff;
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
      <nav>
        <StyledLink to="/">首页</StyledLink>
        <StyledLink to="/history">上传历史</StyledLink>
      </nav>
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

