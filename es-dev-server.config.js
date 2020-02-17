module.exports = {
  middlewares: [
    (ctx, next) => {
      if (ctx.url === '/bench.js') {
        ctx.status = 200;
        ctx.response.set('content-type', 'text/javascript');
        ctx.body = 'export const start = () => {}; export const stop = () => {};';
      }
      return next();
    }
  ]
};