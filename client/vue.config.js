
module.exports = {
    proxyTable: {
        '/api': {
          target: 'http://localhost:3000',
          changeOrigin: true
        }
    },
};