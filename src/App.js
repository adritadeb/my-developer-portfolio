import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import ProjectDetail1 from './Pages/Home/Projects/ProjectDetails/ProjectDetail1/ProjectDetail1';
import ProjectDetail2 from './Pages/Home/Projects/ProjectDetails/ProjectDetail2/ProjectDetail2';
import ProjectDetail3 from './Pages/Home/Projects/ProjectDetails/ProjectDetail3/ProjectDetail3';
import Resume from './Pages/Resume/Resume';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/detail1' element={<ProjectDetail1></ProjectDetail1>}></Route>
        <Route path='/detail2' element={<ProjectDetail2></ProjectDetail2>}></Route>
        <Route path='/detail3' element={<ProjectDetail3></ProjectDetail3>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/resume' element={<Resume></Resume>}></Route>
      </Routes>
    </div>
  );
}

export default App;
