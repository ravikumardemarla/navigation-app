import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransposedComponent } from './transposed.component';
import {ReactiveFormsModule} from '@angular/forms';

describe('TransposedComponent', () => {
  let component: TransposedComponent;
  let fixture: ComponentFixture<TransposedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransposedComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransposedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should be check transposed`, () => {
    expect(component.formInfo.get('input').invalid).toBeTruthy();
    component.formInfo.get('input').setValue('abc\ndef');
    component.transpose();
    expect(component.formInfo.get('output').value).toEqual('cba\nfed');
  });
});
