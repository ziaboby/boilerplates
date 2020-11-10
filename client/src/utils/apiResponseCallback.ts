import { Dispatch } from 'react';
import { ResponseErrorType, CallbackSuccessType, CallbackFailureType, ActionType } from '../typing';

export const onSuccess = (
    dispatch: Dispatch<ActionType>,
    type: string
): CallbackSuccessType => payload => dispatch({ type, payload });

export const onFailure = (
    dispatch: Dispatch<ActionType>,
    type: string
): CallbackFailureType => err => {
    const error: ResponseErrorType = err.code
        ? Object.assign({}, err)
        : { code: null, message: err.message };
    dispatch({ type, error });
};
