import Image from "next/image";
import PropertyType from './PropertyList';
import { useRouter } from "next/navigation";

interface PropertyProps {
    property: PropertyType; // PropertyType is the model of Property in Typescript environment
}

const PropertyListItem: React.FC<PropertyProps> = ({
    property
}) => {
    // Content shown accessing to /properties/
    // Called from PropertyList, here, the is shown a property as
    // a item of a list of properties 

    const router = useRouter()
    return (
            <div className="cursor-pointer" onClick={() => router.push(`/properties/${property.id}`)}>
                <div className="relative overflow-hidden aspect-square rounded-xl">
                    <Image
                        fill
                        src={property.image_url}
                        sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
                        className="hover:scale-110 object-cover transition h-full w-full"
                        alt="`{property.title}``"
                    />
                </div>
                <div className="mt-2">
                    <p className='text-lg font-bold'>{property.title}</p>
                </div>
                <div className="mt-2">
                    <p className='text-sm text-gray-500'> <b>${property.price_per_night}</b>, night</p>
                </div>
            </div>
    )
}

export default PropertyListItem;