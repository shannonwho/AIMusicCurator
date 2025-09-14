
export enum AppState {
  CONNECT,
  INPUT_DATA,
  RECOMMEND,
}

export interface Song {
  title: string;
  artist: string;
  album: string;
  reason: string;
}
