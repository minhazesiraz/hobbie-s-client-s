import axios from "axios";

const encrypted = axios.create({
   baseURL: "http://localhost:5000"
})

const useEncrypted = () => {
   return encrypted;
};

export default useEncrypted;