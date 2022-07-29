/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import CardItem from '../Card/CardItem'
import Footer from '../Footer/Footer'
import MultiStepDialog from '../MultiStepDialog/MultiStepDialog'
import "./AppContainer.css"
import PlanCarousel from '../Carousel/Carousel'
import Dashboard from '../Dashboard/Dashboard'

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
      <div className='carousel'><PlanCarousel/></div>
      {isCreateEventClicked && <MultiStepDialog setIsCreateEventClicked={setIsCreateEventClicked}/>}
      <div className="header-text-center ">
        <h3 className='title-event'>Enter New Event</h3>
        <button
          className ="btn btn-white btn-animate createplan"
          onClick={() => setIsCreateEventClicked(true)}
        >
          Create Plan
        </button>
       
      </div>
      <Dashboard/>
      <div><span className='my-events'>My Events</span></div>
      <CardItem/>
      <Footer />
    </div>
  );
}

export default AppContainer;
