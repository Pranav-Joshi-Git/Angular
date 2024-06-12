import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassStyleAttdirComponent } from './class-style-attdir.component';

describe('ClassStyleAttdirComponent', () => {
  let component: ClassStyleAttdirComponent;
  let fixture: ComponentFixture<ClassStyleAttdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassStyleAttdirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassStyleAttdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
