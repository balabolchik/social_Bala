import style from "./Status.module.css";
import React from "react";

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.uppdateUserStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevStatus) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    
    render() {
        return (
            <div className={style.status}>
                {!this.state.editMode ? (
                    <div onDoubleClick={this.activateEditMode}>
                        <p>{this.props.status || '--------'}</p>
                    </div>
                ) : (
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>
                )}
            </div>
        );
    }
}

export default Status;
