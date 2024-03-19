import { globalStyle } from "@vanilla-extract/css";
import { Colors } from "./color";
import { mediaQueryScreen } from "./queries";

globalStyle(`body`, {
    backgroundColor: Colors.background.body,
    color: Colors.text.main,
});

globalStyle("p, button, td", {
    fontSize: "small",

    "@media": {
        [mediaQueryScreen("md")]: {
            fontSize: "medium",
        },
    },
});

globalStyle("h2", {
    fontSize: "large",

    "@media": {
        [mediaQueryScreen("md")]: {
            fontSize: "x-large",
        },
    },
});

globalStyle("h1", {
    fontSize: "x-large",

    "@media": {
        [mediaQueryScreen("md")]: {
            fontSize: "xx-large",
        },
    },
});

globalStyle("body button", {
    cursor: "pointer",
});

globalStyle("form", {
    display: "flex",
    padding: "1rem",
    margin: "1rem",
    background: "#fff",
    border: `solid 2px ${Colors.border.main}`,
    flexDirection: "column",
    borderRadius: "0.6rem",
    width: "fit-content",
    gap: "1rem",
});

globalStyle("input", {
    border: `solid 2px ${Colors.border.main}`,
    borderRadius: "0.6rem",
    background: "#fff",
    padding: "0.3rem",
    fontSize: "x-small",
    minWidth: "240px",

    "@media": {
        [mediaQueryScreen("md")]: {
            fontSize: "small",
        },
    },
});
