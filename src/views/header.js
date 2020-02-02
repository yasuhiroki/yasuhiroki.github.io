let m = require("mithril")

module.exports = {
  view: function() {
    return m("", [
      m("img.br-100.h4.w4.dib.ba.b--black-05.pa2", {
        src: "https://avatars2.githubusercontent.com/u/3108110?v=4&s=460"
      }),
      m("h1.f5.f4-ns.fw6.black-70", "yasuhiroki")
    ]);
  }
}
