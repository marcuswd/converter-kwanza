import React from 'react'

const Transferwise = ({moeda}) => {
  
  var bearer = 'Bearer 46d5a73e-5eaa-4de7-92cf-900ea15c4f82';
               
  fetch("https://api.sandbox.transferwise.tech/v1/rates?source=EUR&target=USD", {
    method: 'GET',
    withCredentials: true,
    credentials: 'include',
    headers: {
      'Authorization': bearer,
    }})
    .then( (response) =>{
      response.json();
    }
  )

  return (
    <div>
      {moeda}
    </div>
  )
}

export default Transferwise
