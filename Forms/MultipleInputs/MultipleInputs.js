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

    handleInputChange = (event) => {
        const name = event.target.name;
        var value = event.target.value;

        if (name == 'nameValue') {
            value = value.toUpperCase();
        }

        //[name] = computed property name syntax
        this.setState({[name]: value});
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
                          name="nameValue"
                          value={this.state.nameValue}
                          onChange={this.handleInputChange} />
                
                <div className="label">Email:</div>
                <textarea className="input"
                          name="emailValue"
                          value={this.state.emailValue}
                          onChange={this.handleInputChange} />

                <div className="label">Name of the Hotel:</div>
                <select value={this.state.nameOfHotelValue}
                        name="nameOfHotelValue"
                        onChange={this.handleInputChange}>
                    <option value="Fantastic Hotels">Fantastic Hotels</option>
                    <option value="Wonderful Hotels">Wonderful Hotels</option>
                    <option value="Confortable Hotels">Confortable Hotels</option>
                    <option value="Pretentious Hotels">Pretentious Hotels</option>
                </select>

                <div className="label">Location:</div>
                <textarea className="input"
                          name="locationValue"
                          value={this.state.locationValue}
                          onChange={this.handleInputChange} />

                <input className="button" type="submit" value="Submit" />
            </form>  
        );
    }
}

ReactDOM.render(<HotelBookingForm />, document.getElementById('outer'));