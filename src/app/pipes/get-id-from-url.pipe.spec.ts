import { GetIdFromUrlPipe } from './get-id-from-url.pipe';

describe('GetIdFromUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new GetIdFromUrlPipe();
    expect(pipe).toBeTruthy();
  });

  it('returns the ID number 1 from the starwars api url', () => {
    // given
    const apiUrl = 'https://swapi.dev/api/people/1/';
    const pipe = new GetIdFromUrlPipe();

    // when
    const result = pipe.transform(apiUrl);

    // then
    expect(result).toEqual(1);
  });

  it('returns the ID number 121 from the starwars api url', () => {
    // given
    const apiUrl = 'https://swapi.dev/api/people/121/';
    const pipe = new GetIdFromUrlPipe();

    // when
    const result = pipe.transform(apiUrl);

    // then
    expect(result).toEqual(121);
  });

  it('returns the 0 when there is no number fonud in the starwars api url', () => {
    // given
    const apiUrl = 'https://swapi.dev/api/people/';
    const pipe = new GetIdFromUrlPipe();

    // when
    const result = pipe.transform(apiUrl);

    // then
    expect(result).toEqual(0);
  });

  it('returns the 0 when the url is empty', () => {
    // given
    const apiUrl = '';
    const pipe = new GetIdFromUrlPipe();

    // when
    const result = pipe.transform(apiUrl);

    // then
    expect(result).toEqual(0);
  });
});
