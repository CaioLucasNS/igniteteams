import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";

import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(
  newPLayer: PlayerStorageDTO,
  group: string
) {
  try {
    /**
     * @ignite-teams:players-group
     * >> @ignite-teams:players-exampleGroup: [players]
     */
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, "");
  } catch (error) {
    throw error;
  }
}
