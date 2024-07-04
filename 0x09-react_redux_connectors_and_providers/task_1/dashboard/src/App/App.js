import { connect } from 'react-redux';
import { uiReducer } from '../reducers/uiReducer';

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.uiReducer.isLoggedIn
    };
};

export default connect(mapStateToProps)(uiReducer);