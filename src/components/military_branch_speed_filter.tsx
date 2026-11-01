
import { Button, Form } from 'react-bootstrap'

interface MilitaryBranchSpeedFilterProps {
  speed: number
  setSpeed: (speed: number) => void
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

function MilitaryBranchSpeedFilter({
  speed,
  setSpeed,
  onSubmit,
}: MilitaryBranchSpeedFilterProps) {
  return (
    <Form className="search-form" onSubmit={onSubmit}>
      <Form.Range
        min={1}
        max={10}
        value={speed}
        onChange={(event) => setSpeed(Number(event.target.value))}
      />

      <span className="speed-value">
        Скорость: {speed} км/день
      </span>

      <Button type="submit" className="search-button">
        НАЙТИ
      </Button>
    </Form>
  )
}

export default MilitaryBranchSpeedFilter
