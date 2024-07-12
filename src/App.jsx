import { useState } from 'react'
import './App.css'
import Logo from './assets/yitaqi.png';

function App() {
  const [vat, setvat] = useState(0)
  const [price, setprice] = useState(0)
  const [discount, setdiscount] = useState(0)
  

  function handle(e) {
    let p = parseFloat(e.target.value) || 0
    console.log(p)
    setprice(p)
    count1(p,discount)
  }

  function discount1(i) {
    let d = parseFloat(i.target.value) || 0
    console.log(d)
    setdiscount(d)
    count1(price,d)
  }

  function count1(price,discount) {
    let result = price - discount
    let v = result * 0.07
    setvat(v.toFixed(2))
   
  }

  return (
    <>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img src={Logo} alt="Logo" style={{ height: '200px' }} />
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ marginRight: '40px' }}>Price</p>
        <input onChange={handle} type = "number" style = {{fontSize:"20pt"}}/>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <p style={{ marginRight: '14px' }}>Discount</p>
        <input onChange={discount1} type = "number" style = {{fontSize:"20pt"}}/>
      </div>

      <p>Gross Price= {price}</p>
      <p>VAT= {vat}</p>

      

    </>
  )
}

export default App
