let m = require("mithril");
let TalkListView = require("./views/talk_list");
let ProfileView = require("./views/profile");
let HeaderView = require("./views/header");

let MainView = {
  view: function() {
    return m("", [
      m("header.tc.pv4.pv5-ns", [
        m(HeaderView),
      ]),
      m("contents", [
        m(ProfileView),
        m(TalkListView),
      ])
    ]);
  }
};

m.mount(document.body, MainView);

