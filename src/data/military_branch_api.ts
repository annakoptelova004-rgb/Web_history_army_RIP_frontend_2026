
import type { MilitaryBranchApi } from '../types/military_branch_api'

export async function getMilitaryBranchesApi(): Promise<MilitaryBranchApi[]> {
  const response = await fetch('/api/military_branches')

  if (!response.ok) {
    throw new Error(
      `Ошибка получения родов войск: ${response.status}`,
    )
  }

  return response.json()
}
