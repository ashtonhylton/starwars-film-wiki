import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../models/starwars-api.models';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-character-details',
  standalone: true,
  imports: [CommonModule, NgbCollapseModule],
  templateUrl: './character-details.component.html',
})
export class CharacterDetailsComponent {
  @Input() selectedCharacter!: Character | null;
  @Output() selectedCharacterChange = new EventEmitter();
  isCollapsed: boolean = true;

  close() {
    this.selectedCharacterChange.emit(null);
  }
}
