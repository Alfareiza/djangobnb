import PropertyList from "@/app/components/properties/PropertyList";
import { getUserId } from "../lib/actions";

// Shown in the url /myproperties
// Show the properties of the logged user
const MyPropertiesPage = async () => {
    const userId = await getUserId()
    return (
        <main className="max-w-[100%] max-auto px-6">
            <h1 className="my-4 pb-2 text-2xl">
                My Properties
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <PropertyList host_id={userId}/>
            </div>
        </main>
    )
}

export default MyPropertiesPage;
