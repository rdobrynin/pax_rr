import { action } from 'typesafe-actions'

import { LayoutActionTypes, ThemeColors } from './types'

export const setTheme = (theme: ThemeColors) => action(LayoutActionTypes.SET_THEME, theme)
export const updateSidebar = (isOpen: boolean) => action(LayoutActionTypes.TOGGLE_SIDEBAR, isOpen)
