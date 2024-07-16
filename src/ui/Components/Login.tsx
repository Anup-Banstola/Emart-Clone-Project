'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button, Form, Input, Typography } from 'antd';

const { Link } = Typography;

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className="mx-auto flex h-screen w-[450px] max-w-full flex-col items-center justify-center px-4 ">
      <Form onFinish={handleSubmit} className="w-full">
        <div className="mb-16 flex flex-col items-center text-center">
          <Image
            src="/nipuna-logo.png"
            alt="NPS Logo"
            className="mx-auto"
            width={200}
            height={200}
          />
          <span className="text-xl">Please, log in to Admin Panel.</span>
        </div>

        <Form.Item
          name="email"
          className="mb-4  w-full"
          rules={[{ required: true, message: 'Email is required' }]}
        >
          <label
            htmlFor="email"
            className="mb-1 block text-base text-gray-500 "
          >
            Email*{' '}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="example@example.com"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="focus:outline-none"
          />
        </Form.Item>
        <Form.Item
          name="password"
          className="mb-4 w-full"
          rules={[{ required: true, message: 'Password is required' }]}
        >
          {/** ok */}
          <label htmlFor="password" className="mb-1 block text-gray-500">
            Password*{' '}
          </label>
          <div className="flex items-center ">
            <Input.Password
              id="password"
              name="password"
              type={formData.showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
        </Form.Item>

        <Form.Item className="mb-4 w-full">
          <Button
            type="primary"
            htmlType="submit"
            className="mb-4 w-full rounded-lg "
          >
            Login
          </Button>
        </Form.Item>

        <div className="flex w-full items-center justify-center space-x-3  ">
          <Link href="/contact-us">Contact Us</Link>
          <span className="my-4 text-gray-300 ">|</span>
          <Link href="/privacypolicy">Privacy Policy</Link>
        </div>
        <div className="text-center">
          <Link href="/forgot-password">Forgot Password?</Link>
        </div>
      </Form>
    </div>
  );
}

export default Login;
