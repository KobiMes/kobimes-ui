import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Panelgraph } from './panelgraph';

describe('Panelgraph', () => {
  let component: Panelgraph;
  let fixture: ComponentFixture<Panelgraph>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Panelgraph]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Panelgraph);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
