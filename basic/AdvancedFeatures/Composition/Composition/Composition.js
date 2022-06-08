class Message extends React.Component {

    render() {
        return (
            <div className={'border plain-message ' + this.props.cssClass}>
                {this.props.message}
            </div>
        );
    }
}

class SuccessMessage extends React.Component {
 
    render() {
        return (
            //... will pass props to the next component
            <Message {...this.props} cssClass='success-message'></Message>
        );
    }
}

class FailureMessage extends React.Component {
 
    render() {
        return (
            //... will pass props to the next component
            <Message {...this.props} cssClass='error-message'></Message>
        );
    }
}

class Dialog extends React.Component {
    render() {
        return (
            <div>
                <Message message="A plain message"></Message>
                <SuccessMessage message="A success message"></SuccessMessage>
                <FailureMessage message="A failure message"></FailureMessage>
            </div>
        );
    }
}

ReactDOM.render(<Dialog />, document.getElementById('react-composition'));