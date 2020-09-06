import React from 'react';
import TopLoader from 'react-top-loader';
import { connect } from 'react-redux';

const Loadbar = ({ loading }) => {
    const shouldShow = loading.loading;
    if(shouldShow){
        return(
            <TopLoader backgroundColor="#eee6ff" show thickness={7} fixed={false} color="lightgreen" />
        )
    }
    else{
        return(
            <></>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.loader
})
export default connect(mapStateToProps)(Loadbar);