export class ApiService {

  post(data) {
    let url = new URL(`https://reqres.in/api/login`);
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      return response.json().then(body => {
          if (response.status === 200) {
            return body.token
          } else {
            throw body.error
          }
      })
    }).catch(err=>err)
  }
}

export default new ApiService();