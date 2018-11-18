import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Bird } from './models/bird';
import { BirdsService } from './services/birds.service';
import { ZoneService } from 'src/app/shared/services/zone.service';
import { Zone } from 'src/app/shared/models/zone';
import { MatDialog, MatSnackBar } from '@angular/material';
import { BirdDialogComponent } from './components/bird-dialog/bird-dialog.component';
import { AppConstants } from 'src/app/app-constants';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.scss']
})
export class BirdsComponent implements OnInit {

  public birds$: BehaviorSubject<Bird[]>;
  public zones$: BehaviorSubject<Zone[]>;
  public filterBird: any;

  constructor(
    private birdsService: BirdsService,
    private zoneService: ZoneService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { 
    this.birds$ = new BehaviorSubject<Bird[]>([]);
    this.filterBird = new Bird();
  }

  ngOnInit() {
    this.fetchBirds();
    this.fetchZones();
  }

  public addBirdModal(): void{
    const dialogRef = this.dialog.open(BirdDialogComponent, {
      width: '800px',
      data: {
        zones$: this.zones$
      }
    });

    dialogRef.afterClosed().subscribe(async (result: Bird) => {      
      if(result){
        try {
          const response = await this.birdsService.saveBird(result);
          if(response.status){
            this.showSnackbar(AppConstants.API_MESSAGES.CREATE_SUCCESS);
            this.fetchBirds();  
          }else{
            this.showSnackbar(AppConstants.API_MESSAGES.CREATE_ERROR);  
          }
        } catch (error) {
          this.showSnackbar(AppConstants.API_MESSAGES.CREATE_ERROR);  
        }        
      }
    });
  }

  public async editBird(birdId: string){
    try {
      const bird: Bird = await this.birdsService.fetchBirdByCode(birdId);
      if(bird){
        const dialogRef = this.dialog.open(BirdDialogComponent, {
          width: '800px',
          data: {
            bird: bird,
            zones$: this.zones$
          }
        });

        dialogRef.afterClosed().subscribe(async (result: Bird) => {                
          if(result){
            try {
              const response = await this.birdsService.updateBird(result);
              if(response.status){
                this.showSnackbar(AppConstants.API_MESSAGES.UPDATE_SUCCESS);
                this.fetchBirds();  
              }else{
                this.showSnackbar(AppConstants.API_MESSAGES.UPDATE_ERROR);  
              }
            } catch (error) {
              this.showSnackbar(AppConstants.API_MESSAGES.UPDATE_ERROR);  
            }        
          }
        });
      }
    } catch (error) { }    
  }

  public async deleteBird(birdId: string){
    try {
      const response = await this.birdsService.deleteBird(birdId);
      if(response.status){
        this.showSnackbar(AppConstants.API_MESSAGES.DELETE_SUCCESS);
        this.fetchBirds();
      }else{
        this.showSnackbar(AppConstants.API_MESSAGES.DELETE_ERROR);
      }
    } catch (error) {
      this.showSnackbar(AppConstants.API_MESSAGES.DELETE_ERROR);
    }
  }

  public async searchFilterBird(){
    try {
      this.birds$ = await this.birdsService.fetchAvesByZonaAndNombre(this.filterBird); 
    } catch (error) { }    
  }

  public clearFilterBird(): void{
    this.fetchBirds();
  }

  private fetchBirds(): void{
    this.birds$ = this.birdsService.fetchBirds();
  }

  private fetchZones(): void{
    this.zones$ = this.zoneService.fetchZones();
  }

  private showSnackbar(message: string): void{
    this.snackBar.open(message, AppConstants.TEXTS.CERRAR, {
      duration: 5000
    });
  }

}
