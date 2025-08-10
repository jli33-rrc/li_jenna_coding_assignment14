'use client';

import React from 'react';
import styled from 'styled-components';
import { FooterProps } from './Footer.types';

const FooterComponent = styled.footer<{ $backgroundColor: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  display: flex;
  flex-direction: column;
  padding: 0 75px 25px 75px;
`;

const Connect = styled.div<{ $fontColor?: string }>`
  color: ${({ $fontColor }) => $fontColor || '#353433'};
  font-family: 'Manrope', sans-serif;
  font-size: 25pt;
  font-weight: 400;
  margin: 275px 0 125px 0;

  @media (max-width: 850px) {
    margin: 125px 0 125px 0;
  }
`;

const Hello = styled.a<{ $fontColor?: string }>`
  color: ${({ $fontColor }) => $fontColor || '#353433'};
  cursor: pointer;
  text-decoration: underline;
  transition: 0.25s;

  &:hover {
    font-weight: 800;
    text-decoration: underline;
  }
`;

const Row = styled.div<{ $alignTop?: boolean }>`
  ${({ $alignTop }) => $alignTop && 'align-items: start;'}
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 850px) {
    align-items: left;
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Column = styled.div<{ $alignRight?: boolean; $noMargin?: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: ${({ $alignRight }) => ($alignRight ? 'right' : 'left')};
  margin-bottom: ${({ $noMargin }) => ($noMargin ? '0' : '50px')};

  @media (max-width: 850px) {
    margin-bottom: ${({ $noMargin }) => ($noMargin ? '0' : '25px')};
    text-align: left;
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

const ColumnTitle = styled.p<{ $fontColor?: string }>`
  color: ${({ $fontColor }) => $fontColor || '#353433'};
  font-family: 'Manrope', sans-serif;
  font-size: 15pt;
  font-weight: 800;
  margin: 0;
`;

const Links = styled.a<{ $fontColor?: string }>`
  display: block;
  color: ${({ $fontColor }) => $fontColor || '#353433'};
  font-family: 'Manrope', sans-serif;
  font-size: 15pt;
  font-weight: 400;
  text-decoration: none;
  transition: 0.25s;

  &:hover {
    font-weight: 800;
    text-decoration: underline;
  }
`;

const Copyright = styled.div<{ $fontColor?: string }>`
  color: ${({ $fontColor }) => $fontColor || '#353433'};
  font-family: 'Manrope', sans-serif;
  font-size: 15pt;
  font-weight: 400;
  margin: 0;
  padding: 0;

  @media (max-width: 850px) {
    margin: 0;
    padding: 0;
  }
`;

const Footer: React.FC<FooterProps> = ({
  columns,
  copyright,
  backgroundColour = '#FFFAF5',
  fontColour = '#353433',
}) => {
  return (
    <FooterComponent $backgroundColor={backgroundColour}>
      <Connect $fontColor={fontColour}>
        Want to connect? Come say{' '}
        <Hello href="/contact" $fontColor={fontColour}>
          hello
        </Hello>
        !
      </Connect>

      <Row $alignTop>
        {columns.map((col, colIndex) => (
          <Column key={colIndex} $alignRight={colIndex === 3}>
            {col.logo && (
              <Logo href={col.logo.href} $fontColor={fontColour}>
                {col.logo.label}
              </Logo>
            )}
            {col.title && <ColumnTitle $fontColor={fontColour}>{col.title}</ColumnTitle>}
            {col.links &&
              col.links.map((link, i) => (
                <Links key={i} href={link.href} $fontColor={fontColour}>
                  {link.label}
                </Links>
              ))}
          </Column>
        ))}
      </Row>
      <Row>
        {copyright.map((col, colIndex) => (
          <Column key={colIndex} $alignRight={colIndex === 3} $noMargin>
            <Copyright $fontColor={fontColour}>{col.content}</Copyright>
          </Column>
        ))}
      </Row>
    </FooterComponent>
  );
};

export { Footer };
