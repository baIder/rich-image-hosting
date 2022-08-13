import {Button, Form, Input} from 'antd';
import React from 'react';
import styled from 'styled-components';
import {RuleObject} from 'rc-field-form/lib/interface';
import {useStores} from '../stores';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 30px auto;
  padding: 20px;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

const Login: React.FC = () => {
  const {AuthStore} = useStores();
  const onFinish = (values: any) => {
    AuthStore.setUsername(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.login().then(() => {console.log('登录成功，跳转至首页');}).catch(() => {console.log('登录失败');});
  };

  const validateUsername = (rule: RuleObject, value: string) => {
    if (/\W/.test(value)) return Promise.reject('用户名只能是字母、数字和下划线的组合');
    if (value.length < 4 || value.length > 10) return Promise.reject('用户名长度为4-10个字符');
    return Promise.resolve().then();
  };

  return (
    <Wrapper>
      <Title>登录</Title>
      <Form
        name="basic"
        labelCol={{span: 6}}
        wrapperCol={{span: 12}}
        initialValues={{remember: true}}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{required: true, message: '请输入注册使用的用户名！'}, {validator: validateUsername}]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{required: true, message: '请输入密码！'}, {min: 4, message: '密码最少4个字符'}, {max: 10, message: '密码最多10个字符'}]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item wrapperCol={{offset: 11, span: 2,}}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  );
};

export default Login;