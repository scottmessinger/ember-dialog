import Ember from "ember";

export default Ember.Controller.extend({

  init() {
    return Ember.run.later(this, () => this.send("test"), 0), this._super(...arguments);
  },

  actions: {

    test() {

      const promise = this.get("dialog").confirm("test-message", this, { title: "Reporting a problem" });
      promise.then(() => console.log("ACCEPT"), () => console.log("DECLINE"));

      // const promise = this.get("dialog").alert("test-message", this, { title: "Reporting a problem" });
      // promise.then(() => console.log("ACCEPT"), () => console.log("DECLINE"));

      // const promise = this.get("dialog").blank("test-message", this, { title: "Reporting a problem" });
      // promise.then(() => console.log("ACCEPT"), () => console.log("DECLINE"));

      // const promise = this.get("dialog").show("dialog/alert", "test-message", this);
      // promise.then(() => console.log("ACCEPT"), () => console.log("DECLINE"));
    },

    accept(presenter) {
      presenter.accept();
    }

  }

});
