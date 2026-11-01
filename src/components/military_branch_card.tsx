
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import type { MilitaryBranch } from '../types/military_branch'

interface MilitaryBranchCardProps {
  branch: MilitaryBranch
  onDelete: (id: number) => void
}

function MilitaryBranchCard({
  branch,
  onDelete,
}: MilitaryBranchCardProps) {
  return (
    <div>
      <Link
        className="troop-card"
        to={`/feed/${branch.id}`}
      >
        <Card.Img
          src={branch.image || '/defaults/default_army.png'}
          alt={branch.name}
        />

        <div className="troop-card__text">
          <h2>{branch.name}</h2>

          <span className="likes">
            <img
              src="/military_branch_media/military_branch_like.svg"
              alt="Лайк"
            />
            <span>0</span>
          </span>
        </div>
      </Link>

      <Button
        className="delete-button"
        onClick={() => onDelete(branch.id)}
      >
        УДАЛИТЬ
      </Button>
    </div>
  )
}

export default MilitaryBranchCard
