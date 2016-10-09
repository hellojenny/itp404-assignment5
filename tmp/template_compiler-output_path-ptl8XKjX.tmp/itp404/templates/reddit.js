export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.8.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 16
            },
            "end": {
              "line": 5,
              "column": 50
            }
          },
          "moduleName": "itp404/templates/reddit.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Yes");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@2.8.1",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 50
            },
            "end": {
              "line": 5,
              "column": 60
            }
          },
          "moduleName": "itp404/templates/reddit.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("No");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.8.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 1
          }
        },
        "moduleName": "itp404/templates/reddit.hbs"
      },
      isEmpty: false,
      arity: 1,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createElement("a");
        dom.setAttribute(el2,"target","_blank");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n			");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Score: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n			");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Comments: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n			");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Archived: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1, 0]);
        var morphs = new Array(5);
        morphs[0] = dom.createAttrMorph(element0, 'href');
        morphs[1] = dom.createMorphAt(element0,0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [3]),1,1);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [5]),1,1);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [7]),1,1);
        return morphs;
      },
      statements: [
        ["attribute","href",["concat",[["get","subreddit.data.url",["loc",[null,[2,16],[2,34]]],0,0,0,0]],0,0,0,0,0],0,0,0,0],
        ["content","subreddit.data.title",["loc",[null,[2,54],[2,78]]],0,0,0,0],
        ["content","subreddit.data.score",["loc",[null,[3,13],[3,37]]],0,0,0,0],
        ["content","subreddit.data.num_comments",["loc",[null,[4,16],[4,47]]],0,0,0,0],
        ["block","if",[["get","subreddit.data.archived",["loc",[null,[5,22],[5,45]]],0,0,0,0]],[],0,1,["loc",[null,[5,16],[5,67]]]]
      ],
      locals: ["subreddit"],
      templates: [child0, child1]
    };
  }());
  var child1 = (function() {
    return {
      meta: {
        "revision": "Ember@2.8.1",
        "loc": {
          "source": null,
          "start": {
            "line": 6,
            "column": 1
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "itp404/templates/reddit.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("	");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Doesn't exist.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }());
  return {
    meta: {
      "revision": "Ember@2.8.1",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 8,
          "column": 9
        }
      },
      "moduleName": "itp404/templates/reddit.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(1);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      dom.insertBoundary(fragment, 0);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["block","each",[["get","model",["loc",[null,[1,8],[1,13]]],0,0,0,0]],[],0,1,["loc",[null,[1,0],[8,9]]]]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));