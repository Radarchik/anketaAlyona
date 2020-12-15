import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../model/question';
import {MatTableDataSource} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {QuestionsService} from '../questions.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  questions: Question[];
  @Output() pageToShowEvent = new EventEmitter<number>();
  @Input() cameFromStart: boolean;
  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questionsService.questionsReplaySubject.subscribe(questions => this.questions = questions);
  }

  goToPage2() {
    this.questionsService.questionsReplaySubject.next(this.questions);
    this.pageToShowEvent.emit(2);
  }
}
