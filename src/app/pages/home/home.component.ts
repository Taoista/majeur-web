import { Component } from '@angular/core';
import { PreloadingComponent } from '@shared/components/preloading/preloading.component';
import { HeaderComponent } from '@shared/components/header/header.component';
import { FooterComponent } from '@shared/components/footer/footer.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PreloadingComponent, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
