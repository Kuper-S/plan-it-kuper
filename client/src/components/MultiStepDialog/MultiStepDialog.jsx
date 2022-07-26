import EventNameDialog from "../EventNameDialog/EventNameDialog";
//import DatesDialog from "./DatesDialog";
//import EventTypeDialog from "./EventTypeDialog";
//import LocationDialog from "./LocationDialog";
import { useState } from "react";

const MultiStepDialog = ({}) => {
//   const [input, setInput] = useState("");
  const [step, setStep] = useState(1);
  const [eventObj, setEventObj] = useState({
    eventName: "",
    dates: "",
    eventType: "",
    location: "",
  });

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle fields change
//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

  switch (step) {
    case 1:
      return (
        <EventNameDialog
          nextStep={nextStep}
          eventState={eventObj}
<<<<<<< HEAD
          setEventObj={setEventObj}
        />
      );
    case 2:
      return (
        <DatesDialog
          nextStep={nextStep}
          prevStep={prevStep}
          eventState={eventObj}
          setEventObj={setEventObj}
        />
      );
    case 3:
      return (
        <EventTypeDialog
          nextStep={nextStep}
          prevStep={prevStep}
          eventState={eventObj}
          setEventObj={setEventObj}
        />
      );
    case 4:
      return (
        <LocationDialog
          nextStep={nextStep}
          prevStep={prevStep}
          eventState={eventObj}
          setEventObj={setEventObj}
        />
      );
=======
        />
      );
    // case 2:
    //   return (
    //     <DatesDialog
    //       nextStep={nextStep}
    //       prevStep={prevStep}
    //       eventState={eventObj}
    //     />
    //   );
    // case 3:
    //   return (
    //     <EventTypeDialog
    //       nextStep={nextStep}
    //       prevStep={prevStep}
    //       eventState={eventObj}
    //     />
    //   );
    // case 4:
    //   return (
    //     <LocationDialog
    //       nextStep={nextStep}
    //       prevStep={prevStep}
    //       eventState={eventObj}
    //     />
    //   );
>>>>>>> a1cd5ad4056cc08ce5375b4ad47add9174a3cca6
    default:
      console.log("This is a multi-step form built with React.");
  }
};

export default MultiStepDialog;
