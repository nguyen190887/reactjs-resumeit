import React from 'react';

function FancyBorder(props) {
    return (
        <div className={'fancy-border fancy-border-' + props.color}>
            {props.children}
        </div>
    )
}

function SplitPane(props) {
    return (
        <div className="split-pane">
            <div className="split-pane-left">
                {props.left}
            </div>
            <div className="split-pane-right">
                {props.right}
            </div>
        </div>
    );
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="dialog-title">
                {props.title}
            </h1>
            <p className="dialog-message">
                {props.message}
            </p>
            <SplitPane
                left={
                    <div>Contacts</div>
                }
                right={
                    <div>Chat</div>
                } />
            {props.children}
        </FancyBorder>
    );
}

function WelcomeDialog () {
    return (
        <Dialog
          title="Welcome"
          message="Thank you for coming here!" />
    );
}

class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login: ''};
    }

    render() {
        return (
            <Dialog title="Exploration Program"
                    message="Hey there!">
                     <input value={this.state.login} onChange={this.handleChange} />
                     <button onClick={this.handleSignUp}>Sign Me Up!</button>
            </Dialog>
        );
    }

    handleChange(e) {
        this.setState({login: e.target.value});
    }

    handleSignUp() {
        alert(`Welcome aboard, ${this.state.login}!`);
    }
}

export {WelcomeDialog, SignUpDialog};