var Config = {
    API: {
        Protocol: "http://",
        //Host: "localhost:3000",
        Host: "192.168.1.6:3000",
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
        AddCar: Config.API.Base + "/user/addcar",
        Update: Config.API.Base + "/user/me",
        UpdateCar: Config.API.Base + "/user/car"
    },
    Auth: {
        Login: Config.API.Base + "/auth/login",
        Create: Config.API.Base + "/auth/create",
        Password: Config.API.Base + "/auth/password"
    },
    Parking: {
        All: Config.API.Base + "/parking/all"
    },
    Schedule: {
        Search: Config.API.Base + "/schedule/search",
        Me: Config.API.Base + "/schedule/me",
        Ride: Config.API.Base + "/schedule/ride",
        Available: Config.API.Base + "/schedule/available",
        Join: Config.API.Base + "/schedule/join",
        AcceptPassenger: Config.API.Base + "/schedule/acceptpassenger",
        RejectPassenger: Config.API.Base + "/schedule/rejectpassenger",
        Rider: Config.API.Base + "/schedule/rider",
        Leave: Config.API.Base + "/schedule/leave"
    },
    Chat: {
        Messages: Config.API.Base + "/chat/messages",
        Send: Config.API.Base + "/chat/send",
        Rate: Config.API.Base + "/chat/rate",
        RequestCash: Config.API.Base + "/chat/requestcash",
        CashRequestAccept: Config.API.Base + "/chat/cashrequestaccept",
        CashRequestReject: Config.API.Base + "/chat/cashrequestreject"
    }
};
