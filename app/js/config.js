define([], function() {
  var config = {};
  config.apiKey = 'AIzaSyDeBwow5uH9PseCNEJnn-JlXMaCwUGA9sw';
  config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
  config.clientId = '143957689880-5rfps666lb262t8hueif3v01jtlamo28.apps.googleusercontent.com';

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  return config;
});
