import React, { Component } from "react";
import Counter from "./counter";

class Counters extends  Component {

    render() {
        console.log("Counters - rendered");

        const  {onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
        return (
        <div>
            <button className="btn btn-primary" onClick={onReset}>Reset</button>

            {counters.map(counter =>
                <Counter
                    key={counter.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    counter={counter}
                />
            )}
        </div>
        );
    }
}

export default Counters;