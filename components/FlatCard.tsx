import Link from "next/link";

export default function FlatCard({ flat }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden">
  <img
    src={flat.image}
    alt={flat.title}
    className="h-48 w-full object-cover"
  />

  <div className="p-5">
    <h3 className="text-xl font-semibold text-slate-900">
      {flat.title}
    </h3>

    <p className="text-slate-600 text-sm mt-1">
      📍 {flat.location}
    </p>

    <p className="mt-3 text-slate-700 font-medium">
      ₹{flat.price}
    </p>

    <Link
      href={`/flats/${flat.slug}`}
      className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
    >
      View Details →
    </Link>
  </div>
</div>

  );
}
