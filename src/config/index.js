const config = {
  devBuild: ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development'),
  api_url: 'http://ask-apiko-api.herokuapp.com/',
};

export default config;
