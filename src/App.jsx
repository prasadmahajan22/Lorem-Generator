import { useState } from 'react'
import './App.css'
import Data from './data.json'
function App() {
  const [para , setPara] = useState("");
  const [data , setData] = useState([]);
  let arr = [];
  let onclick = () => {
    if(para <= 0){
      alert("Ayyo ! you know that you wrote negative input or zero 😵")
    }
    else if(para > 8){
      alert(" Ayyo ! you are demanding very much paragraph in one go, kindly take little litlle 😀")
    }
    else{
      for (let index = 0; index < para; index++) {
            arr.push(Data[index].paragraph)
      }
    }

    setData([...arr])
    setPara("")
  }

  return (
    <div className="main-cont">
      <h1>TIRED OF BORING LOREM IPSUM?</h1>
      <div className="input_button">
        <span>Paragraphs:</span>
        <input type="number" className = "number" value={para} onChange={ (e) => setPara(Number(e.target.value))}/>
        <button onClick={onclick}>Generate</button>
      </div>

      <div className="results">
          {
            data.map((ele , index) => <p key={index}>{ele}</p>)
          }
      </div>
    </div>
  )
}

export default App
