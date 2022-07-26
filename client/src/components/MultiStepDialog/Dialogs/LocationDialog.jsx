import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useLoadScript} from "@react-google-maps/api";
import "@reach/combobox/styles.css";
import Map from './Map';

const libraries = ["places"]

const LocationDialog = ({nextStep, prevStep, setEventObj}) => {

    const handleNextButton = (e) => {
        e.preventDefault();
        nextStep();
    };

    const handlePrevButton = (e) => {
        e.preventDefault();
        prevStep();
    }  

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });

    if (!isLoaded) return <div>Loading...</div>;
    return ( 
    <>
        <Map setEventObj={setEventObj}/>
        <MuiThemeProvider>
            <Button
                color="secondary"
                variant="contained"
                onClick={handlePrevButton}
            >Back</Button>

            <Button
                color="primary"
                variant="contained"
                onClick={handleNextButton}
            >Continue</Button>
        </MuiThemeProvider>
    </>
  );
}



export default LocationDialog