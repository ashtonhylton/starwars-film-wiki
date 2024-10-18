import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilmsListComponent } from './films-list.component';
import { provideHttpClient } from '@angular/common/http';

describe('FilmsListComponent', () => {
  let component: FilmsListComponent;
  let fixture: ComponentFixture<FilmsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmsListComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random number', () => {
    // when
    const featuredFilmId = component.getFeaturedFilmId();

    // then
    expect(featuredFilmId).toBeInstanceOf(Number);
    expect(featuredFilmId).toBeGreaterThanOrEqual(1);
    expect(featuredFilmId).toBeLessThanOrEqual(6);
  });
});
