import React from 'react'

export default function Button({ value, onClick, className }) {
  return (
    <>
        <button onClick={(e) => onClick(e.target)} className={className}>{value}</button>
    </>
  )
}
