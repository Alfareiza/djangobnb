import PropertyList from "@/app/components/properties/PropertyList";

const MyPropertiesPage = () => {
    return (
        <main className="max-w-[100%] max-auto px-6">
            <h1 className="my-4 pb-2 text-2xl">
                My Properties
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <PropertyList/>
            </div>
        </main>
    )
}

export default MyPropertiesPage;
