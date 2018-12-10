import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrestlingRoutingModule } from './wrestling-routing.module';

import { ListReviewComponent } from './list-review.component';
//import { DetailReviewComponent } from './detail-review.component';
import { BorderCardDirective } from './border-card.directive';
//import { ReviewTypeColorPipe } from './review-type-color.pipe';
import { ReviewsService } from './reviews.service';

import { FormsModule } from '@angular/forms';
//import { EditReviewComponent } from './edit-review.component';
//import { ReviewFormComponent } from './review-form.component';
import { AuthGuard } from '../auth-guard.service';

import { ReviewSearchComponent } from './search-review.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		WrestlingRoutingModule
	],
	declarations: [
		ListReviewComponent,
//		DetailReviewComponent,
//  	EditReviewComponent,
//		ReviewFormComponent,
		ReviewSearchComponent,
		BorderCardDirective
//		ReviewTypeColorPipe
	],
	providers: [ReviewsService, AuthGuard]
})
export class WrestlingModule { }