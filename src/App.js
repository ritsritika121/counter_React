import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './action';



const Counter = (props) => {
    return (
        <div>
            <button className="increment" onClick= {()=> props.increment()}>Increment</button>
            <button className="decrement" onClick={()=> props.decrement()}>Decrement</button>
            <br /> <br />
            Current Count: <span>{props.count}</span>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {count : state.count};
};

export default connect(mapStateToProps, { increment, decrement}) (Counter);