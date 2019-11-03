let m = require("mithril");
let Talk = require("../models/talk");

module.exports = {
  oninit: Talk.loadList,
  view: function() {
    return m("article.center.mw5.mw6-ns.br3.hidden.ba.b--black-10.mv4", [
      m("h1.f4.bg-near-white.br3.br--top.black-60.mv0.pv2.ph3", "Talks"),
      m("div.pa3.bt.b--black-10",
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
