//import { getToken } from '~/utils/auth'
const axios = require('axios');

/**
 * This function is a wrapper for calling the API, it recieves the action to call, the request parameters
 * and a flag to send the token stored.
 */
export const APIRequest = async (action, requestOptions, includeToken) => {

    try {

        //default options for generic request
        const defaultOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({})
        };
        //overload the object with the param values if exists
        if (requestOptions) {
            Object.assign(defaultOptions, requestOptions)
        }
        Object.assign(defaultOptions.headers, { 'Access-Control-Allow-Origin': '*' });
        if (includeToken) {
            //Add token to the reuqest header
            //tbd
            //const tkn = getToken();
            // Object.assign(defaultOptions.headers,{'Authorization': 'JWT ' + tkn });
            //console.log('token assigned',tkn);


        }



        const response = await fetch(`${process.env.APIURL}/` + action, defaultOptions);
        const resp = await response;
        if (!resp.ok) {
            console.log('Response went no OK', resp.text());
            return { APIerror: 'Service Unavailable' };
        }


        return response.text().then(text => {
            return text && JSON.parse(text);
        });



    }
    catch{

        return { APIerror: 'Service Unavailable' };
    }


}


export const RefreshTokens = async () => {



}


