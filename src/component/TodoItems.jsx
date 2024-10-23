import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
const TodoItems = () => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div>
        <img src={tick} alt=''></img>
        <p>Operating Systems Midterm</p>
      </div>
    </div>
  )
}
 
export default TodoItems
