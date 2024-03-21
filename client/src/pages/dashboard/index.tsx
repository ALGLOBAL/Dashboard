import { GetServerSidePropsContext, NextPage } from "next";
import { checkAuth } from "@/utils/checkAuth";
import React from "react";
import { Layout } from "@/layouts/Layout";

import * as Api from "@/api";
import { FileItem } from "@/api/types/files.types";
import { DashboardLayout } from "@/layouts/DashboardLayout";

interface Props {
  items: FileItem[];
}

const DashboardPage: NextPage<Props> = ({ items }) => {
  return (
    <DashboardLayout>
      {items.map((item: FileItem) => (<div>
        <span>{item.title}</span>
        <span>{item.description}</span>
      </div>))}
    </DashboardLayout>
  );
};

DashboardPage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard/Main">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { redirect, isAuth, userId} = await checkAuth(ctx);
  if (!isAuth) {
    return { redirect };
  }

  let props: {props: { items: FileItem[] }} = {
    props: {
      items: []
    },
  }

  try {
    if (userId) {
      props.props.items = await Api.files.getAll(userId);
      return props;
    }
  } catch (err) {
    console.log(err);
    return props;
  }
};

export default DashboardPage;
