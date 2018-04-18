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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL2pvaG5zaGVyd2luL0Rlc2t0b3AvQm90dG9tIE5hdmlnYXRpb24vQ3VzdG9tLUV4YW1wbGUuZnJhbWVyL21vZHVsZXMvbXlNb2R1bGUuY29mZmVlIiwiLi4vLi4vLi4vLi4vLi4vVXNlcnMvam9obnNoZXJ3aW4vRGVza3RvcC9Cb3R0b20gTmF2aWdhdGlvbi9DdXN0b20tRXhhbXBsZS5mcmFtZXIvbW9kdWxlcy9Cb3R0b21OYXZpZ2F0aW9uLmNvZmZlZSIsIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSIsIiMgQW5kcm9pZCBCb3R0b20gTmF2aWdhdGlvbiBNb2R1bGUgZm9yIEZyYW1lclxuXG4jIENyZWF0ZWQgYnkgSm9obiBTaGVyd2luXG5cbiMgR2l0aHViIC0gaHR0cHM6Ly9naXRodWIuY29tL2pvaG5tcHNoZXJ3aW5cbiMgRHJpYmJibGUgLSBodHRwczovL2RyaWJiYmxlLmNvbS9qb2huc2hlcndpblxuIyBUd2l0dGVyIC0gaHR0cHM6Ly90d2l0dGVyLmNvbS9qb2hubXBzaGVyd2luXG5cbmNsYXNzIGV4cG9ydHMuQm90dG9tTmF2aWdhdGlvbiBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAoQG9wdGlvbnM9e30pIC0+XG5cblx0XHQjIFNldCBDdXN0b20gT3B0aW9uc1xuXHRcdEBfaXRlbXMgPSBAb3B0aW9ucy5pdGVtcyA/IFtbXCJFeHBsb3JlXCIsIFwiZXhwbG9yZVwiLCBcIiMwRjZGRkZcIl0sIFtcIk1vdmllc1wiLCBcIm1vdmllXCIsIFwiI0VFNDQ0NFwiXSwgW1wiTXVzaWNcIiwgXCJhbGJ1bVwiLCBcIiM1NDFGREJcIl0sIFtcIkZhdm9yaXRlc1wiLCBcImZhdm9yaXRlXCIsIFwiIzAwQjM5RVwiXV1cblx0XHRAX2RlZmF1bHRBY3RpdmVJdGVtID0gQG9wdGlvbnMuZGVmYXVsdEFjdGl2ZUl0ZW0gPyAwXG5cdFx0QF93aXRoU3lzdGVtTmF2ID0gQG9wdGlvbnMud2l0aFN5c3RlbU5hdiA/IGZhbHNlXG5cdFx0QF9jb2xvciA9IEBvcHRpb25zLmNvbG9yID8gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIC43MClcIlxuXHRcdEBfYWN0aXZlQ29sb3IgPSBAb3B0aW9ucy5hY3RpdmVDb2xvciA/IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiXG5cdFx0QF9iYWNrZ3JvdW5kQ29sb3IgPSBAb3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3IgPyBAX2l0ZW1zW0BfZGVmYXVsdEFjdGl2ZUl0ZW1dWzJdID8gXCIjMEY2RkZGXCJcblx0XHRAX2NvbG9yUmlwcGxlID0gQG9wdGlvbnMuY29sb3JSaXBwbGUgPyBmYWxzZVxuXHRcdEBfcGFyZW50ID0gQG9wdGlvbnMucGFyZW50ID8gdW5kZWZpbmVkXG5cdFx0QF9tYXRlcmlhbEljb25zID0gQG9wdGlvbnMubWF0ZXJpYWxJY29ucyA/IHRydWVcblx0XHRAX3kgPSBAb3B0aW9ucy55ID8gdW5kZWZpbmVkXG5cblx0XHRpdGVtcyA9IEBfaXRlbXNcblx0XHRkZWZhdWx0QWN0aXZlSXRlbSA9IEBfZGVmYXVsdEFjdGl2ZUl0ZW1cblx0XHRkZWZhdWx0Q29sb3IgPSBAX2NvbG9yXG5cdFx0YWN0aXZlQ29sb3IgPSBAX2FjdGl2ZUNvbG9yXG5cdFx0Y29sb3JSaXBwbGUgPSBAX2NvbG9yUmlwcGxlXG5cdFx0d2l0aFN5c3RlbU5hdiA9IEBfd2l0aFN5c3RlbU5hdlxuXHRcdG1hdGVyaWFsSWNvbnMgPSBAX21hdGVyaWFsSWNvbnNcblxuXHRcdGlmIG1hdGVyaWFsSWNvbnNcblx0XHRcdCMgSW5zZXJ0IGxpbmsgdG8gbWF0ZXJpYWwgaWNvbnMgaW4gaW5kZXguaHRtbCBoZWFkXG5cdFx0XHRsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCAoXCJsaW5rXCIpXG5cdFx0XHRsaW5rLnJlbCA9IFwic3R5bGVzaGVldFwiXG5cdFx0XHRsaW5rLmhyZWYgPSBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnNcIlxuXHRcdFx0aGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQobGluaylcblxuXHRcdHN1cGVyIF8uZGVmYXVsdHMgQG9wdGlvbnMsXG5cblx0XHQjIFNldCBkZWZhdWx0c1xuXHRcdHdpZHRoOiBTY3JlZW4ud2lkdGhcblx0XHRoZWlnaHQ6IGlmIHdpdGhTeXN0ZW1OYXYgdGhlbiAxMDQgZWxzZSA1NlxuXHRcdHk6IEBvcHRpb25zLnkgPyBBbGlnbi5ib3R0b21cblx0XHRwYXJlbnQ6IEBfcGFyZW50XG5cdFx0YmFja2dyb3VuZENvbG9yOiBAX2JhY2tncm91bmRDb2xvclxuXHRcdG5hbWU6IFwiQm90dG9tTmF2aWdhdGlvblwiXG5cdFx0Y2xpcDogdHJ1ZVxuXG5cdFx0IyBDcmVhdGUgaXRlbXMgYmFzZWQgb24gdGhlIG51bWJlciBvZiBuZXN0ZWQgYXJyYXlzIGluIEBfaXRlbXNcblx0XHRAdmlld0l0ZW1zID0gW11cblx0XHR2aWV3SXRlbXMgPSBAdmlld0l0ZW1zXG5cdFx0Zm9yIGkgaW4gWzAuLi5pdGVtcy5sZW5ndGhdXG5cblx0XHRcdEB2aWV3SXRlbSA9IG5ldyBMYXllclxuXHRcdFx0XHRwYXJlbnQ6IEBcblx0XHRcdFx0eTogMFxuXHRcdFx0XHRoZWlnaHQ6IGlmIHdpdGhTeXN0ZW1OYXYgdGhlbiBAaGVpZ2h0LzIgZWxzZSBAaGVpZ2h0XG5cdFx0XHRcdHdpZHRoOiBAd2lkdGggLyBAX2l0ZW1zLmxlbmd0aFxuXHRcdFx0XHR4OiBpICogQHdpZHRoIC8gQF9pdGVtcy5sZW5ndGhcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB1bmRlZmluZWRcblx0XHRcdFx0bmFtZTogXCJpdGVtI3tpKzF9XCJcblxuXHRcdFx0QGljb24gPSBuZXcgTGF5ZXJcblx0XHRcdFx0cGFyZW50OiBAdmlld0l0ZW1cblx0XHRcdFx0c2l6ZTogMjRcblx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiB1bmRlZmluZWRcblx0XHRcdFx0aHRtbDogaWYgbWF0ZXJpYWxJY29ucyB0aGVuIFwiPGkgY2xhc3M9J21hdGVyaWFsLWljb25zJyBzdHlsZT0nY29sb3I6I3tAX2NvbG9yfSc+I3tAX2l0ZW1zW2ldWzFdfTwvaT5cIiBlbHNlIFwiPHN2ZyBzdHlsZT0ncGFkZGluZzogMnB4JyBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSd4TWluWU1pbiBtZWV0JyB3aWR0aD0nMjQnIGhlaWdodD0nMjQnIHZpZXdCb3g9JzAgMCAyNCAyNCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cGF0aCBkPScje0BfaXRlbXNbaV1bMV19JyBmaWxsPScje0BfY29sb3J9JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLz48L3N2Zz5cIlxuXHRcdFx0XHR4OiBBbGlnbi5jZW50ZXIoKSwgeTogQWxpZ24uY2VudGVyKClcblx0XHRcdFx0bmFtZTogXCJpY29uI3tpKzF9XCJcblxuXHRcdFx0QGxhYmVsID0gbmV3IFRleHRMYXllclxuXHRcdFx0XHR0ZXh0OiBpdGVtc1tpXVswXVxuXHRcdFx0XHRwYXJlbnQ6IEB2aWV3SXRlbVxuXHRcdFx0XHRmb250OiBcIjQwMCAxMnB4LzEuNSBSb2JvdG9cIlxuXHRcdFx0XHRjb2xvcjogQF9jb2xvclxuXHRcdFx0XHR4OiBBbGlnbi5jZW50ZXIoKSwgeTogQWxpZ24uY2VudGVyKDEyKVxuXHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRcdG5hbWU6IFwibGFiZWwje2krMX1cIlxuXG5cdFx0XHRAdmlld0l0ZW1zLnB1c2goQHZpZXdJdGVtKVxuXG5cdFx0IyBTeXN0ZW0gbmF2aWdhdGlvbiBnZW5lcmF0ZWQgYnkgc2V0dGluZyAnd2l0aFN5c3RlbU5hdicgYm9vbGVhblxuXHRcdEBzeXN0ZW1JY29uRGF0YSA9IFtcblx0XHRcdFwiTTEzIDEuODVWMTQuMTVhMSAxIDAgMCAxLTEuNTIuODU0TDEuMzggOC44NTVhMSAxIDAgMCAxIDAtMS43MDlMMTEuNDguOTk2YTEgMSAwIDAgMSAxLjUyLjg1M3pcIlxuXHRcdFx0XCJNOCAxNkE4IDggMCAxIDEgOCAwYTggOCAwIDAgMSAwIDE2em0wLTFBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNHptMC0xQTYgNiAwIDEgMSA4IDJhNiA2IDAgMCAxIDAgMTJ6XCJcblx0XHRcdFwiTTAgMS41djExQTEuNSAxLjUgMCAwIDAgMS41IDE0aDExYTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtMTFBMS41IDEuNSAwIDAgMCAxMi41IDBoLTExQTEuNSAxLjUgMCAwIDAgMCAxLjV6XCJcblx0XHRdXG5cblx0XHRpZiB3aXRoU3lzdGVtTmF2XG5cdFx0XHRAc3lzdGVtTmF2aWdhdGlvbiA9IG5ldyBMYXllclxuXHRcdFx0XHRwYXJlbnQ6IEBcblx0XHRcdFx0d2lkdGg6IEB3aWR0aFxuXHRcdFx0XHRoZWlnaHQ6IEBoZWlnaHQgLyAyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwgMCwgMCwgLjQwKSdcblx0XHRcdFx0eTogQWxpZ24uYm90dG9tXG5cdFx0XHRcdG5hbWU6IFwic3lzdGVtTmF2aWdhdGlvblwiXG5cblx0XHRcdHN5c3RlbU5hdmlnYXRpb25CdG5zID0gW11cblx0XHRcdGZvciBzeXN0ZW1CdG4gaW4gWzAuLi4zXVxuXHRcdFx0XHRAc3lzdGVtTmF2aWdhdGlvbkJ0biA9IG5ldyBMYXllclxuXHRcdFx0XHRcdHBhcmVudDogQHN5c3RlbU5hdmlnYXRpb25cblx0XHRcdFx0XHRoZWlnaHQ6IEBzeXN0ZW1OYXZpZ2F0aW9uLmhlaWdodFxuXHRcdFx0XHRcdHdpZHRoOiBAd2lkdGggLyAzXG5cdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBudWxsXG5cdFx0XHRcdFx0eDogc3lzdGVtQnRuICogQHdpZHRoIC8gM1xuXHRcdFx0XHRcdG5hbWU6IFwic3lzdGVtQnRuI3tzeXN0ZW1CdG59XCJcblxuXHRcdFx0XHRzeXN0ZW1OYXZpZ2F0aW9uQnRucy5wdXNoKEBzeXN0ZW1OYXZpZ2F0aW9uQnRuKVxuXG5cdFx0XHRzeXN0ZW1JY29ucyA9IFtdXG5cdFx0XHRmb3Igc3lzdGVtQnRuIGluIHN5c3RlbU5hdmlnYXRpb25CdG5zXG5cdFx0XHRcdHN5c3RlbUljb24gPSBuZXcgTGF5ZXJcblx0XHRcdFx0XHRzaXplOiAxNlxuXHRcdFx0XHRcdHBhcmVudDogc3lzdGVtQnRuXG5cdFx0XHRcdFx0cG9pbnQ6IGlmIEBpbmRleCBpcyAxIHRoZW4gQWxpZ24uY2VudGVyIGVsc2UgbnVsbFxuXG5cdFx0XHRcdHN5c3RlbUljb25zLnB1c2goc3lzdGVtSWNvbilcblxuXHRcdFx0c3lzdGVtSWNvbnNbMF0ucHJvcHMgPVxuXHRcdFx0XHRuYW1lOiBcImljb25cIlxuXHRcdFx0XHR4OiBBbGlnbi5yaWdodCgtMjQpXG5cdFx0XHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdFx0aHRtbDogXCI8c3ZnIHdpZHRoPScxNCcgaGVpZ2h0PScxNicgdmlld0JveD0nMCAwIDE2IDE2JyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjxwYXRoIGQ9JyN7QHN5c3RlbUljb25EYXRhWzBdfScgZmlsbD0nI0ZGRicgZmlsbC1ydWxlPSdldmVub2RkJy8+PC9zdmc+XCJcblxuXHRcdFx0c3lzdGVtSWNvbnNbMV0ucHJvcHMgPVxuXHRcdFx0XHRuYW1lOiBcImljb25cIlxuXHRcdFx0XHRwb2ludDogQWxpZ24uY2VudGVyXG5cdFx0XHRcdGJhY2tncm91bmRDb2xvcjogbnVsbFxuXHRcdFx0XHRodG1sOiBcIjxzdmcgd2lkdGg9JzE2JyBoZWlnaHQ9JzE2JyB2aWV3Qm94PScwIDAgMTYgMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nI3tAc3lzdGVtSWNvbkRhdGFbMV19JyBmaWxsPScjRkZGJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLz48L3N2Zz5cIlxuXG5cdFx0XHRzeXN0ZW1JY29uc1syXS5wcm9wcyA9XG5cdFx0XHRcdG5hbWU6IFwiaWNvblwiXG5cdFx0XHRcdHg6IEFsaWduLmxlZnQoMjQpXG5cdFx0XHRcdHk6IEFsaWduLmNlbnRlclxuXHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IG51bGxcblx0XHRcdFx0aHRtbDogXCI8c3ZnIHN0eWxlPSdwYWRkaW5nOjFweCcgd2lkdGg9JzE0JyBoZWlnaHQ9JzE0JyB2aWV3Qm94PScwIDAgMTYgMTYnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nI3tAc3lzdGVtSWNvbkRhdGFbMl19JyBmaWxsPScjRkZGJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLz48L3N2Zz5cIlxuXG5cdFx0IyBTdG9yZSBzb21lIGdsb2JhbCB2YXJpYWJsZXMgdG8gYmUgdXNlZCBpbnNpZGUgdGhlIGZvciBsb29wIGJlbG93XG5cdFx0dGFwcGVkSXRlbSA9IHVuZGVmaW5lZFxuXHRcdGNvbG9yUmlwcGxlQ2hlY2sgPSBjb2xvclJpcHBsZVxuXG5cdFx0IyBTZXQgaXRlbSBzdHlsZXMgYW5kIGJlaGF2aW91clxuXHRcdGZvciB2aWV3SXRlbSwgaSBpbiB2aWV3SXRlbXNcblxuXHRcdFx0dmlld0l0ZW1zW2RlZmF1bHRBY3RpdmVJdGVtXS5jaGlsZHJlblswXS5wcm9wcyA9XG5cdFx0XHRcdGh0bWw6IGlmIG1hdGVyaWFsSWNvbnMgdGhlbiBcIjxpIGNsYXNzPSdtYXRlcmlhbC1pY29ucycgc3R5bGU9J2NvbG9yOiN7YWN0aXZlQ29sb3J9Jz4je2l0ZW1zW2RlZmF1bHRBY3RpdmVJdGVtXVsxXX08L2k+XCIgZWxzZSBcIjxzdmcgc3R5bGU9J3BhZGRpbmc6IDJweCcgcHJlc2VydmVBc3BlY3RSYXRpbz0neE1pbllNaW4gbWVldCcgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nI3tpdGVtc1tkZWZhdWx0QWN0aXZlSXRlbV1bMV19JyBmaWxsPScje0BfYWN0aXZlQ29sb3J9JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLz48L3N2Zz5cIlxuXHRcdFx0XHR5OiBBbGlnbi5jZW50ZXIoLTgpXG5cdFx0XHR2aWV3SXRlbXNbZGVmYXVsdEFjdGl2ZUl0ZW1dLmNoaWxkcmVuWzFdLnByb3BzID1cblx0XHRcdFx0Y29sb3I6IGFjdGl2ZUNvbG9yXG5cdFx0XHRcdHk6IEFsaWduLmJvdHRvbSgtNClcblx0XHRcdFx0b3BhY2l0eTogMVxuXG5cdFx0XHQjIEl0ZW0gaW50ZXJhY3Rpb25zIGFuZCBhbmltYXRpb25zXG5cdFx0XHR2aWV3SXRlbS5vblRhcCAtPlxuXG5cdFx0XHRcdCMgU3RvcmUgdGhlIGluZGV4IG9mIHRoZSBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbVxuXHRcdFx0XHR0YXBwZWRJdGVtID0gQGluZGV4XG5cblx0XHRcdFx0Zm9yIHZpZXdJdGVtLCBpIGluIHZpZXdJdGVtc1xuXG5cdFx0XHRcdFx0IyBTZXQgZGVmYXVsdCBpdGVtIGFwcGVhcmFuY2Ugb24gYWxsIGl0ZW1zXG5cdFx0XHRcdFx0dmlld0l0ZW0uc3ViTGF5ZXJzWzBdLnByb3BzID1cblx0XHRcdFx0XHRcdGh0bWw6IGlmIG1hdGVyaWFsSWNvbnMgdGhlbiBcIjxpIGNsYXNzPSdtYXRlcmlhbC1pY29ucycgc3R5bGU9J2NvbG9yOiN7ZGVmYXVsdENvbG9yfSc+I3tpdGVtc1tpXVsxXX08L2k+XCIgZWxzZSBcIjxzdmcgc3R5bGU9J3BhZGRpbmc6IDJweCcgcHJlc2VydmVBc3BlY3RSYXRpbz0neE1pbllNaW4gbWVldCcgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nI3tpdGVtc1tpXVsxXX0nIGZpbGw9JyN7ZGVmYXVsdENvbG9yfScgZmlsbC1ydWxlPSdldmVub2RkJy8+PC9zdmc+XCJcblx0XHRcdFx0XHR2aWV3SXRlbS5zdWJMYXllcnNbMF0uYW5pbWF0ZVxuXHRcdFx0XHRcdFx0eDogQWxpZ24uY2VudGVyKCksIHk6IEFsaWduLmNlbnRlcigpXG5cdFx0XHRcdFx0XHRvcHRpb25zOiB7IGN1cnZlOiBcInNwcmluZyg1MDAsIDQwLCAwKVwiIH1cblxuXHRcdFx0XHRcdHZpZXdJdGVtLnN1YkxheWVyc1sxXS5hbmltYXRlXG5cdFx0XHRcdFx0XHRjb2xvcjogZGVmYXVsdENvbG9yXG5cdFx0XHRcdFx0XHR5OiBBbGlnbi5jZW50ZXIoOClcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDBcblx0XHRcdFx0XHRcdG9wdGlvbnM6IHsgY3VydmU6IFwic3ByaW5nKDgwMCwgNjAsIDEwKVwiICB9XG5cblx0XHRcdFx0XHQjIFNldCBhcHBlYXJhbmNlIG9mIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtc1xuXHRcdFx0XHRcdEBzdWJMYXllcnNbMF0ucHJvcHMgPVxuXHRcdFx0XHRcdFx0aHRtbDogaWYgbWF0ZXJpYWxJY29ucyB0aGVuIFwiPGkgY2xhc3M9J21hdGVyaWFsLWljb25zJyBzdHlsZT0nY29sb3I6I3thY3RpdmVDb2xvcn0nPiN7aXRlbXNbQGluZGV4XVsxXX08L2k+XCIgZWxzZSBcIjxzdmcgc3R5bGU9J3BhZGRpbmc6IDJweCcgcHJlc2VydmVBc3BlY3RSYXRpbz0neE1pbllNaW4gbWVldCcgd2lkdGg9JzI0JyBoZWlnaHQ9JzI0JyB2aWV3Qm94PScwIDAgMjQgMjQnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nI3tpdGVtc1tAaW5kZXhdWzFdfScgZmlsbD0nI3thY3RpdmVDb2xvcn0nIGZpbGwtcnVsZT0nZXZlbm9kZCcvPjwvc3ZnPlwiXG5cblx0XHRcdFx0XHRAc3ViTGF5ZXJzWzBdLmFuaW1hdGVcblx0XHRcdFx0XHRcdHk6IEFsaWduLmNlbnRlcigtOClcblx0XHRcdFx0XHRcdG9wdGlvbnM6IHsgY3VydmU6IFwic3ByaW5nKDUwMCwgNDAsIDApXCIgfVxuXG5cdFx0XHRcdFx0QHN1YkxheWVyc1sxXS5hbmltYXRlXG5cdFx0XHRcdFx0XHRjb2xvcjogYWN0aXZlQ29sb3Jcblx0XHRcdFx0XHRcdHk6IEFsaWduLmJvdHRvbSgtMilcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDFcblx0XHRcdFx0XHRcdG9wdGlvbnM6IHsgY3VydmU6IFwic3ByaW5nKDgwMCwgNjAsIDEwKVwiIH1cblxuXHRcdFx0XHQjIENvbG9yIHJpcHBsZSBlZmZlY3QgZ2VuZXJhdGVkIGJ5IHNldHRpbmcgJ2NvbG9yUmlwcGxlJyBib29sZWFuXG5cdFx0XHRcdGlmIGNvbG9yUmlwcGxlQ2hlY2sgaXMgdHJ1ZVxuXG5cdFx0XHRcdFx0Y29sb3JSaXBwbGUgPSBuZXcgTGF5ZXJcblx0XHRcdFx0XHRcdG5hbWU6IFwiY29sb3JSaXBwbGVcIlxuXHRcdFx0XHRcdFx0cGFyZW50OiBAcGFyZW50XG5cdFx0XHRcdFx0XHRtaWRYOiBAbWlkWCwgbWlkWTogQG1pZFlcblx0XHRcdFx0XHRcdHNpemU6IFNjcmVlbi53aWR0aCAqIDJcblx0XHRcdFx0XHRcdHNjYWxlOiAuMzBcblx0XHRcdFx0XHRcdGJvcmRlclJhZGl1czogXCIxMDAlXCJcblx0XHRcdFx0XHRcdGJhY2tncm91bmRDb2xvcjogaXRlbXNbdGFwcGVkSXRlbV1bMl1cblx0XHRcdFx0XHRcdGluZGV4OiAtMVxuXG5cdFx0XHRcdFx0Y29sb3JSaXBwbGUuYW5pbWF0ZVxuXHRcdFx0XHRcdFx0c2NhbGU6IDFcblx0XHRcdFx0XHRcdG9wdGlvbnM6IHsgY3VydmU6IFwic3ByaW5nKDE0MCwgMTYsIDApXCIgfVxuXG5cdFx0XHRcdFx0Y29sb3JSaXBwbGUub25BbmltYXRpb25FbmQgLT5cblx0XHRcdFx0XHRcdEBwYXJlbnQuYmFja2dyb3VuZENvbG9yID0gY29sb3JSaXBwbGUuYmFja2dyb3VuZENvbG9yXG5cdFx0XHRcdFx0XHRAZGVzdHJveSgpXG4iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBRFFBLElBQUE7OztBQUFNLE9BQU8sQ0FBQzs7O0VBQ0EsMEJBQUMsT0FBRDtBQUdaLFFBQUE7SUFIYSxJQUFDLENBQUEsNEJBQUQsVUFBUztJQUd0QixJQUFDLENBQUEsTUFBRCw4Q0FBMkIsQ0FBQyxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFNBQXZCLENBQUQsRUFBb0MsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixTQUFwQixDQUFwQyxFQUFvRSxDQUFDLE9BQUQs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
