import { GetServerSidePropsContext, NextPage } from "next";
import { checkAuth } from "@/utils/checkAuth";
import React from "react";

const Page: NextPage = () => {
  return (<></>);
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { redirect} = await checkAuth(ctx);
  return { redirect };
};

export default Page;
