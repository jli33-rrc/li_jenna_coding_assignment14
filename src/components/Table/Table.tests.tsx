import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import { Table } from './Table';

const headers = ['Name', 'Age', 'Occupation'];
const rows = [
  ['John Doe', '30', 'Developer'],
  ['Jane Smith', '28', 'Designer'],
];

describe('Table Component', () => {
  test('renders the table and checks visibility', () => {
    render(<Table headers={headers} rows={rows} />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeVisible();
  });

  test('renders all provided headers', () => {
    render(<Table headers={headers} rows={rows} />);
    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeVisible();
    });
  });

  test('renders all provided rows', () => {
    render(<Table headers={headers} rows={rows} />);
    rows.flat().forEach((cell) => {
      expect(screen.getByText(cell)).toBeVisible();
    });
  });

  test('applies custom background and font colors', () => {
    render(<Table headers={headers} rows={rows} backgroundColour="#FFFAF5" fontColour="#353433" />);

    const tableElement = screen.getByRole('table');
    expect(tableElement).toHaveStyle('background-color: #FFFAF5');
    expect(tableElement).toHaveStyle('color: #353433');
  });
});
