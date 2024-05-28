import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { OffersComponent } from './components/offers/offers.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { OurMissionComponent } from './components/our-mission/our-mission.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,OffersComponent,AchievementsComponent,OurMissionComponent,BlogsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Coberge-Task';
}
