import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'anime_vault',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  }
};

export default config;
