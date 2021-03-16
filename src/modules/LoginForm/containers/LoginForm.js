import {withFormik} from 'formik'
import LoginForm from '../components/LoginForm'
import validateFunc from '../../../utils/validators'

export default withFormik({

    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),

    validate: values => {
        let errors = {}

        const validate = validateFunc({isAuth: false})

        console.log(Object.keys(values))
        Object.keys(values).forEach(key => validate[key] && validate[key](errors, values[key]))
        
        return errors
    },

    handleSubmit: (values) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
        }, 1000)
    },

    displayName: 'LoginForm',
})(LoginForm)
