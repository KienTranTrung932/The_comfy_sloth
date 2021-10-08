import React from "react";
import { Form, Input, DatePicker } from "antd";
import styled from "styled-components";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Register = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const ClickSubmit =()=>{
    console.log('oke');
  }
  return (
    <Wrapper className='content'>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          className='information'
          label="Họ và Tên"
          name="HoTen"
          rules={[{ required: true, message: "Hãy nhập thông tin !" }]}
        >
          <Input className='input'/>
        </Form.Item>

        <Form.Item
          className='information'
          label="Tài khoản"
          name="TenTaiKhoan"
          rules={[{ required: true, message: "Hãy nhập Tên tài khoản !" }]}
        >
          <Input className='input'/>
        </Form.Item>

        <Form.Item
          className='information'
          label="Mật Khẩu"
          name="MatKhau"
          rules={[{ required: true, message: "Hãy nhập mật khẩu !" }]}
        >
          <Input.Password className='input'/>
        </Form.Item>

        <Form.Item
          className='information'
          label="Ngày Sinh"
          name="NgaySinh "
          rules={[{ required: true, message: "Hãy nhập thông tin!" }]}
        >
          <DatePicker className='input'/>
        </Form.Item>

        <Form.Item
          className='information'
          label="Email"
          name="Email"
          rules={[{ required: true, message: "Hãy nhập thông tin!" }]}
        >
          <Input className='input' type ='email'/>
        </Form.Item>

        <Form.Item
          className='information'
          label="Số điện thoại"
          name="Phone"
          rules={[{ required: true, message: "Hãy nhập thông tin!" }]}
        >
          <PhoneInput className='input' />
        </Form.Item>

        <Form.Item
          className='information'
          label="Địa chỉ"
          name="DiaChi"
          rules={[{ required: true, message: "Hãy nhập thông tin !" }]}
        >
          <Input className='input' />
        </Form.Item>

        <button type='submit' className='submit-btn'>
            Đăng ký
        </button>
      </Form>
    </Wrapper>
  );
};

export default Register;
const Wrapper = styled.section`
  .information{
    letter-spacing: var(--spacing);
  }
  .input {
    padding: 0.2rem;
    border-radius: var(--radius);
    border-color:var(--clr-black) ;
  }
  .submit-btn {
    border-radius: var(--radius);
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid var(--clr-black);
    margin-left : 45%;
    background: var(--clr-primary-10);
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
    color: var(--clr-black);
  }
  `
