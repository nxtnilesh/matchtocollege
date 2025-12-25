"use client";

import { useState } from "react";
import { colleges } from "./data/colleges";
import CollegeCard from "./components/CollegeCard";
import SearchBar from "./components/SearchBar";

export default function Home() {
  const [search, setSearch] = useState("");
  const [sorted, setSorted] = useState(false);

  let filtered = colleges.filter(college =>
    college.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sorted) {
    filtered = [...filtered].sort((a, b) => a.fees - b.fees);
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            College Explorer
          </h1>
          <p className="text-gray-600 mt-1">
            Search and compare colleges
          </p>
        </header>

        {/* Search & Sort */}
        <SearchBar
          value={search}
          onChange={setSearch}
          onSort={() => setSorted(!sorted)}
        />

        {/* College List */}
        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 ? (
            <p className="text-gray-500">No colleges found.</p>
          ) : (
            filtered.map(college => (
              <CollegeCard key={college.id} college={college} />
            ))
          )}
        </section>
      </div>
    </main>
  );
}
