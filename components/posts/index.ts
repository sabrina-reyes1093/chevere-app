import type { ComponentType } from "react";
import WorldCupMood from "./WorldCupMood";
import MyCurrentObsessions from "./MyCurrentObsessions";
import HorrorGenZ from "./HorrorGenZ";

// Maps a post slug (from data/posts.ts) to the component that renders its body.
// When you publish a new post, add its body component here.
export const postBodies: Record<string, ComponentType> = {
  "horror-gen-z": HorrorGenZ,
  "world-cup-mood": WorldCupMood,
  "my-current-obsessions": MyCurrentObsessions,
};
