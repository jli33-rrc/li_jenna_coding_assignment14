export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  logo?: FooterLink;
  title?: string;
  links?: FooterLink[];
}

export interface CopyrightColumn {
  content: React.ReactNode;
}

export interface FooterProps {
  columns: FooterColumn[];
  copyright: CopyrightColumn[];
  backgroundColor?: string;
  fontColor?: string;
}
