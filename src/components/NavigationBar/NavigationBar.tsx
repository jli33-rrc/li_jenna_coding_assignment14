'use client';

import React from 'react';
import styled from 'styled-components';
import { NavigationBarProps } from './NavigationBar.types';

const NavigationContainer = styled.nav<{ $backgroundColor: string }>`
  align-items: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  justify-content: space-between;
  padding: 20px 75px 20px 75px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const Logo = styled.a<{ $fontColor?: string }>`
  color: ${({ $fontColor }) => $fontColor || '#353433'};
  font-family: 'Instrument Serif', serif;
  font-size: 25pt;
  font-style: italic;
  font-weight: 400;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const LinksContainer = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Links = styled.a<{ $fontColor?: string }>`
  border-radius: 25px;
  color: ${({ $fontColor }) => $fontColor || '#353433'};
  font-family: 'Manrope', sans-serif;
  font-size: 15pt;
  font-weight: 400;
  margin-left: 20px;
  padding: 10px 25px;
  text-decoration: none;
  transition:
    background-color 0.25s,
    color 0.25s;

  &:hover {
    background-color: #353433;
    color: #fffaf5;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    margin: 0.25rem 0;
  }
`;

const NavigationBar: React.FC<NavigationBarProps> = ({
  logo = { href: '/', label: 'Jenna Li' },
  links,
  backgroundColor = '#FFFAF5',
  fontColor = '#353433',
}) => {
  return (
    <NavigationContainer $backgroundColor={backgroundColor} role="navigation">
      <Logo href={logo.href} $fontColor={fontColor}>
        {logo.label}
      </Logo>
      <LinksContainer>
        {links.map((link, index) => (
          <Links key={index} href={link.href} $fontColor={fontColor}>
            {link.label}
          </Links>
        ))}
      </LinksContainer>
    </NavigationContainer>
  );
};

export { NavigationBar };
