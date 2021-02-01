import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../../Utils/FormsControls/FormsControls";
import {required} from "../../Utils/Validation/validators";

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'}
                   name={'login'}
                   component={Input}
                   validate={[required]}/>
        </div>
        <div>
            <Field placeholder={'password'}
                   name={'password'}
                   component={Input}
                   validate={[required]}/>
        </div>
        <div>
            <Field type="checkbox"
                   name={'rememberMe'}
                   component={Input}/> Remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    };
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default Login