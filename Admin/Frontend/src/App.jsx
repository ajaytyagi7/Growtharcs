
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import UploadBlog from './Components/UploadBlog';
import ManageBlog from './Components/ManageBlog';
import ManageContact from './Components/ManageContact';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/UploadBlog' element={<UploadBlog />} />
          <Route path='/ManageBlog' element={<ManageBlog />} />
          <Route path='/ManageContact' element={<ManageContact />} />



          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
