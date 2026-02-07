export default () => ({
  port: parseInt(process.env.PORT, 10) || 4000,
  frontend: {
    url: process.env.FRONTEND_URL || 'http://localhost:3000',
  },
});
