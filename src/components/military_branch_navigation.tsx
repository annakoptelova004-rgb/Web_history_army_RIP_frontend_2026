
import { NavLink } from 'react-router-dom'

function MilitaryBranchNavigation() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/feed/1">ЛЕНТА</NavLink>
      <a href="#" onClick={(event) => event.preventDefault()}>
        ДОБАВЛЕНИЕ
      </a>
      <NavLink to="/tile">ПЛИТКА</NavLink>
      <a href="#" onClick={(event) => event.preventDefault()}>
        ВХОД
      </a>
    </nav>
  )
}

export default MilitaryBranchNavigation
