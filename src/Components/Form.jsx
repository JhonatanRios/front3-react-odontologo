import React, { useState } from "react"

const Form = () => {
  const [ nombre, setNombre ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ errorNombre, setErrorNombre ] = useState('')
  const [ errorEmail, setErrorEmail ] = useState('')
  const [ sendForm, setSendForm ] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar nombre
    setErrorNombre(nombre.length > 5 ? '' : 'El nombre debe tener al menos 5 caracteres')

    // Validar email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setErrorEmail(emailPattern.test(email) ? '' : 'Por favor, introduce un email válido')

    setSendForm(nombre !== '' &&  email !== '')
  }

  return (
    <>
      {
        sendForm ? (
          <p className="success">Gracias <strong>{nombre}</strong>, te contactaremos cuando antes vía mail</p> 
        ) : (
          <form className="d-flex g--10 p--20 mb--15" onSubmit={handleSubmit}>
            <div className="d-grid data">
              <label htmlFor="nombre">Nombre completo:</label>
              <input type="text" id="nombre" placeholder="John Doe" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </div>
            {errorNombre && <p className="error">{errorNombre}</p>}
            <div className="d-grid data">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="john.doe@email.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            {errorEmail && <p className="error">{errorEmail}</p>}
            <button type="submit">Enviar</button>
          </form>
        ) 
      }
    </>
  )
}

export default Form