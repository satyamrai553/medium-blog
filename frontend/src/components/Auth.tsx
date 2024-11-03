import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { SignupInput } from 'satyamrai553medium-blog';
import axios from 'axios';
import { BACKEND_URL } from '../config';

function Auth({ type }: { type: "signup" | "signin" }) {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        email: "",
        password: ""
    })



    async  function  sendRequest(){
      try {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === 'signup'? 'signup' : "signin"}`, postInputs);
        const jwt = response.data;
        
        localStorage.setItem("Authtoken", jwt.jwt)
        navigate("/blogs")
      } catch (error) {
        alert("Error sending request")
      }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div>
                <div className='flex justify-center flex-col items-center'>
                <div className="text-3xl font-extrabold mb-3">
                    {type === 'signup'? 'Create an account': 'Sign in to your account'}
                </div>
                <div className="text-slate-400">
                   {type === 'signup'? "Already have an account?" : "Don't have an account?"}
                    <Link className="pl-2 underline" to={type === 'signup'? '/signin':'/signup'}>{type === 'signup'? 'sign in':'Create an account'}</Link>
                </div>
                </div>

                <div className='mt-6 min-w-80'>
                   {type === 'signup'? <LabeledInput label="Name" placeholder='Satyam Rai' onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            name: e.target.value
                        })
                    }} /> : null }
                    <LabeledInput label="Username" placeholder='satyamrai' onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            email: e.target.value
                        })
                    }} />
                    <LabeledInput label="Password" type='password' placeholder='@fasfadga' onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password: e.target.value
                        })
                    }} />

                    <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full mt-4">{type === "signup"? "Create Account" : "Sign in"}</button>
                </div>


            </div>

        </div>
    )
}

interface LabeledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;

}
function LabeledInput({ label, placeholder, onChange, type }: LabeledInputType) {
    return (
        <div>
            <label htmlFor="first_name" className="block mb-2 text-md font-bold mt-4">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} required />
        </div>
    )
}

export default Auth