import styled from 'styled-components';
import React from 'react';
import {Divider} from 'antd';

const StyledFooter = styled.footer`
  padding-bottom: 10px;
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
        <span> </span>
        <a href="https://github.com/baIder/rich-image-hosting" target="_blank" rel="noreferrer">
          <img src="https://img.shields.io/badge/GitHub-bald3r-orange" alt=""/>
        </a>
        <span> </span>
        <a target="_blank" href="https://bald3r.wang/" rel="noreferrer">
          <img src="https://img.shields.io/badge/Blog-bald3r-red" alt=""/>
        </a>
      </StyledFooter>
    </>
  );
};

export default Footer;

