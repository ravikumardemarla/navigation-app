import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-transposed',
  templateUrl: './transposed.component.html',
  styleUrls: ['./transposed.component.css']
})
export class TransposedComponent implements OnInit {
  public formInfo: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.formInfo = this.fb.group({
      sample: ['', [Validators.required]],
      result: ['']
    });
  }

  /**
   * given string it should in reverse order
   * ex: DBS
   * INFO
   * expected O/P is
   * SBD
   * OFNI
   */
  public transpose(): void {
    if (this.formInfo.valid) {
      const givenStr = this.formInfo.get('sample').value;
      const strArr = givenStr.split('\n');
      let resultStr = '';
      strArr.forEach((str, i) => {
        console.log('Str getting is   ', str);
        if (i === 0) {
          resultStr += str.split('').reverse().join('');
        } else {
          resultStr += '\n' + str.split('').reverse().join('');
        }
      });
      this.formInfo.get('result').setValue(resultStr);
    }
  }
}
