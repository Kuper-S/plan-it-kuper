import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {postPlan} from '../api/plan'

const CreateplanPopup = ({modal, toggle, save}) => {
    const [planName, setplanName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {  
        const {name, value} = e.target

        if(name === "planName"){
            setplanName(value)
        }else{
            setDescription(value)
        }
    }

    const handleSave = (e) => {
        e.preventDefault()
        let planObj = {}
        planObj["Name"] = planName
        planObj["Description"] = description
        save(planObj)
        //hard coded plan
        postPlan({
            eventId: 'blabla', 
            type: 'bbq', 
            eventName: 'bbq with friends', 
            startDate: '01/01/2023', 
            startHour: '23:00', 
            description
        })
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create plan</ModalHeader>
            <ModalBody>
                    <div className = "form-group">
                        <label>Plan Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={planName} 
                            onChange={handleChange} 
                            name="planName"/>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea 
                            rows="5" 
                            className="form-control" 
                            value={description} 
                            onChange={handleChange} 
                            name="description">
                        </textarea>
                    </div>        
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
            
      </Modal>
      
    );
};

export default CreateplanPopup;