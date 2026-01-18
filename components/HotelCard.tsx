import Link from "next/link";

export default function HotelCard({ hotel }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">
  <img
    src={hotel.image}
    alt={hotel.title}
    className="h-48 w-full object-cover"
  />

  <div className="p-5">
    <h3 className="text-xl font-semibold text-slate-900">
      {hotel.title}
    </h3>

    <p className="text-slate-600 text-sm mt-1">
      📍 {hotel.location}
    </p>

    <p className="mt-3 text-slate-700 font-medium">
      ₹{hotel.price}/night
    </p>

    <Link
      href={`/hotels/${hotel.slug}`}
      className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
    >
      View Details →
    </Link>
  </div>
</div>

  );
}
