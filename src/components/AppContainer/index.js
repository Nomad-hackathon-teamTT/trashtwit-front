import { connect } from 'react-redux';
import AppContainer from './presenter';
import { actionCreators as authActions } from "../../redux/modules/auth";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as twitActions } from "../../redux/modules/twit";

const mapStateToProps = (state, props) => {
  const { auth } = state;
  return {
    isLoggedIn: auth.isLoggedIn,
    profile: auth.profile
}};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initApp: () => {
      dispatch(twitActions.getFeed());
      dispatch(twitActions.getSearch());
      dispatch(userActions.getProfile());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);