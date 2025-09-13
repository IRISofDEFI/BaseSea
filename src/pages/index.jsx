import Layout from "./Layout.jsx";

import NFTMarketplace from "./NFTMarketplace";

import Drops from "./Drops";

import Stats from "./Stats";

import Create from "./Create";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    NFTMarketplace: NFTMarketplace,
    
    Drops: Drops,
    
    Stats: Stats,
    
    Create: Create,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<NFTMarketplace />} />
                
                
                <Route path="/NFTMarketplace" element={<NFTMarketplace />} />
                
                <Route path="/Drops" element={<Drops />} />
                
                <Route path="/Stats" element={<Stats />} />
                
                <Route path="/Create" element={<Create />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}