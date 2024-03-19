import { Colors } from "@/styles/color";
import { style } from "@vanilla-extract/css";

export const form_wrapper = style({
    width: "100%",
    height: "100dvh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

export const form_button = style({
    width: "fit-content",
    padding: "0.2rem 0.5rem",
    border: `solid 2px ${Colors.border.main}`,
    borderRadius: "0.6rem",
    margin: "0 0 0 auto",
    ":hover": {
        backgroundColor: Colors.background.button.hover,
    },
});

export const form_title = style({
    borderBottom: `solid 2px ${Colors.border.main}`,
    width: "fit-content",
    margin: "0 0 1rem 0"
});
