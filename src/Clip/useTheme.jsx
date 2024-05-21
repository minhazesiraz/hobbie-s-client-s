import { useContext } from "react";
import { HelperOfTheme } from "../HelperOfTheme/Theme";

const useTheme = () => {
   const theme = useContext(HelperOfTheme);
   return theme;
};

export default useTheme;