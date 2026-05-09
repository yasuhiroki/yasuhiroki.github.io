import m from "mithril";
import TalkListView from "./views/talk_list.js";
import ProfileView from "./views/profile.js";
import HeaderView from "./views/header.js";

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

