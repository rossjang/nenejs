export default () => ({
  port: parseInt(process.env.PORT ?? '4000', 10) || 4000,
  frontend: {
    url: process.env.FRONTEND_URL || 'http://localhost:3000',
  },
  database: {
    url: process.env.DATABASE_URL || 'file:./dev.db',
  },
});
