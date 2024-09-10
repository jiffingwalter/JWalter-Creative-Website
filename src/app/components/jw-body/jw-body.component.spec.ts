import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwBodyComponent } from './jw-body.component';

describe('JwBodyComponent', () => {
  let component: JwBodyComponent;
  let fixture: ComponentFixture<JwBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JwBodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JwBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
