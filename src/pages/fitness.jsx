import { use, useState } from 'react'
import { Slider } from "@mui/material";
import fitnes from '../fitness.module.css'
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Fitness() {
    const navigate = useNavigate();
  const[feet, setFeet] = useState(5)
  const[inches, setInches] = useState(0)
  const[weight, setWeight] = useState(5)
  const[bmi , setBmi] = useState(0)
  const[bmiresult, setBmiResult] = useState('')
  const[resultcolor, setResultColor] = useState('black')

  function calculate() {
       let f = parseInt(feet)
       let inc = parseInt(inches)
       let height = (f*12 + inc) * 0.0254
       let w = parseInt(weight)
       let res = w / (height * height)
       setBmi(res.toFixed(2))
       
       
       if(res < 18.5){
        setBmiResult('Your Underweight😒')
        setResultColor('blue')

      }
      else if(res > 18.5 && res < 24.9){
        setBmiResult('Your Normal weight😊')
        setResultColor('green')
      }
      else{
        setBmiResult('Your Overweight😬')
        setResultColor('red')
      }
  }

 
 

  return (
    <>
     <header>
        <img src='src/images/fitlogo.png' onClick={()=> navigate("/")} id={fitnes.logo} alt='Logo' width={'48px'} height={'48px'} />
        <h1>"Don’t stop when you’re tired, stop when you’re done."</h1>
        <img src='src/images/user.png' onClick={()=> navigate("/Signup")} id={fitnes.login} alt='Sign Up' />
     </header>
      <div className={fitnes.container}>
        <div className={fitnes.bmi}>
           <h1>BMI Calculator</h1>

           <h2>Height {feet} ft</h2>
           <Slider id={fitnes.slide}
           value={feet}
                 min={2}
                 max={7}
                 onChange={(e)=> setFeet(e.target.value)}
                
             color="secondary"
           />

           <h2>Height {inches} inch</h2>
           <Slider id={fitnes.slide}
           value={inches}
                 min={0}
                 max={11}
                 onChange={(e)=> setInches(e.target.value)}
             color="secondary"
           />

           <h2>weight {weight} kgs</h2>
           <Slider id={fitnes.slide}
           value={weight}
                 min={5}
                 max={130}
                 onChange={(e)=> setWeight(e.target.value)}
             color="secondary"
           />
   
    

<Button onClick={calculate} variant="contained" color="success">
   Calculate BMI
</Button>
 <div id={fitnes.result}>
  
 <span>BMI Result is: {bmi}</span> 
 
 <h3 style={{color : resultcolor}}> ➡️ {bmiresult}</h3>
 </div> 
  </div>
  </div>

  <div id={fitnes.second}>
    <h1>Continue to the Application</h1>
    <button id={fitnes.button} onClick={()=> navigate("/Signup")}>Continue ➡️</button>
  </div>
    </>
  )
}


export default Fitness
