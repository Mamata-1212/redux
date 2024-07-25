import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of Cakes - {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default CakeContainer;
// export default connect(mapStateToProps, mapDispatchToprops)(CakeContainer);
