import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelectChange, MAT_CHECKBOX_CLICK_ACTION } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Zone } from 'src/app/shared/models/zone';
import { Bird } from '../../models/bird';

@Component({
  selector: 'app-bird-dialog',
  templateUrl: './bird-dialog.component.html',
  styleUrls: ['./bird-dialog.component.scss']
})
export class BirdDialogComponent implements OnInit {

  public birdForm: FormGroup;
  public countries: Array<any>;
  private countriesSelected: Array<any>;

  constructor(
    public dialogRef: MatDialogRef<BirdDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.countries = new Array<any>();
    this.countriesSelected = new Array<any>();
  }

  ngOnInit() {    
    this.initForm();
  }

  public onSubmit(){
    if(this.birdForm.valid){
      let bird: Bird = new Bird();
      if(this.data.bird){
        bird.codigo = this.data.bird.codigo;
      }else{
        bird.codigo = this.birdForm.value.codigo;
      }      
      bird.codigoPais = this.birdForm.value.codigoPais;
      bird.nombreCientifico = this.birdForm.value.nombreCientifico;
      bird.nombreComun = this.birdForm.value.nombreComun;
      bird.paises = this.countriesSelected;
      bird.isRemove = false;      
      this.dialogRef.close(bird);
    }    
  }

  public cancel(){
    this.dialogRef.close();
  }

  public onZoneSelected(event: MatSelectChange): void{
    const zone: Zone = event.value;    
    this.countries = zone.paises;
  }

  public onContrySelected(country: any): void{
    const countrySelected: number = this.countriesSelected.findIndex(coun => {
      return coun.codigo === country.codigo;
    });
    if(countrySelected > -1){
      this.countriesSelected.splice(countrySelected, 1);
      country.selected = false;
    }else{
      country.selected = true;
      this.countriesSelected.push(country);
    }    
  }

  private selectCountries(): void{    
    if(this.data.bird){
      for (let i = 0; i < this.data.bird.paises.length; i++) {
        const country = this.data.bird.paises[i];
        this.onContrySelected(country);
      }
    }
  }

  private initForm(): void{        
    this.birdForm = new FormGroup({
      codigo: new FormControl({
        value: this.data.bird ? this.data.bird.codigo : '', 
        disabled: this.data.bird ? true : false
      }, Validators.required),
      nombreComun: new FormControl((this.data.bird ? this.data.bird.nombreComun : ''), Validators.required),
      nombreCientifico: new FormControl((this.data.bird ? this.data.bird.nombreCientifico : ''), Validators.required),      
      codigoZona: new FormControl('', Validators.required)
    });
    this.selectCountries();
  }

}
