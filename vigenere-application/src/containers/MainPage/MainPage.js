import React, {Component, Fragment} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {FaArrowDown, FaArrowUp} from "react-icons/fa";
import {connect} from "react-redux";

import {encodeMessage, decodeMessage, updateEncodedMessage, updateDecodedMessage} from '../../store/actions/actions';

import './MainPage.css';

class MainPage extends Component {
    state = {
        password: ""
    };

    encode = e => {
      e.preventDefault();
      if (!this.state.password) {
          alert('Take a note: it will not work without a password!');
      } else {
          this.props.encodeMessage({message: this.props.decoded, password: this.state.password});
      }
    };

    decode = e => {
        e.preventDefault();
        if (!this.state.password) {
            alert('Care to enter a password to get it decipher?');
        } else {
            this.props.decodeMessage({message: this.props.encoded, password: this.state.password});
        }
    };

    inputChangeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        return (
            <Fragment>
                <div className="wrapper">
                    <h2>Vigenere Ciphering/Deciphering Page</h2>
                    <Form>
                        <FormGroup className="formGroup">
                            <Label for="decoded">Decoded message</Label>
                            <Input
                                type="textarea"
                                name="decoded"
                                id="decoded"
                                value={this.props.decoded}
                                onChange={(e) => this.props.updateDecodedMessage(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup className="formGroup">
                            <Label for="password">Password</Label>
                            <Input
                                type="text"
                                name="password"
                                id="password"
                                required
                                placeholder="Enter a password"
                                onChange={this.inputChangeHandler}
                            />
                            <Button
                                className="btn-arrow"
                                onClick={(e) => this.encode(e)}
                            >
                                <FaArrowDown />
                            </Button>
                            <Button
                                className="btn-arrow"
                                onClick={(e) => this.decode(e)}
                            >
                                <FaArrowUp />
                            </Button>
                        </FormGroup>
                        <FormGroup className="formGroup">
                            <Label for="encoded">Encoded message</Label>
                            <Input
                                type="textarea"
                                name="encoded"
                                id="encoded"
                                value={this.props.encoded}
                                onChange={(e) => this.props.updateEncodedMessage(e.target.value)}
                            />
                        </FormGroup>
                    </Form>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return ({
        password: state.password,
        encoded: state.encoded,
        decoded: state.decoded,
    })
};

const mapDispatchToProps = dispatch => ({
    encodeMessage: (data) => dispatch(encodeMessage(data)),
    decodeMessage: (data) => dispatch(decodeMessage(data)),
    updateEncodedMessage: (value) => dispatch(updateEncodedMessage(value)),
    updateDecodedMessage: (value) => dispatch(updateDecodedMessage(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);