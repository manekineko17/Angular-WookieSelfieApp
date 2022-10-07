import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ASelfieReadonlyComponent } from './a-selfie-readonly.component';

describe('ASelfieReadonlyComponent', () => {
  let component: ASelfieReadonlyComponent;
  let fixture: ComponentFixture<ASelfieReadonlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ASelfieReadonlyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ASelfieReadonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
