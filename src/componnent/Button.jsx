import React from 'react'

export default function Button({ value, onClick }) {
  return (
    <>
        <button onClick={(e) => onClick(e.target)} className='btn btn-soft btn-primary'>{value}</button>
    </>
  )
}
