import { Colors } from "@/styles/color";
import { style } from "@vanilla-extract/css";

export const main_wrapper = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100dvh",
    gap: "1rem",
});

export const form_wrapper = style({
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
    width: "fit-content",
});

export const form = style({
    display: "flex",
    padding: "1rem",
    margin: "1rem",
    background: "#fff",
    border: `solid 2px ${Colors.border.main}`,
    flexDirection: "column",
    borderRadius: "0.6rem",
    width: "fit-content",
    gap: "1rem",
})