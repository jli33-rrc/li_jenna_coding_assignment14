export interface TableProps {
  headers: string[];
  rows: string[][];
  footer?: string[];
  hoverable?: boolean;
  backgroundColour?: string;
  fontColour?: string;
  headerBackgroundColour?: string;
  footerBackgroundColour?: string;
  hoverColour?: string;
}
