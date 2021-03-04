import React, {Component} from 'react'
import {Button, Block} from '../../../components'
import {Form, Input} from "antd"
import {Link} from "react-router-dom"

class LoginForm extends Component {
    render() {
        return (
            <div> 
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в аккаунт</p>
                </div>
                <Block>
                    <Form name="auth-form" className="auth-form">
                        <Form.Item name="email">
                            <Input 
                                size="large"
                                allowClear 
                                placeholder="E-Mail" 
                            />
                        </Form.Item>
                        <Form.Item name="password">
                            <Input
                                size="large"
                                allowClear
                                type="password"
                                placeholder="Ваш пароль"
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
}

export default LoginForm