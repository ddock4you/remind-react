import { atom } from "recoil";
import { IsLight } from "../types/theme";

export const selectTheme = atom<IsLight>({
    key: "theme",
    default: true,
});
