import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotdoneComponent } from './notdone.component';

describe('NotdoneComponent', () => {
  let component: NotdoneComponent;
  let fixture: ComponentFixture<NotdoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotdoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
