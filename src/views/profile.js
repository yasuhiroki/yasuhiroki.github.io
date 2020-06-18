let m = require("mithril")

module.exports = {
  view: function() {
    return m("article.center.mw6.mw7-ns.mb3", [
      m("h1.f4.bg-near-white.mv0.pv2.ph3.bb.b--black-10", "Profile"),
      m("div.flex.pa3", [
        m("div.outline.w-50.mr2", [
          m("div.f4.pa2.bb", "Skills"),
          m("div.pa2.pl3", [
            m("div", "AWS"),
            m("div", "Ruby/Rails"),
            m("div", "Kotlin/Android"),
            m("div", "CircleCI"),
            m("div", "GitHub Actions"),
            m("div", "Jenkins"),
          ])
        ]),
        m("div.outline.w-50", [
          m("div.f4.pa2.bb", "Links"),
          m("div.pa2.pl3", [
            m("a.f5.fw6.db.black.link.hover-blue", {href: "http://yasuhiroki.hatenablog.com/"}, "Blog"),
            m("a.f5.fw6.db.black.link.hover-blue", {href: "https://github.com/yasuhiroki"}, "GitHub"),
            m("a.f5.fw6.db.black.link.hover-blue", {href: "https://qiita.com/yasuhiroki"}, "Qiita"),
            m("a.f5.fw6.db.black.link.hover-blue", {href: "https://yasuhiroki.qrunch.io/"}, "Qrunch"),
            m("a.f5.fw6.db.black.link.hover-blue", {href: "https://www.slideshare.net/yasuhirokiyota/"}, "SlideShare"),
            m("a.f5.fw6.db.black.link.hover-blue", {href: "https://speakerdeck.com/yasuhiroki/"}, "SpeakerDeck"),
            m("a.f5.fw6.db.black.link.hover-blue", {href: "https://stackshare.io/yasuhiroki/yasuhiroki"}, "StackShare"),
            m("a.f5.fw6.db.black.link.hover-blue", {href: "https://portfolio.forkwell.com/@yasuhiroki"}, "forkwell"),
          ]),
        ]),
      ]),
    ]);
  }
}
