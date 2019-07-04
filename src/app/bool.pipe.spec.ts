import { BoolPipe } from './bool.pipe';

describe('BoolPipe', () => {
  it('create an instance', () => {
    const pipe = new BoolPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve retornar Sim se não for false', () => {
    const pipe = new BoolPipe();

    expect(pipe.transform(false)).not.toBe('Sim');
  });

  it('deve retornar Sim se for true', () => {
    const pipe = new BoolPipe();

    expect(pipe.transform(true)).toBe('Sim');
  })
});
