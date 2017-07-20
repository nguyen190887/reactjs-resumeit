import React from 'react';
import FavoriteFruit from './FavoriteFruit.jsx';
import CommentArea from './CommentArea.jsx';
import Gender from './Gender.jsx';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state  = {
            name: 'Tri',
            comment: 'Please write your comment here.',
            fruit: 'coconut',
            gender: 'female'
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.genderList = [
            { key: 'male', value: 'Male' },
            { key: 'female', value: 'Female' }
        ];
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        // TODO: there are some latency, alert show incorrect value of state.name
        this.setState({
            name: this.name.value
        });

        console.log('Submitted name: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input name="name" type="text" defaultValue={this.state.name} ref={(input) => this.name = input} />
                    <CommentArea name="comment" value={this.state.comment} onChange={this.handleChange} />
                    <FavoriteFruit name="fruit" value={this.state.fruit} onChange={this.handleChange} />
                    <Gender name="gender" value={this.state.gender} genders={this.genderList} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm;