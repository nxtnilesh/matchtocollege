"use client";
import { BiSearch } from "react-icons/bi";

export default function SearchBar({ value, onChange, onSort }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-white border border-gray-200 rounded-lg p-4">
      <div className="relative flex-1">
        <BiSearch
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search college by name"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={onSort}
        className="px-6 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition cursor-pointer"
      >
        Sort by Fees
      </button>
    </div>
  );
}
