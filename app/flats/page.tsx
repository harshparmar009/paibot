"use client";


import { useState } from "react";
import SearchBar from "../../components/Searchbar";
import { flats } from "../../data/flat";
import Navbar from "@/components/Navbar";
import FlatCard from "@/components/FlatCard";


export default function FlatsPage() {
    const [query, setQuery] = useState("");
    
    
    const filtered = flats.filter((f) =>
    f.location.toLowerCase().includes(query.toLowerCase())
    );
    
    
    return (
        <div className="w-full bg-[#cdebf6] min-h-screen">
        <Navbar/>
        <main className="px-8 py-16 mt-4">
        <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between ">
                
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Available flats
                </h1>

                <div className="">
                <SearchBar value={query} onChange={setQuery} />
                </div>

            </div>
        
        
        <div className="grid md:grid-cols-3 gap-6 mt-10">
        {filtered.map((flat) => (
        <FlatCard key={flat.slug} flat={flat} />
        ))}
        </div>
        </main>
    </div>
    );
    }
