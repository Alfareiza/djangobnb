// Responsible for communication with API
const apiService = {
    get: async function (url: string): Promise<any> {
        console.log('Obtaining data [GET] from ', url);

        return new Promise((resolve, reject) =>{
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then((json) => {
                    console.log('Response of GET ->', json);
                    resolve(json);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    },

   post: async function(url: string, data: any): Promise<any>{
        console.log(`Requesting data=${JSON.stringify(data)} [POST] to url=${url}`, );
        return new Promise((resolve, reject) =>{
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then((json) => {
                    console.log('Response of POST ->', json);
                    resolve(json);
                })
                .catch((error) => {
                    reject(error);
                })
        })
   }
}
export default apiService;