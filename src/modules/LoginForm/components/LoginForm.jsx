import React from 'react'
import {Button, Block} from '../../../components'
import {Form, Input} from "antd"
import {MailOutlined, LockOutlined} from '@ant-design/icons'
import {Link} from "react-router-dom"

const LoginForm = props => {
    
    return (
        <div> 
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в аккаунт</p>
            </div>
            <Block>
                <Form name="auth-form" className="auth-form">
                    <Form.Item >
                        <Input 
                            size="large"
                            allowClear 
                            placeholder="E-Mail"
                            prefix={<MailOutlined className="site-form-item-icon"/>} 
                        />
                    </Form.Item>
                    <Form.Item >
                        <Input
                            size="large"
                            allowClear
                            type="password"
                            placeholder="Ваш пароль"
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" size="large">Войти в аккаунт</Button>
                    </Form.Item>
                    <Form.Item>
                        <Link to="/signup" className="auth__reg-link">Зарегестрироваться</Link>
                    </Form.Item>
                </Form>
            </Block>
        </div> 
    )
}

export default LoginForm