import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ImageIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function NFTPreview({ name, image, properties }) {
  return (
    <Card className="bg-gray-900/50 border-gray-700/50 overflow-hidden group">
      <div className="relative">
        <div className="aspect-square bg-[#040911] flex items-center justify-center">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="text-gray-600 text-center">
              <ImageIcon className="w-16 h-16 mx-auto" />
              <p>Your image will appear here</p>
            </div>
          )}
        </div>
        <CardContent className="p-4 space-y-3">
          <h3 className="font-bold text-white truncate text-lg">{name}</h3>
          
          {properties && properties.length > 0 && (
            <div className="pt-3 border-t border-gray-700">
              <h4 className="text-xs text-gray-400 mb-2 uppercase font-semibold">Properties</h4>
              <div className="flex flex-wrap gap-2">
                {properties.map((prop, index) => (
                  <Badge key={index} variant="secondary" className="bg-slate-700 text-slate-200">
                    <span className="font-normal text-slate-400 mr-1.5">{prop.key}:</span> {prop.value}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
}