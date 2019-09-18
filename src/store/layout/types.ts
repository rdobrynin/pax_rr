export type ThemeColors = 'paxful';

export enum LayoutActionTypes {
  SET_THEME = '@@layout/SET_THEME',
  TOGGLE_SIDEBAR = '@@layout/TOGGLE_SIDEBAR',
}

export interface LayoutState {
  readonly theme: ThemeColors;
  isOpen: boolean;
}
