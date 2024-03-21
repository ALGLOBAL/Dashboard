import React, { useEffect, useState } from "react";
import { Layout, Menu, Button } from "antd";
import styles from "./Header.module.scss";
import { CloudOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

import * as Api from "@/api";

const Header: React.FC = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;
  const [email, setEmail] = useState('');

    useEffect(() => {
        const getUser = async () => {
            try {
               const user = await Api.auth.getMe();
               if (user.email) setEmail(user.email);
            } catch (err) {
              console.warn(err);
            }
        }
        getUser();
    }, []);

  const onClickLogout = () => {
      Api.auth.logout();
      location.href = "/";
  };

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined />
            Dashboard
          </h2>

          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: "/dashboard", label: "Main" },
            ]}
          />
        </div>
          <div>
              {email && <span className={styles.email}>{email}</span>}
              <Button onClick={onClickLogout} type="primary" danger>
                  Sign out
              </Button>
          </div>

      </div>
    </Layout.Header>
  );
};

export default Header;
