require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"BottomNavigation":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.BottomNavigation = (function(superClass) {
  extend(BottomNavigation, superClass);

  function BottomNavigation(options) {
    var activeColor, colorRipple, colorRippleCheck, defaultActiveItem, defaultColor, head, i, items, j, k, l, len, len1, link, m, materialIcons, ref, ref1, ref10, ref11, ref12, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, systemBtn, systemIcon, systemIcons, systemNavigationBtns, tappedItem, viewItem, viewItems, withSystemNav;
    this.options = options != null ? options : {};
    this._items = (ref = this.options.items) != null ? ref : [["Explore", "explore", "#0F6FFF"], ["Movies", "movie", "#EE4444"], ["Music", "album", "#541FDB"], ["Favorites", "favorite", "#00B39E"]];
    this._defaultActiveItem = (ref1 = this.options.defaultActiveItem) != null ? ref1 : 0;
    this._withSystemNav = (ref2 = this.options.withSystemNav) != null ? ref2 : false;
    this._color = (ref3 = this.options.color) != null ? ref3 : "rgba(255, 255, 255, .70)";
    this._activeColor = (ref4 = this.options.activeColor) != null ? ref4 : "rgba(255, 255, 255, 1)";
    this._backgroundColor = (ref5 = (ref6 = this.options.backgroundColor) != null ? ref6 : this._items[this._defaultActiveItem][2]) != null ? ref5 : "#0F6FFF";
    this._colorRipple = (ref7 = this.options.colorRipple) != null ? ref7 : false;
    this._parent = (ref8 = this.options.parent) != null ? ref8 : void 0;
    this._materialIcons = (ref9 = this.options.materialIcons) != null ? ref9 : true;
    this._y = (ref10 = this.options.y) != null ? ref10 : void 0;
    items = this._items;
    defaultActiveItem = this._defaultActiveItem;
    defaultColor = this._color;
    activeColor = this._activeColor;
    colorRipple = this._colorRipple;
    withSystemNav = this._withSystemNav;
    materialIcons = this._materialIcons;
    if (materialIcons) {
      link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
      head = document.getElementsByTagName("head")[0];
      head.appendChild(link);
    }
    BottomNavigation.__super__.constructor.call(this, _.defaults(this.options, {
      width: Screen.width,
      height: withSystemNav ? 104 : 56,
      y: (ref11 = this.options.y) != null ? ref11 : Align.bottom,
      parent: this._parent,
      backgroundColor: this._backgroundColor,
      name: "BottomNavigation",
      clip: true
    }));
    this.viewItems = [];
    viewItems = this.viewItems;
    for (i = j = 0, ref12 = items.length; 0 <= ref12 ? j < ref12 : j > ref12; i = 0 <= ref12 ? ++j : --j) {
      this.viewItem = new Layer({
        parent: this,
        y: 0,
        height: withSystemNav ? this.height / 2 : this.height,
        width: this.width / this._items.length,
        x: i * this.width / this._items.length,
        backgroundColor: void 0,
        name: "item" + (i + 1)
      });
      this.icon = new Layer({
        parent: this.viewItem,
        size: 24,
        backgroundColor: void 0,
        html: materialIcons ? "<i class='material-icons' style='color:" + this._color + "'>" + this._items[i][1] + "</i>" : "<svg style='padding: 2px' preserveAspectRatio='xMinYMin meet' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='" + this._items[i][1] + "' fill='" + this._color + "' fill-rule='evenodd'/></svg>",
        x: Align.center(),
        y: Align.center(),
        name: "icon" + (i + 1)
      });
      this.label = new TextLayer({
        text: items[i][0],
        parent: this.viewItem,
        font: "400 12px/1.5 Roboto",
        color: this._color,
        x: Align.center(),
        y: Align.center(12),
        opacity: 0,
        name: "label" + (i + 1)
      });
      this.viewItems.push(this.viewItem);
    }
    this.systemIconData = ["M13 1.85V14.15a1 1 0 0 1-1.52.854L1.38 8.855a1 1 0 0 1 0-1.709L11.48.996a1 1 0 0 1 1.52.853z", "M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm0-1A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0-1A6 6 0 1 1 8 2a6 6 0 0 1 0 12z", "M0 1.5v11A1.5 1.5 0 0 0 1.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 12.5 0h-11A1.5 1.5 0 0 0 0 1.5z"];
    if (withSystemNav) {
      this.systemNavigation = new Layer({
        parent: this,
        width: this.width,
        height: this.height / 2,
        backgroundColor: 'rgba(0, 0, 0, .40)',
        y: Align.bottom,
        name: "systemNavigation"
      });
      systemNavigationBtns = [];
      for (systemBtn = k = 0; k < 3; systemBtn = ++k) {
        this.systemNavigationBtn = new Layer({
          parent: this.systemNavigation,
          height: this.systemNavigation.height,
          width: this.width / 3,
          backgroundColor: null,
          x: systemBtn * this.width / 3,
          name: "systemBtn" + systemBtn
        });
        systemNavigationBtns.push(this.systemNavigationBtn);
      }
      systemIcons = [];
      for (l = 0, len = systemNavigationBtns.length; l < len; l++) {
        systemBtn = systemNavigationBtns[l];
        systemIcon = new Layer({
          size: 16,
          parent: systemBtn,
          point: this.index === 1 ? Align.center : null
        });
        systemIcons.push(systemIcon);
      }
      systemIcons[0].props = {
        name: "icon",
        x: Align.right(-24),
        y: Align.center,
        backgroundColor: null,
        html: "<svg width='14' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path d='" + this.systemIconData[0] + "' fill='#FFF' fill-rule='evenodd'/></svg>"
      };
      systemIcons[1].props = {
        name: "icon",
        point: Align.center,
        backgroundColor: null,
        html: "<svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path d='" + this.systemIconData[1] + "' fill='#FFF' fill-rule='evenodd'/></svg>"
      };
      systemIcons[2].props = {
        name: "icon",
        x: Align.left(24),
        y: Align.center,
        backgroundColor: null,
        html: "<svg style='padding:1px' width='14' height='14' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'><path d='" + this.systemIconData[2] + "' fill='#FFF' fill-rule='evenodd'/></svg>"
      };
    }
    tappedItem = void 0;
    colorRippleCheck = colorRipple;
    for (i = m = 0, len1 = viewItems.length; m < len1; i = ++m) {
      viewItem = viewItems[i];
      viewItems[defaultActiveItem].children[0].props = {
        html: materialIcons ? "<i class='material-icons' style='color:" + activeColor + "'>" + items[defaultActiveItem][1] + "</i>" : "<svg style='padding: 2px' preserveAspectRatio='xMinYMin meet' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='" + items[defaultActiveItem][1] + "' fill='" + this._activeColor + "' fill-rule='evenodd'/></svg>",
        y: Align.center(-8)
      };
      viewItems[defaultActiveItem].children[1].props = {
        color: activeColor,
        y: Align.bottom(-4),
        opacity: 1
      };
      viewItem.onTap(function() {
        var len2, n;
        tappedItem = this.index;
        for (i = n = 0, len2 = viewItems.length; n < len2; i = ++n) {
          viewItem = viewItems[i];
          viewItem.subLayers[0].props = {
            html: materialIcons ? "<i class='material-icons' style='color:" + defaultColor + "'>" + items[i][1] + "</i>" : "<svg style='padding: 2px' preserveAspectRatio='xMinYMin meet' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='" + items[i][1] + "' fill='" + defaultColor + "' fill-rule='evenodd'/></svg>"
          };
          viewItem.subLayers[0].animate({
            x: Align.center(),
            y: Align.center(),
            options: {
              curve: "spring(500, 40, 0)"
            }
          });
          viewItem.subLayers[1].animate({
            color: defaultColor,
            y: Align.center(8),
            opacity: 0,
            options: {
              curve: "spring(800, 60, 10)"
            }
          });
          this.subLayers[0].props = {
            html: materialIcons ? "<i class='material-icons' style='color:" + activeColor + "'>" + items[this.index][1] + "</i>" : "<svg style='padding: 2px' preserveAspectRatio='xMinYMin meet' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='" + items[this.index][1] + "' fill='" + activeColor + "' fill-rule='evenodd'/></svg>"
          };
          this.subLayers[0].animate({
            y: Align.center(-8),
            options: {
              curve: "spring(500, 40, 0)"
            }
          });
          this.subLayers[1].animate({
            color: activeColor,
            y: Align.bottom(-2),
            opacity: 1,
            options: {
              curve: "spring(800, 60, 10)"
            }
          });
        }
        if (colorRippleCheck === true) {
          colorRipple = new Layer({
            name: "colorRipple",
            parent: this.parent,
            midX: this.midX,
            midY: this.midY,
            size: Screen.width * 2,
            scale: .30,
            borderRadius: "100%",
            backgroundColor: items[tappedItem][2],
            index: -1
          });
          colorRipple.animate({
            scale: 1,
            options: {
              curve: "spring(140, 16, 0)"
            }
          });
          return colorRipple.onAnimationEnd(function() {
            this.parent.backgroundColor = colorRipple.backgroundColor;
            return this.destroy();
          });
        }
      });
    }
  }

  return BottomNavigation;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2pvaG5zaGVyd2luL0Rlc2t0b3AvQm90dG9tIE5hdmlnYXRpb24vRXhhbXBsZS5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCIuLi8uLi8uLi8uLi8uLi9Vc2Vycy9qb2huc2hlcndpbi9EZXNrdG9wL0JvdHRvbSBOYXZpZ2F0aW9uL0V4YW1wbGUuZnJhbWVyL21vZHVsZXMvQm90dG9tTmF2aWdhdGlvbi5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCIjIEFuZHJvaWQgQm90dG9tIE5hdmlnYXRpb24gTW9kdWxlIGZvciBGcmFtZXJcblxuIyBDcmVhdGVkIGJ5IEpvaG4gU2hlcndpblxuXG4jIEdpdGh1YiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qb2hubXBzaGVyd2luXG4jIERyaWJiYmxlIC0gaHR0cHM6Ly9kcmliYmJsZS5jb20vam9obnNoZXJ3aW5cbiMgVHdpdHRlciAtIGh0dHBzOi8vdHdpdHRlci5jb20vam9obm1wc2hlcndpblxuXG5jbGFzcyBleHBvcnRzLkJvdHRvbU5hdmlnYXRpb24gZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKEBvcHRpb25zPXt9KSAtPlxuXG5cdFx0IyBTZXQgQ3VzdG9tIE9wdGlvbnNcblx0XHRAX2l0ZW1zID0gQG9wdGlvbnMuaXRlbXMgPyBbW1wiRXhwbG9yZVwiLCBcImV4cGxvcmVcIiwgXCIjMEY2RkZGXCJdLCBbXCJNb3ZpZXNcIiwgXCJtb3ZpZVwiLCBcIiNFRTQ0NDRcIl0sIFtcIk11c2ljXCIsIFwiYWxidW1cIiwgXCIjNTQxRkRCXCJdLCBbXCJGYXZvcml0ZXNcIiwgXCJmYXZvcml0ZVwiLCBcIiMwMEIzOUVcIl1dXG5cdFx0QF9kZWZhdWx0QWN0aXZlSXRlbSA9IEBvcHRpb25zLmRlZmF1bHRBY3RpdmVJdGVtID8gMFxuXHRcdEBfd2l0aFN5c3RlbU5hdiA9IEBvcHRpb25zLndpdGhTeXN0ZW1OYXYgPyBmYWxzZVxuXHRcdEBfY29sb3IgPSBAb3B0aW9ucy5jb2xvciA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAuNzApXCJcblx0XHRAX2FjdGl2ZUNvbG9yID0gQG9wdGlvbnMuYWN0aXZlQ29sb3IgPyBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcIlxuXHRcdEBfYmFja2dyb3VuZENvbG9yID0gQG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID8gQF9pdGVtc1tAX2RlZmF1bHRBY3RpdmVJdGVtXVsyXSA/IFwiIzBGNkZGRlwiXG5cdFx0QF9jb2xvclJpcHBsZSA9IEBvcHRpb25zLmNvbG9yUmlwcGxlID8gZmFsc2Vcblx0XHRAX3BhcmVudCA9IEBvcHRpb25zLnBhcmVudCA/IHVuZGVmaW5lZFxuXHRcdEBfbWF0ZXJpYWxJY29ucyA9IEBvcHRpb25zLm1hdGVyaWFsSWNvbnMgPyB0cnVlXG5cdFx0QF95ID0gQG9wdGlvbnMueSA/IHVuZGVmaW5lZFxuXG5cdFx0aXRlbXMgPSBAX2l0ZW1zXG5cdFx0ZGVmYXVsdEFjdGl2ZUl0ZW0gPSBAX2RlZmF1bHRBY3RpdmVJdGVtXG5cdFx0ZGVmYXVsdENvbG9yID0gQF9jb2xvclxuXHRcdGFjdGl2ZUNvbG9yID0gQF9hY3RpdmVDb2xvclxuXHRcdGNvbG9yUmlwcGxlID0gQF9jb2xvclJpcHBsZVxuXHRcdHdpdGhTeXN0ZW1OYXYgPSBAX3dpdGhTeXN0ZW1OYXZcblx0XHRtYXRlcmlhbEljb25zID0gQF9tYXRlcmlhbEljb25zXG5cblx0XHRpZiBtYXRlcmlhbEljb25zXG5cdFx0XHQjIEluc2VydCBsaW5rIHRvIG1hdGVyaWFsIGljb25zIGluIGluZGV4Lmh0bWwgaGVhZFxuXHRcdFx0bGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKFwibGlua1wiKVxuXHRcdFx0bGluay5yZWwgPSBcInN0eWxlc2hlZXRcIlxuXHRcdFx0bGluay5ocmVmID0gXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2ljb24/ZmFtaWx5PU1hdGVyaWFsK0ljb25zXCJcblx0XHRcdGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF07XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKGxpbmspXG5cblx0XHRzdXBlciBfLmRlZmF1bHRzIEBvcHRpb25zLFxuXG5cdFx0IyBTZXQgZGVmYXVsdHNcblx0XHR3aWR0aDogU2NyZWVuLndpZHRoXG5cdFx0aGVpZ2h0OiBpZiB3aXRoU3lzdGVtTmF2IHRoZW4gMTA0IGVsc2UgNTZcblx0XHR5OiBAb3B0aW9ucy55ID8gQWxpZ24uYm90dG9tXG5cdFx0cGFyZW50OiBAX3BhcmVudFxuXHRcdGJhY2tncm91bmRDb2xvcjogQF9iYWNrZ3JvdW5kQ29sb3Jcblx0XHRuYW1lOiBcIkJvdHRvbU5hdmlnYXRpb25cIlxuXHRcdGNsaXA6IHRydWVcblxuXHRcdCMgQ3JlYXRlIGl0ZW1zIGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgbmVzdGVkIGFycmF5cyBpbiBAX2l0ZW1zXG5cdFx0QHZpZXdJdGVtcyA9IFtdXG5cdFx0dmlld0l0ZW1zID0gQHZpZXdJdGVtc1xuXHRcdGZvciBpIGluIFswLi4uaXRlbXMubGVuZ3RoXVxuXG5cdFx0XHRAdmlld0l0ZW0gPSBuZXcgTGF5ZXJcblx0XHRcdFx0cGFyZW50OiBAXG5cdFx0XHRcdHk6IDBcblx0XHRcdFx0aGVpZ2h0OiBpZiB3aXRoU3lzdGVtTmF2IHRoZW4gQGhlaWdodC8yIGVsc2UgQGhlaWdodFxuXHRcdFx0XHR3aWR0aDogQHdpZHRoIC8gQF9pdGVtcy5sZW5ndGhcblx0XHRcdFx0eDogaSAqIEB3aWR0aCAvIEBfaXRlbXMubGVuZ3RoXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdW5kZWZpbmVkXG5cdFx0XHRcdG5hbWU6IFwiaXRlbSN7aSsxfVwiXG5cblx0XHRcdEBpY29uID0gbmV3IExheWVyXG5cdFx0XHRcdHBhcmVudDogQHZpZXdJdGVtXG5cdFx0XHRcdHNpemU6IDI0XG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogdW5kZWZpbmVkXG5cdFx0XHRcdGh0bWw6IGlmIG1hdGVyaWFsSWNvbnMgdGhlbiBcIjxpIGNsYXNzPSdtYXRlcmlhbC1pY29ucycgc3R5bGU9J2NvbG9yOiN7QF9jb2xvcn0nPiN7QF9pdGVtc1tpXVsxXX08L2k+XCIgZWxzZSBcIjxzdmcgc3R5bGU9J3BhZGRpbmc6IDJweCcgcHJlc2VydmVBc3BlY3RSYXRpbz0neE1pbllNaW4gbWVldCcgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nI3tAX2l0ZW1zW2ldWzFdfScgZmlsbD0nI3tAX2NvbG9yfScgZmlsbC1ydWxlPSdldmVub2RkJy8+PC9zdmc+XCJcblx0XHRcdFx0eDogQWxpZ24uY2VudGVyKCksIHk6IEFsaWduLmNlbnRlcigpXG5cdFx0XHRcdG5hbWU6IFwiaWNvbiN7aSsxfVwiXG5cblx0XHRcdEBsYWJlbCA9IG5ldyBUZXh0TGF5ZXJcblx0XHRcdFx0dGV4dDogaXRlbXNbaV1bMF1cblx0XHRcdFx0cGFyZW50OiBAdmlld0l0ZW1cblx0XHRcdFx0Zm9udDogXCI0MDAgMTJweC8xLjUgUm9ib3RvXCJcblx0XHRcdFx0Y29sb3I6IEBfY29sb3Jcblx0XHRcdFx0eDogQWxpZ24uY2VudGVyKCksIHk6IEFsaWduLmNlbnRlcigxMilcblx0XHRcdFx0b3BhY2l0eTogMFxuXHRcdFx0XHRuYW1lOiBcImxhYmVsI3tpKzF9XCJcblxuXHRcdFx0QHZpZXdJdGVtcy5wdXNoKEB2aWV3SXRlbSlcblxuXHRcdCMgU3lzdGVtIG5hdmlnYXRpb24gZ2VuZXJhdGVkIGJ5IHNldHRpbmcgJ3dpdGhTeXN0ZW1OYXYnIGJvb2xlYW5cblx0XHRAc3lzdGVtSWNvbkRhdGEgPSBbXG5cdFx0XHRcIk0xMyAxLjg1VjE0LjE1YTEgMSAwIDAgMS0xLjUyLjg1NEwxLjM4IDguODU1YTEgMSAwIDAgMSAwLTEuNzA5TDExLjQ4Ljk5NmExIDEgMCAwIDEgMS41Mi44NTN6XCJcblx0XHRcdFwiTTggMTZBOCA4IDAgMSAxIDggMGE4IDggMCAwIDEgMCAxNnptMC0xQTcgNyAwIDEgMCA4IDFhNyA3IDAgMCAwIDAgMTR6bTAtMUE2IDYgMCAxIDEgOCAyYTYgNiAwIDAgMSAwIDEyelwiXG5cdFx0XHRcIk0wIDEuNXYxMUExLjUgMS41IDAgMCAwIDEuNSAxNGgxMWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTExQTEuNSAxLjUgMCAwIDAgMTIuNSAwaC0xMUExLjUgMS41IDAgMCAwIDAgMS41elwiXG5cdFx0XVxuXG5cdFx0aWYgd2l0aFN5c3RlbU5hdlxuXHRcdFx0QHN5c3RlbU5hdmlnYXRpb24gPSBuZXcgTGF5ZXJcblx0XHRcdFx0cGFyZW50OiBAXG5cdFx0XHRcdHdpZHRoOiBAd2lkdGhcblx0XHRcdFx0aGVpZ2h0OiBAaGVpZ2h0IC8gMlxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsIDAsIDAsIC40MCknXG5cdFx0XHRcdHk6IEFsaWduLmJvdHRvbVxuXHRcdFx0XHRuYW1lOiBcInN5c3RlbU5hdmlnYXRpb25cIlxuXG5cdFx0XHRzeXN0ZW1OYXZpZ2F0aW9uQnRucyA9IFtdXG5cdFx0XHRmb3Igc3lzdGVtQnRuIGluIFswLi4uM11cblx0XHRcdFx0QHN5c3RlbU5hdmlnYXRpb25CdG4gPSBuZXcgTGF5ZXJcblx0XHRcdFx0XHRwYXJlbnQ6IEBzeXN0ZW1OYXZpZ2F0aW9uXG5cdFx0XHRcdFx0aGVpZ2h0OiBAc3lzdGVtTmF2aWdhdGlvbi5oZWlnaHRcblx0XHRcdFx0XHR3aWR0aDogQHdpZHRoIC8gM1xuXHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdFx0XHRcdHg6IHN5c3RlbUJ0biAqIEB3aWR0aCAvIDNcblx0XHRcdFx0XHRuYW1lOiBcInN5c3RlbUJ0biN7c3lzdGVtQnRufVwiXG5cblx0XHRcdFx0c3lzdGVtTmF2aWdhdGlvbkJ0bnMucHVzaChAc3lzdGVtTmF2aWdhdGlvbkJ0bilcblxuXHRcdFx0c3lzdGVtSWNvbnMgPSBbXVxuXHRcdFx0Zm9yIHN5c3RlbUJ0biBpbiBzeXN0ZW1OYXZpZ2F0aW9uQnRuc1xuXHRcdFx0XHRzeXN0ZW1JY29uID0gbmV3IExheWVyXG5cdFx0XHRcdFx0c2l6ZTogMTZcblx0XHRcdFx0XHRwYXJlbnQ6IHN5c3RlbUJ0blxuXHRcdFx0XHRcdHBvaW50OiBpZiBAaW5kZXggaXMgMSB0aGVuIEFsaWduLmNlbnRlciBlbHNlIG51bGxcblxuXHRcdFx0XHRzeXN0ZW1JY29ucy5wdXNoKHN5c3RlbUljb24pXG5cblx0XHRcdHN5c3RlbUljb25zWzBdLnByb3BzID1cblx0XHRcdFx0bmFtZTogXCJpY29uXCJcblx0XHRcdFx0eDogQWxpZ24ucmlnaHQoLTI0KVxuXHRcdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHRcdGh0bWw6IFwiPHN2ZyB3aWR0aD0nMTQnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPScje0BzeXN0ZW1JY29uRGF0YVswXX0nIGZpbGw9JyNGRkYnIGZpbGwtcnVsZT0nZXZlbm9kZCcvPjwvc3ZnPlwiXG5cblx0XHRcdHN5c3RlbUljb25zWzFdLnByb3BzID1cblx0XHRcdFx0bmFtZTogXCJpY29uXCJcblx0XHRcdFx0cG9pbnQ6IEFsaWduLmNlbnRlclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdFx0aHRtbDogXCI8c3ZnIHdpZHRoPScxNicgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9JyN7QHN5c3RlbUljb25EYXRhWzFdfScgZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdldmVub2RkJy8+PC9zdmc+XCJcblxuXHRcdFx0c3lzdGVtSWNvbnNbMl0ucHJvcHMgPVxuXHRcdFx0XHRuYW1lOiBcImljb25cIlxuXHRcdFx0XHR4OiBBbGlnbi5sZWZ0KDI0KVxuXHRcdFx0XHR5OiBBbGlnbi5jZW50ZXJcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHRcdGh0bWw6IFwiPHN2ZyBzdHlsZT0ncGFkZGluZzoxcHgnIHdpZHRoPScxNCcgaGVpZ2h0PScxNCcgdmlld0JveD0nMCAwIDE2IDE2JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9JyN7QHN5c3RlbUljb25EYXRhWzJdfScgZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdldmVub2RkJy8+PC9zdmc+XCJcblxuXHRcdCMgU3RvcmUgc29tZSBnbG9iYWwgdmFyaWFibGVzIHRvIGJlIHVzZWQgaW5zaWRlIHRoZSBmb3IgbG9vcCBiZWxvd1xuXHRcdHRhcHBlZEl0ZW0gPSB1bmRlZmluZWRcblx0XHRjb2xvclJpcHBsZUNoZWNrID0gY29sb3JSaXBwbGVcblxuXHRcdCMgU2V0IGl0ZW0gc3R5bGVzIGFuZCBiZWhhdmlvdXJcblx0XHRmb3Igdmlld0l0ZW0sIGkgaW4gdmlld0l0ZW1zXG5cblx0XHRcdHZpZXdJdGVtc1tkZWZhdWx0QWN0aXZlSXRlbV0uY2hpbGRyZW5bMF0ucHJvcHMgPVxuXHRcdFx0XHRodG1sOiBpZiBtYXRlcmlhbEljb25zIHRoZW4gXCI8aSBjbGFzcz0nbWF0ZXJpYWwtaWNvbnMnIHN0eWxlPSdjb2xvcjoje2FjdGl2ZUNvbG9yfSc+I3tpdGVtc1tkZWZhdWx0QWN0aXZlSXRlbV1bMV19PC9pPlwiIGVsc2UgXCI8c3ZnIHN0eWxlPSdwYWRkaW5nOiAycHgnIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaW5ZTWluIG1lZXQnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9JyN7aXRlbXNbZGVmYXVsdEFjdGl2ZUl0ZW1dWzFdfScgZmlsbD0nI3tAX2FjdGl2ZUNvbG9yfScgZmlsbC1ydWxlPSdldmVub2RkJy8+PC9zdmc+XCJcblx0XHRcdFx0eTogQWxpZ24uY2VudGVyKC04KVxuXHRcdFx0dmlld0l0ZW1zW2RlZmF1bHRBY3RpdmVJdGVtXS5jaGlsZHJlblsxXS5wcm9wcyA9XG5cdFx0XHRcdGNvbG9yOiBhY3RpdmVDb2xvclxuXHRcdFx0XHR5OiBBbGlnbi5ib3R0b20oLTQpXG5cdFx0XHRcdG9wYWNpdHk6IDFcblxuXHRcdFx0IyBJdGVtIGludGVyYWN0aW9ucyBhbmQgYW5pbWF0aW9uc1xuXHRcdFx0dmlld0l0ZW0ub25UYXAgLT5cblxuXHRcdFx0XHQjIFN0b3JlIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW1cblx0XHRcdFx0dGFwcGVkSXRlbSA9IEBpbmRleFxuXG5cdFx0XHRcdGZvciB2aWV3SXRlbSwgaSBpbiB2aWV3SXRlbXNcblxuXHRcdFx0XHRcdCMgU2V0IGRlZmF1bHQgaXRlbSBhcHBlYXJhbmNlIG9uIGFsbCBpdGVtc1xuXHRcdFx0XHRcdHZpZXdJdGVtLnN1YkxheWVyc1swXS5wcm9wcyA9XG5cdFx0XHRcdFx0XHRodG1sOiBpZiBtYXRlcmlhbEljb25zIHRoZW4gXCI8aSBjbGFzcz0nbWF0ZXJpYWwtaWNvbnMnIHN0eWxlPSdjb2xvcjoje2RlZmF1bHRDb2xvcn0nPiN7aXRlbXNbaV1bMV19PC9pPlwiIGVsc2UgXCI8c3ZnIHN0eWxlPSdwYWRkaW5nOiAycHgnIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaW5ZTWluIG1lZXQnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9JyN7aXRlbXNbaV1bMV19JyBmaWxsPScje2RlZmF1bHRDb2xvcn0nIGZpbGwtcnVsZT0nZXZlbm9kZCcvPjwvc3ZnPlwiXG5cdFx0XHRcdFx0dmlld0l0ZW0uc3ViTGF5ZXJzWzBdLmFuaW1hdGVcblx0XHRcdFx0XHRcdHg6IEFsaWduLmNlbnRlcigpLCB5OiBBbGlnbi5jZW50ZXIoKVxuXHRcdFx0XHRcdFx0b3B0aW9uczogeyBjdXJ2ZTogXCJzcHJpbmcoNTAwLCA0MCwgMClcIiB9XG5cblx0XHRcdFx0XHR2aWV3SXRlbS5zdWJMYXllcnNbMV0uYW5pbWF0ZVxuXHRcdFx0XHRcdFx0Y29sb3I6IGRlZmF1bHRDb2xvclxuXHRcdFx0XHRcdFx0eTogQWxpZ24uY2VudGVyKDgpXG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRcdFx0XHRvcHRpb25zOiB7IGN1cnZlOiBcInNwcmluZyg4MDAsIDYwLCAxMClcIiAgfVxuXG5cdFx0XHRcdFx0IyBTZXQgYXBwZWFyYW5jZSBvZiBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbXNcblx0XHRcdFx0XHRAc3ViTGF5ZXJzWzBdLnByb3BzID1cblx0XHRcdFx0XHRcdGh0bWw6IGlmIG1hdGVyaWFsSWNvbnMgdGhlbiBcIjxpIGNsYXNzPSdtYXRlcmlhbC1pY29ucycgc3R5bGU9J2NvbG9yOiN7YWN0aXZlQ29sb3J9Jz4je2l0ZW1zW0BpbmRleF1bMV19PC9pPlwiIGVsc2UgXCI8c3ZnIHN0eWxlPSdwYWRkaW5nOiAycHgnIHByZXNlcnZlQXNwZWN0UmF0aW89J3hNaW5ZTWluIG1lZXQnIHdpZHRoPScyNCcgaGVpZ2h0PScyNCcgdmlld0JveD0nMCAwIDI0IDI0JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9JyN7aXRlbXNbQGluZGV4XVsxXX0nIGZpbGw9JyN7YWN0aXZlQ29sb3J9JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLz48L3N2Zz5cIlxuXG5cdFx0XHRcdFx0QHN1YkxheWVyc1swXS5hbmltYXRlXG5cdFx0XHRcdFx0XHR5OiBBbGlnbi5jZW50ZXIoLTgpXG5cdFx0XHRcdFx0XHRvcHRpb25zOiB7IGN1cnZlOiBcInNwcmluZyg1MDAsIDQwLCAwKVwiIH1cblxuXHRcdFx0XHRcdEBzdWJMYXllcnNbMV0uYW5pbWF0ZVxuXHRcdFx0XHRcdFx0Y29sb3I6IGFjdGl2ZUNvbG9yXG5cdFx0XHRcdFx0XHR5OiBBbGlnbi5ib3R0b20oLTIpXG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAxXG5cdFx0XHRcdFx0XHRvcHRpb25zOiB7IGN1cnZlOiBcInNwcmluZyg4MDAsIDYwLCAxMClcIiB9XG5cblx0XHRcdFx0IyBDb2xvciByaXBwbGUgZWZmZWN0IGdlbmVyYXRlZCBieSBzZXR0aW5nICdjb2xvclJpcHBsZScgYm9vbGVhblxuXHRcdFx0XHRpZiBjb2xvclJpcHBsZUNoZWNrIGlzIHRydWVcblxuXHRcdFx0XHRcdGNvbG9yUmlwcGxlID0gbmV3IExheWVyXG5cdFx0XHRcdFx0XHRuYW1lOiBcImNvbG9yUmlwcGxlXCJcblx0XHRcdFx0XHRcdHBhcmVudDogQHBhcmVudFxuXHRcdFx0XHRcdFx0bWlkWDogQG1pZFgsIG1pZFk6IEBtaWRZXG5cdFx0XHRcdFx0XHRzaXplOiBTY3JlZW4ud2lkdGggKiAyXG5cdFx0XHRcdFx0XHRzY2FsZTogLjMwXG5cdFx0XHRcdFx0XHRib3JkZXJSYWRpdXM6IFwiMTAwJVwiXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGl0ZW1zW3RhcHBlZEl0ZW1dWzJdXG5cdFx0XHRcdFx0XHRpbmRleDogLTFcblxuXHRcdFx0XHRcdGNvbG9yUmlwcGxlLmFuaW1hdGVcblx0XHRcdFx0XHRcdHNjYWxlOiAxXG5cdFx0XHRcdFx0XHRvcHRpb25zOiB7IGN1cnZlOiBcInNwcmluZygxNDAsIDE2LCAwKVwiIH1cblxuXHRcdFx0XHRcdGNvbG9yUmlwcGxlLm9uQW5pbWF0aW9uRW5kIC0+XG5cdFx0XHRcdFx0XHRAcGFyZW50LmJhY2tncm91bmRDb2xvciA9IGNvbG9yUmlwcGxlLmJhY2tncm91bmRDb2xvclxuXHRcdFx0XHRcdFx0QGRlc3Ryb3koKVxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFFQUE7QURRQSxJQUFBOzs7QUFBTSxPQUFPLENBQUM7OztFQUNBLDBCQUFDLE9BQUQ7QUFHWixRQUFBO0lBSGEsSUFBQyxDQUFBLDRCQUFELFVBQVM7SUFHdEIsSUFBQyxDQUFBLE1BQUQsOENBQTJCLENBQUMsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixDQUFELEVBQW9DLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsU0FBcEIsQ0FBcEMsRUFBb0UsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFt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
