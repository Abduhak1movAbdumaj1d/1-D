import { useState } from 'react';
import  './App.css'

function App() {
 let randomSon=Math.floor(Math.random()*90+10);
 let[son,setSon]=useState(randomSon);
 let[doq,setDoq]=useState(true);
 let[yozuv,setYozuv]=useState("")
  function handle(e){
    setYozuv(e.target.value)
  }
 
 
  return (
    <div className='container'>
      <div className="ota">

      <button onClick={()=> setSon(son+1)}>+</button>
      <h1>{son}</h1>
      <button onClick={()=> setSon(son-1)}>-</button>
      </div>
      <hr />
      <h1>Hidden Component</h1>
      <button className='btn' onClick={()=>setDoq(false)}>Hidden</button>
      <button className='btn' onClick={()=>setDoq(true)}>Show</button>
      <div className="box" style={{display:doq==true?"block":"none"}}>
        <p>Hello my name is marslikbola</p>
        <img src="https://www.dubicars.com/images/c55c39/w_1300x760/kavak/797d0348-7e40-4be5-bdbf-1103097cd19c.jpg" alt=""  width={400}/><br /><br />
      </div><hr /><br /><br />
      <h1>Input Change</h1>
      <input type="text" placeholder='yozing......' onChange={handle} />
      <h3><b>Your Text:</b> {yozuv} </h3>
    </div>
  )
}

export default App
