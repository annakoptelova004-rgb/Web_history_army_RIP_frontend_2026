
export type Terrain = 'Равнина' | 'Горы' | 'Лес' | 'Переправа'

export interface MilitaryBranch {
  id: number
  name: string
  description: string
  terrain: Terrain
  speed: number
  speedPlain: number
  speedMountains: number
  speedForest: number
  speedRiver: number
  food: number
  image: string
  video: string
}
