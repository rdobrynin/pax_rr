import styled from '../../../utils/styled'
import { device } from '../../../helpers/device'

const TradeInformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 30px;
    border-left: 1px solid #d4d4d4;;
    border-right: 1px solid #d4d4d4;
    align-items: center;
    flex: 1 0 10%;

  @media ${device.desktop} {
   flex: 1 0 20%;
  }
   @media ${device.laptop} {
    flex: 1 0 25%;
    font-size: 0.8rem;
  }
  @media ${device.tablet} {
    flex: auto;
  }
`

export default TradeInformationWrapper
