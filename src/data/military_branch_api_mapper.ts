
import type { MilitaryBranchApi } from '../types/military_branch_api'
import type { MilitaryBranch } from '../types/military_branch'

const MEDIA_URL = 'http://localhost:9000/media'

export function mapMilitaryBranchApi(
  item: MilitaryBranchApi,
): MilitaryBranch {
  return {
    id: item.id,
    name: item.name,
    description: item.description,

    terrain: 'Равнина',
    speed: item.speed_plain,
    speedPlain: item.speed_plain,

    speedMountains: 0,
    speedForest: 0,
    speedRiver: 0,

    food: item.food,

    image: item.image
      ? `${MEDIA_URL}/${item.image}`
      : '',

    video: item.video
      ? `${MEDIA_URL}/${item.video}`
      : '',
  }
}
