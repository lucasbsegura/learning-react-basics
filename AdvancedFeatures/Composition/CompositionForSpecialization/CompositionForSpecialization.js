class CustomDialog extends React.Component {
    render() {

        var color = 'green';
        if (this.props.dialogtype == "warning") {
            color = 'orange';
        } else if (this.props.dialogtype == "error") {
            color = 'red';
        }

        return (
            <div className={'bt bt-' + color + ' bg-' + color}>
                <h3 className="dialog-title">{this.props.title}</h3>
                <div className="dialog-message">{this.props.message}</div>
            </div>
        );
    }
}

class OkDialog extends React.Component {
    render() {
        return (
            <div>
                <CustomDialog dialogtype='ok' 
                              title="Success"
                              message="Your operation was completed successfully!">
                </CustomDialog>
            </div>
        );
    }
}

class WarningDialog extends React.Component {
    render() {
        return (
            <div>
                <CustomDialog dialogtype='warning'
                              title="Warning!"
                              message="Your operation was completed but there were a few errors!">
                </CustomDialog>
            </div>
        );
    }
}

class ErrorDialog extends React.Component {
    render() {
        return (
            <div>
                <CustomDialog dialogtype='error'
                              title="Error!"
                              message="Your operation has errors!">
                </CustomDialog>
            </div>
        );
    }
}

ReactDOM.render(<ErrorDialog />, document.getElementById('react-composition-specialization'));