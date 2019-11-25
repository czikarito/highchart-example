import Route from '@ember/routing/route';
import Dexie from 'dexie';

export default Route.extend({
  beforeModel() {
    const db = new Dexie("recipes");

    db.version(1).stores({
      recipes: "++id,title,calories"
    });
    this.set("db", db);
  },

  model() {
    return this.db.recipes.orderBy("calories").toArray();
  },

  setupController(controller, model) {
    controller.set('db', this.db);
    controller.set('model', model);
  }
});
