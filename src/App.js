import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [colour, setColour] = useState({colour:'normal' ,bcolor:'light',backgcolor:'#ced4da'});
  const showAlert=(message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const changeColour=(colour,bcolor,backgcolor)=>{
    setColour({
      colour : colour,
      bcolor : bcolor,
      backgcolor : backgcolor
    })
  }
  // const toggleMode=()=>{
  //   if(mode==='light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = '#04213b';
  //     showAlert("Dark Mode has been enabled!","success");
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light Mode has been enabled!","success");
  //   }
  // }
  const redMode=()=>{
      if(colour.colour!=='red'){
        setMode('dark');
        changeColour('red','danger','#a03a44');
        document.body.style.backgroundColor = '#610000';
        showAlert("Red Dark Mode has been enabled!","danger");
        document.title = "TextUtils - Red Mode";
      }
  }
  const blueMode=()=>{
    if(colour.colour!=='blue'){
      setMode('dark');
      changeColour('blue','primary','#3964a3');
      document.body.style.backgroundColor = '#04213b';
      showAlert("Blue Dark Mode has been enabled!","primary");
      document.title = "TextUtils - Blue Mode";
    }
  }
  const greenMode=()=>{
    if(colour.colour!=='green'){
      setMode('dark');
      changeColour('green','success','#2b7251');
      document.body.style.backgroundColor = '#024727';
      showAlert("Green Dark Mode has been enabled!","success");
      document.title = "TextUtils - Green Mode";
    }
  }
  const yellowMode=()=>{
    if(colour.colour!=='yellow'){
      setMode('dark');
      changeColour('yellow','warning','#ac9d00');
      document.body.style.backgroundColor = '#9b7400';
      showAlert("Yellow Dark Mode has been enabled!","warning");
      document.title = "TextUtils - Yellow Mode";
    }
  }
  const blackMode=()=>{
    if(colour.colour!=='black'){
      setMode('dark');
      changeColour('black','dark','#212529');
      document.body.style.backgroundColor = 'black';
      showAlert("Black Dark Mode has been enabled!","dark");
      document.title = "TextUtils - Dark Mode";
    }
  }
  const lightMode=()=>{
    if(mode==='dark'){
      setMode('light');
      changeColour('normal','light','#ced4da');
      document.body.style.backgroundColor = '#e9ecef';
      showAlert("Light Mode has been enabled!","light");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
  <>
  {/* <Router> */}

  {/* <Navbar title="TextProgram" about="Know More"/> */}
  {/* <Navbar/> */}
  {/* <Navbar title="TextProgram" mode={mode} toggleMode={toggleMode}/> */}
  <Navbar title="TextUtils" mode={mode}  redMode={redMode}  blueMode={blueMode} greenMode={greenMode} yellowMode={yellowMode} colour={colour} blackMode={blackMode} lightMode={lightMode}/>
  <Alert alert={alert}/>
  <div className="container">
    {/* <Routes> */}
            {/* <Route exact path="/about" element={<About colour={colour}/>} /> */}
            {/* <Route exact path="/" element={ */}
            <TextBox heading="Please provide input below to analyze" showAlert={showAlert} colour={colour} mode={mode}/>
            {/* } /> */}
    {/* </Routes> */}
  </div>
  {/* </Router> */}
  </>
  );
}
export default App;



































