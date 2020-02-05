import axiosVigenere from "../../axiosVigenere";

export const ENCODE_MESSAGE_REQUEST = 'ENCODE_MESSAGE_REQUEST';
export const ENCODE_MESSAGE_SUCCESS = 'ENCODE_MESSAGE_SUCCESS';
export const ENCODE_MESSAGE_FAILURE = 'ENCODE_MESSAGE_FAILURE';

export const DECODE_MESSAGE_REQUEST = 'DECODE_MESSAGE_REQUEST';
export const DECODE_MESSAGE_SUCCESS = 'DECODE_MESSAGE_SUCCESS';
export const DECODE_MESSAGE_FAILURE = 'DECODE_MESSAGE_FAILURE';

export const UPDATE_ENCODED_MESSAGE = 'UPDATE_ENCODED_MESSAGE';
export const UPDATE_DECODED_MESSAGE = 'UPDATE_DECODED_MESSAGE';

export const encodeRequest = () => ({type: ENCODE_MESSAGE_REQUEST});
export const encodeSuccess = message => ({type: ENCODE_MESSAGE_SUCCESS, message});
export const encodeFailure = error => ({type: ENCODE_MESSAGE_FAILURE});

export const decodeRequest = () => ({type: DECODE_MESSAGE_REQUEST});
export const decodeSuccess = message => ({type: DECODE_MESSAGE_SUCCESS, message});
export const decodeFailure = error => ({type: DECODE_MESSAGE_FAILURE});

export const updateEncodedMessage = value => ({type: UPDATE_ENCODED_MESSAGE, value});
export const updateDecodedMessage = value => ({type: UPDATE_DECODED_MESSAGE, value});

export const decodeMessage = data => {
    return async (dispatch) => {
        dispatch(decodeRequest());

        try {
            const response = await axiosVigenere.post('./decode', data);
            dispatch(decodeSuccess(response.data.decoded));
        } catch (e) {
            dispatch(decodeFailure(e));
        }
    }
};

export const encodeMessage = data => {
    return async (dispatch) => {
        dispatch(encodeRequest());

        try {
            const response = await axiosVigenere.post('./encode', data);
            dispatch(encodeSuccess(response.data.encoded));
        } catch (e) {
            dispatch(encodeFailure());
        }
    }
};
