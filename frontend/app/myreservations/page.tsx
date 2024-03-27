import Image from "next/image";
import apiService from "../services/apiService";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MyReservationsPage = async () => {
    const reservations = await apiService.get(`/api/auth/myreservations`)
    return (
        <main className="max-w-[100%] max-auto px-6">
          <h1 className="pb-2 text-2xl">
            My Reservations
          </h1>

          {reservations.map((reservation: any) => {
            return (
                  // DETAIL OF RESERVATION 
                  <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
  
                      {/* LEFT PART OF ONE RESERVATION */}
                      <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image
                                fill
                                alt={reservation.property.title}
                                src={reservation.property.image_url}
                                className="hover:scale-110 object-cover transition"
                            />
                        </div>
                      </div>
                      {/* END LEFT PART OF ONE RESERVATION */}
  
                      {/* RIGHT PART OF ONE RESERVATION */}
                      <div className="col-span-1 md:col-span-3">
                        <h2 className="mb-4 text-xl">
                            {reservation.property.title}
                        </h2>
                        <p className="mb-4"> <b>Check in date:</b> {reservation.start_date} </p>
                        <p className="mb-4"> <b>Check out date:</b> {reservation.end_date} </p>
  
                        <p className="mb-4"> <b>Number of nights:</b> {reservation.number_of_nights} </p>
                        <p className="mb-4"> <b>Total Price:</b> ${reservation.total_price}</p>
  
                        <Link className="inline-block cursor-pointer mt-6 py-2 px-6 bg-airbnb text-white rounded-xl hover:bg-airbnb-dark transition"
                              href={`/properties/${reservation.property.id}`}
                        >
                            Go to property
                        </Link>
                      </div>
                      {/* END RIGHT PART OF ONE RESERVATION */}
  
                  </div>
                // END DETAIL OF RESERVATION
            )
          })}

        </main>
    )
}

export default MyReservationsPage;
