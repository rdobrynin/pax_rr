import * as React from 'react'
import styled from '../../utils/styled'
import './spinner.scss'

const LoadingSpinner: React.FunctionComponent = () => (
  <Spinner>
    <div className={'loader'}/>
  </Spinner>
)

export default LoadingSpinner

const Spinner = styled('div')`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${props => props.theme.colors.background};
    z-index:  ${props => props.theme.zIndex.overlay};
}
`
