import Image from "next/image";
import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";
import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";

// params is a object which has an id, because
// the the url /hosts/123-qwe-56765-dsaf is called
// the HostDetailPage receive 123-qwe-56765-dsaf as a param

const HostDetailPage = async ({params}: {params:{id: string }}) => {
    // Rendered when an url like this:
    // http://localhost:3000/hosts/a2a9f59f-a26c-41bd-8aed-269db470df1d
    // is called

    // the params.id which is a2a9f59f-a26c-41bd-8aed-269db470df1d
    // and is received in the url is used to call the API and
    // get more information of the host
    const host = await apiService.get(`/api/auth/${params.id}`)
    const userId = await getUserId()
    return (
            <main className="max-w-[100%] max-auto mt-5 px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {/* LEFT PART OF THE PAGE, HOST INFORMATION */}
                    <aside className="col-span-1 mb-4">
                        <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl">
                            <Image
                                src={host.avatar_url}
                                width={200}
                                height={200}
                                alt="Host name"
                                className="rounded-full"
                            />
                            <h1 className="mt-6 text-2xl">
                                {host.name[0].toUpperCase() + host.name.slice(1)}
                            </h1>

                            {/* Show ContactButton when the logged user is different from the host to be requested */}
                            { userId != params.id && (
                                <ContactButton/>
                            )}
                        </div>
                    </aside>
                    {/* END LEFT PART OF THE PAGE, HOST INFORMATION */}
                    
                    {/* RIGHT PART OF THE PAGE, PROPERTIES */}
                    <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <PropertyList host_id={host.id}/>
                        </div>
                    </div>
                    {/* END RIGHT PART OF THE PAGE, PROPERTIES */}
                </div>
            </main>
    )
}

export default HostDetailPage;