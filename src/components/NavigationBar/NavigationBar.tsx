'use client';

import React from 'react';
import styled from 'styled-components';
import { NavigationBarProps } from './NavigationBar.types';

const NavigationBarComponent = styled.nav<{ $backgroundColor: string }>`
  align-items: center;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  justify-content: space-between;
  padding: 25px 75px 25px 75px;

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
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

const Links = styled.div`
  align-items: center;
  display: flex;

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: column;
    margin-top: 5px;
    margin-left: -25px;
    width: 100%;
  }
`;

const Link = styled.a<{ $fontColor?: string }>`
  border-radius: 25px;
  color: ${({ $fontColor }) => $fontColor || '#353433'};
  font-family: 'Manrope', sans-serif;
  font-size: 15pt;
  font-weight: 400;
  margin-left: 25px;
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
    margin: 10px 0 0 0;
  }
`;

const NavigationBar: React.FC<NavigationBarProps> = ({
  logo = { href: '/', label: 'Jenna Li' },
  links,
  backgroundColour = '#FFFAF5',
  fontColour = '#353433',
}) => {
  return (
    <NavigationBarComponent $backgroundColor={backgroundColour} role="navigation">
      <Logo href={logo.href} $fontColor={fontColour}>
        {logo.label}
      </Logo>
      <Links>
        {links.map((link, index) => (
          <Link key={index} href={link.href} $fontColor={fontColour}>
            {link.label}
          </Link>
        ))}
      </Links>
    </NavigationBarComponent>
  );
};

export { NavigationBar };
