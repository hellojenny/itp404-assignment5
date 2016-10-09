export default Ember.HTMLBars.template((function() {
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
          "column": 10
        }
      },
      "moduleName": "itp404/templates/search.hbs"
    },
    isEmpty: false,
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createElement("h2");
      var el2 = dom.createTextNode("Search iTunes");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createElement("form");
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createComment("");
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n	");
      dom.appendChild(el1, el2);
      var el2 = dom.createElement("button");
      dom.setAttribute(el2,"type","submit");
      var el3 = dom.createTextNode("Search");
      dom.appendChild(el2, el3);
      dom.appendChild(el1, el2);
      var el2 = dom.createTextNode("\n");
      dom.appendChild(el1, el2);
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var element0 = dom.childAt(fragment, [2]);
      var morphs = new Array(3);
      morphs[0] = dom.createAttrMorph(element0, 'onSubmit');
      morphs[1] = dom.createMorphAt(element0,1,1);
      morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
      dom.insertBoundary(fragment, null);
      return morphs;
    },
    statements: [
      ["attribute","onSubmit",["subexpr","action",["search"],[],["loc",[null,[null,null],[2,34]]],0,0],0,0,0,0],
      ["inline","input",[],["type","text","value",["subexpr","@mut",[["get","searchTerm",["loc",[null,[3,27],[3,37]]],0,0,0,0]],[],[],0,0]],["loc",[null,[3,1],[3,39]]],0,0],
      ["content","outlet",["loc",[null,[6,0],[6,10]]],0,0,0,0]
    ],
    locals: [],
    templates: []
  };
}()));