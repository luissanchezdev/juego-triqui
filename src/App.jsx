import './App.css'
import { useState } from 'react'

const valuesForDefault = ['', '', '', '', '', '', '', '', '']

/* const styles = {
  backgroundColor: 'yellow'
} */

function App() {  
  const [ valuesFields, setValuesFields ] = useState(valuesForDefault)

  // necesito dos usuarios
  const [ turnoUsuario1, setTurnoUsuario1 ] = useState(true)
  const [ turnoUsuario2, setTurnoUsuario2 ] = useState(false)
  const [ juegoFinalizado, setJuegoFinalizado ] = useState(false)

  console.log({ juegoFinalizado })

  console.log( turnoUsuario1 ? 'turno usuario 1' : 'turno usuario 2')

  const handleClick = (e) => {
    // () => setValuesFields( { ...valuesFields, position1 : 'x' })
    const marca = turnoUsuario1 ? 'x' : 'o'
    const position = Number(e.target.name)
    const newValuesFields = [ ...valuesFields ]  
    newValuesFields[position] = marca
    console.log(newValuesFields[position])
    if( valuesFields[position] !== '') {
      return console.log('casilla ya tiene un valor')
    }
    setValuesFields( newValuesFields )
    setTurnoUsuario1( !turnoUsuario1 )
    return setTurnoUsuario2( !turnoUsuario2 )
  }

  const handleNewGame = () => {
    console.log('Nuevo juego')
    return setValuesFields(valuesForDefault)
  }

  console.log( valuesFields )

  // General

  if( valuesFields[0] === valuesFields[1] && valuesFields[1] === valuesFields[2]  ){
    console.log('inside')
    if( valuesFields[0] === 'x' ){
      console.log('jugador 1 ganó')
    } else {
      console.log('jugador 2 ganó')
    }
    /* setJuegoFinalizado(true)
    return setValuesFields(['', '', '', '', '', '', '', '', '']) */
  }



  return (
    <main>
      <h1 className='text-4xl uppercase mb-5'>Juego Triqui</h1>
      <section className='grid grid-cols-3 gap-2'>
        <button name='0' onClick={ handleClick } className='border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md h-14'>{ valuesFields[0] }</button>
        <button name='1' onClick={ handleClick } className='border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md h-14'>{ valuesFields[1] }</button>
        <button name='2' onClick={ handleClick } className='border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md h-14'>{ valuesFields[2] }</button>
        <button name='3' onClick={ handleClick } className='border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md h-14'>{ valuesFields[3] }</button>
        <button name='4' onClick={ handleClick } className='border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md h-14'>{ valuesFields[4] }</button>
        <button name='5' onClick={ handleClick } className='border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md h-14'>{ valuesFields[5] }</button>
        <button name='6' onClick={ handleClick } className='border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md h-14'>{ valuesFields[6] }</button>
        <button name='7' onClick={ handleClick } className='border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md h-14'>{ valuesFields[7] }</button>
        <button name='8' onClick={ handleClick } className='border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md h-14'>{ valuesFields[8] }</button>
      </section>
      <div className='my-4'>
        <button onClick={ handleNewGame } className='btn bg-yellow-600 text-white'>Nuevo Juego</button>
      </div>
    </main>
  )
}

export default App
