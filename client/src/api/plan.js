import axios from "axios";

const url = process.env.REACT_APP_SERVER_URL; 

export const fetchPlans = async () =>{ 
    let data
    await axios.get(url).then(res => {
        data = res.data
    })
    return data.plans;
}