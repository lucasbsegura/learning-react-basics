class NameList extends React.Component {

    render() {
        var listItems = this.props.names.map(
            //never use index as keys!
            (name, index) => <li key={index}>{name.toUpperCase()}</li>
        );
        return (
            <ul className="names">{listItems}</ul>
        );
    }

}

const names = ['Esther', 'Lily', 'Candance', 'Candance', 'Edward', 'Sidney'];

ReactDOM.render(<NameList names={names} />, document.getElementById('react-lists'));