

export default async function getAlldata() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  return result.json();
}
