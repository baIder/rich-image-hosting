import styled from 'styled-components';
import React from 'react';

const StyledFooter = styled.footer`
  padding: 10px 100px;
  text-align: center;
  font-size: 12px;
  color: #aaa;
`;

const Footer: React.FC = () => {
  return (
    <>
      <StyledFooter>Footer</StyledFooter>
    </>
  );
};

export default Footer;

