import {
    GET_ADDRESS_CUSTOMER_URL,
    GET_STATES_URL,
    ADD_ADDRESS_URL
  } from "../common";
  
  export function getAddressCustomer(accessToken) {
    return new Promise(function (resolve, reject) {
      fetch(GET_ADDRESS_CUSTOMER_URL, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
        .then(resp => {
          if (resp.status === 403) {
            return resolve("authorization exception");
          } else {
            resp.json().then(res => {
              return resolve(res);
            });
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  
  export function getStates() {
    return new Promise(function (resolve, reject) {
      fetch(GET_STATES_URL, {
        method: "GET"
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
  
  export function addAddress(reqBody, accessToken) {
    return new Promise(function (resolve, reject) {
      fetch(ADD_ADDRESS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`
        },
        body: JSON.stringify(reqBody)
      })
        .then(resp => {
          if (resp.status === 403) {
            return resolve("authorization exception");
          } else {
            resp.json().then(res => {
              return resolve(res);
            });
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  }