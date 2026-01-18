export function Card({ title, location, price, image, meta }: any) {
    return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition">
    <img src={image} alt={title} className="h-52 w-full object-cover" />
    <div className="p-5">
    <h3 className="text-xl font-semibold">{title}</h3>
    <p className="text-neutral-400 text-sm">{location}</p>
    {meta && <p className="text-sm text-neutral-500 mt-1">{meta}</p>}
    <p className="mt-4 text-emerald-400 font-bold text-lg">{price}</p>
    <button className="mt-4 w-full py-2 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-black transition">
    View Details
    </button>
    </div>
    </div>
    );
    }