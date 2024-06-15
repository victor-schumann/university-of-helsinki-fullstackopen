import { useState } from "react"


const App = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [clicks, setClicks] = useState([])

  const setC1 = () => {
    setCounter1(counter1 + 1)
    setClicks(clicks.concat('BTN 1 was clicked'))
  }

  const setC2 = () => {
    setCounter2(counter2 + 1)
    setClicks(clicks.concat('BTN 2 was clicked'))
  }


  return (
    <>
      <div>
        {/* <Hello age={24} /> */}
        <Counter counter = {counter1} onClick = {setC1}/>
        <Counter counter = {counter2} onClick = {setC2}/>
        <BulletList array = {clicks} />
      </div>
    </>
  )
}
export default App

const Hello = ({ age }) => {
  const bornYear = (age) => {
    const year = new Date().getFullYear()
    return year - age
  }
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h1>Age: {age}</h1>
        <h1>Year of Birth: {bornYear(age)}</h1>
      </div>
    </>
  )
}

const Counter = ({onClick, counter}) => {
  return (
    <>
      <div>
        <h2>Counter: {counter}</h2>
        <Button onClick={onClick} text="Text Key"></Button>
        
      </div>

    </>
  )
}

const BulletList = ({array}) => {
  return (
    <>
      <div>
        <ul>
          {array.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
    </>
  )
  
}

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

