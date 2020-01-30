import { RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './tabs.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: TabsComponent,
        children: [
            {
                path: 'feed',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                          import('../feed/feed.module').then(m => m.FeedComponentModule)
                    }
                ]
            },
            {
                path: 'search',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                        import('../search/search.module').then(m => m.SearchComponentModule)
                    }
                ]
            },
            {
                path: 'add-post',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                          import('../add-post/add-post.module').then(m => m.AddPostComponentModule)
                    }
                ]
            },
            {
                path: 'activity',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                        import('../activity/activity.module').then(m => m.ActivityComponentModule)
                    }
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                          import('../profile/profile.module').then(m => m.ProfileComponentModule)
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsComponentRoutingModule {}
