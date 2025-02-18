import { RESTServerRoute } from "@/lib/routes/server";
import { createFetcher } from "@/lib/utils";
import {
  UpdatePreferenceDto
} from "@/lib/routes/preferences/dto/update-preference.dto";
import {
  Preference
} from "@/lib/routes/preferences/interfaces/preference.interface";

export class preferenceRouter {
  public static updatePreference = createFetcher<Preference, UpdatePreferenceDto>(RESTServerRoute.REST_PREFERENCE, "POST");
  public static getPreference = createFetcher<Preference, undefined >(RESTServerRoute.REST_PREFERENCES, "GET");
  public static getAllPreferences = createFetcher<Preference[], undefined>(RESTServerRoute.REST_PREFERENCES_ALL, "GET");
}
