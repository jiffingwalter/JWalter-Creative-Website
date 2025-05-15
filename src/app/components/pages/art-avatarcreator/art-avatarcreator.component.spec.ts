import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtAvatarcreatorComponent } from './art-avatarcreator.component';

describe('ArtAvatarcreatorComponent', () => {
  let component: ArtAvatarcreatorComponent;
  let fixture: ComponentFixture<ArtAvatarcreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtAvatarcreatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtAvatarcreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
