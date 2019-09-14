export interface ITopNavLinks {
  title: string;
  route: string;
}

export interface IHeaderProps {
  title: string;
  links: ITopNavLinks[];
  logoImage: string;
  imageSize: string;
}

interface IActionNavLinks {
  title: string;
  route: string;
}

export interface IActionNavigationProps {
  links: IActionNavLinks[]
}
