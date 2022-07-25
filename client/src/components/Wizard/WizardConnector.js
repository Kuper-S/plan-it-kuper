import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Wizard from "./Wizard";
import { addPlanAction } from "../../redux/actions/plansActions";
import { getCounterWizard,getPlans } from "../../redux/selectors/eventsSelector";

const mapStateToProps = (state, ownProps) => {
    const counterWizard = getCounterWizard(state);
    const plans = getPlans(state)
  return { counterWizard, plans };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    addPlanAction
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Wizard);