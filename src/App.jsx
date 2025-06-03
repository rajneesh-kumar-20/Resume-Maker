import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import ResumeEditors from './Molecules/ResumeEditor/ResumeEditors';
// import {BrowserRouter , Routes , Route} form 'react-router-dom';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import ResumePreview from './Molecules/preview/ResumePreview';
import Contact from './Pages/Contact/Contact';
import Signin from './Pages/SignIn/Signin';
import Signup from './Pages/Signup/SignUp';
import SignUp from './Pages/Signup/SignUp';
import Template from './Pages/Template/Template';
import EditTemplate from './Pages/Template/EditTemplate';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Hello WOrld</h1> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/template' element={<Template/>}/>
          <Route path="/edit-template/:id" element={<EditTemplate />} />
          <Route path="/resumeEditor/:templateId" element={<ResumeEditors />} />
          <Route path="/resumePreview/:templateId" element={<ResumePreview />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
