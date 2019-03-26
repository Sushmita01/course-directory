import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import { CourseItemsComponent } from './course-items.component';

describe('CourseItemsComponent', () => {
  let component: CourseItemsComponent;
  let fixture: ComponentFixture<CourseItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemsComponent ],
      imports: [RouterModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle expansion card', () => {
    let currentvalue=this.expandedCard;
    this.toggleCard();
    expect(this.expandedCard).toEqual(!currentvalue);
  });
});
