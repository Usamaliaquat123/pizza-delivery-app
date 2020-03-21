// const http = require('http')
const Api = {
  base: 'http://pizza.softcob.com/api/',

  call: (method, param) => {
    return new Promise((resolve, reject) => {
      if(param == "auth"){
       fetch(Api.base + '/' + method)
        .then(res => resolve(res.json()))
        .catch(err => reject(err));
      }else{
      fetch(Api.base + '/' + method)
        .then(res => resolve(res.json()))
        .catch(err => reject(err));
      }
    });
  },
  post: (method, params) => {
    return new Promise((resolve, reject) => {
      fetch(Api.base + '/' + method, {
        method: 'POST',
        headers: new Headers({
             'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
    }),
        body: params,
      }).then(res => {
        resolve(res.json());
      }).catch(err => console.log(err));
    });
  },
  products: () => {
    return Api.call('menu.php');
  },

cart: params => {
  const prm = `user_id=${params.customer_id}&customer_address=${params.customer_address}&order_status=order_submitted&order_items=[${params.order_items}]`
    return Api.post('insert_orders.php', prm);
  },
register: params => {
    const prm = `username=${params.username}&phone=${params.phone}&adress=${params.address}&password=${params.password}`
    return Api.post('user_insert.php', prm);
  },
fetchUser : params => {
    return Api.call('fetch_user.php', "auth")
  },
PreviousOrders : params => {
  return Api.call('fetch_orders.php')
},
login : params => {
  const prm  = `phone=${params.phone}&password=${params.password}`  
  return Api.post('login_api.php',prm)
}
};

export default Api;
