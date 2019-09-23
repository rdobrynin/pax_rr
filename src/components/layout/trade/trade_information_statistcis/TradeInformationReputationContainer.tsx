import styled from '../../../../utils/styled'

const TradeInformationReputationContainer = styled('div')`
    display: flex;
    flex-basis: 50%;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    border-right: 1px solid ${props => props.theme.colors.borders};
    border-bottom: 1px solid ${props => props.theme.colors.borders};
`

export default TradeInformationReputationContainer
