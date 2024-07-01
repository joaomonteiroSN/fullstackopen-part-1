const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Parts part={props.part} exercise={props.exercise}></Parts>
      <Parts part={props.part2} exercise={props.exercise2}></Parts>
      <Parts part={props.part3} exercise={props.exercise3}></Parts>
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

  let total = props.exercise1 + props.exercise2 + props.exercise3

  return (
    <p>
      Number of exercises {total}
    </p>
  )
}


const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}></Header>
      <Content
        part={part1} exercise={exercises1}
        part2={part2} exercise2={exercises2}
        part3={part3} exercise3={exercises3}
      ></Content>

      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}></Total>
    </div>
  )
}

export default App