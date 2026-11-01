
import { useNavigate, useParams, useOutletContext } from 'react-router-dom'

import MilitaryBranchFeedInfo from '../components/military_branch_feed_info'
import type { MilitaryBranchOutletContext } from '../military_branch_app_layout'

function MilitaryBranchLenta() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { branches } = useOutletContext<MilitaryBranchOutletContext>()

  if (branches.length === 0) {
    return <main className="feed">Загрузка данных...</main>
  }

  const currentIndex = branches.findIndex(
    (branch) => branch.id === Number(id),
  )

  const branch = branches[currentIndex >= 0 ? currentIndex : 0]

  const nextBranch = () => {
    const nextIndex =
      ((currentIndex >= 0 ? currentIndex : 0) + 1) % branches.length

    navigate(`/feed/${branches[nextIndex].id}`)
  }

  return (
    <main className="feed">
      {branch.video ? (
  <video
    className="feed-video"
    src={branch.video}
    poster={branch.image || '/defaults/default_army.png'}
    autoPlay
    muted
    loop
    playsInline
  />
) : (
  <img
    className="feed-video"
    src={branch.image || '/defaults/default_army.png'}
    alt={branch.name}
  />
)}

      <div className="feed-likes">
        <img
          src="/military_branch_media/military_branch_like.svg"
          alt="Лайки"
        />
        <span>0</span>
      </div>

      <button className="next-button" onClick={nextBranch}>
        СЛЕДУЮЩИЙ
        <img
          src="/military_branch_media/military_branch_next_arrow.png"
          alt=""
        />
      </button>

      <MilitaryBranchFeedInfo branch={branch} />
    </main>
  )
}

export default MilitaryBranchLenta
