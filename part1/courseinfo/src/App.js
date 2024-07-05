const Header = (props) => {
  // console.log(props)
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Parts part={props.parts[0].name} exercise={props.parts[0].exercises}></Parts>
      <Parts part={props.parts[1].name} exercise={props.parts[1].exercises}></Parts>
      <Parts part={props.parts[2].name} exercise={props.parts[2].exercises}></Parts>
    </>
  )
}

const Parts = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Total = (props) => {

  let total = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises

  // console.log(props.parts[0].name)

  return (
    <p>
      Number of exercises {total}
    </p>
  )
}


const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'

  const parts = [
    {
      name: 'Fundamentos da biblioteca React',
      exercises: 10
    },
    {
      name: 'Usando props para passar dados',
      exercises: 7
    },
    {
      name: 'Estado de um componente',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course}></Header>
      <Content parts={parts}></Content>
      <Total parts={parts}></Total>
    </div>
  )
}

export default App