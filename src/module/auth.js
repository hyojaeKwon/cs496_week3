import produce from 'immer';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export const changeField = ( form, key, value) => ({
    type: CHANGE_FIELD,
    payload: { form, key, value }
});

export const initializeForm = ( form ) => ({
    type: INITIALIZE_FORM,
    payload: form,
})

const initialState = {
    signup: {
        id: '',
        name: '',
        password: '',
        passwordConfirm: '',
    },
    signin: {
        id: '',
        password: '',
    },
}

const auth = (state = initialState, action ) => {
    switch( action.type ) {
        case CHANGE_FIELD: {
            const { form, key, value } = action.payload;
            if (form === 'signup')
                return produce(state, draft => {
                    draft.signup[key] = value;
                })
            else
                return produce(state, draft => {
                    draft.signin[key] = value;
                });
        }
        case INITIALIZE_FORM: {
            const form = action.payload;
            if (form === 'signup')
                return {
                    ...state,
                    signin: initialState.signup,
                }
            else
                return {
                    ...state,
                    login: initialState.signin,
                }
        }
        default:
            return initialState;
    }
}

export default auth;

