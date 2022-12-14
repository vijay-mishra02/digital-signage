import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHolderComponent } from './form-holder.component';

describe('FormHolderComponent', () => {
  let component: FormHolderComponent;
  let fixture: ComponentFixture<FormHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
