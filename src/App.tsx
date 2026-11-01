
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import MilitaryBranchAppLayout from './military_branch_app_layout'
import MilitaryBranchLenta from './pages/military_branch_lenta'
import MilitaryBranchTile from './pages/military_branch_tile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route element={<MilitaryBranchAppLayout />}>
          <Route path="/" element={<Navigate to="/tile" replace />} />
          <Route path="/feed" element={<Navigate to="/feed/1" replace />} />
          <Route path="/feed/:id" element={<MilitaryBranchLenta />} />
          <Route path="/tile" element={<MilitaryBranchTile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
