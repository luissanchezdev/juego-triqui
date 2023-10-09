const classes = 'border-spacing-1 border-gray-400 text-white text-center bg-slate-700 rounded-md h-14 w-14'

const SquareButtons = ({ valuesFields, setValuesFields, turnoUsuario1, setTurnoUsuario1, turnoUsuario2, setTurnoUsuario2, juegoFinalizado }) => {
  const handleClick = (e) => {
    // () => setValuesFields( { ...valuesFields, position1 : 'x' })
    if ( juegoFinalizado ) {
      return console.log('juego finalizado')
    } else {
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
  }

  return (
    <>
      <button name='0' onClick={ handleClick } className={ classes }>{ valuesFields[0] }</button>
      <button name='1' onClick={ handleClick } className={ classes }>{ valuesFields[1] }</button>
      <button name='2' onClick={ handleClick } className={ classes }>{ valuesFields[2] }</button>
      <button name='3' onClick={ handleClick } className={ classes }>{ valuesFields[3] }</button>
      <button name='4' onClick={ handleClick } className={ classes }>{ valuesFields[4] }</button>
      <button name='5' onClick={ handleClick } className={ classes }>{ valuesFields[5] }</button>
      <button name='6' onClick={ handleClick } className={ classes }>{ valuesFields[6] }</button>
      <button name='7' onClick={ handleClick } className={ classes }>{ valuesFields[7] }</button>
      <button name='8' onClick={ handleClick } className={ classes }>{ valuesFields[8] }</button>
    </>
  )
}

export default SquareButtons