import { TestBed, async } from '@angular/core/testing';
import { Routes, RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import { HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';

import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterModule, HttpClientTestingModule ,RouterTestingModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
