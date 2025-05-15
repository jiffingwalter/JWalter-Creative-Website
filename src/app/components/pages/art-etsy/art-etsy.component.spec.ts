import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtEtsyComponent } from './art-etsy.component';

describe('ArtEtsyComponent', () => {
  let component: ArtEtsyComponent;
  let fixture: ComponentFixture<ArtEtsyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtEtsyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtEtsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
