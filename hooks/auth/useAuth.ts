import { useState } from 'react'

export default function useAuth() {
  const [isHover, setIsHover] = useState(false)

  const handleMouseEnter = () => setIsHover(true)
  const handleMouseLeave = () => setIsHover(false)
  return { isHover, handleMouseEnter, handleMouseLeave }
}
