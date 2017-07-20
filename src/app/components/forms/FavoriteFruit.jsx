import React from 'react';

function FavoriteFruit(props) {
    return (
        <label>
            Favourite fruit:
            <select name={props.name} value={props.value} onChange={props.onChange}>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="orange">Orange</option>
            </select>
        </label>
    );
}

export default FavoriteFruit;