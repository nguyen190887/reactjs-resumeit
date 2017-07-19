import React from 'react';

function UserGreeting() {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
    return <h1>Please sign up</h1>;
}

function Greeting (props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return (
            <div>
                <UserGreeting />
                {props.unreadMessages.length &&
                    <span>({props.unreadMessages.length} unread notification)</span>    
                }
            </div>
        );
    }
    return <GuestGreeting />;
}

export default Greeting;