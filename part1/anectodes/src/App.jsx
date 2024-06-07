import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const [selected, setSelected] = useState(0)

  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)

  }

  return (
    <div>
      <p>
        <h1>Anectode of the day</h1>
        {anecdotes[selected]}
        <br></br>
      has {votes[selected]} votes
      </p>
      
      <Button text="vote" onClick={handleVoteClick} />
      <Button text="next anecdote" onClick={() => setSelected(Math.floor(Math.random() * 8))} />
    </div>
  )
}

const Button = (props) => {
  return (
    <>
      <button style={{ marginRight: '10px' }} onClick={props.onClick}>
        {props.text}
      </button>
    </>
  )
}

export default App
