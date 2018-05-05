const DOMAIN = "https://statsapi.web.nhl.com";
const TEAMS_ENDPOINT = "api/v1/teams";
const PLAYERS_ENDPOINT = "api/v1/people";
const PLAYER_STATS_ENDPOINT = "?expand=person.stats&stats=yearByYear";

async function getTeams() {
  const teamsRequest = await fetch(`${DOMAIN}/${TEAMS_ENDPOINT}`);
  const teamsData = await teamsRequest.json();
  return teamsData.teams;
}

async function getAllPlayers() {
  const teams = await getTeams();
  let players = [];
  for (const team of teams) {
    const teamRequest = await fetch(`${DOMAIN}/${team.link}/roster`);
    const teamData = await teamRequest.json();
    players.push(...teamData.roster);
  }
  return players;
}

export default { getTeams, getAllPlayers };
