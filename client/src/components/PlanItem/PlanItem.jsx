import React, { useState } from 'react'
import "./PlanItem.css"
import {deletePlan, editPlan} from '../../api/plan'

function PlanItem({plan}) {
  const [planEvent,setplanEvent] = useState(plan);
  const handleInputOnChange = (event) =>{
    setplanEvent(event.target.value);
  }
  
  // const enterPalnInput =  (plan) => {
  //   const array = [];
  //    array.map(plan => array.push(<p>{plan}</p>));
  //    return array
  // } 

  function handleDeletePlan(id){
    deletePlan(id)
  }

  function handleEditPlan(id, plan){
    const cpyPlan = {...plan, description: 'nanabanana'} //hard coded edit
    editPlan(id, cpyPlan)
  }
    
  return (
    <li id={plan.id} className="item">
      <div className='input-div'>
        <input 
            className="inputText"
            type="text"
            readOnly={true}
            value = {plan.eventName}
            onChange={handleInputOnChange}/>
        <h1>{plan.type}</h1>
        <h2>{plan.startDate}</h2>
        <h3>{plan.startHour}</h3>
        <p>{plan.description}</p>
            
        <button
            className="deleteButton"
            onClick={() => handleDeletePlan(plan.id)}
            fontSize="inherit"
          >🗑️</button>
        <button
            className="editButton"
            onClick={() => handleEditPlan(plan.id, plan)}
            fontSize="inherit"
          >🖋</button>
      </div>
    </li>
  )
}

export default PlanItem