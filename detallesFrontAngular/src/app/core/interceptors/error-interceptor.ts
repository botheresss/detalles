import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log('🗣️ ocurrio un error', error);

      return throwError(() => error);
    })
  );
};
