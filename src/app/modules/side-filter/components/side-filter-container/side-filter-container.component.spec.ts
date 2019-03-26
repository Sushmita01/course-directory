import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../material-module/material-module';
import { SideFilterContainerComponent } from './side-filter-container.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

describe('SideFilterContainerComponent', () => {
  let component: SideFilterContainerComponent;
  let fixture: ComponentFixture<SideFilterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideFilterContainerComponent ],
      imports:[BrowserAnimationsModule,MaterialModule,FormsModule,ReactiveFormsModule,HttpClientTestingModule,HttpClientModule]
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
