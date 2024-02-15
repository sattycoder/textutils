import React, {useState} from 'react';

export default function TextBox(props) {
    
    const onClickUpFn=()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text coverted  to Uppercase!","success");
    }
    const onClickLoFn=()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text coverted  to Lowercase!","success");
    }
    const onClickClearFn=()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text box cleared!","success");
    }
    const handleCopy=()=>{
        var text = document.getElementById("exampleFormControlTextarea1")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!","success");
    }
    const extraSpace=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed!","success");
    }
    const onChangeFn=(event)=>{
        setText(event.target.value);
    }
    const word=()=>{
        let res = text.charAt(0);
        if (res === " ") {
            setText(text.slice(1));
        }
        var n1=text;
        n1 = n1.replace(/\n/g, " ");
        for (let i = 1; i < n1.length; i++) {
            let res1 = n1.charAt(n1.length - 1);
            if (res1 === " ") {
                n1 = n1.slice(0,-1);
            }      
        }
        let n = n1.split(/[ ]+/).length;
        if (text=== "") {
            n=0;
        }
        else {
            n = n1.split(/[ ]+/).length;
        }
        return n;
    }
    const [text, setText] = useState("Enter text!");
    // setText("Updated Text"); //Correct way to change state
  return (
    <>
    <div className='container my-3' style={{color : props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" value={text} style={{backgroundColor : props.colour.backgcolor, color : props.mode==='light'?'black':'white', border : props.mode==='light'?'2px solid black':'2px solid white'}} onChange={onChangeFn} rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.colour.bcolor} mx-1`} style={{border : props.colour.colour==='black'?'1px solid white':'1px solid black'}} onClick={onClickUpFn}>Convert to UpperCase</button>
        <button className={`btn btn-${props.colour.bcolor} mx-1`} style={{border : props.colour.colour==='black'?'1px solid white':'1px solid black'}} onClick={onClickLoFn}>Convert to LowerCase</button>
        <button className={`btn btn-${props.colour.bcolor} mx-1`} style={{border : props.colour.colour==='black'?'1px solid white':'1px solid black'}} onClick={onClickClearFn}>Clear</button>
        <button className={`btn btn-${props.colour.bcolor} mx-1`} style={{border : props.colour.colour==='black'?'1px solid white':'1px solid black'}} onClick={handleCopy}>Copy Text</button>
        <button className={`btn btn-${props.colour.bcolor} mx-1`} style={{border : props.colour.colour==='black'?'1px solid white':'1px solid black'}} onClick={extraSpace}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3' style={{color : props.mode==='light'?'black':'white'}}>
        <h2>Your Text Summary</h2>
        <h6>{word()} words and {text.length} characters</h6>
        <h6>{0.008 * word()} minutes to read the text</h6>
        <h2>Preview</h2>
        <h6>{text.length>0?text:"Enter text in text box above to see preview"}</h6>
    </div>
    <img src="photo.jpg" className="profileImgContainer" style={{borderColor : props.colour.backgcolor}} alt="owner"></img>
    <h5 className="text my-3" style={{color : props.colour.colour==='black'?'white':'black', marginLeft: '1100px'}}>The owner!</h5>
    </>
  )
}
