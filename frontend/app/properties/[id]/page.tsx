import Image from "next/image";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";

// export type PropertyType = {
//     id: string
//     title: string
//     description: string
//     price_per_night: string
//     image_url: string
//     bedrooms: string
//     bathrooms: string
//     guests: string
//     country: string
//     host: string
// }

const PropertyDetailPage = async ({params}: { params: {id: string }}) => {
    // Content shown accesing to /properties/id_property
    const property = await apiService.get(`/api/properties/${params.id}`)
    const userId = await getUserId()
    return (
            <main className="max-w-[100%] max-auto px-6 pb-6">
                {/* IMAGE COVER OF DETAIL PROPERTY PAGE */}
                <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                    <Image
                        fill
                        // src="/props/prop-beachfront-a1.png"
                        src={`${property.image_url}`}
                        className="object-cover transition h-full w-full"
                        alt="Beach House"
                    />
                </div>
                {/* END IMAGE COVER OF DETAIL PROPERTY PAGE */}

                {/* INFORMATION OF DETAIL PROPERTY PAGE */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {/* LEFT PART */}
                    <div className="py-6 pr-6 col-span-3">
                        <h1 className="mb-2 text-2xl">
                            {property.title}
                        </h1>
                        <span className="mb-6 block text-lg text-gray-600">
                            {property.guests} guests • {property.bedrooms} bedrooms • {property.bathrooms} bathrooms
                        </span>
                        <hr/>
                        
                        {/* HOSTNAME INFORMATION */}
                        <div className="py-6 flex items-center space-x-4">
                            {/* { property.host.avatar_url && ()} */}
                            <Image className="rounded-full" width={50} height={50}
                                   alt="The user name" src={`${property.host.avatar_url ? `${property.host.avatar_url}` : '/profile_pic.png'}`}
                                   />
                            <p>
                                <b>{property.host.name}</b> is your host
                            </p>
                        </div>
                        {/* END HOSTNAME INFORMATION */}

                        <hr/>
                        <p className="pt-6 text-base">
                            {property.description}
                        </p>
                    </div>
                    {/* END LEFT PART */}

                    {/* RIGHT PART */}
                    <ReservationSidebar property={property} userId={userId}/>
                    {/* END RIGHT PART */}
                </div>
                {/* END INFORMATION OF DETAIL PROPERTY PAGE */}
            </main>
    )
}

export default PropertyDetailPage;