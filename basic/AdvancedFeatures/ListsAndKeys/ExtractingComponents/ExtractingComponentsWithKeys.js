class Name extends React.Component {
    render() {
        return (
            <li>{this.props.name.toUpperCase()}</li>
        );
    }
}

class NameList extends React.Component {

    render() {
        var listItems = Object.keys(this.props.names).map(
            //the key should be here, the higher level component
            (key, index) => <Name key={key} name={names[key]} />
        );
        return (
            <ul className="names">{listItems}</ul>
        );
    }

}

const names = {
    'id1': 'Esther', 
    'id2': 'Lily', 
    'id3': 'Candance', 
    'id4': 'Candance', 
    'id5': 'Edward', 
    'id6': 'Sidney'
};

ReactDOM.render(<NameList names={names} />, document.getElementById('react-lists-1'));