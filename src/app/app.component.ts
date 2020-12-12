import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'anketaAlina';
  startForm: FormGroup;

  rightPassword = '777';
  public pageToShow: number;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.pageToShow = 0;
    this.startForm = this.formBuilder.group({
      password: ['', this.passWordValidator]
    });

  }

  pageEventHandler($event: any) {
    this.pageToShow = $event;
  }

  ngOnDestroy(): void {
  }


  goToPage1() {
    if (this.startForm.get('password').value === this.rightPassword){
      this.pageToShow = 1;
    }
  }

  passWordValidator(control: AbstractControl) {
    if (control.value !== 777) {
      return {wrongPassword: true};
    }
    return null;
  }
}
