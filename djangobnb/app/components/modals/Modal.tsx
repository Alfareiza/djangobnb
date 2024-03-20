'use client';
import {useCallback, useState, useEffect} from 'react';

interface ModalProps {
    label: string;
    close: () => void;
    content: React.ReactElement;
    isOpen: boolean;
    className?: string;
    onClick?: () => void;
}

const Modal: React.FC<ModalProps> = ({
    label,
    content,
    isOpen,
    className,
    close,
    onClick
}) => {
    const [showModal, setShowModal] = useState(isOpen)

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    const handleClose = useCallback(() => {
        setShowModal(false);

            setTimeout(() =>{
            close();
            }, 300)
        }, [close])

    if (!isOpen){
//         return null;
    }
    return (
        <div
            onClick={onClick}
            className={`flex items-center justify-center fixed inset-0 z-40 bg-black/60 ${className}`}
        >
            <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 mx-auto h-auto">
                <div className={`translate duration-600 h-full ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-10'}  `}>
                    <div className="w-full h-auto rounded-xl relative flex flex-col bg-white ">

                        {/* HEADER OF MODAL */}
                        <header className="h-[60px] flex items-center p-6 rounded-t justify-center relative border-b">
                            {/* TITLE OF MODAL */}
                            <h2 className="txt-lg font-bold">
                                {label}
                            </h2>
                            {/* END TITLE OF MODAL */}
                            {/* CLOSE BUTTON */}
                            <div className="p-3 absolute right-3 hover:bg-gray-300 rounded-full cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </div>
                            {/* END CLOSE BUTTON */}
                        </header>
                        {/* END HEADER OF MODAL */}

                        {/* BODY OF MODAL */}
                        <section className="p-6">
                            {content}
                        </section>
                        {/* END BODY OF MODAL */}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;
