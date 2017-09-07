const API_HOST = 'localhost.rollout.io:9000';
module.exports = {
  API_HOST: API_HOST,
  CD_API_ENDPOINT: `https://${API_HOST}/device/request_configuration`,
  CD_S3_ENDPOINT: 'https://s3.amazonaws.com/rox-conf.rollout.io/v1/development/',
  CLIENT_DATA_CACHE_KEY: 'client_data',
  CLIENT_DATA_CACHE_TTL_MIN: 15
}
