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
    expect(component.formInfo.get('sample').invalid).toBeTruthy();
    component.formInfo.get('sample').setValue('abc\ndef');
    component.transpose();
    expect(component.formInfo.get('result').value).toEqual('cba\nfed');
  });
});
