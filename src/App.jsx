import './App.css'
import { useState } from 'react'

const valuesForDefault = {
  position1 : '',
  position2 : '',
  position3 : '',
  position4 : '',
  position5 : '',
  position6 : '',
  position7 : '',
  position8 : '',
  position9 : ''

}

function App() {  
  const [ valuesFields, setValuesFields ] = useState(valuesForDefault)

  // necesito dos usuarios
  const [ turnoUsuario1, setTurnoUsuario1 ] = useState(true)
  const [ turnoUsuario2, setTurnoUsuario2 ] = useState(false)

  const handleClick = (e) => {
    // () => setValuesFields( { ...valuesFields, position1 : 'x' })
    const marca = turnoUsuario1 ? 'x' : turnoUsuario2 && 'o'
    console.log(e.target.name)
    const property = `position${e.target.name}`
    const newValuesFields = { ...valuesFields }
    newValuesFields[property] = marca
    if( valuesFields[property] !== '') {
      return console.log('casilla ya tiene un valor')
    }
    setValuesFields( newValuesFields )
    setTurnoUsuario1( !turnoUsuario1 )
    setTurnoUsuario2( !turnoUsuario2 )
  }

  console.log({ valuesFields })

  if( valuesFields.position1 === 'x' && valuesFields.position2 === 'x' && valuesFields.position3 === 'x' || valuesFields.position1 === 'o' && valuesFields.position2 === 'o' && valuesFields.position3 === 'o'){
    if( valuesFields.position1 === 'x' ){
      console.log('jugador 1 ganó')
    } else {
      console.log('jugador 2 ganó')
    }
  }

  return (
    <main>
      <h1 className='text-4xl uppercase mb-5'>Juego Triqui</h1>
      <section className='grid grid-cols-3 gap-2'>
        <button name='1' onClick={ handleClick } className=' p-5 border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md'>{ valuesFields.position1 }</button>
        <button name='2' onClick={ handleClick } className=' p-5 border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md'>{ valuesFields.position2 }</button>
        <button name='3' onClick={ handleClick } className=' p-5 border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md'>{ valuesFields.position3 }</button>
        <button name='4' onClick={ handleClick } className=' p-5 border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md'>{ valuesFields.position4 }</button>
        <button name='5' onClick={ handleClick } className=' p-5 border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md'>{ valuesFields.position5 }</button>
        <button name='6' onClick={ handleClick } className=' p-5 border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md'>{ valuesFields.position6 }</button>
        <button name='7' onClick={ handleClick } className=' p-5 border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md'>{ valuesFields.position7 }</button>
        <button name='8' onClick={ handleClick } className=' p-5 border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md'>{ valuesFields.position8 }</button>
        <button name='9' onClick={ handleClick } className=' p-5 border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md'>{ valuesFields.position9 }</button>
      </section>
    </main>
  )
}

export default App
