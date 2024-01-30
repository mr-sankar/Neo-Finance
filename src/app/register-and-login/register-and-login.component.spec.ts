import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAndLoginComponent } from './register-and-login.component';

describe('RegisterAndLoginComponent', () => {
  let component: RegisterAndLoginComponent;
  let fixture: ComponentFixture<RegisterAndLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterAndLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterAndLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
