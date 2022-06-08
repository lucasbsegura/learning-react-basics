class NameList extends React.Component {

    render() {
        var listItems = this.props.names.map(
            (name) => <li>{name.toUpperCase()}</li>
        );
        return (
            <ul className="names">{listItems}</ul>
        );
    }
}

const names = ['Esther', 'Lily', 'Candance', 'Edward', 'Sidney'];

ReactDOM.render(<NameList names={names} />, document.getElementById('react-lists'));