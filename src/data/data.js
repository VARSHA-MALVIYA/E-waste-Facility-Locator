import LoginForm from '../Components/LoginForm'
import SignupForm from '../Components/SignupForm'
import LoginImg from '../assets/login-img.jpg'
import SignupImg from '../assets/signup-img.jpg'

export const LoginDets = {
    title:"Welcome Back!",
    associatedUrl:"/signup",
    img:LoginImg,
    type:"login",
    Form:LoginForm
}

export const SignupDets = {
    title:"Signup for Account",
    associatedUrl:"/login",
    img:SignupImg,
    type:"signup",
    Form:SignupForm
}

