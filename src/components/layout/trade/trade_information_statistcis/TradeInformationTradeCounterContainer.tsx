import styled from '../../../../utils/styled'

const TradeInformationTradeCounterContainer = styled('div')`
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    flex-direction: column;
    border-bottom: 1px solid ${props => props.theme.colors.borders};
`
export default TradeInformationTradeCounterContainer
