export default ({isAuth, values, errors}) => {
    
    const rules = {
        email: value => {
            if(!value) {
                errors.email = 'Поле E-mail не может быть пустым'
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = 'Ваш E-mail невалидный'
            }
        },
        name: value => {
            if(!value) {
                errors.name = 'Поле Имя не может быть пустым' 
            } else if(value.length <= 5) {
                errors.name = 'Поле Имя должно быть не менее 5 символов'
            } 
        },
        password: value => {
            if(!value) {
                errors.password = 'Поле Пароль не может быть пустым'
            } else if(value.length <= 8) {
                errors.password = 'Поле Пароль не должно быть менее 8 символов'
            } else if (!isAuth && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
                errors.password = isAuth ? 'Неверный пароль' : 'Слишком легкий пароль'
            }
        },
        confirmPassword: value => {
            if(!value) {
                errors.confirmPassword = 'Поле не может быть пустым'
            } else if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'Пароли не совпадают'
            }
        }
    }

    Object.keys(rules).forEach(key => rules[key] && rules[key](values[key]))
}
