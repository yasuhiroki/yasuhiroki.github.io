let m = require("mithril");
let TalkListView = require("./views/talk_list");
let ProfileView = require("./views/profile");

let MainView = {
  view: function() {
    return m("contents", [
      m(ProfileView),
      m(TalkListView),
    ]);
  }
};

m.mount(document.body, MainView);

