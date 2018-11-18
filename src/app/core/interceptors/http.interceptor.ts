import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LogService } from '../services/log.service';

@Injectable()
export class HttpInterceptorImpl implements HttpInterceptor {
	
	constructor(		
		private logsService: LogService
	) { }

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		this.logsService.log("----request----");
		this.logsService.log(request);
		this.logsService.log("--- end of request---");
		return next.handle(request)
			.pipe(
				tap(event => {
					if (event instanceof HttpResponse) {
						// http response status code
						let response = event.body;						
						this.logsService.log("----response----");
						this.logsService.log("status code: " + event.status);
						this.logsService.log("response body: " + request.url);
						this.logsService.log(response);
						this.logsService.log("--- end of response---");						
					}
				}, error => {
					// http response status code
					this.logsService.log("----response----");
					this.logsService.error("status code: " + error.status);
					this.logsService.error("error message: " + error.message);
					this.logsService.log("--- end of response---");

				})
			)
	}
}
