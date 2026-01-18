"use client";


export default function SearchBar({ value, onChange }: any) {
return (
<input
value={value}
onChange={(e) => onChange(e.target.value)}
placeholder="Search by location..."
className="w-full md:w-96 px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 outline-none"
/>
);
}


// ================================
// components/Card.tsx
// ================================
export function Card({ title, location, price }: any) {
return (
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5">
<h3 className="text-xl font-semibold">{title}</h3>
<p className="text-neutral-400 text-sm">{location}</p>
<p className="mt-3 text-emerald-400 font-semibold">{price}</p>
</div>
);
}