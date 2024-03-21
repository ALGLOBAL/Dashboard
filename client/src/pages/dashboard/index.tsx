import { GetServerSidePropsContext, NextPage } from "next";
import { checkAuth } from "@/utils/checkAuth";
import React from "react";
import { Layout } from "@/layouts/Layout";

import * as Api from "@/api";
import { Item } from "@/api/types/items.types";
import { DashboardLayout } from "@/layouts/DashboardLayout";
import Items from "@/components/items";

interface Props {
  items: Item[];
}

const DashboardPage: NextPage<Props> = ({ items }) => {
  return (
    <DashboardLayout>
      <Items items={items} />
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

  let data: { props: { items: Item[] } } = {
    props: {
      items: []
    },
  }

  try {
    if (userId) {
      data.props.items = await Api.files.getAll(userId);
      return data;
    }
  } catch (err) {
    console.log(err);
    return data;
  }
};

export default DashboardPage;
