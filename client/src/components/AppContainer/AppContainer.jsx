import {useState} from 'react'
import Footer from '../Footer/Footer'
import MultiStepDialog from '../MultiStepDialog/MultiStepDialog'

const  AppContainer = () => {
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
      {isCreateEventClicked && <MultiStepDialog setIsCreateEventClicked={setIsCreateEventClicked}/>}
      <div className="header text-center">
        <h3>ENTER NEW EVENT</h3>
        <button
          className="btn btn-primary mt-2"
          onClick={() => setIsCreateEventClicked(true)}
        >
          Create plan
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default AppContainer;
