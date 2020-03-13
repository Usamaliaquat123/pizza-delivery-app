// const http = require('http')
const Api = {
  base: 'http://pizza.softcob.com/api/',

  call: (method, param) => {
    return new Promise((resolve, reject) => {
      fetch(Api.base + '/' + method)
        .then(res => resolve(res.json()))
        .catch(err => reject(err));
    });
  },
  post: (method, params) => {
    return new Promise((resolve, reject) => {
      fetch(Api.base + '/' + method, {
        method: 'POST',
        body: JSON.stringify({
          username: params.username,
          phone: params.contact,
          adress: params.address,
          password: params.pass
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then(res => {
        resolve(res.json());
      }).catch(err => console.log(err));
    });
  },
  products: () => {
    return Api.call('menu.php');
  },

  cart: params => {
    const parm = {
       user_id: params.user_id,
          item_id: params.item_id,
          quantity: params.quantity,
    }
    return Api.post('insert_orders.php', parm);
  },
  
  createUser: params => {
    //  const parm = {
    //      username: params.username,
    //       phone: params.contact,
    //       adress: params.address,
    //       password: params.pass,
    // }
    return Api.post('user_insert.php', params);
  }
};

export default Api;
