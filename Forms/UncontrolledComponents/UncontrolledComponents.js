class HotelBookingForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
        this.nameOfHotelRef = React.createRef();
    }

    handleSubmit = (e) => {
        e.preventDefault();

        alert('Are you sure you eant to proceed with the booking? ' + this.nameOfHotelRef.current.value);

        console.log('Name: ' + this.nameRef.current.value.toUpperCase());
        console.log('Email: ' + this.emailRef.current.value);
        console.log('Hotel: ' + this.nameOfHotelRef.current.value);
    }

    render() {
        return (
            <form className="contents" onSubmit={this.handleSubmit}>
                <div className="label">Name:</div>
                <input className="input"
                       ref={this.nameRef} />

                <div className="label">Email:</div>
                <input className="input"
                       ref={this.emailRef} />

                <div className="label">Hotel:</div>
                <select ref={this.nameOfHotelRef} defaultValue="Confortable Hotels">
                    <option value="Fantastic Hotels">Fantastic Hotels</option>
                    <option value="Wonderful Hotels">Wonderful Hotels</option>
                    <option value="Confortable Hotels">Confortable Hotels</option>
                    <option value="Pretentious Hotels">Pretentious Hotels</option>
                </select>

                <input className="button" type="submit" value="Submit" />
            </form>
        );
    }
}


ReactDOM.render(<HotelBookingForm />, document.getElementById('outer'));