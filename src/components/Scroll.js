import React from 'react'

const Scroll = (props) => {
  return (
    <div className="mt-8 overflow-y-scroll border-2 border-black border-solid h-screen">{props.children}</div>
  )
}

export default Scroll