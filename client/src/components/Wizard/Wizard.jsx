import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {postPlan} from '../../api/plan'


const Wizard = ({input , label ,subLabel, style , addPlanAction,modal,toggle}) => {
    const [inputValue , setInputValue] = useState("");
    const [planObj,setPlanObj] = useState({});

    

    const handleNextClick = () =>{
        setPlanObj({
            eventName: inputValue
        });
        
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create plan</ModalHeader>
            <ModalBody>
                    <div className = "form-group">
                        <label>{label}</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={inputValue} 
                            onChange={(e) =>{
                                setInputValue(e.target.value)
                            }} 
                            name="planName"/>
                    </div>
                    <Button color="primary" onClick={handleNextClick}> 
                    Next
                    </Button>{' '}
                    <Button color="primary" onClick={handleNextClick}> 
                    Back
                    </Button>{' '}
                     
            </ModalBody>
            {/* <ModalFooter>
            <Button color="primary" onClick={handleSave}>Create</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter> */}
            
      </Modal>
      
    );
};

export default Wizard;