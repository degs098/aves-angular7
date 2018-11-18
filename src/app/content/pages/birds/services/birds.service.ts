import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Bird } from '../models/bird';
import { AppConstants } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class BirdsService {

  public birds$: BehaviorSubject<Bird[]>;

  constructor(private _http: HttpClient) { 
    this.birds$ = new BehaviorSubject<Bird[]>([]);
  }

  public fetchBirds(): BehaviorSubject<Bird[]>{
    this._http.get(AppConstants.API_ENDPOINT.BIRDS).subscribe((res: Bird[]) => {
      this.birds$.next(res || []); 
    })
    return this.birds$;
  }

  public fetchBirdByCode(birdId: string): Promise<any>{
    return this._http.get(AppConstants.API_ENDPOINT.BIRDS + '/' + birdId).toPromise();
  }

  public fetchAvesByZonaAndNombre(data: any): BehaviorSubject<Bird[]>{
    this._http.post(AppConstants.API_ENDPOINT.BIRDS + '/fetchAvesByZonaAndNombre', data).subscribe((res: Bird[]) => {
      this.birds$.next(res || []); 
    });
    return this.birds$;
  }

  public saveBird(bird: Bird): Promise<any>{
    return this._http.post(AppConstants.API_ENDPOINT.BIRDS, bird).toPromise();
  }

  public updateBird(bird: Bird): Promise<any>{
    return this._http.put(AppConstants.API_ENDPOINT.BIRDS, bird).toPromise();
  }  

  public deleteBird(birdId: string): Promise<any>{
    return this._http.delete(AppConstants.API_ENDPOINT.BIRDS + '/' + birdId).toPromise();
  }
}
