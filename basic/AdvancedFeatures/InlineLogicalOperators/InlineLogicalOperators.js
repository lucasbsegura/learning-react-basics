class Warning extends React.Component {
    render() {
        return (
            <div className="comment">
                <span className="photo">
                    <img src="images/warning.jpg" />
                </span>
                <span className="message">
                    Something wasn't right, you might need to debug...
                </span>
            </div>
        );
    }
}

class Ok extends React.Component {
    render() {
        return (
            <div className="comment">
                <span className="photo">
                    <img src="images/ok.jpg" />
                </span>
                <span className="message">
                    Everything looks good, carry on!
                </span>
            </div>
        );
    }
}

class Display extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                {
                    //if warning is true, the Warning Component will be rendered
                    (this.props.warning && <Warning />) ||
                    //OR (||) if warning is not true, the Ok Component will be rendered
                    (<Ok />)
                }
            </div>
        );
    }
}

ReactDOM.render(<Display warning={false} />, document.getElementById('outer'));