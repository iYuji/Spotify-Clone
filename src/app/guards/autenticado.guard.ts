import { CanMatchFn } from '@angular/router';

export const autenticadoGuard: CanMatchFn = (route, segments) => {
  return true;
};
