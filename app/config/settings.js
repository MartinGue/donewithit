import Constants from 'expo-constants'

/* const settings = {
  dev: {
    apiUrl: 'https://backend-done.herokuapp.com/api',
  },
  staging: {
    apiUrl: 'https://backend-done.herokuapp.com/api',
  },
  prod: {
    apiUrl: 'https://backend-done.herokuapp.com/api',
  },
}
 */
const settings = {
  dev: {
    apiUrl: 'http://192.168.178.19:9000/api',
  },
  staging: {
    apiUrl: 'http://192.168.178.19:9000/api',
  },
  prod: {
    apiUrl: 'http://192.168.178.19:9000/api',
  },
}

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev
  if (Constants.manifest.releaseChannel === 'staging') return settings.staging
  return settings.prod
}

export default getCurrentSettings()
