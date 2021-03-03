import React from 'react'
import {LoginForm, RegisterForm} from '../../modules'
import {Route} from 'react-router-dom'

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
      <Route exact path={['/', '/signin']} component={LoginForm} />
      <Route path="/signup" component={RegisterForm} />
    </div>
  </section>
)

export default Auth