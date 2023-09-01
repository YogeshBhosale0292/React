import React,{ useState } from "react"



export default function Textform(props) {

  const HandleUpclick = ()=>
  {
    //console.log("Upclick Clicked"+text)
    
    let myString = text; // Replace with the actual value you're working with

   if (myString) {
    let newtext = myString.toUpperCase();
     // Now you can work with upperCaseString
        setText(newtext)

   } else {
  // Handle the case where myString is null or undefined
 }       
 }
 const HandleDownclick=() =>{
     let    mystring =text;
     if(mystring)
     {
    let  newtext=mystring.toLowerCase();
    setText(newtext)
    }
    else{

    }
 }
 const HandleClearclick=()=>{
    let newtext='';
    setText(newtext)

 }


  const HandlenOnchange = (event)=>
  {
   //console.log("Onchange")
   setText(event.target.value)
  }
  const [text, setText] = useState('Enter Text Here2');

  return (
<>
  <div className="container">

   <h1>{props.heading}</h1>
      
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={HandlenOnchange} id="mytextbox" rows="6"></textarea>
  </div>
   <button className="btn btn-primary mx-2" onClick={HandleUpclick}>Convert to Uppercase</button>
   <button className="btn btn-primary mx-2" onClick={HandleDownclick}>Convert to Lowerercase</button>
   <button className="btn btn-primary" onClick={HandleClearclick}>Clear Text</button>

  </div>
  <din className="container">
    <h1>Your text Summary</h1>
    <p>{text.split(" ").length} Words And {text.length} Characters</p>
    <p>{  0.008 * text.split(" ").length} Minutes to read</p>

    <h2>Preview</h2>
    <p>{text}</p>
  </din>
  </>
  )
}
