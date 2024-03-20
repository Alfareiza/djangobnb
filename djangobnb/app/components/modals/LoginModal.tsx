'use client';

import Modal from './Modal'
import {useState} from 'react';
import useLoginModal from '@/app/hooks/useLoginModal'
import CustomButton from '@/app/components/forms/CustomButton'

const LoginModal = () => {
    const loginModal = useLoginModal()
    const content = (
        <>
            <form>
                <div className='p-4 mt-2 mb-4 bg-airbnb text-white rounded-xl opacity-60'>
                    The error message
                </div>
                <input placeholder="Your e-mail address" type='email' className="w-full h-[54px] border border-gray-3 pl-3 mb-3 rounded-xl"/>
                <input placeholder="Your password" type='password' className="w-full h-[54px] border border-gray-3 pl-3 mb-3 rounded-xl"/>
                <CustomButton
                    label='Login'
                    onClick={() => console.log('Test')}
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
