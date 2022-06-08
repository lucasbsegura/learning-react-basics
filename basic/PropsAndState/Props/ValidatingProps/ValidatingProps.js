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
                <div>Campus: {this.props.campus}</div>
                <div>Major: {this.props.major}</div>
                <div>Courses: {this.props.courses}</div>
            </div>
        );
    }
}

Student.propTypes = {
    id: PropTypes.number,
    studentName: PropTypes.string,
    enrolled: PropTypes.bool,
    campus: PropTypes.oneOf(['North', 'South']),
    major: PropTypes.string.isRequired,

    courses(prop, propName) {
        var propValue = prop[propName];

        if (propValue == 'Statistics' || propValue == 'Philosophy') {
            throw Error('Sorry, this course is not offered currently');
        }
    }
}

Student.defaultProps = {
    id: Math.floor(Math.random() * 1000000),
    enrolled: true
}

ReactDOM.render(<Student 
                    studentName={"Peter"}
                    campus="South"
                    major="Computer Science"
                    courses="Mathematics" />, 
                document.getElementById('react-default-prop'));