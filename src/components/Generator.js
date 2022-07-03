import React from 'react'
import FilterItem from './FilterItem'

const Generator = ({ checked, setChecked, passLength, setPassLength, generate }) => {

  const handleClick = (index) => {
    setChecked(e => {
      let temp = [...e]
      temp[index] = !temp[index]
      return temp
    })
  }

  const handleChange = (e) => {
    if (e.target.value > 64) e.target.value = 64
    if (e.target.value < 0) e.target.value *= -1
    let value = Math.floor(e.target.value)
    setPassLength(value)
  }

  return (
    <div className='Generator'>
      <div className='Generator--left'>
        <FilterItem id={0} key={0} label="Small Letters" isChecked={checked[0]} handle={handleClick} />
        <FilterItem id={1} key={1} label="Big Letters" isChecked={checked[1]} handle={handleClick} />
        <FilterItem id={2} key={2} label="Numbers" isChecked={checked[2]} handle={handleClick} />
        <FilterItem id={3} key={3} label="Special Characters" isChecked={checked[3]} handle={handleClick} />
      </div>
      <div className='Generator--right'>
        <div className='Generator--length'>
          <input type="number" defaultValue={8} onChange={handleChange} min={1} max={64} step={1} />
          <label>Password length</label>
        </div>
        <button onClick={generate}>GENERATE PASSWORD</button>
      </div>
    </div>
  )
}

export default Generator
