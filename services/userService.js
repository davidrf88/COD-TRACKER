import { APIRequest  } from '~/utils/APIWrapper'


export const login = async (commit, username, password) => {
    
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: username, password: password })
    };
  
  
  
    const resp = await APIRequest("account/logging", requestOptions, false);
    const response = await resp;
   console.log(response);
  
    if (response.APIerror) {
      //error
      //commit("loginFailure", { message: "API ERROR" });
      return null;
    }
    //check if login succeed
    if (response.return_code != "200") {
      //error
      //commit("loginFailure", { message: response.message });
      return null;
    }
    //no error
  
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    //sessionStorage.setItem("token", JSON.stringify(response.jwt));
    //sessionStorage.setItem("refreshtoken", JSON.stringify(response.refreshJwt));
    //commit("loginSuccess", response);
    //var dcodedtkn = setToken(response.jwt,response.refreshJwt);
    return dcodedtkn;
  };
  