// TODO: Replace with backend API authentication when apps/api JWT auth is ready
// This file previously used NextAuth.js with Prisma directly.
// The new architecture uses apps/api for authentication.

// Placeholder exports to prevent import errors
export const handlers = {
  GET: () => new Response("Auth not configured", { status: 501 }),
  POST: () => new Response("Auth not configured", { status: 501 }),
};

export const signIn = async () => {
  throw new Error("Auth not configured - use backend API");
};

export const signOut = async () => {
  throw new Error("Auth not configured - use backend API");
};

export const auth = async () => {
  return null;
};
