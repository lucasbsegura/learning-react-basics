class HotelBookingForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            nameValue: '',
            emailValue: '',
            nameOfHotelValue: 'Fantastic Hotels',
            locationValue: 'California'
        };
    }

    handleNameChange = (event) => {
        this.setState({nameValue: event.target.value.toUpperCase()});
    }

    handleEmailChange = (e) => {
        this.setState({emailValue: e.target.value});
    }

    handleNameOfHotelChange = (e) => {
        this.setState({nameOfHotelValue: e.target.value});
    }

    handleLocationChange = (e) => {
        this.setState({locationValue: e.target.value});
    }

    handleSubmit = (e) => {
        alert("Are you sure you want to proceed with the booking? " + this.state.nameOfHotelValue);

        console.log('Name submitted: ' + this.state.nameValue);
        console.log('Email submitted: ' + this.state.emailValue);
        console.log('Hotel submitted: ' + this.state.nameOfHotelValue);
        console.log('Location submitted: ' + this.state.locationValue);

        this.setState({
            nameValue: '',
            emailValue: '',
            nameOfHotelValue: 'Fantastic Hotels',
            locationValue: 'California'
        });

        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="contents">
                <div className="label">Name:</div>
                <textarea className="input"
                          value={this.state.nameValue}
                          onChange={this.handleNameChange} />
                
                <div className="label">Email:</div>
                <textarea className="input"
                          value={this.state.emailValue}
                          onChange={this.handleEmailChange} />

                <div className="label">Name of the Hotel:</div>
                <select value={this.state.nameOfHotelValue}
                        onChange={this.handleNameOfHotelChange}>
                    <option value="Fantastic Hotels">Fantastic Hotels</option>
                    <option value="Wonderful Hotels">Wonderful Hotels</option>
                    <option value="Confortable Hotels">Confortable Hotels</option>
                    <option value="Pretentious Hotels">Pretentious Hotels</option>
                </select>

                <div className="label">Location:</div>
                <textarea className="input"
                          value={this.state.locationValue}
                          onChange={this.handleLocationChange} />

                <input className="button" type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(<HotelBookingForm />, document.getElementById('outer'));