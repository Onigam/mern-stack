import fetch from 'isomorphic-fetch';

export const API_URL = 'http://localhost:3000/api';

export default async (endpoint, method = 'get', body) => {
  const headers = {
    'content-type': 'application/json'
  };

  const token = localStorage.getItem('token');

  if (token) {
    headers.authorization = `bearer ${token}`;
  }

  return fetch(`${API_URL}/${endpoint}`, {
    headers,
    method,
    body: JSON.stringify(body),
  })
    .then(response => response.json().then(json => ({ json, response })))
    .then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json);
      }

      return json;
    })
    .then(
      response => response,
      error => error
    );
}

export const extractErrorMessage = (res) => {
  let error = "";

  if (typeof res === "string") {
    error = res;
  } else if (res.error) {
    error = res.error.message;
  } else if (res.errors) {
    error = res.errors.map(bodyError => bodyError.msg).join(', ');
  }

  return error;
}