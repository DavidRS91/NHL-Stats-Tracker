const DOMAIN = "https://statsapi.web.nhl.com";
const TEAMS_ENDPOINT = "api/v1/teams/";
const PLAYERS_ENDPOINT = "api/v1/people/";
const PLAYER_STATS_ENDPOINT = "?expand=person.stats&stats=yearByYear";

async function getTeams() {
  const teamsRequest = await fetch(`${DOMAIN}/${TEAMS_ENDPOINT}`);
  const teamsData = await teamsRequest.json();
  return teamsData.teams;
}
