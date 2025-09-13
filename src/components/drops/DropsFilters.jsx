import React from "react";
import { Filter, Clock, Zap, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DropsFilters({ currentFilter, onFilterChange }) {
  const filters = [
    { key: 'all', label: 'All Drops', icon: Filter },
    { key: 'upcoming', label: 'Upcoming', icon: Clock },
    { key: 'live', label: 'Live Now', icon: Zap },
    { key: 'sold_out', label: 'Sold Out', icon: X }
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <div className="flex items-center gap-2">
        <Filter className="w-5 h-5 text-gray-400" />
        <span className="text-gray-400 font-medium">Filter by status:</span>
      </div>
      
      {filters.map(filter => {
        const Icon = filter.icon;
        const isActive = currentFilter === filter.key;
        
        return (
          <Button
            key={filter.key}
            onClick={() => onFilterChange(filter.key)}
            variant={isActive ? "default" : "outline"}
            className={`flex items-center gap-2 ${
              isActive 
                ? "bg-blue-600 hover:bg-blue-700" 
                : "border-gray-600 hover:border-blue-500 hover:text-blue-400"
            }`}
          >
            <Icon className="w-4 h-4" />
            {filter.label}
          </Button>
        );
      })}
    </div>
  );
}