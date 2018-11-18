import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Zone } from '../models/zone';
import { AppConstants } from 'src/app/app-constants';

@Injectable({
  providedIn: 'root'
})
export class ZoneService {

  public zones$: BehaviorSubject<Zone[]>;

  constructor(private _http: HttpClient) { 
    this.zones$ = new BehaviorSubject<Zone[]>([]);
  }

  public fetchZones(): BehaviorSubject<Zone[]>{
    this._http.get(AppConstants.API_ENDPOINT.ZONES).subscribe((res: Zone[]) => {
      this.zones$.next(res || []);
    });
    return this.zones$;
  }
}
