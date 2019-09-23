import styled from '../../../utils/styled';
import { device } from '../../../helpers/device';

const TradeInformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.white};
    padding: 30px;
    border-left: 1px solid ${props => props.theme.colors.borders};
    border-right: 1px solid ${props => props.theme.colors.borders};
    align-items: center;
    flex: 1 0 4%;

  @media ${device.desktop} {
   flex: 1 0 7%;
  }
   @media ${device.laptop} {
    flex: 1 0 10%;
    font-size: 0.8rem;
  }
  @media ${device.tablet} {
    flex: auto;
  }
`;

export default TradeInformationWrapper;
