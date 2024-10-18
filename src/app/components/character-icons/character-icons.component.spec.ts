import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CharacterIconsComponent } from './character-icons.component';
import { provideHttpClient } from '@angular/common/http';

describe('CharacterIconsComponent', () => {
  let component: CharacterIconsComponent;
  let fixture: ComponentFixture<CharacterIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterIconsComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
