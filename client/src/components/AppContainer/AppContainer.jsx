import { useState, useEffect } from "react";
//import { fetchPlans } from "../../api/plan";
// import InputPlans from "../InputPlans/InputPlans";
// import PlansList from "../PlansList/PlansList";
// import CardList from "../Card/CardList";
//import DialogOne from "../Wizard/Wizard";
import Footer from "../Footer/Footer";

//import MultiStepDialog from "../MultiStepDialog/MultiStepDialog";

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
      <div className="header text-center">
        <h3>ENTER NEW EVENT</h3>
        <button
          className="btn btn-primary mt-2"
          onClick={() => setIsCreateEventClicked(true)}
        >
          Create plan
          {/* {isCreateEventClicked && <MultiStepDialog />} */}
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default AppContainer;
