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
  public title = 'anketaMarina';
  startForm: FormGroup;
  questions: Question[];
  rightPassword = '777333';
  public pageToShow: number;

  constructor(private httpClient: HttpClient,
              private questionsService: QuestionsService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.pageToShow = 0;
    this.startForm = this.formBuilder.group({
      password: ['', this.passWordValidator]
    });

    this.httpClient.get('assets/test.json', {responseType: 'json'})
      .subscribe(data => {
        this.questions = [];

        for (let i = 0; i < (data as Array<string>).length; i++) {
          const question = new Question();
          question.id = i + 1;
          question.text = data[i];
          question.isOwn = false;
          this.questions.push(question);
        }

        // добавляем собственные вопросы
        const len = this.questions.length + 1;
        for (let i = len; i < len + 3; i++) {
          const question = new Question();
          question.id = i;
          question.isOwn = true;
          question.text = '';
          this.questions.push(question);
        }
        console.log(this.questions);
      });


    this.httpClient.post('https://5b3943cfcda47d5c7885c5e06e3d8361.m.pipedream.net', 'Я зашла')
      .subscribe(response => {
        console.log('');
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
    if (control.value !== 777333) {
      return {wrongPassword: true};
    }
    return null;
  }
}
