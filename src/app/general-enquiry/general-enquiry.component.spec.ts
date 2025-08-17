import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralEnquiryComponent } from './general-enquiry.component';

describe('GeneralEnquiryComponent', () => {
  let component: GeneralEnquiryComponent;
  let fixture: ComponentFixture<GeneralEnquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralEnquiryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
