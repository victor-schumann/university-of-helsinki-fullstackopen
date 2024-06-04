import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button name={'good'} onClick={() => setGood(good + 1)} text="Good" />
        <Button name={'neutral'} onClick={() => setNeutral(neutral + 1)} text="Neutral" />
        <Button name={'bad'} onClick={() => setBad(bad + 1)} text="Bad" />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App

// Begin components 
const Header = () => {
  return (
    <div>
      <h1>give feedback</h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.name}</button>
    </div>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <tr>
            <td>good:</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>neutral:</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad:</td>
            <td>{props.bad}</td>
          </tr>
        </tbody>
      </table>
    </div>


  )
}
