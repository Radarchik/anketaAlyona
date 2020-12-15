import {EventEmitter, Injectable, Output} from '@angular/core';
import {Question} from './model/question';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  @Output() questionsReplaySubject = new ReplaySubject<Question[]>(1);

  constructor() {
  }
}
