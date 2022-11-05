import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MconsejosComponent } from './mconsejos.component';

describe('MconsejosComponent', () => {
  let component: MconsejosComponent;
  let fixture: ComponentFixture<MconsejosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MconsejosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MconsejosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
