// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";

// const useCart = (_id) => {
//   const axiosSecure = useAxiosSecure();

//   const { refetch, data: post = { likes: 0, dislikes: 0 } } = useQuery({
//     queryKey: ['post', _id],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`comment/${_id}`);
//       return res.data;
//     }
//   });

//   return [post, refetch];
// };

// export default useCart;
