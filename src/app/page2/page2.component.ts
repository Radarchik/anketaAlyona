import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { HttpClient } from '@angular/common/http';
import {Question} from '../model/question';

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
    const body = {
      "key": "50b079489c5aa63075779f9e75929bf7-us7",
      "message": {
        "from_email": "t.synovych@gmail.com",
        "to": [
          {
            "email": "t.synovych@gmail.com",
            "name": "Taras",
            "type": "to"
          },
          {
            "email": "letsa@ya.ru",
            "name": "Ivan",
            "type": "to"
          }
        ],
        "autotext": "true",
        "subject": "SUBJECT HERE!",
        "html": "YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!"
      }
    };
    this.http.post('https://5b3943cfcda47d5c7885c5e06e3d8361.m.pipedream.net', body).subscribe(response => console.log(response));

  }

}
