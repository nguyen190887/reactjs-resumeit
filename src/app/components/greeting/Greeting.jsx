import React from 'react';

function UserGreeting() {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
    return <h1>Please sign up</h1>;
}

function LastLogin (props){
    const logins = props.logins;
    const comments = props.comments;
    const loginList = logins.map((item, index) =>
        <li key={index}>
            {item.toLocaleString()}
        </li>
    );

    return (
        <div>
            <span>Your last login:</span>
            <ul>{loginList}</ul>
            <ul>
                {comments.map(item => 
                    <li key={item}>{item}</li>)}
            </ul>
        </div>
    );
}

function Greeting (props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        const lastLogins = [
            new Date(2017, 7, 1),
            new Date(2017, 7, 2),
            new Date()
        ];
        const comments = [
            'Comment 1',
            'Comment 2'
        ];
        return (
            <div>
                <UserGreeting />
				{props.unreadMessages.length &&
                    <span>({props.unreadMessages.length} unread notification)</span>    
                }
                <LastLogin logins={lastLogins} comments={comments} />
            </div>
        );
    }
    return <GuestGreeting />;
}

export default Greeting;