let m = require("mithril");

let Talk = {
  list: [],
  loadList: function() {
    return m.request({
      method: "GET",
      url: "./data/talk.json"
    }).then(function(result) {
      Talk.list = result
    })
  },
}

module.exports = Talk

