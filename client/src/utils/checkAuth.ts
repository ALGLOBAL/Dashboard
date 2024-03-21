import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import axios from "@/core/axios";
import * as Api from "@/api";

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
  const { _token, _user_id } = nookies.get(ctx);

  axios.defaults.headers.Authorization = "Bearer " + _token;

  try {
    await Api.auth.getMe();

    return {
      userId: _user_id,
      isAuth: true,
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  } catch (err) {
    return {
      isAuth: false,
      redirect: {
        destination: "/dashboard/auth",
        permanent: false,
      },
    };
  }
};
