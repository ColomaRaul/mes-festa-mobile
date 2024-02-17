export interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    token: string | null;
    errorMessage: string;
    name: string;
    email: string;
    roles: string[] | null;
}

type AuthAction =
    | { type: 'logIn', payload: { token: string, name: string, roles: string[], email: string } }
    | { type: 'addError', payload: string }
    | { type: 'removeError' }
    | { type: 'notAuthenticated' }
    | { type: 'logOut' }


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'addError':
            return {
                ...state,
                errorMessage: action.payload,
                status: 'not-authenticated'
            }
        case 'removeError':
            return {
                ...state,
                errorMessage: ''
            }
        case 'logIn':
            return {
                ...state,
                token: action.payload.token,
                name: action.payload.name,
                roles: action.payload.roles,
                email: action.payload.email,
                status: 'authenticated'
            }
        case 'notAuthenticated':
        case 'logOut':
            return {
                ...state,
                status: 'not-authenticated',
                token: null,
                name: '',
                roles: null,
                email: ''
            }
        default:
            return state;
    }
}
