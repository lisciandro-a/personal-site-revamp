import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './common/themes';
import Connections from './pages/Connections/Connections';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe/AboutMe';
import Welcome from './pages/Welcome/Welcome';
import Jasmine from './pages/Jasmine/Jasmine';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/connections' element={<Connections />} />
            <Route path='/about-me' element={<AboutMe />} />
            <Route path='/work-experience' element={<WorkExperience />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/jasmine' element={<Jasmine />}/>
            <Route path='*' element={<div>Page not found</div>}/>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
