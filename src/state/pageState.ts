import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

// const isMuted = localStorage.getItem("isMuted") === "true" ? true : false;
export const pageAtom = atom<number>(0);
export const isMutedAtom = atomWithStorage<boolean>("isMuted", false);
export const musicStatusAtom = atom<boolean>(false);
