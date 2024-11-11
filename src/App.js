import React, { useState } from 'react';
import TextUtills from './component/Textutills.js';
import Navbar from './component/Navbar.js';
import About from './component/About.js';
import Alert from './component/Alert.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // Show alert function
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

  setTimeout(()=>{

setAlert(null)

    },1500)

  
  };

  // Toggle mode function
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          icon="Text Utils"
          Home="Home"
          About="About"
          mode={mode}
          toggle={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact
              path="/"
              element={<TextUtills heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}
            />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
