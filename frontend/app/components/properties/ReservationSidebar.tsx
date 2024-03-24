import Image from "next/image";

interface ReservationProps {
    property: Property
}


const ReservationSidebar:React.FC<ReservationProps> = ({
    property
}) => {
    const options = Array.from({ length: property.guests }, (_, index) => index + 1);

    return (
        
            <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
                <h2 className="mb-5 text-2xl"> ${property.price_per_night} per night</h2>
                <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                    <label className="block font-bold text-xs">Guests</label>
                    <select className="w-full -ml-1 text-xm">
                        {options.map((guests: any) => (
                            <option key={guests} value={guests}>
                                {guests}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='w-full mb-6 py-3 text-center text-white bg-airbnb hover:bg-airbnb-dark transition  rounded-xl'>
                    Book
                </div>
                <div className="mb-4 flex justify-between align-center">
                    <p>${property.price_per_night} * 4 nights</p>
                    <p>$ {property.price_per_night * 4 } </p>
                </div>
                <div className="mb-4 flex justify-between align-center">
                    <p>Fee</p>
                    <p>$ 40 </p>
                </div>
                <hr/>
                <div className="mt-2 mb-4 flex justify-between align-center font-bold">
                    <p>Total</p>
                    <p>$ 840</p>
                </div>
            </aside>
    )
}

export default ReservationSidebar;