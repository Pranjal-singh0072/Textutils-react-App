import React,  {useState} from 'react';



export default function Textform(props) {
    const handleUpclick = ()=>{  
        console.log("uppercase was clicked" + Text);
        console.log("lowercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText);
        // props.showAlert("Converted to UpperCase...", "success");
    }
   
    const handleLoclick = ()=>{  
        console.log("uppercase was clicked" + Text);
        console.log("lowercase was clicked" + Text);
        let newText = Text.toLowerCase();
        setText(newText);
        // props.showAlert("Converted to LowerCase...", "success");
    }
    const handleClearclick = ()=>{  
        let newText = '';
        setText(newText);
        // props.showAlert("Text Clear...", "success");
    
    }
    
       
        // setTest("you have clicked on handleUpclick")
    

    const handleOnchange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }

    const handlecopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("my box");
        text.select();
        navigator.clipboard.writeText(text.value);
        // props.showAlert("Copied to clipboard...", "success");

    }

    const [Text, setText] = useState("Enter text here....");
    // Text = "new text";  wrong way to change the state
    // setText("new text"); correct way to change the state
  return (
    <>
    <div className="contaniner" style={{color: props.mode=== 'dark'? 'white': '#042743'}} >

            <h1>{props.heading}</h1>
            <div className="mb-3">
            {/* <label for="mybox" class="form-label">Example Textarea</label> */}
            <textarea className="form-control" value={Text} onChange={handleOnchange} style={{backgroundColor: props.mode=== 'dark'? 'grey': 'white'}} id="my box" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert to upperecase  </button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>Convert to lowercase </button>
        <button className="btn btn-primary mx-2" onClick={handleClearclick}>Clear text </button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text </button>
    
    </div>
    <div className="container my-3" style={{color: props.mode=== 'dark'? 'white': '#042743'}}>
    <h1>Your text summary.....</h1>
    <p>{Text.split (" ").length}  words and {Text.length} charecters</p>
    <p>{0.008* Text.split (" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{Text.length>0?Text:"Enter something in the textbox above to preview it here"}</p>



    </div>
    </>
  )
}
