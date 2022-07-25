import {useState, useEffect} from 'react'
import {fetchPlans} from '../../api/plan'
import InputPlans from '../InputPlans/InputPlans'
import PlansList from '../PlansList/PlansList'
import CardList from '../Card/CardList'
import Footer from '../Footer/Footer'
import DialogOne from '../Wizard/Wizard'



function AppContainer() {
  const [plans, setPlans] = useState([])
  const [dailogCounter, setDailogCounter] = useState(false);
  

  useEffect(() => {
    fetchPlans().then(fetchedPlans => {
      setPlans(fetchedPlans)
    })
  },[])

  return (
    
    <div className="App">
    
    <div className="header text-center">
                <h3>ENTER NEW EVENT</h3>
                <button 
                    className="btn btn-primary mt-2" 
                    onClick = {() => setDailogCounter(true)} >
                        Create plan
                </button>
                {dailogCounter && <DialogOne/>}
            </div>
   
      {/* <InputPlans/> */}
      {plans && <PlansList plans={plans}/>}
      <Footer/>
    </div>
    
  )
}

export default AppContainer