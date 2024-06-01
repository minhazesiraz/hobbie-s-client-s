import { useQuery } from "@tanstack/react-query";
import useDecrypted from "./useDecrypted";

const useBlogs = (page = 1, limit = 10, searchQuery = '') => {
   const decrypted = useDecrypted();

   const { data, isLoading } = useQuery({
      queryKey: ['blogs', page, limit, searchQuery],
      queryFn: async () => {
         const res = await decrypted.get('/blogs', {
            params: { page, limit, q: searchQuery },
         });
         return res.data;
      },
      keepPreviousData: true,
   });

   return {
      blogs: data?.blogs || [],
      totalPages: data?.totalPages || 0,
      currentPage: data?.currentPage || 1,
      isLoading
   };
};

export default useBlogs;

