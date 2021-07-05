const IP = 'http://localhost:3001'

export default {

  async Login(accountName, password) {

    let data = JSON.stringify({
      email: accountName,
      password: password,
    });

    let requestOptions = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: data,
    };

    let request = fetch(IP, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
      })
      .catch((err) => console.log(err))

    return request;
  }
};