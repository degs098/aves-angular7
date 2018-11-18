import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdDialogComponent } from './bird-dialog.component';

describe('BirdDialogComponent', () => {
  let component: BirdDialogComponent;
  let fixture: ComponentFixture<BirdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
