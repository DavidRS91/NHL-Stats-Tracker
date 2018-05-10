const DOMAIN = "http://localhost:3001";

async function getPlayers() {
  const request = await fetch(`${DOMAIN}/players`);
  const data = await request.json();
  return data;
}

async function getPlayer(id) {
  const req = await fetch(`${DOMAIN}/players/${id}`);
  const res = await req.json();
  return res;
}

async function getPlayerStats(id) {
  const req = await fetch(`${DOMAIN}/stats/${id}`);
  const res = await req.json();
  return res;
}

export default { getPlayers, getPlayer, getPlayerStats };
