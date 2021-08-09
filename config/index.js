const CONFIG_OPTIONS = {
  PORT: {
    env: 'PORT',
    default: '3000'
  },
  HASHING_SECRET: {
    env: 'HASHINGSECRET',
    default: '6439867890'
  },
  APP_ROOT: {
    env: 'APP_ROOT',
    default: 'http://localhost:3000/'
  },
  DB_API_ROOT: {
    env: 'DB_API_ROOT',
    default: 'http://localhost:3000/'
  },
  FAILED_LOGIN_ATTEMPTS_TO_BLOCK: {
    env: 'FAILED_LOGIN_ATTEMPTS_TO_BLOCK',
    default: '10'
  },
  APP_ENVIRONMENT: {
    env: 'APP_ENVIRONMENT',
    default: 'local'
  }
};


const getConfigOption = (option) => {
  const item = CONFIG_OPTIONS[option];

  if (!item) {
    return null;
  }

  if (process.env.hasOwnProperty(item.env)) {
    return process.env[item.env];
  }

  return item.default;
};

module.exports = Object.keys(CONFIG_OPTIONS).reduce((result, field) => {
  result[field] = getConfigOption(field);
  return result;
}, {});
