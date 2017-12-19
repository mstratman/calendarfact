export default {
  mounted: function() {
    this.randomizeBackground()
  },
  methods: {
    randomizeBackground: function() {
      let colors = ['#0ac2d2', '#7bb7fa', '#60d7a9', '#fdc162', '#fd6a62', '#f68dbb']
      let c = colors[Math.floor(Math.random()*colors.length)]
      document.body.style.background = c
    }
  },
}
