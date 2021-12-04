import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

class Band {
  @tracked name;

  constructor({ id, name, songs }) {
    this.id = id;
    this.name = name;
    this.songs = songs;
  }
}

class Song {
  constructor({ title, rating, band }) {
    this.title = title;
    this.rating = rating ?? 0;
    this.band = band;
  }
}

export default class BandsRoute extends Route {
  model() {
    let blackDog = new Song({
      title: 'Black Dog',
      band: 'Led Zepplin',
      rating: 3,
    });

    let yellowLedbetter = new Song({
      title: 'Yellow Ledbetter',
      band: 'Pearl Jam',
      rating: 4,
    });

    let pretender = new Song({
      title: 'The Pretender',
      band: 'Foo Fighters',
      rating: 2,
    });

    let daughter = new Song({
      title: 'Daughter',
      band: 'Pearl Jam',
      rating: 5,
    });

    let ledZepplin = new Band({
      title: 'led-zepplin',
      band: 'Led Zepplin',
      rating: [blackDog],
    });

    let pearlJam = new Band({
      title: 'pearl-jam',
      band: 'Pearl Jam',
      rating: [yellowLedbetter, daughter],
    });

    let fooFighters = new Band({
      title: 'foo-fighters',
      band: 'Foo Fighters',
      rating: [pretender],
    });

    return [ledZepplin, pearlJam, fooFighters];
  }
}
