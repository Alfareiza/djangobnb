import Image from "next/image";
import Link from "next/link";
import ContactButton from "@/app/components/ContactButton";
import PropertyList from "@/app/components/properties/PropertyList";

const MyReservationsPage = () => {
    return (
        <main className="max-w-[100%] max-auto px-6">
          <h1 className="pb-2 text-2xl">
            My Reservations
          </h1>

          {/* DETAIL OF RESERVATION */}
          <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">

              {/* LEFT PART OF ONE RESERVATION */}
              <div className="col-span-1">
                <div className="relative overflow-hidden aspect-square rounded-xl">
                    <Image
                        fill
                        src="/props/prop-beachfront-a1.png"
                        className="hover:scale-110 object-cover transition"
                    />
                </div>
              </div>
              {/* END LEFT PART OF ONE RESERVATION */}

              {/* RIGHT PART OF ONE RESERVATION */}
              <div className="col-span-1 md:col-span-3">
                <h2 className="mb-4 text-xl">
                    Property Name
                </h2>
                <p className="mb-4"> <b>Check in date:</b> 14/2/2024 </p>
                <p className="mb-4"> <b>Check out date:</b> 14/2/2024 </p>

                <p className="mb-4"> <b>Number of nights:</b> 7 </p>
                <p className="mb-4"> <b>Total Price:</b> $3.000</p>

                <div className="inline-block cursor-pointer mt-6 py-2 px-6 bg-airbnb text-white rounded-xl hover:bg-airbnb-dark transition">
                    Go to property
                </div>
              </div>
              {/* END RIGHT PART OF ONE RESERVATION */}

          </div>
          {/* END DETAIL OF RESERVATION */}

           {/* DETAIL OF RESERVATION */}
          <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">

              {/* LEFT PART OF ONE RESERVATION */}
              <div className="col-span-1">
                <div className="relative overflow-hidden aspect-square rounded-xl">
                    <Image
                        fill
                        src="/props/prop-beachfront-a1.png"
                        className="hover:scale-110 object-cover transition"
                    />
                </div>
              </div>
              {/* END LEFT PART OF ONE RESERVATION */}

              {/* RIGHT PART OF ONE RESERVATION */}
              <div className="col-span-1 md:col-span-3">
                <h2 className="mb-4 text-xl">
                    Property Name
                </h2>
                <p className="mb-4"> <b>Check in date:</b> 14/2/2024 </p>
                <p className="mb-4"> <b>Check out date:</b> 14/2/2024 </p>

                <p className="mb-4"> <b>Number of nights:</b> 7 </p>
                <p className="mb-4"> <b>Total Price:</b> $3.000</p>

                <div className="inline-block cursor-pointer mt-6 py-2 px-6 bg-airbnb text-white rounded-xl hover:bg-airbnb-dark transition">
                    Go to property
                </div>
              </div>
              {/* END RIGHT PART OF ONE RESERVATION */}

          </div>
          {/* END DETAIL OF RESERVATION */}

        </main>
    )
}

export default MyReservationsPage;
