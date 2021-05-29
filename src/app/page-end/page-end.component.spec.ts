import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEndComponent } from './page-end.component';

describe('PageEndComponent', () => {
  let component: PageEndComponent;
  let fixture: ComponentFixture<PageEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
