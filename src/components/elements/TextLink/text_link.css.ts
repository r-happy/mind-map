import { style } from "@vanilla-extract/css";

export const main = style({
  textDecoration: "underline",

  ":hover": {
    textDecoration: "none",
  },
});
