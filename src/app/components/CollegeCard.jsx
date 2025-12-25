"use client";
import { Rating } from "@mui/material";
import { FaCity } from "react-icons/fa";

export default function CollegeCard({ college }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition cursor-pointer">
      
      <h2 className="text-lg font-semibold text-gray-800">
        {college.name}
      </h2>

      <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
        <FaCity className="text-gray-400" />
        <span>{college.city}</span>
      </div>

      <div className="my-4 h-px bg-gray-200" />

      <div className="flex justify-between items-center text-sm mb-2">
        <span className="text-gray-600">Rating</span>

        <div className="flex items-center gap-2">
          <Rating
            value={college.rating}
            precision={0.1}
            readOnly
            size="small"
          />
          <span className="font-medium text-gray-700">
            {college.rating}
          </span>
        </div>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Annual Fees</span>
        <span className="font-semibold text-blue-600">
          ₹{college.fees}
        </span>
      </div>
    </div>
  );
}
