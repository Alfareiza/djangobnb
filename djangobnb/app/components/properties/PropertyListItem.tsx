import Image from "next/image";
import Link from "next/link";

const PropertyListItem = () => {
    return (
            <div className="cursor-pointer">
                <div className="relative overflow-hidden aspect-square rounded-xl">
                    <Image
                        fill
                        src="/props/prop-beachfront-a1.png"
                        sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                        className="hover:scale-110 object-cover transition h-full w-full"
                        alt="Beach House"
                    />
                </div>
                <div className="mt-2">
                    <p className='text-lg font-bold'> North Bay village, Florida</p>
                </div>
                <div className="mt-2">
                    <p className='text-sm text-gray-500'> <b>$200</b>, night</p>
                </div>
            </div>
    )
}

export default PropertyListItem;