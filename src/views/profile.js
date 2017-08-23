let m = require("mithril")

module.exports = {
  view: function() {
    return m("article.center.mw5.mw6-ns.br3.hidden.ba.b--black-10.mv4", [
      m("h1.f4.bg-near-white.br3.br--top.black-60.mv0.pv2.ph3", "Profile"),
      m("div.pa3.bt.b--black-10", [
        m("div.tc", [
          m("img.br-100.h4.w4.dib.ba.b--black-05.pa2", {
            src: "https://avatars2.githubusercontent.com/u/3108110?v=4&s=460"
          }),
          m("div", m("a", {href: "https://github.com/yasuhiroki"}, "GitHub")),
          m("div", m("a", {href: "http://yasuhiroki.hatenablog.com/"}, "はてなブログ")),
          m("div", m("a", {href: "https://qiita.com/yasuhiroki"}, "Qiita")),
          m("div", m("a", {href: "https://www.slideshare.net/yasuhirokiyota/"}, "SlideShare")),
          m("div", m("a", {href: "https://stackshare.io/yasuhiroki/yasuhiroki"}, "StackShare")),
          m("div", m("a", {href: "https://stargzr.net/users/yasuhiroki"}, "stargzr")),
        ]),
      ]),
    ]);
  }
}
