//GET
// async function getData(url) {

// const response = await fetch(url,  {
//   method: 'GET',
//   headers: {
//     'Content-type': 'application/json'
//   }
// });
// if(!response.ok) throw Error(response.status);
// return response.json()
     
// }
// getData('https://jsonplaceholder.typicode.com/posts')
// .then(console.log)
// .catch(console.log);

//POST
// async function getPostData(url, data) {

//   const response = await fetch(url,  {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   if(!response.ok) throw Error(response.status);
//   return response.json()
       
//   }
//   getPostData('https://jsonplaceholder.typicode.com/posts', {
//     title: 'Привет Мир!',
//     discription: 'Сегодня ми учим крутие технологии работи с сервером',
//     userID: 1
//   })
//   .then(console.log)
//   .catch(console.log);

//PUT
// async function getPutData(url, data) {

//   const response = await fetch(url,  {
//     method: 'PUT',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   if(!response.ok) throw Error(response.status);
//   return response.json()
       
//   }
//   getPutData('https://jsonplaceholder.typicode.com/posts/1', {
//      title: 'Привет Мир!',
//      discription: 'Сегодня ми учим крутие технологии работи с сервером',
//     userID: 99
//   })
//   .then(console.log)
//   .catch(console.log);

//PATCH
// async function getPatchData(url, data) {

//   const response = await fetch(url,  {
//     method: 'PATCH',
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(data)
//   });
//   if(!response.ok) throw Error(response.status);
//   return response.json()
       
//   }
//   getPatchData('https://jsonplaceholder.typicode.com/posts/1', {
//     title: 'Привет Мир!',
//     discription: 'Сегодня ми учим крутие технологии работи с сервером',
//     userID: 99
//   })
//   .then(console.log)
//   .catch(console.log);

//DELETE

// async function getDeleteData(url) {

//   const response = await fetch(url,  {
//     method: 'DELETE',
    
//   });
//   if(!response.ok) throw Error(response.status);
//   return true
       
//   }
//   getDeleteData('https://jsonplaceholder.typicode.com/posts/1') 
//   .then(console.log)
//   .catch(console.log);
 
//Creat => POST
//Read => GET
//Update => PUT / PUTCH
//Delete => DELETE