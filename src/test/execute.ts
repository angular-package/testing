
export class Execute {
  static #describe = false;
  static #it = false;

  public static describe = {
    expectation: {
      'testing-to-be-arrayof': this.#describe,
      'testing-to-be-instanceof': this.#describe,
      'testing-to-be': this.#describe,
      'testing-to-have-been-called': this.#describe,
      'testing-to-have': this.#describe,
      'testing-to-throw': this.#describe,
      'testing-to': this.#describe,
    },
    it: {
      'testing-it-to-be-arrayof': this.#describe,
      'testing-it-to-be-instanceof': this.#describe,
      'testing-it-to-be': this.#describe,
      'testing-it-to-have-been': this.#describe,
      'testing-it-to-have': this.#describe,
      'testing-it-to-throw': this.#describe,
      'testing-it-to': this.#describe,
    },
    'how-to-use-extend': this.#describe,
    'how-to-actual-method': this.#describe,
    'how-to-before-each': this.#describe,
    'how-to-generic-type-variable': this.#describe,
    'how-to-spy-method': this.#describe,
    'random-number': this.#describe,
    'random-string': this.#describe,
    'README.md': this.#describe,
    'testing-before-each': this.#describe,
    'testing-custom': this.#describe,
    'testing-custom-matcher': this.#describe,
    'testing-describe': this.#describe,
    'testing-test': this.#describe,
    'testing-to-be-matchers': this.#describe,
  };

  public static it = {
    'expectation': {
      'testing-to-be-arrayof': this.#it,
      'testing-to-be-instanceof': this.#it,
      'testing-to-be': this.#it,
      'testing-to-have-been-called': this.#it,
      'testing-to-have': this.#it,
      'testing-to-throw': this.#it,
      'testing-to': this.#it,
    },
    it: {
      'testing-it-to-be-arrayof': this.#it,
      'testing-it-to-be-instanceof': this.#it,
      'testing-it-to-be': this.#it,
      'testing-it-to-have-been': this.#it,
      'testing-it-to-have': this.#it,
      'testing-it-to-throw': this.#it,
      'testing-it-to': this.#it,
    },
    'how-to-use-extend': this.#it,
    'how-to-actual-method': this.#it,
    'how-to-before-each': this.#it,
    'how-to-generic-type-variable': this.#it,
    'how-to-spy-method': this.#it,
    'random-number': this.#it,
    'random-string': this.#it,
    'README.md': this.#it,
    'testing-before-each': this.#it,
    'testing-custom': this.#it,
    'testing-custom-matcher': this.#it,
    'testing-describe': this.#it,
    'testing-test': this.#it,
    'testing-to-be-matchers': this.#it,
  };  
}
