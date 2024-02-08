import { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

interface Props {
  onClick: () => void
}

const Like = ({ onClick }: Props) => {
  const [love, setLove] = useState(false)

  // if (love) return <FaHeart color='crimson' fontSize='3em' onClick={() => setLove(false)} />
  // return <CiHeart color='crimson' fontSize='3em' onClick={() => setLove(true)} />

  const toggle = () => {
    setLove(!love)
    onClick() //Notify the consumer of this component
  }

  return (
    <>
      {love ? (
        <FaHeart color='crimson' fontSize='3em' onClick={toggle} />
      ) : (
        <CiHeart color='crimson' fontSize='3em' onClick={toggle} />
      )}
    </>
  )

}

export default Like

/*
  - If  love  is  true , the  FaHeart  icon is rendered, otherwise the  CiHeart  icon is rendered. 
 
  - The ternary operator is a concise way to write an  if-else  statement, and it can be used to improve the readability of your code.
*/
