import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Question} from './model/question';
import {QuestionsService} from './questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'anketaAlina';
  startForm: FormGroup;
  questions: Question[];
  rightPassword = '777';
  public pageToShow: number;

  constructor(private http: HttpClient,
              private questionsService: QuestionsService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.pageToShow = 0;
    this.startForm = this.formBuilder.group({
      password: ['', this.passWordValidator]
    });

    this.http.get('assets/test.json', {responseType: 'json'})
      .subscribe(data => {
        this.questions = [];

        for (let i = 0; i < (data as Array<string>).length; i++) {
          const question = new Question();
          question.id = i + 1;
          question.text = data[i];
          this.questions.push(question);
        }
      });
  }

  pageEventHandler($event: any) {
    this.pageToShow = $event;
  }

  ngOnDestroy(): void {
  }


  goToPage1() {
    this.questionsService.questionsReplaySubject.next(this.questions);
    if (this.startForm.get('password').value === this.rightPassword) {
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
