
import React, { useState } from 'react';
import Header from '../components/nft/Header';
import FileUpload from '../components/create/FileUpload';
import PropertiesManager from '../components/create/PropertiesManager';
import NFTPreview from '../components/create/NFTPreview';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle } from 'lucide-react';

export default function Create() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [properties, setProperties] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileChange = (file, url) => {
    setFile(file);
    setPreviewUrl(url);
  };

  const handleCreate = () => {
    setIsCreating(true);
    setTimeout(() => {
      setIsCreating(false);
      setIsSuccess(true);
    }, 2500);
  };
  
  const handleCreateAnother = () => {
    setFile(null);
    setPreviewUrl('');
    setName('');
    setDescription('');
    setProperties([]);
    setIsSuccess(false);
  }

  return (
    <div className="min-h-screen bg-[#040911] text-white font-sans">
      <Header />
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Create New Item
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Turn your digital art into a unique, tradable asset on the blockchain.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {isSuccess ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-center bg-gray-900/50 border border-green-500/30 rounded-xl p-16 space-y-6"
            >
              <CheckCircle className="w-20 h-20 text-green-400 mx-auto" />
              <h2 className="text-4xl font-bold">Congratulations!</h2>
              <p className="text-gray-300 text-lg">Your NFT has been successfully created.</p>
              <img src={previewUrl} alt="Created NFT" className="w-48 h-48 rounded-lg mx-auto object-cover border-2 border-green-500/50" />
              <Button onClick={handleCreateAnother} size="lg">Create Another NFT</Button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left side: Form */}
                <div className="lg:col-span-2 space-y-8">
                  <FileUpload onFileChange={handleFileChange} previewUrl={previewUrl} />
                  
                  <div>
                    <Label htmlFor="name" className="text-lg font-semibold mb-2 block">Name</Label>
                    <Input id="name" placeholder="e.g. 'Cyber Warrior #1'" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-900/50 border-gray-700 h-12" />
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-lg font-semibold mb-2 block">Description</Label>
                    <Textarea id="description" placeholder="Provide a detailed description of your item." value={description} onChange={(e) => setDescription(e.target.value)} className="bg-gray-900/50 border-gray-700 min-h-[120px]" />
                  </div>

                  <PropertiesManager properties={properties} setProperties={setProperties} />
                </div>

                {/* Right side: Preview */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <h3 className="text-xl font-bold mb-4">Live Preview</h3>
                    <NFTPreview 
                      name={name || "My Awesome NFT"}
                      image={previewUrl}
                      properties={properties}
                    />
                     <Button
                      size="lg"
                      className="w-full mt-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                      onClick={handleCreate}
                      disabled={!file || !name || isCreating}
                    >
                      {isCreating ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Creating NFT...</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-5 h-5" />
                          <span>Create NFT</span>
                        </div>
                      )}
                    </Button>
                    {!file || !name ? <p className="text-xs text-center text-yellow-400 mt-2">Please add a file and name to create.</p> : null}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
