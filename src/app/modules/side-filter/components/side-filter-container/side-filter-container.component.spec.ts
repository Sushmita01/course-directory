import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideFilterContainerComponent } from './side-filter-container.component';

describe('SideFilterContainerComponent', () => {
  let component: SideFilterContainerComponent;
  let fixture: ComponentFixture<SideFilterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideFilterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideFilterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
