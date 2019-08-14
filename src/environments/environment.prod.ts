declare let ENV_VARS: { [key: string]: string };

export const environment = {
  production: true,
  firebase: Object.assign(
    {
      FIREBASE_MAPS_API_KEY: '',
      FIREBASE_MAPS_AUTH_DOMAIN: '',
      FIREBASE_MAPS_DATABASE_URL: '',
      FIREBASE_MAPS_PROJECT_ID: '',
      FIREBASE_MAPS_STORAGE_BUCKET: '',
      FIREBASE_MAPS_MESSAGING_ID: '',
      FIREBASE_MAPS_APP_ID: ''
    },
    ENV_VARS
  )
};
