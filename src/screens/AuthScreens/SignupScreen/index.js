import { connect } from 'react-redux';
import Containter from './container';
import { actionCreators } from "../../../redux/modules/auth";

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (fullname, email, username, password1, password2) => {
      return dispatch(actionCreators.signup(fullname, email, username, password1, password2))
    }
  }
};

export default connect(null, mapDispatchToProps)(Containter)