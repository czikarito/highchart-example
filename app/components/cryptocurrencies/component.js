import Component from '@ember/component';
import { set } from '@ember/object';
import { interval } from "rxjs";
import { map, share, scan } from "rxjs/operators";

export default Component.extend({
  init() {
    this._super(...arguments);
    this.set("chartData", [
      {
        name: 'Bitcoin',
        data: []
      },
      {
        name: 'Etherum',
        data: []
      }
    ]);

    const intervalTime = interval(1000).pipe(share());

    const bitcoinValues = this.streamData(intervalTime, 4000, 6000);
    const etherumValues = this.streamData(intervalTime, 1000, 2000);

    bitcoinValues.subscribe(values => {
      set(this.chartData.findBy('name', 'Bitcoin'), 'data', values)
    })

    etherumValues.subscribe(values => {
      set(this.chartData.findBy('name', 'Etherum'), 'data', values)
    })
  },


  streamData(intervalTime, min, max) {
    return intervalTime.pipe(
      map(() => this.generateRandomValue(min, max))
    )
    .pipe(
      scan((accumulator, value) => {
        accumulator.push(value);

        return accumulator.slice(-30);
      }, [])
    )
  },

  generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
});
