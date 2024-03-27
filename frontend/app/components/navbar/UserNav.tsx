'use client';

import {useState} from 'react';
import MenuLink from './MenuLink'
import LogoutButton from '@/app/components/LogoutButton'
import useLoginModal from '@/app/hooks/useLoginModal'
import useSignupModal from '@/app/hooks/useSignupModal'
import {useRouter} from 'next/navigation'

interface UserNavProps {
    userId?: string | null; // This indicates that the value may comes or not
}

const UserNav: React.FC<UserNavProps> = ({
    userId
}) => {
    const router = useRouter()
    const loginModal = useLoginModal();
    const signupModal = useSignupModal();

    const [isOpen, setIsOpen] = useState(false)
    return (
            <div onClick={() => setIsOpen(!isOpen)} className="px-4 py-3 cursor-pointer relative inline-block border rounded-full hover:shadow-lg transition dark:hover:shadow-black/30">

                {/* ICONS OF MENU OF HEADER */}
                <button className="flex items-center">
                    <svg
                        fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg
                        fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </button>
                {/* END ICONS OF MENU OF HEADER */}

                
                {/* END INFO WITHIN MENU */}
                {isOpen && (
                    <div className="w-[200px] py-3 absolute top-[60px] right-0 bg-white border rounded-xl shadow-md flex flex-col cursor-pointer">
                        {/* If the userId is found in the cookies then is shown the log out button */}
                        { userId ? (
                            <>
                                <MenuLink label='My properties' onClick={() => {
                                    setIsOpen(false);
                                    router.push('/myproperties')
                                    }}
                                />
                                <MenuLink label='My reservations' onClick={() => {
                                    setIsOpen(false);
                                    router.push('/myreservations')
                                    }}
                                />
                                <LogoutButton/>
                            </>
                        ) : (
                            <>
                                <MenuLink label='Log in' onClick={() => {
                                    console.log('Clicked in login button')
                                    setIsOpen(false);
                                    loginModal.open()
                                    }}
                                />

                               <MenuLink label='Sign up' onClick={() => {
                                    console.log('Clicked in signup button')
                                    setIsOpen(false);
                                    signupModal.open()
                                    }}
                                />
                            </>
                        )}
                        <hr/>
                        <MenuLink label='Help Center'  onClick={() => console.log('Clicked')} className="mt-2"/>
                    </div>
                )}
                {/* END INFO WITHIN MENU */}

            </div>
    )
}

export default UserNav;