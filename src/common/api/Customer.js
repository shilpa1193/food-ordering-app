import {
    LOGIN_CUSTOMER_URL,
    SIGNUP_CUSTOMER_URL
  } from "../common";
  
  /**Component which logins the customer */
  export function loginCustomer(encodedCredential) {
    return new Promise(function (resolve, reject) {
      fetch(LOGIN_CUSTOMER_URL, {
        method: "POST",
        headers: {
          Authorization: `Basic ${encodedCredential}`
        }
      })
        .then(resp => {
          let accessToken = resp.headers.get("access-token");
          localStorage.setItem("access-token", accessToken);
          resp.json().then(res => {
            return resolve(res);
          });
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  export function signUpCustomer(reqBody) {
    return new Promise(function (resolve, reject) {
      fetch(SIGNUP_CUSTOMER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(reqBody)
  
      })
        .then(resp => {
          resp.json().then(res => {
            return resolve(res);
          });
        })
        .catch(error => {
          reject(error);
        });
    });
  }