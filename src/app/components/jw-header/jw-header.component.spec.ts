import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwHeaderComponent } from './jw-header.component';

describe('JwHeaderComponent', () => {
  let component: JwHeaderComponent;
  let fixture: ComponentFixture<JwHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JwHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JwHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
