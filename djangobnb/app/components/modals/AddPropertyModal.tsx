'use client';

import Image from 'next/image'
import {ChangeEvent, useState} from 'react'
import Modal from './Modal'
import loginModal from './LoginModal'
import Categories from '@/app/components/addproperty/Categories';
import useAddPropertyModal from '@/app/hooks/useAddPropertyModal'
import CustomButton from '@/app/components/forms/CustomButton'
import SelectCountry, { SelectCountryValue } from '../forms/SelectCountry';
import apiService from '@/app/services/apiService';
import {useRouter} from 'next/navigation'

const AddPropertyModal = () => {
    // States
    const [currentStep, setCurrentStep] = useState(1);
    const [dataCategory, setDataCategory] = useState('');
    const [dataTitle, setDataTitle] = useState('');
    const [dataDescription, setDataDescription] = useState('');
    const [dataPrice, setDataPrice] = useState('');
    const [dataBedrooms, setDataBedrooms] = useState('');
    const [dataBathrooms, setDataBathrooms] = useState('');
    const [dataGuests, setDataGuests] = useState('');
    const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
    const [dataImage, setDataImage] = useState<File | null>(null);
    
    const addPropertyModal = useAddPropertyModal();

    const router = useRouter();

    // Set datas
    const setCategory = (category: string) => {
        setDataCategory(category)
    }

    const setImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0){
            const tmpImage = event.target.files[0];
            setDataImage(tmpImage)
        }
    }

    const submitForm = async () => {
        if (dataCategory &&
            dataTitle &&
            dataDescription &&
            dataPrice &&
            dataBedrooms &&
            dataBathrooms &&
            dataGuests &&
            dataCountry &&
            dataImage){
                const formData = new FormData();
                formData.append('title', dataTitle); 
                formData.append('category', dataCategory); 
                formData.append('description', dataDescription); 
                formData.append('price_per_night', dataPrice); 
                formData.append('bedrooms', dataBedrooms); 
                formData.append('bathrooms', dataBathrooms); 
                formData.append('guests', dataGuests); 
                formData.append('country_code', dataCountry.value); 
                formData.append('country', dataCountry.label); 
                formData.append('category', dataImage); 
console.log(formData)
                const response = await apiService.post('/api/properties/create/', formData)
                if (response.success){
                    console.log('Registered in the backend successfully!')
                    router.push('/')
                    addPropertyModal.close()
                } else{
                    console.log('Error registered the data in the backend')
                }
            } else {
                console.log('Error registered the data in the backend')
            }
    }

    const content = (
        <>
            { currentStep == 1 ? ( // If
                <>
                {/* STEP 1 CATEGORY */}
                    <h2 className='mb-6 text-xl'>Choose Category</h2>
                    <Categories
                        dataCategory={dataCategory}
                        setCategory={(category) => setCategory(category)}
                    />
                    <CustomButton label='Next' className='mt-4'
                        onClick={() => setCurrentStep(2)}
                    />
                {/* END STEP 1 CATEGORY */}
                </>
            ) : currentStep == 2 ?  (  // elif
                <>
                {/* STEP 2 TITLE & DESCRIPTION */}
                    <h2 className='mb-6 text-xl'>Describe your place</h2>

                    {/* TITLE & DESCRIPTION */}
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Title</label>
                            <input type="text" className="w-full p-4 border border-gray-600 rounded-xl"
                                value={dataTitle}
                                onChange={(e) => setDataTitle(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Description</label>
                            <textarea className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                                value={dataDescription}
                                onChange={(e) => setDataDescription(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    {/* END TITLE  & DESCRIPTION */}

                    {/* BUTTONS NEXT AND PREVIOUS */}
                    <div className="flex flex-row items-center justify-between space-x-6 ">
                        <CustomButton label='Previous' className='mt-4 bg-black hover:bg-gray-800'                            
                                onClick={() => setCurrentStep(1)}
                        />
                        <CustomButton label='Next' className='mt-4'                            
                            onClick={() => setCurrentStep(3)}
                        />
                    </div>
                    {/* END BUTTONS NEXT AND PREVIOUS */}

                {/* END STEP 2 TITLE & DESCRIPTION */}                        
                </>
            ) : currentStep == 3 ?  (
                <>
                {/* STEP 3 DETAILS */}                        
                    <h2 className='mb-6 text-xl'>Details</h2>

                    {/* PRICE, BEDROOMS, BATHROOMS & GUESTS */}
                    <div className="pt-3 pb-6 space-y-4">
                        <div className="flex flex-col space-y-2">
                            <label>Price per night</label>
                            <input type="number" min="0" className="w-full p-4 border border-gray-600 rounded-xl"
                                value={dataPrice}
                                onChange={(e) => setDataPrice(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Bedrooms</label>
                            <input type="number" min="0" className="w-full p-4 border border-gray-600 rounded-xl"
                                value={dataBedrooms}
                                onChange={(e) => setDataBedrooms(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Bathrooms</label>
                            <input type="number" min="0" className="w-full p-4 border border-gray-600 rounded-xl"
                                value={dataBathrooms}
                                onChange={(e) => setDataBathrooms(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label>Maximum number of uests</label>
                            <input type="number" min="0" className="w-full p-4 border border-gray-600 rounded-xl"
                                value={dataGuests}
                                onChange={(e) => setDataGuests(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* END PRICE, BEDROOMS, BATHROOMS & GUESTS */}

                    {/* BUTTONS NEXT AND PREVIOUS */}
                    <div className="flex flex-row items-center justify-between space-x-6">
                        <CustomButton label='Previous' className='mt-4 bg-black hover:bg-gray-800'                            
                                onClick={() => setCurrentStep(2)}
                            />
                            <CustomButton label='Next' className='mt-4'                            
                                onClick={() => setCurrentStep(4)}
                            />
                    </div>
                    {/* END BUTTONS NEXT AND PREVIOUS */}

                {/* END STEP 3 DETAILS */}
                </>
            ) : currentStep == 4 ?  (
                <>
                {/* STEP 4 LOCATION */}                        
                    <h2 className='mb-6 text-xl'>Location</h2>

                    <SelectCountry
                        value={dataCountry}
                        onChange={(value) => setDataCountry(value as SelectCountryValue)}
                    />

                    {/* BUTTONS NEXT AND PREVIOUS */}
                    <div className="flex flex-row items-center justify-between space-x-6">
                        <CustomButton label='Previous' className='mt-4 bg-black hover:bg-gray-800'                            
                                onClick={() => setCurrentStep(3)}
                            />
                            <CustomButton label='Next' className='mt-4'                            
                                onClick={() => setCurrentStep(5)}
                            />
                    </div>
                    {/* END BUTTONS NEXT AND PREVIOUS */}

                {/* END STEP 4 LOCATION */}
                </>
            ) : currentStep == 5 ?  (
                <>
                {/* STEP 5 IMAGE */}                        
                    <h2 className='mb-6 text-xl'>Images</h2>

                    <div className="pt-3 pb-6 space-y-4">
                        <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={setImage}
                            />
                        </div>
                        {dataImage && (
                            <div className="center w-[200px] h-[150px] relative">
                                <Image
                                    fill
                                    alt='Upload image'
                                    src={URL.createObjectURL(dataImage)}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                        )}
                    </div>

                    {/* BUTTONS NEXT AND PREVIOUS */}
                    <div className="flex flex-row items-center justify-between space-x-6">
                        <CustomButton label='Previous' className='mt-4 bg-black hover:bg-gray-800'                            
                                onClick={() => setCurrentStep(4)}
                        />
                        <CustomButton label='Finish' className='mt-4 bg-green-600 hover:bg-green-800'                             
                            onClick={submitForm}
                        />
                    </div>
                    {/* END BUTTONS NEXT AND PREVIOUS */}

                {/* END STEP 5 LOCATION */}
                </>
            ) : (
                <div className="p">Opa</div>
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

