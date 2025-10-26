import { AppConfig } from '../types';

const DEFAULT_CONFIG: AppConfig = {
  rotationInterval: 45,
  showStreamTitles: false,
  lastSelectedMosaics: [],
  nightMode: false,
  maximizedStreamIndex: null,
};

export const saveConfig = (config: AppConfig) => {
  localStorage.setItem('willcat_config', JSON.stringify(config));
};

export const loadConfig = (): AppConfig => {
  const stored = localStorage.getItem('willcat_config');
  const config = stored ? { ...DEFAULT_CONFIG, ...JSON.parse(stored) } : DEFAULT_CONFIG;
  
  // Modo noturno automático (18h às 6h)
  const hour = new Date().getHours();
  const isNightTime = hour >= 18 || hour < 6;
  config.nightMode = isNightTime;
  
  return config;
};