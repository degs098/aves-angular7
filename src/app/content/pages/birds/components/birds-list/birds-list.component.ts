import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { BirdsListDataSource } from './birds-list-datasource';
import { BehaviorSubject } from 'rxjs';
import { Bird } from '../../models/bird';

@Component({
  selector: 'app-birds-list',
  templateUrl: './birds-list.component.html',
  styleUrls: ['./birds-list.component.scss'],
})
export class BirdsListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: BirdsListDataSource;  
  displayedColumns = ['codigo', 'nombreComun', 'nombreCientifico', 'paises', 'actions'];

  @Input('birds$')
  public birds$: BehaviorSubject<Bird[]>;

  @Output('deleteBirdEvent')
  public deleteBirdEvent: EventEmitter<string>;

  @Output('editBirdEvent')
  public editBirdEvent: EventEmitter<string>;

  constructor(){
    this.deleteBirdEvent = new EventEmitter<string>();
    this.editBirdEvent = new EventEmitter<string>();
  }

  ngOnInit() {
    this.feedDataSource();    
  }

  public deleteBird(birdId: string): void{
    this.deleteBirdEvent.emit(birdId);
  }

  public editBird(birdId: string): void{
    this.editBirdEvent.emit(birdId);
  }

  private feedDataSource(): void{
    this.birds$.subscribe((list: Bird[]) => {
      this.dataSource = new BirdsListDataSource(this.paginator, this.sort, list);
    });
  }
}
