import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { X, PlusCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PropertiesManager({ properties, setProperties }) {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');

  const addProperty = () => {
    if (key && value) {
      setProperties([...properties, { key, value }]);
      setKey('');
      setValue('');
    }
  };

  const removeProperty = index => {
    setProperties(properties.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Properties</h3>
      <div className="p-4 bg-gray-900/50 border border-gray-700 rounded-lg space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input placeholder="e.g. 'Eye color'" value={key} onChange={e => setKey(e.target.value)} className="bg-[#040911] border-gray-600" />
          <Input placeholder="e.g. 'Blue'" value={value} onChange={e => setValue(e.target.value)} className="bg-[#040911] border-gray-600" />
        </div>
        <Button onClick={addProperty} variant="outline" className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-900/20 hover:text-blue-300">
          <PlusCircle className="w-4 h-4 mr-2" />
          Add Property
        </Button>
      </div>
      
      <AnimatePresence>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {properties.map((prop, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-3 flex justify-between items-center"
            >
              <div>
                <p className="text-xs text-blue-400">{prop.key}</p>
                <p className="font-semibold text-sm">{prop.value}</p>
              </div>
              <Button size="icon" variant="ghost" onClick={() => removeProperty(index)} className="w-7 h-7 hover:bg-red-900/50">
                <X className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
}