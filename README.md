# BaseSea NFT Marketplace (Frontend)

## Project Overview

Welcome to the Ethereal NFT Marketplace, a modern and aesthetically pleasing frontend application designed to showcase a vibrant ecosystem for Non-Fungible Tokens. This project focuses on delivering an engaging user experience across key NFT functionalities, including browsing upcoming drops, viewing market statistics, minting new NFTs, and exploring a collection of minted digital assets.

Built with a strong emphasis on responsive design and a dark theme, the marketplace provides a sleek and intuitive interface for both creators and collectors in the digital art space.

## Features

This frontend application currently includes the following main sections:

1.  **NFT Marketplace (Mint Page):**
    *   Displays a featured NFT with detailed information (title, creator, description, likes).
    *   Shows minting progress (minted vs. total supply).
    *   Includes a quantity selector for minting.
    *   Simulates the minting process with a loading indicator.
    *   Showcases a grid of recently minted NFTs.

2.  **Drops Page:**
    *   Highlights an upcoming "Featured Drop" with a countdown timer, mint price, and supply details.
    *   Allows users to filter drops by status (All, Upcoming, Live Now, Sold Out).
    *   Displays a grid of various NFT drops with their details (image, title, creator, mint price, supply, whitelist count, status).
    *   Interactive hover effects for drop cards and status badges.

3.  **Stats Page:**
    *   Provides an overview of marketplace key performance indicators (KPIs) like total volume, total sales, average price, and active wallets (mock data).
    *   Features a comprehensive rankings table for NFT collections, displaying metrics such as volume, change, floor price, sales, owners, and supply (mock data).
    *   Includes time filters (24h, 7d, 30d, All) and a search bar for collections.
    *   Uses a consistent and clear design for data presentation.

4.  **Create Page:**
    *   An interactive form allowing users to "create" a new NFT (frontend simulation).
    *   **File Upload:** Drag-and-drop or click-to-browse image upload functionality with a live preview.
    *   **NFT Details:** Input fields for NFT name and description.
    *   **Properties Manager:** Add custom key-value properties (traits) to the NFT.
    *   **Live Preview:** See how the NFT will look as details are entered.
    *   Simulates the creation process with a success message and option to create another.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Shadcn/UI:** A collection of accessible and customizable UI components built with Radix UI and Tailwind CSS.
*   **Lucide React:** A beautiful collection of open-source icons.
*   **Framer Motion:** A production-ready motion library for React to power animations.
*   **React Router DOM:** For declarative routing within the application.
*   **Moment.js / date-fns:** For date and time manipulation (used in countdowns).

## Setup and Installation (for local development)

1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPOSITORY_URL_HERE]
    cd ethereal-nft-marketplace
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    The application should now be running on `http://localhost:3000` (or another port if 3000 is occupied).

## Usage

Navigate through the application using the header links:

*   **Mint:** Explore the featured NFT and simulate minting.
*   **Drops:** Discover upcoming and active NFT collections.
*   **Stats:** View marketplace performance and collection rankings.
*   **Create:** Design and "mint" your own custom NFT.

## Future Enhancements (Vision)

This frontend provides a solid foundation for a full-fledged NFT marketplace. Future enhancements could include:

*   **Web3 Integration:** Connecting the frontend to a blockchain (e.g., Ethereum, Polygon) for actual NFT minting, buying, and selling.
*   **Smart Contract Interaction:** Implementing functionality to interact with NFT smart contracts for true decentralized operations.
*   **User Wallet Integration:** Connecting with popular Web3 wallets (e.g., MetaMask).
*   **Backend Services:** For user authentication, data storage, and other marketplace logic.
*   **Dynamic Data:** Replacing mock data with real-time data fetched from blockchain APIs or a backend.
*   **Advanced Analytics:** Incorporating more complex charts and data visualizations on the Stats page.
*   **User Profiles:** Allowing users to view their owned NFTs and past transactions.

---

Feel free to customize this README further to match your specific project branding, add your contact information, or expand on any sections!
