import React from 'react'
import {Button, Block} from '../../../components'
import {Form, Input} from "antd"
import {Link} from "react-router-dom"
import { validateField } from '../../../utils/helpers'
import {ExclamationCircleTwoTone, UserOutlined, LockOutlined, MailOutlined} from "@ant-design/icons"

const RegisterForm = props => {

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
    } = props;

    const isAuth = true

    return (
        <div> 
            <div className="auth__top">
                <h2>Регистрация</h2>
                <p>Для входа в чат, вам необходимо зарегестрироваться</p>
            </div>
            <Block>
                {isAuth ? <Form onSubmit={handleSubmit} name="auth-form" className="auth-form">
                    <Form.Item help={!touched.email ? " " : errors.email} validateStatus={validateField('email', touched, errors)} hasFeedback>
                        <Input 
                            id="email"
                            size="large"
                            allowClear 
                            placeholder="E-Mail"
                            prefix={<MailOutlined className="site-form-item-icon"/>}
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            value={values.email}
                        />    
                    </Form.Item>
                    <Form.Item help={!touched.name ? " " : errors.name} validateStatus={validateField('name', touched, errors)} hasFeedback>
                        <Input
                            id="name"
                            size="large"
                            allowClear
                            prefix={<UserOutlined className="site-form-item-icon"/>}
                            placeholder="Ваше имя"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                    </Form.Item>
                    <Form.Item help={!touched.password ? " " : errors.password} validateStatus={validateField('password', touched, errors)} hasFeedback>
                        <Input
                            id="password"
                            size="large"
                            allowClear
                            type="password"
                            placeholder="Ваш пароль"
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                    </Form.Item>
                    <Form.Item help={!touched.confirmPassword ? " " : errors.confirmPassword} validateStatus={validateField('confirmPassword', touched, errors)} hasFeedback>
                        <Input
                            id="confirmPassword"
                            size="large"
                            allowClear
                            type="password"
                            placeholder="Повторите пароль"
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={handleSubmit} type="primary" size="large">Зарегистрироваться</Button>
                    </Form.Item>
                    <Form.Item>
                        <Link to="/signin" className="auth__reg-link">Войти в аккаунт</Link>
                    </Form.Item>
                </Form> : (
                    <div className="auth__success-block">
                        <ExclamationCircleTwoTone/>
                        <h2>Подтвердите свой аккаунт</h2>
                        <p>На вашу почту отрпавлено письмо с ссылкой на подтверждение аккаунта.</p>
                    </div>
                )}
            </Block>
        </div>  
    )
}

export default RegisterForm