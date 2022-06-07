const ThemeContext = React.createContext('light');

class ThemedBorderBackground extends React.Component {
    render() {
        return (
            <div className={'bt bt-' + this.context + ' bg-' + this.context}>
                {this.props.children}
            </div>
        );
    }
}
ThemedBorderBackground.contextType = ThemeContext;

class ThemedButton extends React.Component {
    render() {
        return (
            <div>
                <button className={'button button-' + this.context}>
                    {this.props.label}
                </button>
            </div>
        );
    }
}
ThemedButton.contextType = ThemeContext;

class ThemedDialog extends React.Component {
    render() {
        return (
            <div className={'dialog dialog-' + this.context}>
                <h3 className="dialog-title">{this.props.title}</h3>
                <div className="dialog-message">{this.props.message}</div>
                <br />
                <ThemedButton theme={this.props.theme} label="Ok"></ThemedButton>
            </div>
        );
    }
}
ThemedDialog.contextType = ThemeContext;

ReactDOM.render(
    <div>
        <ThemeContext.Provider value="dark">

            <ThemedBorderBackground>
                Hello
            </ThemedBorderBackground>

        </ThemeContext.Provider>

        <ThemedButton label='Click Me!'></ThemedButton>
        
        <hr />

        <ThemedDialog title="Dialog" message="Dialog Message"></ThemedDialog>
    </div>,
    document.getElementById('react-context')
);