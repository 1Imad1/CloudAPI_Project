import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroOrVillainNotFoundPage } from './hero-or-villain-not-found.page';

describe('HeroOrVillainNotFoundPage', () => {
  let component: HeroOrVillainNotFoundPage;
  let fixture: ComponentFixture<HeroOrVillainNotFoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroOrVillainNotFoundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroOrVillainNotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
