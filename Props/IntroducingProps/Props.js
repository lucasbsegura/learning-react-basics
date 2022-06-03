class Greeting extends React.Component {
    render() {
        return (
            <div className="prop-class">
                <h2>{this.props.message}</h2>
            </div>
        );
    }
}

ReactDOM.render(<Greeting message = "Hello React Developers!" />,
                document.getElementById('react-prop1'));

ReactDOM.render(<Greeting message = "React is more fun now!" />,
                document.getElementById('react-prop2'));                