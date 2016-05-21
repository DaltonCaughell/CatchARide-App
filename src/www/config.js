var Config = {
    API: {
        Protocol: "http://",
        Host: "localhost:3000",
        Version: "/api/v1",
        Base: ""
    },
    DOM: {
        LoadingOverlay: 'loadingOverlay'
    },
    CONST: {
        InternalError: 'Internal Error',
        IncorrectEmailPassword: 'Incorrect Email/Password'
    }
};

Config.API.Base = Config.API.Protocol + Config.API.Host + Config.API.Version;

Config.API.Endpoints = {
    User: {
        GetProductJSON: Config.API.Base + "/user/me",
    },
    Auth: {
        Login: Config.API.Base + "/auth/login",
        Create: Config.API.Base + "/auth/create"
    }
};
