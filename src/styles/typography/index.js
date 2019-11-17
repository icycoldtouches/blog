import Typography from "typography";
import elkGlenTheme from "typography-theme-elk-glen";

elkGlenTheme.baseFontSize = "20px";
elkGlenTheme.baseLineHeight = "1.5";
elkGlenTheme.headerWeight = "300";
elkGlenTheme.bodyWeight = "300";
elkGlenTheme.boldWeight = "400";
elkGlenTheme.googleFonts = [
  {
    name: "Oswald",
    styles: ["300", "400", "700"]
  },
  {
    name: "Open Sans",
    styles: ["300", "400", "400i", "700", "700i"]
  }
];
elkGlenTheme.bodyFontFamily = ["Open Sans", "sans-serif"];
elkGlenTheme.overrideStyles = ({ rhythm }, options) => ({});

const typography = new Typography(elkGlenTheme);
export default typography;
