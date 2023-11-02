import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './Lý Thuyết/Demo'
import Chill from './Lý Thuyết/Chill'
import Bai12 from './Bài Tập/Bai12'
import ManagerStaff from './Bài Tập/Quản Lý Nhân Viên/ManagerStaff'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Demo/>
     <Chill/> */}
     {/* <Bai12/> */}
     <ManagerStaff/>
    </>
  )
}

export default App
