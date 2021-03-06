import styled from '../../../utils/styled';
import { device } from '../../../helpers/device';

const TradeWrapper = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    flex: 1 1 auto;
    width: 100%;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 2px 1px 4px -1px rgba(216, 216, 216, 0.75);
    border-right: 1px solid ${props => props.theme.colors.borders};
    border-left: 1px solid ${props => props.theme.colors.borders};
    flex: 1 0 8%;

  @media ${device.desktop} {
   flex: 1 0 14%;
  }
   @media ${device.laptop} {
   flex: 1 0 20%;
  }
  @media ${device.tablet} {
      flex: auto;
  }
`;

export default TradeWrapper;
