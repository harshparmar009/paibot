import { flats } from "../../../data/flat";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import FlatChatBot from "@/components/FlatChatBot";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function HotelDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const hotel = flats.find(h => h.slug === slug);
  if (!hotel) notFound();

  return (
    <div className="min-h-screen">
    <Navbar/>
    <div className="pt-26 bg-slate-50 text-slate-900">
      {/* HERO */}
      <div className="relative h-[420px]">
        <img
          src={hotel.image}
          alt={hotel.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-4xl font-bold">{hotel.title}</h1>
          <p className="text-lg text-slate-200">{hotel.location}</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-3 gap-10">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              About this hotel
            </h2>
            <p className="text-slate-600 leading-relaxed">
              {hotel.title} offers a premium stay experience with modern
              amenities, comfort-focused rooms, and excellent service.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-4">
              Facilities
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {hotel.facilities.map(f => (
                <div
                  key={f}
                  className="bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm shadow-sm"
                >
                  ✔ {f}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* PRICE CARD */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 h-fit sticky top-28">
          <p className="text-sm text-slate-500">Price per night</p>
          <p className="text-3xl font-bold text-indigo-600 mt-1">
            ₹{hotel.price}
          </p>

          <button className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition">
            Book Now
          </button>
        </div>
      </div>

      <FlatChatBot data={hotel} />
    </div>
    </div>
  );
}


