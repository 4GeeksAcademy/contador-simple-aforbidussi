import React from "react";
import PropTypes from "prop-types";

const SecondsCounter = (props) => {
    const digitSix = Math.floor(props.seconds / 100000) % 10;
    const digitFive = Math.floor(props.seconds / 10000) % 10;
    const digitFour = Math.floor(props.seconds / 1000) % 10;
    const digitThree = Math.floor(props.seconds / 100) % 10;
    const digitTwo = Math.floor(props.seconds / 10) % 10;
    const digitOne = Math.floor(props.seconds / 1) % 10;

    return (<div className="d-flex justify-content-center align-items-center">
            <div className="bigCounter d-flex bg-black text-white p-4 gap-3 my-5 rounded shadow-lg fs-1">
                <div className="clock-icon box"><i className="far fa-clock"></i></div>
                <div className="digit-box">{digitSix}</div>
                <div className="digit-box">{digitFive}</div>
                <div className="digit-box">{digitFour}</div>
                <div className="digit-box">{digitThree}</div>
                <div className="digit-box">{digitTwo}</div>
                <div className="digit-box">{digitOne}</div>
            </div>
      </div>
    );
};

SecondsCounter.propTypes = {
    seconds: PropTypes.number.isRequired
};

export default SecondsCounter;