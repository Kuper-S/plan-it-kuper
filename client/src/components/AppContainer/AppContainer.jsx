import {useState, useEffect} from 'react'
import {fetchPlans} from '../../api/plan'
import InputPlans from '../InputPlans/InputPlans'
import PlansList from '../PlansList/PlansList'
import CardList from '../Card/CardList'
import Footer from '../Footer/Footer'
import DialogOne from '../Wizard/Wizard'
import MultiStepDialog from '../MultiStepDialog/MultiStepDialog'

const  AppContainer = ({}) => {
  const [isCreateEventClicked, setIsCreateEventClicked] = useState(false);
  // const [plans, setPlans] = useState([])
  // const [dailogCounter, setDailogCounter] = useState(false);

  // useEffect(() => {
  //   fetchPlans().then((fetchedPlans) => {
  //     setPlans(fetchedPlans);
  //   });
  // }, []);

  return (
    <div className="App">

      <MultiStepDialog />
      {/* <div className="header text-center">
      <h3>ENTER NEW EVENT</h3>
        <button 
            className="btn btn-primary mt-2" 
            onClick = {() => setDailogCounter(true)} >
                Create plan
        </button>
        {dailogCounter && <DialogOne/>}
      </div> */}
   
      {/* <InputPlans/> */}
      {/* {plans && <PlansList plans={plans}/>} */}
      <div className="header text-center">
        <h3>ENTER NEW EVENT</h3>
        <button
          className="btn btn-primary mt-2"
          onClick={() => setIsCreateEventClicked(true)}
        >
          Create plan
          {isCreateEventClicked && <MultiStepDialog />}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default AppContainer;
