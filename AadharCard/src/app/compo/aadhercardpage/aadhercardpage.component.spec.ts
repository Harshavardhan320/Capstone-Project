import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AadhercardpageComponent } from './aadhercardpage.component';

describe('AadhercardpageComponent', () => {
  let component: AadhercardpageComponent;
  let fixture: ComponentFixture<AadhercardpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AadhercardpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AadhercardpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
