
import { useState } from 'react';
import { Check, ChevronDown, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { categories } from '@/lib/products';

interface ProductFiltersProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function ProductFilters({ 
  selectedCategory, 
  onCategoryChange 
}: ProductFiltersProps) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isPriceFilterOpen, setIsPriceFilterOpen] = useState(false);
  
  return (
    <div className="mb-8">
      {/* Mobile Filters Toggle */}
      <div className="flex lg:hidden mb-4">
        <Button 
          variant="outline" 
          onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          className="w-full flex justify-between items-center"
        >
          <span className="flex items-center">
            <SlidersHorizontal size={16} className="mr-2" />
            Filters
          </span>
          <ChevronDown 
            size={16} 
            className={`transition-transform ${isMobileFilterOpen ? 'rotate-180' : ''}`} 
          />
        </Button>
      </div>
      
      {/* Filters Container */}
      <div className={`space-y-6 lg:space-y-0 lg:flex lg:flex-wrap lg:items-center lg:gap-4 transition-all duration-300 ease-in-out overflow-hidden ${
        isMobileFilterOpen ? 'max-h-96' : 'max-h-0 lg:max-h-full'
      }`}>
        {/* Category Filter */}
        <div className="space-y-2 lg:space-y-0">
          <h3 className="text-sm font-medium mb-3 lg:hidden">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category.id)}
                className={`text-xs px-3 py-1 h-auto relative transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground font-medium"
                    : "bg-secondary/50 hover:bg-secondary border-transparent text-foreground"
                }`}
              >
                {selectedCategory === category.id && (
                  <Check size={12} className="mr-1" />
                )}
                {category.name}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Price Filter (Usually would have actual functionality) */}
        <div className="lg:border-l lg:border-border lg:pl-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsPriceFilterOpen(!isPriceFilterOpen)}
            className="flex items-center justify-between w-full lg:w-auto text-sm"
          >
            <span>Price Range</span>
            <ChevronDown 
              size={14} 
              className={`ml-2 transition-transform duration-300 ${isPriceFilterOpen ? 'rotate-180' : ''}`} 
            />
          </Button>
          
          <div className={`overflow-hidden transition-all duration-300 ${
            isPriceFilterOpen ? 'max-h-20 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex items-center gap-2">
              <input 
                type="number" 
                placeholder="Min" 
                className="w-20 px-2 py-1 text-sm border border-border rounded" 
                min="0"
              />
              <span className="text-muted-foreground">to</span>
              <input 
                type="number" 
                placeholder="Max" 
                className="w-20 px-2 py-1 text-sm border border-border rounded"
                min="0" 
              />
              <Button size="sm" className="text-xs">
                Apply
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
