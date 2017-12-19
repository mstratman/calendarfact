<template>
  <div class="contents">
    <h1>Calendar "Fact"</h1>
    <h2>Courtesy of <a href="https://xkcd.com/1930/" target="_blank">xkcd 1930</a></h2>
    <div class="fact">{{fact}}</div>
    <div class="regenerate"><a href="#" v-on:click.stop.prevent="regenerate">show me another fact</a></div>
    <div class="flowchart">
      <a href="https://xkcd.com/1930/" target="_blank">
        <img src="https://imgs.xkcd.com/comics/calendar_facts.png" alt="Calendar facts" />
      </a>
    </div>
  </div>
</template>

<script>
import RandomizeBackground from '../mixins/randomize_background'
import Polyfills from '../poly'

const fragments = [
  'Did you know that',
  {_: [
    ['the',{_:['fall','spring']},'equinox',],
    ['the',{_:['winter','summer']},{_:['solstice','olympics']},],
    ['the',{_:['earliest','latest']},{_:['sunrise','sunset']},],
    ['daylight',{_:['saving','savings']},'time',],
    ['leap',{_:['day','year']}],
    'easter',
    ['the',{_:['harvest','super','blood']},'moon'],
    'Toyota truck month',
    'shark week',
  ]},
  {_:[
    ['happens',{_:['earlier','later','at the wrong time']},'every year'],
    [
      'drifts out of sync with the',
      {_:[
        'sun',
        'moon',
        'zodiac',
        [{_:['Gregorian','Mayan','lunar','iPhone']}, 'calendar'],
        'atomic clock in Colorado',
      ]},
    ],
    ['might',{_:['not happen','happen twice']},'this year'],
  ]},
  [
    'because of',
    {_:[
      ['time zone legislation in',{_:['Indiana','Arizona','Russia']},],
      'a decree by the Pope in the 1500s',
      [
        {_:['precession','libration','nutation','libation','eccentricity','obliquity']},
        'of the',
        {_:['moon','sun','earth\'s axis','equator','prime meridian',[{_:['international date','Mason-Dixon']},'line'],]},
      ],
    ]},
  ],
  "?\n\n",
  'Apparently',
  {_:[
    'it causes a predictable increase in car accidents.',
    'that\'s why we have leap seconds.',
    'scientists are really worried.',
    ['it was even more extreme during the',{_:['Bronze Age.','Ice Age.','Cretaceous.','1990s.']},],
    ['there\'s a proposal to fix it, but it',{_:['will never happen.','actually makes things worse.','is stalled in Congress.','might be unconstitutional.']},],
    'it\'s getting worse and no one knows why.',
  ]},
]

function isList(thing) {
  return typeof thing === 'object' && thing.constructor === Array
}
function isObject(thing) {
  return typeof thing === 'object' && thing.constructor !== Array
}
function isString(thing) {
  return typeof thing === 'string'
}

export default {
  name: 'Index',
  mixins: [RandomizeBackground],
  watch: {
    selections: function() {
      this.$router.push({ name: 'Selections', params: { selections: this.selectionsParam }})
    },
  },
  data: function() {
    return {
      selections: [],
    }
  },
  mounted: function() {
    if (! this.$route.params["selections"]) {
      this.setRandomSelection()
    } else {
      this.setSelectionsFromRoute()
    }
  },
  computed: {
    selectionsParam() {
      return this.selections.join(':')
    },
    fact: function() {
      let rv = ''
      let selections = JSON.parse(JSON.stringify(this.selections))

      let printFragment = (frag) => {
        if (isString(frag)) {
          if (rv.length && ! rv.endsWith("\n")) {
            rv += ' '
          }
          rv += frag
        } else if (isList(frag)) {
          for (let part of frag) {
            printFragment(part)
          }
        } else if (isObject(frag)) {
          let i = selections.shift()
          printFragment(frag['_'][i])
        }
      }
      printFragment(fragments)
      return rv
    },
  },
  methods: {
    regenerate: function() {
      this.setRandomSelection()
      this.randomizeBackground()
    },
    setRandomSelection: function() {
      let s = []
      let pickRandom
      let walkList
      pickRandom = (obj) => {
        let i = Math.floor(Math.random()*obj['_'].length)
        s.push(i)
        let selection = obj['_'][i]
        if (isObject(selection)) {
          pickRandom(selection)
        } else if (isList(selection)) {
          walkList(selection)
        }
      }
      walkList = (list) => {
        for (let part of list) {
          if (isList(part)) {
            walkList(part)
          } else if (isObject(part)) {
            pickRandom(part)
          }
        }
      }
      walkList(fragments)
      this.selections = s
    },
    setSelectionsFromRoute: function() {
      this.selections = this.$route.params.selections.split(':')
    },
  }
}
</script>

<style lang="scss" scoped>
$breakpoint: 480px;


.contents {
  padding: 1.5rem;
  max-width: 800px;
  min-width: 350px;
  margin-left: auto;
  margin-right: auto;
}
.fact {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.3rem;
  background: rgba(255,255,255,0.8);
  color: #4f4f4f;
  padding: 3rem;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-weight: bold;
}
@media screen and (max-width: $breakpoint) {
  .contents {
    padding: 0.5rem;
  }
  .fact {
    padding: 0.8rem;
  }
}

h1 {
  margin-bottom: 0;
  padding-bottom: 0;
}
h2 {
  font-weight: normal;
  font-size: 1rem;
  margin-top: 0;
  padding-top: 0;
  a, a:visited, a:active, a:hover, a:link {
    color: #ffffff;
  }
  a:hover {
    text-decoration: none;
  }
}
.flowchart {
  margin-top: 2rem;
  text-align: center;
  a, a:visited, a:active, a:hover, a:link {
    text-decoration: none;
  }
  img {
    max-width: 80%;
  }
}
.regenerate {
  width: 100%;
  text-align: right;
}
</style>
