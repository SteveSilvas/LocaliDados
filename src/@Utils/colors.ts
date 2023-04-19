import { getTheme } from "./getTheme";

export const getColors = () => {
    const theme = getTheme();
    const fontColor = theme === "light" ? "black" : "white";
    const bgColor = theme === "light" ? "white" : "black";

    return theme == 'light' ? lightColors : darkColors;
};

const lightColors = {
    primary0: "#0FC2C0",
    primary1: "#0CABA8",
    primary2: "#008F8C",
    primary3: "#015958",
    primary4: "#023535",
    background: "white",
    font: "black",
};

const darkColors = {
    primary0: "#023535",
    primary1: "#015958",
    primary2: "#008F8C",
    primary3: "#0CABA8",
    primary4: "#0FC2C0",
    background: "black",
    font: "white",
};

export default { lightColors, darkColors };
