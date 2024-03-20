'use client';
import CustomButton from '@/app/components/forms/CustomButton'

const ConversationDetail = () => {
    return (
    <>
        {/* MESSAGES OF HOST AND GUESTS */}
        <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
            <div className="w-[80%] py-4 px-6 bg-gray-200 rounded">
                <p className="font-bold text-gray-500">
                    Me
                </p>
                <p>Quam elementum pulvinar etiam non quam lacus suspendisse</p>
            </div>

            <div className="w-[80%] ml-[20%] py-4 px-6 bg-blue-200 rounded  text-right">
                <p className="font-bold text-gray-500">
                    Jane Doe
                </p>
                <p>Volutpat sed cras ornare arcu dui. Vestibulum lorem sed risus ultricies. Amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus.</p>
            </div>
        </div>
        {/* END MESSAGES OF HOST AND GUESTS */}

        {/* SPACE FOR DIGIT TEXT AND BUTTON SEND */}
        <div className="mt-4 p-3 flex border border-gray-300 space-x-4">
            <input type="text" placeholder="Type your message..."
                   className="w-full p-2 bg-gray-200 rounded-xl"
            />
            <CustomButton
                label='Send'
                onClick={() => console.log('Clicked')}
                className="w-[100px]"
            />
        </div>
        {/* END SPACE FOR DIGIT TEXT AND BUTTON SEND */}
    </>
    )
}

export default ConversationDetail;
