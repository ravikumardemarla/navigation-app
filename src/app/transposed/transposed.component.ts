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
    // Init formInfo
    this.formInfo = this.fb.group({
      input: ['', [Validators.required]],
      output: ['']
    });
  }

  /**
   * @name transpose
   * @description reverse the order of value in each line of sample form input
   * Ex Input : DBS
   * INFO
   * Ex Output: SBD
   * OFNI
   */
  public transpose(): void {
    if (this.formInfo.valid) {
      const INPUT: string[] = this.formInfo.get('input').value.split('\n');
      let resultStr = '';
      INPUT.forEach((str, i) => {
        console.log('Str getting is   ', str);
        if (i === 0) {
          resultStr += str.split('').reverse().join('');
        } else {
          resultStr += '\n' + str.split('').reverse().join('');
        }
      });
      this.formInfo.get('output').setValue(resultStr);
    }
  }
}
