const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercises1={props.exercises1} />
      <Part part={props.part2} exercises1={props.exercises2} />
      <Part part={props.part3} exercises1={props.exercises3} />
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((s, p) => {
    return s + p.exercises
  }, 0)

  return <p><b>Number of Exercises {total}</b></p>
}


export default App

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content
        part1={course.parts[0].name}
        exercises1={course.parts[0].exercises}

        part2={course.parts[1].name}
        exercises2={course.parts[1].exercises}

        part3={course.parts[2].name}
        exercises3={course.parts[2].exercises}
      />

      <Total
        parts={course.parts
        }
      />
    </div>
  )
}