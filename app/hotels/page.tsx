"use client";


import { useState } from "react";
import SearchBar from "../../components/Searchbar";
import { hotels } from "../../data/hotel";
import HotelCard from "@/components/HotelCard";
import Navbar from "@/components/Navbar";


export default function HotelsPage() {
    const [query, setQuery] = useState("");
    
    
    const filtered = hotels.filter((h) =>
    h.location.toLowerCase().includes(query.toLowerCase())
    );
    
    
    return (
        <div className="w-full bg-[#cdebf6] min-h-screen">
            <Navbar/>
            <main className="px-8 py-16 mt-4">
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between ">
                    
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    Available Hotels
                    </h1>

                    <div className="">
                    <SearchBar value={query} onChange={setQuery} />
                    </div>

                </div>
            
            
            <div className="grid md:grid-cols-3 gap-6 mt-10">
            {filtered.map((hotel) => (
            <HotelCard key={hotel.slug} hotel={hotel} />
            ))}
            </div>
            </main>
        </div>
    );
    }

   