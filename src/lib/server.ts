// adapted from https://stackoverflow.com/questions/44342226/next-js-error-only-absolute-urls-are-supported
export const server =
  process.env.NODE_ENV !== 'production' ? 'http://localhost:8000' : 'FILL_IN'
