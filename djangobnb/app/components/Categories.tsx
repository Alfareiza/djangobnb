import Image from "next/image";
import Link from "next/link";

const Categories = () => {
    return (
            <div className="mt-6 pt-3 cursor-pointer pb-6 flex items-center space-x-12">
                <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                    <Image src="/category-beach.jpg" alt="mansion" width={25} height={25} />
                    <span className="text-xs text-center">Beachfront</span>
                </div>
                <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                    <Image src="/category-cabin.jpg" alt="mansion" width={25} height={25} />
                    <span className="text-xs text-center"> Cabin </span>
                </div>
                <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                    <Image src="/category-camping.jpg" alt="mansion" width={25} height={25} />
                    <span className="text-xs text-center"> Campings </span>
                </div>
                <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                    <Image src="/category-mansion.jpg" alt="mansion" width={25} height={25} />
                    <span className="text-xs text-center"> Mansion </span>
                </div>
                <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                    <Image src="/category-amazing-pools.jpg" alt="mansion" width={25} height={25} />
                    <span className="text-xs text-center"> Amazing pools </span>
                </div>
            </div>
    )
}

export default Categories;