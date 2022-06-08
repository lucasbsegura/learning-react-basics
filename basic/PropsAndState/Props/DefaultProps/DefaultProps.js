class Student extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="student">
                <div>StudentId: {this.props.id}</div>
                <div>Name: {this.props.studentName}</div>
                <div>Enrolled: {this.props.enrolled ? 'yes' : 'no'}</div>
            </div>
        );
    }
}

Student.defaultProps = {
    id: Math.floor(Math.random() * 100000000),
    enrolled: true
}

ReactDOM.render(<Student />, 
                document.getElementById('react-default-prop'));