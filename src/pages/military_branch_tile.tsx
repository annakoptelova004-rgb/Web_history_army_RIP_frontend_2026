
import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'

import MilitaryBranchCard from '../components/military_branch_card'
import MilitaryBranchSpeedFilter from '../components/military_branch_speed_filter'
import type { MilitaryBranchOutletContext } from '../military_branch_app_layout'

function MilitaryBranchTile() {
  const { branches, setBranches } =
    useOutletContext<MilitaryBranchOutletContext>()

  const [speed, setSpeed] = useState(1)
  const [selectedSpeed, setSelectedSpeed] = useState<number | null>(null)

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSelectedSpeed(speed)
  }

  const filteredBranches =
    selectedSpeed === null
      ? branches
      : branches.filter((branch) => branch.speedPlain === selectedSpeed)

  const handleDelete = (id: number) => {
    setBranches((previousBranches) =>
      previousBranches.filter((branch) => branch.id !== id),
    )
  }

  return (
    <main className="page">
      <h1>Рода войск</h1>

      <MilitaryBranchSpeedFilter
        speed={speed}
        setSpeed={setSpeed}
        onSubmit={handleSearch}
      />

      <section className="troops">
        {filteredBranches.map((branch) => (
          <MilitaryBranchCard
            key={branch.id}
            branch={branch}
            onDelete={handleDelete}
          />
        ))}
      </section>

      {filteredBranches.length === 0 && (
        <p>Рода войск с такой скоростью не найдены.</p>
      )}
    </main>
  )
}

export default MilitaryBranchTile
