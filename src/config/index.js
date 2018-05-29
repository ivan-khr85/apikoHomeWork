const config = {
  devBuild: ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development'),
  api_url: 'https://ivan-khr85-ask-apiko-client.herokuapp.com/',
  // api_url: 'http://192.168.0.103:3001/',
  
};

export default config;
