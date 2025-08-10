'use client';

import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const TableComponent = styled.table<{
  $backgroundColour?: string;
  $textColour?: string;
  $hoverable?: boolean;
  $boldFirstCell?: boolean;
}>`
  background-color: ${({ $backgroundColour }) => $backgroundColour || '#FFFAF5'};
  border-collapse: collapse;
  color: ${({ $textColour }) => $textColour || '#353433'};
  width: 100%;

  tr,
  td {
    border-top: 1px solid #353433;
    border-bottom: 1px solid #353433;
    font-family: 'Manrope', sans-serif;
    font-size: 15pt;
    padding: 25px;
    text-align: left;
  }

  thead,
  th {
    font-weight: 800;
    padding: 25px;
  }

  ${({ $boldFirstCell }) =>
    $boldFirstCell &&
    `
      tbody td:first-child {
        font-weight: 800;
      }
    `}

  tbody tr:hover {
    ${({ $hoverable }) => $hoverable && 'background-color: #D4D0CC; cursor: default;'}
    transition: background-color 0.25s;
  }

  tfoot {
    font-weight: 800;
  }
`;

const Table: React.FC<TableProps> = ({
  headers,
  rows,
  footer,
  backgroundColour = '#FFFAF5',
  fontColour = '#353433',
  hoverable,
  boldFirstCell = true,
}) => {
  return (
    <TableComponent
      $backgroundColour={backgroundColour}
      $textColour={fontColour}
      $hoverable={hoverable}
      $boldFirstCell={boldFirstCell}
    >
      {headers?.length ? (
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
      ) : null}

      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>

      {footer?.length ? (
        <tfoot>
          <tr>
            {footer.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        </tfoot>
      ) : null}
    </TableComponent>
  );
};

export { Table };
