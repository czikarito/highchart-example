import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    add() {
      const { title, calories } = this;

      this.db.recipes.add({ title, calories: parseInt(calories) }).then(() => {
        this.db.table("recipes")
          .orderBy("calories")
          .toArray()
          .then(recipes => {
            this.set("model", recipes)
          });
      });
    }
  }
});
