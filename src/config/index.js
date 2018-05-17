const config = {
  devBuild: ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development'),
  // api_url: 'https://seniv-ask-apiko.herokuapp.com/',
  api_url: 'https://apiko-ask.herokuapp.com/',
};

export default config;
