import {Component, Inject, OnInit} from '@angular/core';
import {Question} from '../model/question';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.css']
})
export class CommentDialogComponent implements OnInit {
  comment: string;

  constructor(
    public dialogRef: MatDialogRef<CommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
  }

  onOkClick(): void {
    this.dialogRef.close(this.comment);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
    this.comment = this.data;
  }
}
