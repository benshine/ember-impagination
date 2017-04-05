import Ember from 'ember';
import colorRamp from 'dummy/utils/color-ramp';

const DEBUG = false;

export default Ember.Controller.extend({
  containerHeight: 600,
  itemHeight: 70,

  fetch: function(pageOffset, pageSize) {
    let spectrum = new RGBSpectrum(300).colors;
    let delay = 400; //ms

    return new Ember.RSVP.Promise((resolve)=> {
      setTimeout(()=> {
        // stats.totalPages =  Math.ceil( spectrum.length / pageSize);
        let recordOffset = pageOffset * pageSize;
        resolve(spectrum.slice(recordOffset, recordOffset + pageSize));
      }, delay);
    });
  },

  initialReadOffset: 0,
  pageSize: 10,

  actions: {
    initializeReadOffset(dataset) {
      let initReadOffset = this.get('initialReadOffset');
      dataset.setReadOffset(initReadOffset);
    },

    logDatasetState(dataset) {
      if (DEBUG) { console.log('dataset =', dataset); }
    }
  }
});


class RGBSpectrum {
  constructor(colorCount) {
    this.colorCount = colorCount;
  }

  get step() {
    return 300 / this.colorCount;
  }

  get colors() {
    return colorRamp(this.colorCount, this.step);
  }
}
