class DataSource{
  static searchCat(keyword){
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=sibe${keyword}`)
    .then(response => {
      return response.json();
    })
    .then(responseJson =>{
      if (responseJson.teams){
        return Promise.resolve(responseJson.teams);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
  
    });
  }
  }
  export default DataSource;
  