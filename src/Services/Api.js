const Api = {
    base : "http://pizza.softcob.com/api/",

    call : (method, param) =>  {
        
        return new Promise((resolve, reject) => {
            fetch(Api.base + '/' + method).then(res => resolve(res.json())).catch(err => reject(err))
        })
    },
products : () => {
    return Api.call('menu.php')
},
}





export default Api