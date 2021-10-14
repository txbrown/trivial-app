import he from "he";

export const cleanString = (s: string) => he.decode(s);
