import {withFormik} from 'formik'
import RegisterForm from '../components/RegisterForm'
import validateFunc from '../../../utils/validators'

export default withFormik({

    mapPropsToValues: () => ({
        email: '',
        name: '',
        password: '',
        confirmPassword: ''
    }),

    validate: values => {
        let errors = {}

        validateFunc({values, errors})
    
        return errors
    },

    handleSubmit: (values) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
        }, 1000)
    },

    displayName: 'RegisterForm',
})(RegisterForm)
