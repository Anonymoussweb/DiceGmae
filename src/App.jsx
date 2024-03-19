import React, { useState } from 'react'
import Homepage from './components/Homepage'
import Playgame from './components/Playgame';

function App() {
  const [show, setShow] = useState();

  console.log(show);
  const showpage = () => {
   setShow(prev => !prev)
  }

  return (
    <div>
      {show?<Playgame show={showpage} />:<Homepage show={showpage} />  }
      
    </div>
  )
}

export default App