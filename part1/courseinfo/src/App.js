const Header = (props) => {
  return (
    <h1>
      {props.course.name}
    </h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Parts part={props.course.parts[0].name} exercise={props.course.parts[0].exercises}></Parts>
      <Parts part={props.course.parts[1].name} exercise={props.course.parts[1].exercises}></Parts>
      <Parts part={props.course.parts[2].name} exercise={props.course.parts[2].exercises}></Parts>
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
  console.log(props)

  let total = props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises

  return (
    <p>
      Number of exercises {total}
    </p>
  )
}


const App = () => {

  const course = {
    name: 'Desenvolvimento de aplicação Half Stack',
    parts: [
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
  }

  return (
    <div>
      <Header course={course}></Header>
      <Content course={course}></Content>
      <Total course={course}></Total>
    </div>
  )
}

export default App