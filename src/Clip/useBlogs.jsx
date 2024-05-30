import { useQuery } from "@tanstack/react-query";
import useDecrypted from "./useDecrypted";

const useBlogs = () => {
   const decrypted = useDecrypted();

   const { data: blogs = [], isPending: loading } = useQuery({
      queryKey: ["blogs"],
      queryFn: async () => {
         const res = await decrypted.get("/blogs");
         return res.data;
      }
   })

   return [blogs, loading];
};

export default useBlogs;