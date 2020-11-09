const responseHandler = ({title, payloadKey, routerResp, onDbSuccess}) => {

    const response = {
        success: false,
        message: '',
        payload: {},
    }
    
    return {
        dbResp: (resp) => {
            response.success = !!resp;
            response.message = !!resp ? `${title} success.`: `${title} error.`;
            response.payload = {
                ...{ [payloadKey]: resp }
            };

            onDbSuccess && onDbSuccess(resp);

            return routerResp.json((response));
        },
        manualResp: (success, message, payload={}) => {
            response.success = success;
            response.message = `${title}: ${message}`;
            response.payload = payload;
            return routerResp.json((response));
        },
        dbError: (err) => {
            response.success = false;
            response.message = `Database Error: ${err}`;
            return routerResp.json((response));
        },
    }
}


module.exports = responseHandler;