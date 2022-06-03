import React from "react";
import { DECREMENT, INCREMENT } from "./store/actions";
import { connect } from "react-redux";
import "./styles.css";
import Input from "./components/Input";

function App({ number, increment, decrement }) {
  return (
    <div className="main">
      <h1>{number}</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        <button style={{ marginRight: 10 }} onClick={decrement}>
          Decrement
        </button>
        <button onClick={increment}>Increment</button>
      </div>
      {/* <Input /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    number: state.number,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
