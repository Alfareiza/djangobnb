'use client';

import Image from 'next/image'
import {useState} from 'react'
import Modal from './Modal'
import loginModal from './LoginModal'
import useAddPropertyModal from '@/app/hooks/useAddPropertyModal'
import CustomButton from '@/app/components/forms/CustomButton'

const AddPropertyModal = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const addPropertyModal = useAddPropertyModal()
    const content = (
        <>
            { currentStep == 1 ? (
                <>
                    <h2 className='mb-6 text-xl'>Choose Category</h2>
                    <CustomButton
                        label='Next'
                        onClick={() => setCurrentStep(2)}
                    />
                </>
            ) : (
                <>
                    <h2 className='mb-6 text-xl'>Choose Otra vaina</h2>
                        <CustomButton
                            label='Next'
                            onClick={() => setCurrentStep(1)}
                        />
                </>
            )}
         </>
    )
    return (
        <>
            <Modal
                isOpen={addPropertyModal.isOpen}
                close={addPropertyModal.close}
                label='Add Property'
                content={content}
            />
        </>
    )
}

export default AddPropertyModal