function Circle(props) {
    const cirStyle = {
        backgroundColor: props.color
    };
    return (<div className="circle" style={cirStyle}></div>);
}

class ToggleCircle extends React.Component {
    //stateful component, state hold is go
    state = {
        go: true
    }

    toggle = () => {
        this.setState(function(prevState) {
            return {
                go: !prevState.go
            }
        });
    }

    render() {
        if (this.state.go) {
            return (
                <div>
                    <Circle color='green' />
                    <button className="button" onClick={this.toggle}>
                        Stop
                    </button>
                </div>
            );
        }
        return (
            <div>
                <Circle color='red' />
                <button className="button" onClick={this.toggle}>
                    Go
                </button>
            </div>
        );
    }
}

ReactDOM.render(<ToggleCircle />, document.getElementById('react-conditional-if'));
