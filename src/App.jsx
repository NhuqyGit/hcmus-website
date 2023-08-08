import { useState } from 'react';
import { Link, Routes, Route, Outlet } from "react-router-dom";
import './App.css';
import Menu from './component/Menu/Menu';
import Academics from './component/Academics/Academics';
import Curriculum from './component/Academics/Curriculum';


function App() {
  const [isClick, setIsClick] = useState(false)
  return (
    <div className='App'>
      <button onClick={()=>setIsClick(!isClick)}>Click</button>
      <Menu isClick={isClick} onChangeState={()=>setIsClick(!isClick)}/>

      <div className="main-content">
          <h1>App Content</h1>
          <Routes>
            <Route path="/daotao/dai-hoc" element={<Academics />} />
            <Route path="/daotao/cao-dang" element={<Curriculum />} />
          </Routes>
        </div>
    </div>
  )
}

export default App
