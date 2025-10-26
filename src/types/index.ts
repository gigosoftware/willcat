export interface MosaicStream {
  name?: string;
  title?: string;
  playback_token?: string;
  streaming_endpoint?: string;
  alive?: boolean;
}

export interface Mosaic {
  id: number;
  title: string;
  type: string;
  organization_id: number;
  streams: MosaicStream[];
}

export interface AppConfig {
  rotationInterval: number;
  showStreamTitles: boolean;
  lastSelectedMosaics: number[];
  nightMode: boolean;
  maximizedStreamIndex: number | null;
}

export interface NavigationState {
  focusedIndex: number;
  selectedMosaics: number[];
}