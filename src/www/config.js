var Config = {
    API: {
        Protocol: "http://",
        Host: "localhost:3000",
        Version: "/api/v1",
        Base: ""
    },
    DOM: {
        LoadingOverlay: 'loadingOverlay'
    }
};

Config.API.Base = Config.API.Protocol + Config.API.Host + Config.API.Version;

Config.API.Endpoints = {
    User: {
        GetProductJSON: Config.API.Base + "/user/me",
    }
};
