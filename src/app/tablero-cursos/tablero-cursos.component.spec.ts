import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroCursosComponent } from './tablero-cursos.component';

describe('TableroCursosComponent', () => {
  let component: TableroCursosComponent;
  let fixture: ComponentFixture<TableroCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableroCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
