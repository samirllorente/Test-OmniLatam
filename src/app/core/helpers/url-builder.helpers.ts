import { environment } from 'src/environments/environment';

export const urlBuilder = (url: string): string => {
  return environment.host + '/assets/img/' + url;
};
