import React from 'react'

const Title = ({ name, lastname }) => {
  return (
    <h1>{`Olá ${name} ${lastname}`}</h1>
  )
}

export default Title

Title.defaultProps = {
  name: 'Desconhecido',
  lastname: 'Sobrenome desconhecido'
}
