import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASelfieComponent } from './a-selfie.component';

describe('ASelfieComponent', () => {
  let component: ASelfieComponent;
  let fixture: ComponentFixture<ASelfieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ASelfieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ASelfieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
