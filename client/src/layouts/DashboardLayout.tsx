import React from "react";
import styles from "@/styles/Home.module.scss";
import { useRouter } from "next/router";
import { Menu } from "antd";
import {
  FileOutlined,
    AccountBookTwoTone
} from "@ant-design/icons";

export const DashboardLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  return (
    <main className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <Menu
          className={styles.menu}
          mode="inline"
          selectedKeys={[selectedMenu]}
          items={[
              {
                  key: `/dashboard`,
                  icon: <FileOutlined />,
                  label: `Items`,
                  onClick: () => router.push("/dashboard"),
              },
              {
                  key: `/dashboard/statistic`,
                  icon: <AccountBookTwoTone />,
                  label: `Statistic`,
                  onClick: () => {},
              },
          ]}

        />
      </div>

      <div className="container">{children}</div>
    </main>
  );
};
