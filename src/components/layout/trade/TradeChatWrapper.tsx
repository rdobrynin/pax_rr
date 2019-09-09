import styled from '../../../utils/styled'
import { device } from '../../../helpers/device'

const TradeChatWrapper = styled('div')`
    display: flex;
    flex: 1 1 25%;
    padding: 20px;
    box-shadow: inset -1px 1px 5px -1px rgba(208, 208, 208, 0.75);
    background-color: #ecf0f7;

  @media ${device.desktop} {
    flex: 1 1 20%;
  }
   @media ${device.laptop} {
    flex: 1 1 25%;
  }
  @media ${device.tablet} {
    flex: auto;
  }

`

export default TradeChatWrapper
