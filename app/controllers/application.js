import Controller from '@ember/controller';
export default Controller.extend({

  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    }
  },

  chartData: [{
    name: 'Jane',
    data: [1, 0, 4]
  },
  {
    name: 'Paul',
    data: [2, 8, 3]
  },
  {
    name: 'Tom',
    data: [6, 0, 1]
  },
  {
    name: 'Mike',
    data: [1, 2, 4]
  },
   {
    name: 'John',
    data: [5, 7, 3]
  }],


});
