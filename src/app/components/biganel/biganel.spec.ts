import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biganel } from './biganel';

describe('Biganel', () => {
  let component: Biganel;
  let fixture: ComponentFixture<Biganel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Biganel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Biganel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
