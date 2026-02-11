// Auth is now handled by the backend API (apps/api) with JWT tokens.
// See: src/contexts/auth-context.tsx for the client-side auth provider.
// See: src/lib/api.ts for the API client.

// Legacy NextAuth route handler stubs (kept to prevent 404 on /api/auth/*)
export const handlers = {
  GET: () => new Response(JSON.stringify({ message: "Use backend API for auth" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  }),
  POST: () => new Response(JSON.stringify({ message: "Use backend API for auth" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  }),
};
