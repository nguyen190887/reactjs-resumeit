import React from 'react';

class ReduxDemo extends React.Component {
    render() {
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <div>Value is: {value}
                <br/>
                <button onClick={onIncrement}> +++ </button>
                &nbsp;&nbsp;
                <button onClick={onDecrement}> --- </button>
            </div>
        );
    }
}

export default ReduxDemo;