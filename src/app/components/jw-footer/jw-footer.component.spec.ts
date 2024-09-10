import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JwFooterComponent } from './jw-footer.component';

describe('JwFooterComponent', () => {
  let component: JwFooterComponent;
  let fixture: ComponentFixture<JwFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JwFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JwFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
