import data from "./tokens/design-tokens.json";

declare global {
  type designToken = typeof data;
}