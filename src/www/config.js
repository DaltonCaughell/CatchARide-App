var Config = {
    API: {
        Protocol: "http://",
        //Host: "localhost:3000",
        Host: "192.168.1.9:3000",
        //Host: "app.daltoncaughell.com:3000",
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
        Me: Config.API.Base + "/user/me",
        AddCar: Config.API.Base + "/user/addcar"
    },
    Auth: {
        Login: Config.API.Base + "/auth/login",
        Create: Config.API.Base + "/auth/create"
    },
    Parking: {
        All: Config.API.Base + "/parking/all"
    },
    Schedule: {
        Search: Config.API.Base + "/schedule/search",
        Me: Config.API.Base + "/schedule/me"
    },
    Chat: {
        Messages: Config.API.Base + "/chat/messages",
        Send: Config.API.Base + "/chat/send"
    }
};
