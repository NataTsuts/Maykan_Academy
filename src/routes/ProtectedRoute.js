import {Navigate} from 'react-router';
import {connect} from 'react-redux';

const ProtectedRoute = ({user, status, children}) => {
  if (!user && status === 'failed') {
    return <Navigate to="/" replace/>;
  }
  if (user && status === 'succeeded') {
    return children;
  }
};

const mapStateToProps = (state) => {
  const {validationStatus} = state.auth
  return {
    status: validationStatus
  }
}

export default connect(mapStateToProps)(ProtectedRoute);
