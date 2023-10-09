import './App.css'
import { useEffect, useState } from 'react'
import Notification from './Notification'
import SquareButtons from './components/SquareButtons'

const valuesForDefault = ['', '', '', '', '', '', '', '', '']

function App() {  
  const [ valuesFields, setValuesFields ] = useState(valuesForDefault)

  // necesito dos usuarios
  const [ turnoUsuario1, setTurnoUsuario1 ] = useState(true)
  const [ turnoUsuario2, setTurnoUsuario2 ] = useState(false)
  const [ juegoFinalizado, setJuegoFinalizado ] = useState(false)
  const [ notificationMessage, setNotificationMessage ] = useState(null)

  console.log({ juegoFinalizado })

  console.log( turnoUsuario1 ? 'turno usuario 1' : 'turno usuario 2')


  const handleNewGame = () => {
    console.log('Nuevo juego')
    setJuegoFinalizado(false)
    setNotificationMessage(null)
    setTurnoUsuario1(true)
    setTurnoUsuario2(false)
    return setValuesFields(valuesForDefault)
  }

  console.log( valuesFields )

  // General

  useEffect(() => {
    if( 
      // rows
      (valuesFields[0] === valuesFields[1] && valuesFields[1] === valuesFields[2]) && valuesFields[0] !== ''
        ||
      (valuesFields[3] === valuesFields[4] && valuesFields[4] === valuesFields[5]) && valuesFields[3] !== ''
        ||
      (valuesFields[6] === valuesFields[7] && valuesFields[7] === valuesFields[8]) && valuesFields[6] !== ''
      // columns
        ||
      (valuesFields[0] === valuesFields[3] && valuesFields[3] === valuesFields[6]) && valuesFields[0] !== ''
        ||
      (valuesFields[1] === valuesFields[4] && valuesFields[4] === valuesFields[7]) && valuesFields[1] !== ''
        ||
      (valuesFields[2] === valuesFields[5] && valuesFields[5] === valuesFields[8]) && valuesFields[2] !== ''
      // diagonals
        ||
      (valuesFields[0] === valuesFields[4] && valuesFields[4] === valuesFields[8]) && valuesFields[0] !== ''
        ||
      (valuesFields[6] === valuesFields[4] && valuesFields[4] === valuesFields[2]) && valuesFields[6] !== ''
    
    ){
      console.log('inside')
      if( !turnoUsuario1 ){
        console.log('jugador 1 ganó')
        setNotificationMessage({
          content: 'jugador 1 ganó',
          type: 'success'
        })
        setJuegoFinalizado(true)
      } else {
        console.log('jugador 2 ganó')
        setNotificationMessage({
          content: 'jugador 2 ganó',
          type: 'success'
        })
        setJuegoFinalizado(true)
      }
    }
  }, [ valuesFields, turnoUsuario1 ])


  return (
    <main>
      <h1 className='text-4xl uppercase mb-5'>Triqui</h1>
      <section className='grid grid-cols-3 gap-2'>
        <SquareButtons 
          valuesFields={ valuesFields }
          setValuesFields={ setValuesFields }
          turnoUsuario1={ turnoUsuario1 }
          setTurnoUsuario1={ setTurnoUsuario1 }
          turnoUsuario2={ turnoUsuario2 } 
          setTurnoUsuario2={ setTurnoUsuario2 }
          juegoFinalizado={ juegoFinalizado }
        />
      </section>
      <div className='my-4'>
        { notificationMessage && 
          (
            <Notification message={ notificationMessage.content } type={ notificationMessage.type } />
          )
        }
        <button onClick={ handleNewGame } className='btn bg-yellow-600 text-white'>Nuevo Juego</button>
      </div>
    </main>
  )
}

export default App
