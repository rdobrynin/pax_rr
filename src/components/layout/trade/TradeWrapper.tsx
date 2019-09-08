import styled from '../../../utils/styled';
import { device } from '../../../helpers/device';

const TradeWrapper = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1 auto;
    width: 100%;
    background-color: #fff;
    padding: 30px;
    box-shadow: 2px 1px 4px -1px rgba(216, 216, 216, 0.75);
    border-right: 1px solid #d4d4d4;
    border-left: 1px solid #d4d4d4;
    flex: 1 0 8%;

  @media ${device.desktop} {
   flex: 1 0 10%;
  }
   @media ${device.laptop} {
   flex: 1 0 15%;
  }
  @media ${device.tablet} {
      flex: auto;
  }
`;

export default TradeWrapper;
