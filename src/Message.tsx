
const Message = () => {

  const name = 'Mau'

  if (name)
    return (
      <h1>Hello {name} 😁</h1>
    )
  return (
    <h1>Hello stranger 🤡</h1>
  )
}

export default Message