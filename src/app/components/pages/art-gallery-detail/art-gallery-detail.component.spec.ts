import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtGalleryDetailComponent } from './art-gallery-detail.component';

describe('ArtGalleryDetailComponent', () => {
  let component: ArtGalleryDetailComponent;
  let fixture: ComponentFixture<ArtGalleryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtGalleryDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtGalleryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
