module.exports.getBuildEnvironment = function () {
  var env = process.env.ENVIRONMENT || 'development'
  if (env !== 'production' && env !== 'development') {
    throw new Error('Environment set to "' + env + '", but only ENVIRONMENT=production and ENVIRONMENT=development are supported at the moment');
  }
  return env;
}