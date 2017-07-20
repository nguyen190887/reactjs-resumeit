import React from 'react';

function Gender (props) {
    const labels = props.genders.map(item => {
        return (
            <label key={item.key}>
                <input type="radio" 
                    name={props.name}
                    value={item.key}
                    checked={item.key== props.value}
                    onChange={props.onChange} />
                {item.value}
            </label>
        );
    });

    return (
        <div>
            Gender: {labels}
        </div>
    );
}

export default Gender;