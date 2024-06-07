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
  const [mostVoted, setMostVoted] = useState(0)
  const [selected, setSelected] = useState(0)
  const handleVoteClick = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)

  }
  const currentMostVotedVotes = votes[mostVoted]
  if (votes[selected] > currentMostVotedVotes) {
    setMostVoted(selected)
  }

  return (
    <div>
      <h1>Anectode of the day</h1>
      <p>
        {anecdotes[selected]}
        <br></br>
        has {votes[selected]} votes
      </p>

      <Button text="vote" onClick={handleVoteClick} />
      <Button text="next anecdote" onClick={() => setSelected(Math.floor(Math.random() * 8))} />

      <h1>Anectode with most votes</h1>
      <MostVoted mostVoted={mostVoted} anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

const MostVoted = ({ mostVoted, anecdotes, votes }) => {
  console.log(votes)
  let sum = 0
  for (let i = 0; i < votes.length; i++) {
    sum += votes[i]
  }
  if (sum == 0) {
    return (
      <>
      </>
    )
  }
  
  else {
    return (
      <>
        {mostVoted !== -1 && ( // Check if any anecdote has a vote
          <p>
            "{anecdotes[mostVoted]}" with {votes[mostVoted]} votes.
          </p>
        )}
      </>
    )
  }
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
