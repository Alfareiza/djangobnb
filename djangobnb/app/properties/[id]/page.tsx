import Image from "next/image";
import Link from "next/link";
import ReservationSidebar from "@/app/components/properties/ReservationSidebar";

const PropertyDetailPage = () => {
    return (
            <main className="max-w-[100%] max-auto px-6 pb-6">
                {/* IMAGE COVER OF DETAIL PROPERTY PAGE */}
                <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                    <Image
                        fill
                        src="/props/prop-beachfront-a1.png"
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
                            North Bay village, Florida
                        </h1>
                        <span className="mb-6 block text-lg text-gray-600">
                            8 guests • 4 bedrooms • 4 beds • 4.5 baths
                        </span>
                        <hr/>
                        <div className="py-6 flex items-center space-x-4">
                            <Image
                                src="/profile_pic.png"
                                width={50}
                                height={50}
                                className="rounded-full"
                                alt="The user name"
                            />
                            <p>
                                <b>Jane Doe</b> is your host
                            </p>
                        </div>
                        <hr/>
                        <p className="pt-6 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc id cursus metus aliquam eleifend mi in nulla. Cras tincidunt lobortis feugiat vivamus at augue eget arcu dictum. Massa vitae tortor condimentum lacinia quis. Volutpat consequat mauris nunc congue nisi vitae. Cursus sit amet dictum sit. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Id velit ut tortor pretium viverra. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Tristique senectus et netus et malesuada. Morbi non arcu risus quis varius quam. Urna id volutpat lacus laoreet non curabitur gravida arcu. Volutpat consequat mauris nunc congue nisi vitae suscipit. Arcu odio ut sem nulla pharetra diam sit amet nisl.
                        </p>
                    </div>
                    {/* END LEFT PART */}

                    {/* RIGHT PART */}
                    <ReservationSidebar/>
                    {/* END RIGHT PART */}
                </div>
                {/* END INFORMATION OF DETAIL PROPERTY PAGE */}
            </main>
    )
}

export default PropertyDetailPage;