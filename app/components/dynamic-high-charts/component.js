import EmberHighChartsComponent from 'ember-highcharts/components/high-charts';
import { observer } from "@ember/object";

export default EmberHighChartsComponent.extend({

  contentDidChange: observer('content.@each.data', function() {
    const chart = this.get('chart');

    chart.series.forEach((element, i) => {
      const obj  = this.content[i];

      obj && element.update({ data: obj.data }, false)
    });

    chart.redraw();
  })
});
