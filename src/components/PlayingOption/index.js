import './index.css'
import StyledOption from './StyledComponents'

const PlayingOption = props => {
  const {optionDetails, onChoiceSelection} = props
  const {id, imageUrl, testId} = optionDetails
  console.log(testId)

  const onSelectChoice = () => {
    onChoiceSelection(id)
  }

  return (
    <StyledOption type="button" data-testid={testId} onClick={onSelectChoice}>
      <img src={imageUrl} alt={id} className="option-image" />
    </StyledOption>
  )
}

export default PlayingOption
