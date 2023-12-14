
const tryWord = require("./script.js")

describe('Test de la fonction tryWord', () => {
    it('devrait retourner les positions correctes des lettres dans les mots', () => {
      const result = tryWord('DICT', 'DICTIONNAIRE');


      expect(result.wellPlaced).toEqual(['D', 'I', 'C', 'T','_','_', '_', '_', '_', '_', '_', '_']);

    });
    it('devrait retourner les positions correctes des lettres dans les mots', () => {
        const result = tryWord('DXCTRO', 'DICTIONNAIRE');


        expect(result.wellPlaced).toEqual(['D', '_', 'C', 'T','_','O', '_', '_', '_', '_', '_', '_']);
        expect(result.missplaced).toEqual(['R']);
        expect(result.notInWord).toEqual(['X']);


      });
    it('devrait gérer le cas où le mot est identique à la base', () => {
      const result = tryWord('DICTIONNAIRE', 'DICTIONNAIRE');
      expect(result.wellPlaced).toEqual(['D', 'I', 'C', 'T', 'I', 'O', 'N', 'N', 'A', 'I', 'R', 'E']);

    });
    it('devrait gérer le cas ou le mot est écrit en minuscule', () => {
        const result = tryWord('dictionnaire', 'DICTIONNAIRE');
        expect(result.wellPlaced).toEqual(['D', 'I', 'C', 'T', 'I', 'O', 'N', 'N', 'A', 'I', 'R', 'E']);

      });
  });
