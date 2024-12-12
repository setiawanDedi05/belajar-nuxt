import { LineUp } from "../types/lineup";

export default defineCachedEventHandler(
  async (event) => {
    try {
      const data = await $fetch<LineUp>(
        "https://contentcdn.visionplus.id/v1/lineup"
      );
      return data;
    } catch (error) {
      return [];
    }
  },
  {
    base: "lineup",
    getKey: () => "lineup",
    shouldBypassCache: () => false,
    maxAge: 1000 * 60 * 60 * 24,
    staleMaxAge: 1000 * 60 * 60 * 24 * 7,
  }
);
