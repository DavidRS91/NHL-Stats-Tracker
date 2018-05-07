const DOMAIN = "http://localhost:3001";

async function rootRequest() {
  const request = await fetch(DOMAIN);
  const data = await request.json();
  console.log(data);
  return data;
}

export default { rootRequest };
