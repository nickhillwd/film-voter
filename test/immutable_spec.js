import {expect} from 'chai';
import {List, Map} from 'immutable';

describe('immutability', () => {
  describe('a number', () =>{

    function increment(currentState){
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      console.log("nextState:\t", nextState);
      expect(state).to.equal(42);
      console.log("state:\t\t", state);
    });
  });

  describe('A List of movies in the state', () => {

    function addMovie(currentState, movie){
      return currentState.push(movie);
    }

    it('is immutable', () => {
      let state = List.of('Trainspotting', '28 Days Later');
      let nextState = addMovie(state, "Sunshine");

      expect(nextState).to.equal(List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      ));
      console.log("nextState:\t", nextState);
      expect(state).to.equal(List.of(
        'Trainspotting',
        '28 Days Later'
      ));
      console.log("state:\t\t", state);

    });
  });

  describe('A Tree', () => {
    function addMovie(currentState, movie){
      // return currentState.set(
      //   'movies',
      //   currentState.get('movies').push(movie)
      // );
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('Trainspotting', '28 Days Later')
      });
      let nextState = addMovie(state, 'Sunshine');

      expect(nextState).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later',
          'Sunshine'
        )
      }));
      console.log('nextState:\t', nextState);
      expect(state).to.equal(Map({
        movies: List.of(
          'Trainspotting',
          '28 Days Later'
        )
      }));
      console.log('state:\t\t', state);

    });

  });

});