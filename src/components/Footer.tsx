import styled from 'styled-components';
import React from 'react';
import {Divider} from 'antd';

const StyledFooter = styled.footer`
  padding: 10px 100px;
  text-align: center;
  font-size: 12px;
  color: #aaa;
`;

const Footer: React.FC = () => {
  return (
    <>
      <StyledFooter>
        <Divider></Divider>
        <img src="https://img.shields.io/badge/Copyright-%20%C2%A9%202022-brightgreen" alt=""/>
        <span> </span>
        <img src="https://img.shields.io/badge/Made%20by-bald3r-blue" alt=""/>
      </StyledFooter>
    </>
  );
};

export default Footer;

