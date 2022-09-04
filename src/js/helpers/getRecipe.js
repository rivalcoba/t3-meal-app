export default (client, url)=>{
  return client.get(url).then(res => {
    let meals = res.data.meals
    return meals[0];
  })
}