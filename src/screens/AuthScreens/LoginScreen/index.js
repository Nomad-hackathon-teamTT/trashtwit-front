import { connect } from 'react-redux';
import Containter from './container';
import { actionCreators } from "../../../redux/modules/auth";

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => {
      return dispatch(actionCreators.login(username, password))
    }
  }
};

export default connect(null, mapDispatchToProps)(Containter)