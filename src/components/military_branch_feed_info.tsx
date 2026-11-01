
import type { MilitaryBranch } from '../types/military_branch'

interface MilitaryBranchFeedInfoProps {
  branch: MilitaryBranch
}

function MilitaryBranchFeedInfo({
  branch,
}: MilitaryBranchFeedInfoProps) {
  return (
    <div className="feed-info">
      <h2>{branch.name}</h2>
      <p>{branch.terrain}</p>
      <p>Скорость: {branch.speed} км/день</p>
      <p>Потребление продовольствия: {branch.food} кг/день</p>
    </div>
  )
}

export default MilitaryBranchFeedInfo
