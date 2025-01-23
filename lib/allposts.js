// export default async function getAlldata() {
//   const result = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return result.json();
// }


export default async function postData() {
    const postdataResult = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    return postdataResult.json()
    
}