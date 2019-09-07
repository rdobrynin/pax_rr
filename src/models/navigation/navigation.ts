interface TopNavLinks {
  title: string;
  route: string;
}

export interface HeaderProps {
  title: string;
  links: TopNavLinks[];
  logoImage: string;
  imageSize: string;
}

interface ActionNavLinks {
  title: string;
}

export interface ActionNavigationProps {
  items: ActionNavLinks[];
}
