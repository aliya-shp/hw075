import {
    ENCODE_MESSAGE_REQUEST,
    ENCODE_MESSAGE_SUCCESS,
    ENCODE_MESSAGE_FAILURE,
    DECODE_MESSAGE_REQUEST,
    DECODE_MESSAGE_SUCCESS,
    DECODE_MESSAGE_FAILURE,
    UPDATE_ENCODED_MESSAGE,
    UPDATE_DECODED_MESSAGE
} from "../actions/actions";

const initialState = {
    password: '',
    encoded: '',
    decoded: '',
    error: null,
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case ENCODE_MESSAGE_REQUEST:
            return {
                ...state
            };
        case ENCODE_MESSAGE_SUCCESS:
            return {
                ...state,
                encoded: action.encoded,
                error: null,
            };
        case ENCODE_MESSAGE_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        case DECODE_MESSAGE_REQUEST:
            return {
                ...state
            };
        case DECODE_MESSAGE_SUCCESS:
            return {
                ...state,
                decoded: action.decoded,
                error: null,
            };
        case DECODE_MESSAGE_FAILURE:
            return {
                ...state,
                error: action.error,
            };
        case UPDATE_ENCODED_MESSAGE:
            return {
                ...state,
                encoded: action.value,
            };
        case UPDATE_DECODED_MESSAGE:
            return {
                ...state,
                decoded: action.value,
            };
        default:
            return state;
    }
};

export default reducers;