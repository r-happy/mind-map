import { Colors } from "@/styles/color";
import { style } from "@vanilla-extract/css";

export const center = style({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100dvh",
    gap: "1rem",
    padding: "1rem",
});

export const wrapper = style({
    padding: "1rem",
    width: "fit-content",
    height: "fit-content",
    background: "#fff",
    borderRadius: "0.6rem",
    border: `solid 2px ${Colors.border.main}`,
});

export const add_spaces_button = style({
    width: "fit-content",
    padding: "0.2rem 0.5rem",
    border: `solid 2px ${Colors.border.main}`,
    borderRadius: "0.6rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    margin: "0.6rem 0.6rem 0.6rem auto",
    ":hover": {
        backgroundColor: Colors.background.button.hover,
    },
});
