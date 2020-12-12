import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatChipsModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [MatFormFieldModule, MatCardModule, MatToolbarModule, MatButtonModule, MatCheckboxModule, MatChipsModule, MatTooltipModule,
    MatInputModule, MatSidenavModule, MatBadgeModule, MatListModule, MatDividerModule, MatIconModule, MatButtonToggleModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatDialogModule],
  exports: [MatToolbarModule, MatButtonModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTooltipModule,
    MatSidenavModule, MatBadgeModule, MatListModule, MatDividerModule, MatIconModule, MatButtonToggleModule, MatSelectModule, MatChipsModule, MatDialogModule, MatProgressSpinnerModule],
})
export class CustomMaterialModule {
}
