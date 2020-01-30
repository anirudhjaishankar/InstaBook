import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FeedComponent } from './feed.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{ path: '', component: FeedComponent}])
    ],
    declarations: [FeedComponent]
})

export class FeedComponentModule {}
