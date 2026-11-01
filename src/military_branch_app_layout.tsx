
import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import type { Dispatch, SetStateAction } from 'react'

import MilitaryBranchNavigation from './components/military_branch_navigation'
import { getMilitaryBranchesApi } from './data/military_branch_api'
import { mapMilitaryBranchApi } from './data/military_branch_api_mapper'
import type { MilitaryBranch } from './types/military_branch'

export interface MilitaryBranchOutletContext {
  branches: MilitaryBranch[]
  setBranches: Dispatch<SetStateAction<MilitaryBranch[]>>
}

function MilitaryBranchAppLayout() {
  const [branches, setBranches] = useState<MilitaryBranch[]>([])

  useEffect(() => {
    const loadBranches = async () => {
      try {
        const apiBranches = await getMilitaryBranchesApi()
        setBranches(apiBranches.map(mapMilitaryBranchApi))
      } catch (error) {
        console.error('Не удалось загрузить рода войск:', error)
      }
    }

    loadBranches()
  }, [])

  return (
    <div className="phone">
      <Outlet context={{ branches, setBranches }} />
      <MilitaryBranchNavigation />
    </div>
  )
}

export default MilitaryBranchAppLayout
