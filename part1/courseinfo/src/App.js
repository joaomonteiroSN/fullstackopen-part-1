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

  const part1 = {
    name: 'Fundamentos da biblioteca React',
    exercise: 10
  }
  const part2 = {
    name:'Usando props para passar dados',
    exercise: 7
  }
  const part3 = {
    name: 'Estado de um componente',
    exercise: 14
  }
  return (
    <div>
      <Header course={course}></Header>
      <Content
        part={part1.name} exercise={part1.exercise}
        part2={part2.name} exercise2={part2.exercise}
        part3={part3.name} exercise3={part3.exercise}
      ></Content>

      <Total exercise1={part1.exercise} exercise2={part2.exercise} exercise3={part3.exercise}></Total>
    </div>
  )
}

export default App