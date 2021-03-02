import React from 'react'
import {Block, Button} from '../../components'
//import {useFormik} from 'formik'

import {Form, Input} from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import './Auth.scss'

/**<Form
            name="auth-form"
            className="auth-form">
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: 'Введите пожалуйста email' }]}
                >
                  <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="user@user.com" />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Введите пожалуйста ваш пароль' }]}
                >
                  <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large">Войти в аккаунт</Button>
                </Form.Item>
              </Form> 
                
              const formik = useFormik({
    //   initialValues: {
    //     email: '',
    //     password: ''
    //   },
    //   validate,
    //   onSubmit: data => {
    //     console.log(JSON.stringify(data, null, 2))
    //   }
    // })*/

const Auth = () => ( 
  <section className="auth">
    <div className="auth__content">
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в аккаунт</p>
      </div>
      <Block>
        <Form name="auth-form" className="auth-form">
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Введите пожалуйста email' }]}
          >
            <Input 
              size="large"
              allowClear 
              prefix={<UserOutlined className="site-form-item-icon" />} 
              placeholder="user@user.com" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Введите пожалуйста ваш пароль' }, {}]}
          >
            <Input
              size="large"
              allowClear
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">Войти в аккаунт</Button>
          </Form.Item>
          <Form.Item>
            <a href="#" className="auth__reg-link">Зарегестрироваться</a>
          </Form.Item>
        </Form> 
      </Block>
    </div>
  </section>
)

export default Auth