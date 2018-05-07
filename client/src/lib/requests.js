const DOMAIN = "http://localhost:3001";

async function getPlayers() {
  const request = await fetch(`${DOMAIN}/players`);
  const data = await request.json();
  return data;
}

export default { getPlayers };
