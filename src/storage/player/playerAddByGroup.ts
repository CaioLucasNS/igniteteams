import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { playersGetByGroup } from "./playersGetByGroup";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(
  newPLayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name === newPLayer.name
    );

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Essa pessoa já faz pate de um time aqui.");
    }

    const storage = JSON.stringify([...storedPlayers, newPLayer]);

    /**
     * @ignite-teams:players-group
     * >> @ignite-teams:players-exampleGroup: [players]
     */
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
