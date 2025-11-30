import { getUser } from "@/store/slices/user.slice";
import { useDispatch } from "react-redux";

export const useUser = async () => {
  const dispatch = useDispatch();
  const user = dispatch(getUser());

  return user;
};
