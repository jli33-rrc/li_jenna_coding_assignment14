'use client';

import React from 'react';
import styled from 'styled-components';
import { CardProps, CardCollectionProps } from './Card.types';

const CardCollection = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
`;

const CardComponent = styled.div<{ $backgroundColor?: string; $fontColour?: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#FFFAF5'};
  border: 1px solid #353433;
  color: ${({ $fontColour }) => $fontColour || '#353433'};
  font-family: 'Manrope', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 400px;
  overflow: hidden;
  transition:
    background-color 0.25s,
    box-shadow 0.25s;

  &:hover {
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  display: block;
  height: 250px;
  object-fit: cover;
  width: 100%;
`;

const CardTitle = styled.div`
  font-size: 15pt;
  font-weight: 800;
  padding: 25px 25px 0 25px;
`;

const CardBody = styled.div`
  flex: 1;
  font-size: 15pt;
  font-weight: 400;
  padding: 0 25px 25px 25px;
`;

const CardButton = styled.a<{ $backgroundColor?: string; $fontColour?: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#FFFAF5'};
  border: 1px solid #353433;
  border-radius: 25px;
  color: ${({ $fontColour }) => $fontColour || '#353433'};
  font-size: 15pt;
  font-weight: 400;
  margin: 0 25px 25px 25px;
  padding: 10px 25px;
  text-decoration: none;
  transition:
    background-color 0.25s,
    color 0.25s;
  width: fit-content;

  &:hover {
    background-color: #353433;
    color: #fffaf5;
  }
`;

const CardItem: React.FC<CardProps> = ({ title, body, src, alt, button, buttonLink, backgroundColour, fontColour }) => (
  <CardComponent $backgroundColor={backgroundColour} $fontColour={fontColour}>
    {src && <CardImage src={src} alt={alt} />}
    {title && <CardTitle>{title}</CardTitle>}
    {body && <CardBody>{body}</CardBody>}
    {button && buttonLink && (
      <CardButton href={buttonLink} target="_blank" rel="noopener noreferrer">
        {button}
      </CardButton>
    )}
  </CardComponent>
);

export const Card: React.FC<CardCollectionProps> = ({ cards, backgroundColour, fontColour }) => (
  <CardCollection>
    {cards.map((card, i) => (
      <CardItem
        key={i}
        {...card}
        backgroundColour={card.backgroundColour || backgroundColour}
        fontColour={card.fontColour || fontColour}
      />
    ))}
  </CardCollection>
);
