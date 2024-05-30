import axios from "axios";

const decrypted = axios.create({
   baseURL: "http://localhost:5000"
})

const useDecrypted = () => {
   return decrypted;
};

export default useDecrypted;