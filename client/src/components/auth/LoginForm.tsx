import React from "react";
import { setCookie } from "nookies";
import styles from "./Auth.module.scss";
import { Button, notification, Form, Input } from "antd";
import { LoginFormDTO } from "@/api/types/auth.types";
import { auth } from "@/api";

export const LoginForm: React.FC = () => {
  const onSubmit = async (values: LoginFormDTO) => {
    try {
      const { access_token, userId } = await auth.login(values);

      notification.success({
        message: "Success",
        description: "Logged in to dashboard",
        duration: 2,
      });

      setCookie(null, "_token", access_token, {
        path: "/",
      });
      setCookie(null, "_user_id", userId, {
        path: "/",
      });



      // location.href = "/dashboard";
    } catch (err) {
      console.warn("LoginForm", err);

      notification.error({
        message: "Error",
        description: "Incorrect email or password",
        duration: 2,
      });
    }
  };

  return (
    <div className={styles.formBlock}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Enter email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Enter password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
