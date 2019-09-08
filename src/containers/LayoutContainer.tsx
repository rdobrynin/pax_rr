import * as React from 'react'
import { ReactReduxContext } from 'react-redux'

import { ApplicationState } from '../store'
import { ThemeColors } from '../store/layout'
import * as layoutActions from '../store/layout/actions'

interface LayoutContainerProps {
  theme: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
}

interface LayoutContainerRenderProps {
  render?: (props: LayoutContainerProps) => React.ReactNode;
  children?: (props: LayoutContainerProps) => React.ReactNode;
}

const LayoutContainer: React.FC<LayoutContainerRenderProps> = ({ render, children }) => {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        const state: ApplicationState = store.getState()
        const { theme } = state.layout
        const setTheme = (tc: ThemeColors) => store.dispatch(layoutActions.setTheme(tc))
        if (render) {
          return render({ theme, setTheme })
        }

        if (children) {
          return children({ theme, setTheme })
        }

        return null
      }}
    </ReactReduxContext.Consumer>
  )
}

export default LayoutContainer
