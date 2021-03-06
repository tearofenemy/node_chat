import {withFormik} from 'formik'
import RegisterForm from '../components/RegisterForm'

export default withFormik({

    validate: values => {
        const errors = {}
        
        if(!values.email) {
            errors.email = 'Поле E-mail не может быть пустым'
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Ваш E-mail невалидный'
        }

        if(!values.name) {
            errors.name = 'Поле Имя не может быть пустым' 
        } else if(values.name.length <= 5) {
            errors.name = 'Поле Имя должно быть не менее 5 символов'
        }

        if(!values.password) {
            errors.password = 'Поле Пароль не может быть пустым'
        } else if(values.password.length <= 8) {
            errors.password = 'Поле Пароль не должно быть менее 8 символов'
        }

        if(!values.confirmPassword) {
            errors.confirmPassword = 'Поле не может быть пустым'
        } else if(values.confirmPassword !== values.password) {
            errors.confirmPassword = 'Пароли не совпадают. Повторите попытку'
        }

        return errors
    },

    handleSubmit: (values) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
        }, 1000)
    },

    displayName: 'RegisterForm',
})(RegisterForm)
