export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationBarProps {
  logo?: NavLink;
  links: NavLink[];
  backgroundColour?: string;
  fontColour?: string;
}
