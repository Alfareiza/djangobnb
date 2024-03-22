'use client';

import Modal from './Modal'
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import useLoginModal from '@/app/hooks/useLoginModal'
import CustomButton from '@/app/components/forms/CustomButton'
import apiService from '@/app/services/apiService'
import { handleLogin } from '@/app/lib/actions'

const LoginModal = () => {
    const router = useRouter()

    const loginModal = useLoginModal()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<string[]>([])

     // Function for login user
    const submitLogin = async () => {
        const formData = {
            email: email,
            password: password,
        }

        const response = await apiService.post('/api/auth/login/', formData)

        if (response.access){
            handleLogin(response.user.pk, response.access, response.refresh)
            console.log('Logged in succesfully!')
            loginModal.close()
            router.push('/')
        } else {
            setErrors(response.non_field_errors)
        }

    }

    const content = (
        <>
            <form action={submitLogin}>
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
                <input onChange={(e) => setPassword(e.target.value)} placeholder="Your password" type='password' className="w-full h-[54px] border border-gray-3 pl-3 mb-3 rounded-xl"/>
                <CustomButton
                    label='Login'
                    onClick={submitLogin}
                />
            </form>
        </>
    )
    return (
        <Modal
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            label="Log in"
            content={content}
        />
    )
}

export default LoginModal;
