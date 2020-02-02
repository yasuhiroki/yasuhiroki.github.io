let m = require("mithril");
let Talk = require("../models/talk");

module.exports = {
  oninit: Talk.loadList,
  view: function() {
    return m("article.center.mw6.mw7-ns", [
      m("h1.f4.bg-near-white.mv0.pv2.ph3.bb.b--black-10", "Talks"),
      m("div.pa3",
        m("ul.list.pl0.mt0.center", Talk.list.map(function(talk) {
          return m("li.flex.items-center.lh-copy.pa3.ph0-l.bb.b--black-10", [
            m("img.w2.h2.w3-ns.h3-ns", {src: talk.thumbnail_url}),
            m("div.pl3.flex-auto", [
              m("span.f7.db.black-70", talk.date),
              m("span.f5.db.black-70", m("a", {href: talk.url}, talk.title)),
              m("span.f6.db.black-70.tr", m("a", {href: talk.place_url}, talk.place)),
            ]),
          ]);
        }))
      ),
    ]);
  }
};
