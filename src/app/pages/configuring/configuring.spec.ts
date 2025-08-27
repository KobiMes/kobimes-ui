import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Configuring } from './configuring';

describe('Configuring', () => {
  let component: Configuring;
  let fixture: ComponentFixture<Configuring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Configuring]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Configuring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
