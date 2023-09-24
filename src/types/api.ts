export type ApiStatus = 'IDLE' | 'LOADING' | 'FAILED' | 'SUCCESS';

export interface BaseApiResponse {
  apiStatus?: ApiStatus;
  error?: string;
}
