export default Ember.HTMLBars.template((function() {
  var child0 = (function() {
    return {
      meta: {
        "revision": "Ember@2.8.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 125
          },
          "end": {
            "line": 1,
            "column": 235
          }
        },
        "moduleName": "itp404/templates/components/song-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"src","http://pix.iemoji.com/images/emoji/apple/ios-9/256/money-bag.png");
        dom.setAttribute(el1,"width","24");
        dom.setAttribute(el1,"alt","");
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
            "line": 1,
            "column": 243
          },
          "end": {
            "line": 1,
            "column": 349
          }
        },
        "moduleName": "itp404/templates/components/song-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("img");
        dom.setAttribute(el1,"src","http://pix.iemoji.com/images/emoji/apple/ios-9/256/fire.png");
        dom.setAttribute(el1,"width","24");
        dom.setAttribute(el1,"alt","");
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
          "line": 2,
          "column": 63
        }
      },
      "moduleName": "itp404/templates/components/song-item.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("strong");
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("img");
      dom.setAttribute(el1,"src","http://pix.iemoji.com/images/emoji/apple/ios-9/256/money-bag.png");
      dom.setAttribute(el1,"width","24");
      dom.setAttribute(el1,"alt","");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode(" ");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\nPrice: $");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode(" | Play Count: ");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("br");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(5);
      morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
      morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
      morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
      morphs[3] = dom.createMorphAt(fragment,7,7,contextualElement);
      morphs[4] = dom.createMorphAt(fragment,9,9,contextualElement);
      return morphs;
    },
    statements: [
      ["content","song.title",["loc",[null,[1,8],[1,22]]],0,0,0,0],
      ["block","if",[["get","isPricey",["loc",[null,[1,131],[1,139]]],0,0,0,0]],[],0,null,["loc",[null,[1,125],[1,242]]]],
      ["block","if",[["get","isPopular",["loc",[null,[1,249],[1,258]]],0,0,0,0]],[],1,null,["loc",[null,[1,243],[1,356]]]],
      ["content","song.price",["loc",[null,[2,8],[2,22]]],0,0,0,0],
      ["content","song.playCount",["loc",[null,[2,37],[2,55]]],0,0,0,0]
    ],
    locals: [],
    templates: [child0, child1]
  };
}()));