import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68c4c5a35e2d82bff3e5cc4c", 
  requiresAuth: true // Ensure authentication is required for all operations
});
