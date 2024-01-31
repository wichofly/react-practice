import { useState } from "react"

interface Props {
  children: string
  maxChars?: number //Optional to use 
}

const ExtendableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  if (children.length <= maxChars)
    return <p>{children}</p>

  const text = isExpanded ? children : children.substring(0, maxChars)

  return (
    <div>
      <p>{text}...
        <button
          onClick={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}
        </button>
      </p>
    </div>
  )
}

export default ExtendableText