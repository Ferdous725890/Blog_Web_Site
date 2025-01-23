// export default async function getAlldata() {
//   const result = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return result.json();
// }


export default async function getAlldata() {
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }
      return await result.json();
    } catch (error) {
      console.error("Failed to fetch data:", error);
      return []; // Return an empty array or a fallback value
    }
  }
  