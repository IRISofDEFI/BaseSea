import React from 'react';
import { Button } from '@/components/ui/button';

export default function QuantitySelector({ quantity, setQuantity, max }) {
  const increment = () => setQuantity(q => Math.min(q + 1, max));
  const decrement = () => setQuantity(q => Math.max(q - 1, 1));
  
  return (
    <div className="flex items-center space-x-2 bg-[#111827] border border-gray-700 rounded-lg p-1 mr-4">
      <Button variant="ghost" size="icon" onClick={decrement} className="h-10 w-10 text-xl hover:bg-gray-700" disabled={quantity <= 1}>-</Button>
      <span className="w-10 text-center font-bold text-lg">{quantity}</span>
      <Button variant="ghost" size="icon" onClick={increment} className="h-10 w-10 text-xl hover:bg-gray-700" disabled={quantity >= max}>+</Button>
    </div>
  );
}