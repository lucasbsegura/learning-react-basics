class HotelBookingForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            nameValue: '',
            emailValue: '',
            phoneValue: 0,
            nameOfHotelValue: 'Fantastic Hotels'
        };
    }

    handleInputChange = (event) => {
        const name = event.target.name;
        var value = event.target.value;

        if (name == 'nameValue') {
            value = value.toUpperCase();
        }

        this.setState({[name]: value});
    }

    handleSubmit = (e) => {
        alert("Are you sure you want to proceed with the booking? " + this.state.nameOfHotelValue);

        console.log('Name submitted: ' + this.state.nameValue);
        console.log('Email submitted: ' + this.state.emailValue);
        console.log('Phone submitted: ' + this.state.phoneValue);
        console.log('Hotel submitted: ' + this.state.nameOfHotelValue);
        
        this.setState({
            nameValue: '',
            emailValue: '',
            phoneValue: 0,
            nameOfHotelValue: 'Fantastic Hotels'
        });

        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="contents">
                <TextInput label={"Name :"}
                           name="nameValue"
                           value={this.state.nameValue}
                           handleInputChange={this.handleInputChange} />
                
                <TextInput label={"Email :"}
                           name="emailValue"
                           value={this.state.emailValue}
                           handleInputChange={this.handleInputChange} />
                                
                <NumberInput label={"Phone :"}
                             name="phoneValue"
                             value={this.state.phoneValue}
                             handleInputChange={this.handleInputChange} />

                <SelectInput label={"Hotel :"}
                             name="nameOfHotelValue"
                             value={this.state.nameOfHotelValue}
                             options={this.props.hotelNameOptions}
                             handleInputChange={this.handleInputChange} />
                
                <input className="button" type="submit" value="Submit" />
            </form>
        );
    }
}

HotelBookingForm.defaultProps = {
    hotelNameOptions: [
        'Fantastic Hotels',
        'Wonderful Hotels',
        'Confortable Hotels',
        'Pretentious Hotels'
    ]
};

class TextInput extends React.Component {
    handleInputChange = (e) => {
        this.props.handleInputChange(e);
    }

    render() {
        return (
            <div>
                <div className="label">
                    {this.props.label}
                </div>
                <input className="input" 
                       type="text"
                       name={this.props.name}
                       value={this.props.value}
                       onChange={this.handleInputChange} />
            </div>
        );
    }
}

class NumberInput extends React.Component {
    handleInputChange = (e) => {
        this.props.handleInputChange(e);
    }

    render() {
        return (
            <div>
                <div className="label">
                    {this.props.label}
                </div>
                <input className="input" 
                       type="number"
                       name={this.props.name}
                       value={this.props.value}
                       onChange={this.handleInputChange} />
            </div>
        );
    }
}

class SelectInput extends React.Component {
    handleInputChange = (e) => {
        this.props.handleInputChange(e);
    }

    render() {
        return (
            <div>
                <div className="label">
                    {this.props.label}
                </div>
                <select name={this.props.name}
                        value={this.props.value}
                        onChange={this.handleInputChange}>
                        {
                            this.props.options.map(
                                (option) => <option key={option} value={option}>{option}</option>
                            )
                        }
                </select>
            </div>
        );
    }
}

ReactDOM.render(<HotelBookingForm />, document.getElementById('react-form-setup'));