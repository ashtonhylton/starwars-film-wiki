import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GetIdFromUrlPipe } from './pipes/get-id-from-url.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [GetIdFromUrlPipe],
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Star Wars Film Wiki';
}
