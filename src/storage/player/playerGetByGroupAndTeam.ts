import { playersGetByGroup } from "./playersGetByGroup";

export async function playersGetByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await playersGetByGroup(group);

    const playersFiltered = storage.filter((player) => player.team === team);

    return playersFiltered;
  } catch (error) {
    throw error;
  }
}
