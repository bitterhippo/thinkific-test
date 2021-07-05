import React from 'react';

const IP = ''

export default {

  async Login(accountName, passWord, callback) {

    let data = JSON.stringify({
      email: accountName,
      password: passWord,
    });

    let requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": " application/json"
      },
      body: data,
    };

    let request = fetch(IP, requestOptions)
      .then(response => response.text())
      .then(result => {
        callback({
          token: JSON.parse(result),
          accountInfo: JSON.parse(atob(result.split('.')[1]))
        }
        )
      })
      .catch((err) => console.log(err))

    return request;
  }
};