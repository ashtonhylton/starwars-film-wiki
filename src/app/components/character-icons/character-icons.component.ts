import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Character } from '../../models/starwars-api.models';
import { StarwarsApiService } from '../../services/starwars-api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { GetIdFromUrlPipe } from '../../pipes/get-id-from-url.pipe';

@Component({
  selector: 'app-character-icons',
  standalone: true,
  imports: [CommonModule, LoadingComponent, GetIdFromUrlPipe],
  templateUrl: './character-icons.component.html',
})
export class CharacterIconsComponent {
  private starwarsApiService: StarwarsApiService = inject(StarwarsApiService);

  public character$!: Observable<Character>;
  public selectedCharacter!: Character;

  @Input() set characterId(characterId: number) {
    this.character$ = this.starwarsApiService.getCharacterById(characterId);
  }
  @Output() characterSelected: EventEmitter<Character> = new EventEmitter();

  replacePicture(element: any) {
    element.src = '/assets/images/characters/character_placeholder.jpg';
  }

  selectCharacter(character: Character) {
    this.characterSelected.emit(character);
  }
}
