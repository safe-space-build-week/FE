import { LOGIN_START } from '../actions';

import React from 'react';
import { LOGIN_START } from '../actions';

const initialState = {
    messages: [],
    loggingIn: false,
    error: ''
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
            }

        default:
            return state;
    }
}