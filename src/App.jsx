import React, {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [text, setText] = useState("");

  //On Change Handler
  const textchange=(e)=>{
    setText(e.target.value)
  }
  //CLEAR TEXT
  const clearText = ()=>{
    setText("");
    toast.success("text cleared", {
      position:"top-right",
      autoClose:'5000',
      hideProgressBar:false,
      newestOnTop:false,
      closeOnClick:true,
      rtl:false,
      pauseOnFocusLoss:true,
      draggable:false,
      pauseOnHover:true,
      theme:"light"
    })
  }
  //Text into UpperCase
  const upperCase= ()=>{
    setText(text.toUpperCase());

    toast.success("text UpperCased", {
      position:"top-right",
      autoClose:'5000',
      hideProgressBar:false,
      newestOnTop:false,
      closeOnClick:true,
      rtl:false,
      pauseOnFocusLoss:true,
      draggable:false,
      pauseOnHover:true,
      theme:"light"
    })
  }
  //Text into LowerCase
    const LowerCase = ()=>{
      setText(text.toLowerCase());
    
    toast.success("text LowerCase", {
      position:"top-right",
      autoClose:'5000',
      hideProgressBar:false,
      newestOnTop:false,
      closeOnClick:true,
      rtl:false,
      pauseOnFocusLoss:true,
      draggable:false,
      pauseOnHover:true,
      theme:"light"
    })
  }
  //REMOVE SPACES
  const RemoveSpaces = ()=>{

    const Rspace = text.split(/[ ]+/);
    setText(Rspace.join(' '));
    toast.success("Remove Spaces", {
      position:"top-right",
      autoClose:'5000',
      hideProgressBar:false,
      newestOnTop:false,
      closeOnClick:true,
      rtl:false,
      pauseOnFocusLoss:true,
      draggable:false,
      pauseOnHover:true,
      theme:"light"
    })
  }
 //CopyText
const CopyText = ()=>{
  navigator.clipboard.writeText(text)

toast.success("Copy Text", {
  position:"top-right",
  autoClose:'5000',
  hideProgressBar:false,
  newestOnTop:false,
  closeOnClick:true,
  rtl:false,
  pauseOnFocusLoss:true,
  draggable:false,
  pauseOnHover:true,
  theme:"light"
})
}
//Dark Theme

// const DarkTheme = ()=>{
//   let element = document.body;
//   element.classList.toggle("dark-mode")

const DarkTheme = ()=>{
  document.getElementById('theme').style.backgroundColor = 'black';
  document.getElementById('theme').style.color='black'

toast.success("Enabled Dark Theme", {
  position:"top-right",
  autoClose:'5000',
  hideProgressBar:false,
  newestOnTop:false,
  closeOnClick:true,
  rtl:false,
  pauseOnFocusLoss:true,
  draggable:false,
  pauseOnHover:true,
  theme:"dark"
})
}
//Light Theme
// const LightTheme = ()=>{
//   let element = document.body;
//   element.classList.toggle("light-mode")
const LightTheme = ()=>{
document.getElementById('theme').style.backgroundColor = 'white';
document.getElementById('theme').style.color='black';
toast.success("Enabled Light Theme", {
  position:"top-right",
  autoClose:'5000',
  hideProgressBar:false,
  newestOnTop:false,
  closeOnClick:true,
  rtl:false,
  pauseOnFocusLoss:true,
  draggable:false,
  pauseOnHover:true,
  theme:"light"
})
}
  return (
    <>
    <nav className='w-full py-5 bg-blue-500 text-white text-center text-2xl font-semibold'>
      Word Letter Counter
    </nav>
    <div className="flex flex-col ">
      <div className="w-[80%] mx-auto flex flex-col mt-12">
    <label htmlFor="" className='mb-5 font-semibold text-xl'>Enter Your Text Here</label>
    <textarea name="" id="" cols="30" rows="10" className='outline-none border-2 botder-solid border-blue-500 rounded-sm' onChange={textchange} value={text}>
    </textarea>
    </div>
    <div className="w-[80%] mt-12 mx-auto flex items-center justify-between">
    <button className='bg-blue-500 text-white p-3 font-semibold rounded-md' onClick={clearText}>Clear Text</button>
    <button className='bg-blue-500 text-white p-3 font-semibold rounded-md' onClick={upperCase}>Upper Case</button>
    <button className='bg-blue-500 text-white p-3 font-semibold rounded-md' onClick={LowerCase}>Lower Case</button>
    <button className='bg-blue-500 text-white p-3 font-semibold rounded-md' onClick={RemoveSpaces}>Remove Spaces</button>
    <button className='bg-blue-500 text-white p-3 font-semibold rounded-md' onClick={CopyText}>Copy Text</button>
    <button className='bg-blue-500 text-white p-3 font-semibold rounded-md' onClick={DarkTheme}>Dark Theme</button>
    <button className='bg-blue-500 text-white p-3 font-semibold rounded-md' onClick={LightTheme}>Light Theme</button>
    </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default App
