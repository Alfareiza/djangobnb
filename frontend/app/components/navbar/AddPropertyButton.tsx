'use client';

import useLoginModal from '@/app/hooks/useLoginModal'
import useAddPropertyModal from '@/app/hooks/useAddPropertyModal'

interface AddPropertyButtonProps{
    userId?: string | null
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
    userId
}) => {
    const loginModal = useLoginModal();
    const addPropertyModal = useAddPropertyModal()

    const airbnbYourHome = () => {
        if (userId){
            addPropertyModal.open()
        } else {
            loginModal.open();
        }
    }
    return (
            <div onClick={airbnbYourHome}
                className="cursor-pointer px-4 py-3 text-sm font-semibold rounded-full hover:bg-gray-100">
                Add Property
            </div>
    )
}

export default AddPropertyButton;