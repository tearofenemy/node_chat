import React, {Component} from 'react'
import {Button, Block} from '../../../components'
import {Form, Input} from "antd"
import {Link} from "react-router-dom"
import {ExclamationCircleTwoTone} from "@ant-design/icons"

class RegisterForm extends Component {
    render() {
        const isAuth = true
        return (
            <div> 
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат, вам необходимо зарегестрироваться</p>
                </div>
                <Block>
                    {isAuth ? <Form name="auth-form" className="auth-form">
                        <Form.Item name="email">
                            <Input 
                                size="large"
                                allowClear 
                                placeholder="E-Mail" 
                            />
                        </Form.Item>
                        <Form.Item name="name">
                            <Input
                                size="large"
                                allowClear
                                placeholder="Ваше имя"
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
                        <Form.Item name="confirmPassword">
                            <Input
                                size="large"
                                allowClear
                                type="password"
                                placeholder="Повторите пароль"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" size="large">Зарегистрироваться</Button>
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
}

export default RegisterForm