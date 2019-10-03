import React, { useEffect } from "react";
import * as actions from "./action/actions";
import { connect } from "react-redux";

function init({ categoryList, inputOption }) {

  useEffect(() => {
    callApiForCategory();
  }, []);

  

  return <div></div>;
}

const mapStateToProps = state => ({
  categoryList: state.reducer.categoryList,
  inputOption: state.reducer.inputOption
});

const mapsStateToAction = dispatch => ({
  callApiForCategory: () => dispatch(actions.getCategory())
});

export default init(mapStateToProps, mapsStateToAction)(ShowDataCard);
