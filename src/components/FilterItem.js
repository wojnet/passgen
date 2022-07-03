import React from 'react'

const FilterItem = ({ id, label, isChecked, handle }) => {
  return (
    <div className='FilterItem'>
      <input type="checkbox" checked={isChecked} onChange={() => handle(id)} /><label>{label}</label>
    </div>
  )
}

export default FilterItem