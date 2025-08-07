export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationBarProps {
  logo?: NavLink;
  links: NavLink[];
  backgroundColor?: string;
  fontColor?: string;
}
