import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { RouterModule } from '@angular/router';
import { routes } from './dashboard.routing';
import { PostComponent } from '../../common/layout/components/post/post.component';
import { PostDetailComponent } from 'src/app/common/layout/components/post-detail/post-detail.component';
import { PostFormComponent } from 'src/app/common/layout/components/post-form/post-form.component';


export const loader = ['en', 'es'].reduce((acc, lang) => {
  acc[lang] = () => import(`./i18n/forex.${lang}.json`);
  return acc;
}, {});

@NgModule({
  declarations: [
    PostComponent,
    PostFormComponent,
    PostDetailComponent,
    DashboardPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'forex',
        loader
      }
    }
  ],
})
export class ForexModule { }
