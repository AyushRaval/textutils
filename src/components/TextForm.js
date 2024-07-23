import React,{ useState } from 'react';
export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleClearClick=()=>{
         if (text !== "") 
        {
            let newText = "";
            setText(newText);
        }
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleCapitalizeClick = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
   }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    const [text,setText]=useState('');
    
        return (
            <>
           <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
                <h1 >{props.heading}</h1>
                <div className="mb-3">
                    <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
                backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
                color: props.mode === 'dark' ? 'white' : '#042743'
            }}
            id="myBox"
            rows="8"></textarea>

                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
                <button onClick={handleCapitalizeClick} className="btn btn-warning mx-2 my-2">Capitalize</button>
                <button onClick={handleCopy} className="btn btn-warning mx-2 my-2">Copy to Clipboard</button>
            </div>
            <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length-1} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
            </div>
            </>
            )
}
