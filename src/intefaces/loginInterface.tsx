export interface LoginRequest {
    email:    string;
    password: string;
}

export interface LoginResponse {
    id:           string;
    email:        string;
    name:         string;
    roles:        string[];
    access_token: string;
}

export interface LoginResponseError {
    message: string | string[];
    error:  string;
    statusCode: number;
}
