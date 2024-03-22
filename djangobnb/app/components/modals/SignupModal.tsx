'use client';

import Modal from './Modal'
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import useSignupModal from '@/app/hooks/useSignupModal'
import CustomButton from '@/app/components/forms/CustomButton'
import apiService from '@/app/services/apiService'
import { handleLogin } from '@/app/lib/actions'

const SignupModal = () => {
    // Variables
    const signupModal = useSignupModal()

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password1, setPassword1] = useState('')
    const [password2, setPassword2] = useState('')
    const [errors, setErrors] = useState<string[]>([])

    // Function for register user
    const submitSignup = async () => {
        const formData = {
            email: email,
            password1: password1,
            password2: password2
        }

        const response = await apiService.post('/api/auth/register/', formData)

        if (response.access){
            // Once the user is registered, will save the access, and refresh in cookies
            handleLogin(response.user.pk, response.access, response.refresh)
            signupModal.close()
            router.push('/')
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) =>{
                return error
            })
            setErrors(tmpErrors)
        }

    }

    const content = (
        <>
            <form action={submitSignup}>
                {errors.map((error, index) => {
                        return (
                            <div
                                key={`error_${index}`}
                                className='p-4 mt-2 mb-4 bg-airbnb text-white rounded-xl opacity-60'>
                                {error}
                            </div>
                        )
                    }
                )}


                <input onChange={(e) => setEmail(e.target.value)} placeholder="Your e-mail address" type='email' className="w-full h-[54px] border border-gray-3 pl-3 mb-3 rounded-xl"/>
                <input onChange={(e) => setPassword1(e.target.value)} placeholder="Your password" type='password' className="w-full h-[54px] border border-gray-3 pl-3 mb-3 rounded-xl"/>
                <input onChange={(e) => setPassword2(e.target.value)} placeholder="Repeat password" type='password' className="w-full h-[54px] border border-gray-3 pl-3 mb-3 rounded-xl"/>

                <CustomButton
                    label='Sign up'
                    onClick={submitSignup}
                />
            </form>
        </>
    )
    return (
        <Modal
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal;
