import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  public log(message: any): void{
		console.log(message); 
	}

	public error(message: any): void{		
		console.error(message);		
	}
}
