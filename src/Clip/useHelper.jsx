import { useContext } from "react";
import { HelperOfFirebase } from "../HelperOfFirebase/Helper";

const useHelper = () => {
   const helper = useContext(HelperOfFirebase);
   return helper;
};

export default useHelper;