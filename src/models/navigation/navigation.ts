export interface ITopNavLinks {
  title: string;
  route: string;
}

export interface IHeaderProps {
  title: string;
  links: ITopNavLinks[];
  isOpen: boolean;
}

interface IActionNavLinks {
  title: string;
  route: string;
}

export interface IActionNavigationProps {
  links: IActionNavLinks[]
}
