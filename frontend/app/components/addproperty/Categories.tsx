import Image from "next/image";

interface CategoriesProps {
    dataCategory: string;
    setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory, setCategory
}) => {
    return (
        <>
            <div className="pt-3 cursor-pointer pt-3 flex item-center space-x-12">
                    <div onClick={() => setCategory('beach_front')}
                        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'beach_front' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                        <Image src="/category-beach.jpg" alt="mansion" width={25} height={25} />
                        <span className="text-xs text-center">Beachfront</span>
                    </div>
                    <div onClick={() => setCategory('cabin')}
                        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'cabin' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                        <Image src="/category-cabin.jpg" alt="mansion" width={25} height={25} />
                        <span className="text-xs text-center"> Cabin </span>
                    </div>
                    <div onClick={() => setCategory('campings')}
                        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'campings' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                        <Image src="/category-camping.jpg" alt="mansion" width={25} height={25} />
                        <span className="text-xs text-center"> Campings </span>
                    </div>
                    <div onClick={() => setCategory('mansion')}
                        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'mansion' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                        <Image src="/category-mansion.jpg" alt="mansion" width={25} height={25} />
                        <span className="text-xs text-center"> Mansion </span>
                    </div>
                    <div onClick={() => setCategory('amazing_pools')}
                        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'amazing_pools' ? 'border-gray-800' : 'border-white'} opacity-60 hover:border-gray-200 hover:opacity-100`}>
                        <Image src="/category-amazing-pools.jpg" alt="mansion" width={25} height={25} />
                        <span className="text-xs text-center"> Amazing pools </span>
                    </div>
            </div>
        </>
    )
}
export default Categories

