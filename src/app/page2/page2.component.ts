import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {Question} from '../model/question';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit, AfterViewInit  {
  @Output() pageToShowEvent = new EventEmitter<number>();
  dataSource: MatTableDataSource<Question>;
  questions: Question[];

  displayedColumns: string[] = ['number', 'name', 'estimate'];

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient) { }

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngAfterViewInit() {

  }
  ngOnInit() {
    this.http.get('assets/test.json', {responseType: 'json'})
      .subscribe(data => {
        this.questions = [];

        for (let i = 0; i < (data as Array<string>).length; i++) {
          const question = new Question();
          question.id = i + 1;
          question.text = data[i];
          this.questions.push(question);
        }
        console.log(this.questions);
        this.dataSource = new MatTableDataSource(this.questions);
        this.dataSource.paginator = this.paginator;
      });

  }

  sendResult() {
    if (this.questions.every(question => question.estimate)) {
      const body = JSON.stringify(this.questions);
      this.http.post('https://5b3943cfcda47d5c7885c5e06e3d8361.m.pipedream.net', body).subscribe(response => console.log(response));
    } else {
      this.openSnackBar();
    }

  }

  onValChange(value: any, question: Question) {
    console.log(value);
    console.log(question);
    question.estimate = value;
    console.log(this.questions);
  }

  openSnackBar() {
    const unsignedQ = this.questions.filter(question => question.estimate === undefined);
    const message = 'Остались вопросы: ' + unsignedQ.map(q => q.id);
    const action = 'Attention';
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
}
