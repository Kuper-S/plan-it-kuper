import {useState, useEffect} from 'react'
import {fetchPlans} from '../../api/plan'
import InputPlans from '../InputPlans/InputPlans'
import PlansList from '../PlansList/PlansList'
import Monday from "../Monday/Monday"
import Footer from '../Footer/Footer'

function AppContainer() {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    //prevent from rendering twice react 18
    
    fetchPlans().then(fetchedPlans => {
      setPlans(fetchedPlans)
    })
  },[])

  return (
    
    <div>
      <InputPlans/>
      <PlansList plans={plans}/>
      
    </div>
  )
}

export default AppContainer