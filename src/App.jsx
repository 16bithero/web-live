import * as React from 'react';
import avatar from '../src/avatar.png'
import './App.css'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Skills from './Skills';
import Projects from './Projects';
import useMediaQuery from '@mui/material/useMediaQuery';
import Contact from './Contact';



function App() {

  const isMobile = useMediaQuery('(max-width: 900px)');
  
  const customFont = {
    fontFamily: 'Archivo Narrow, sans-serif',
    fontWeight: 'bold',
    fontSize: isMobile? '.9em': '1em',
    color: 'black',
  };

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className='landing-container'>
        <div className='left-container'>
          <div>
            <div className='body-box'>
              <TabContext value={value}>
                <Box>
                  <TabList TabIndicatorProps={{style: {background:'black'}}} onChange={handleChange} aria-label="tabs" variant="scrollable" allowScrollButtonsMobile>
                    <Tab label="About" value="1" style={customFont} />
                    <Tab label="Skills" value="2" style={customFont} />
                    <Tab label="Projects" value="3" style={customFont} />
                    <Tab label="Contact" value="4" style={customFont} />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <h1>Hi, I'm Renzzi.</h1>
                  <h2>an aspiring web developer based in Toronto, Ontario. I build apps and currently learning advanced React and other frameworks.</h2>

                </TabPanel>
                <TabPanel value="2"><Skills /></TabPanel>
                <TabPanel value="3">
                 <Projects />
                </TabPanel>
                <TabPanel value="4"><Contact/></TabPanel>
              </TabContext>
            </div>
          </div>
        </div>

        <div className='right-container'>
          <div>
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App