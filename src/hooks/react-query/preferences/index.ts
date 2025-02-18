import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { preferenceRouter } from "@/lib/routes/preferences";
import { UpdatePreferenceDto } from "@/lib/routes/preferences/dto/update-preference.dto";

// Fetch a single preference
export function usePreferenceQuery() {
  return useQuery({
    queryKey: ["preference"],
    queryFn: () => preferenceRouter.getPreference(),
  });
}

// Fetch all preferences
export function useAllPreferencesQuery() {
  return useQuery({
    queryKey: ["preferences"],
    queryFn: () => preferenceRouter.getAllPreferences(),
  });
}

// Update a preference
export function useUpdatePreferenceMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpdatePreferenceDto) => preferenceRouter.updatePreference(data),
    onSuccess: (updatedPreference) => {
      console.log("Preference updated", updatedPreference);

      // Invalidate queries to refetch updated preferences
      queryClient.invalidateQueries({ queryKey: ["preference"] });
      queryClient.invalidateQueries({ queryKey: ["preferences"] });
    },
    onError: (error) => {
      console.error("Failed to update preference", error);
    },
  });
}
