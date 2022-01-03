;(() => {
  "use strict"
  var e = {
      28: (e, n, r) => {
        r.d(n, { Z: () => s })
        var t = r(537),
          o = r.n(t),
          a = r(645),
          c = r.n(a)()(o())
        c.push([e.id, ".mydiv {\r\n  border: 1px solid black;\r\n  background-color: red;\r\n}\r\n", "", { version: 3, sources: ["webpack://./src/styles.css"], names: [], mappings: "AAAA;EACE,uBAAuB;EACvB,qBAAqB;AACvB", sourcesContent: [".mydiv {\r\n  border: 1px solid black;\r\n  background-color: red;\r\n}\r\n"], sourceRoot: "" }])
        const s = c
      },
      645: (e) => {
        e.exports = function (e) {
          var n = []
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var r = "",
                  t = void 0 !== n[5]
                return n[4] && (r += "@supports (".concat(n[4], ") {")), n[2] && (r += "@media ".concat(n[2], " {")), t && (r += "@layer".concat(n[5].length > 0 ? " ".concat(n[5]) : "", " {")), (r += e(n)), t && (r += "}"), n[2] && (r += "}"), n[4] && (r += "}"), r
              }).join("")
            }),
            (n.i = function (e, r, t, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]])
              var c = {}
              if (t)
                for (var s = 0; s < this.length; s++) {
                  var i = this[s][0]
                  null != i && (c[i] = !0)
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u])
                ;(t && c[l[0]]) || (void 0 !== a && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), (l[5] = a)), r && (l[2] ? ((l[1] = "@media ".concat(l[2], " {").concat(l[1], "}")), (l[2] = r)) : (l[2] = r)), o && (l[4] ? ((l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}")), (l[4] = o)) : (l[4] = "".concat(o))), n.push(l))
              }
            }),
            n
          )
        }
      },
      537: (e) => {
        e.exports = function (e) {
          var n = e[1],
            r = e[3]
          if (!r) return n
          if ("function" == typeof btoa) {
            var t = btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
              o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),
              a = "/*# ".concat(o, " */"),
              c = r.sources.map(function (e) {
                return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */")
              })
            return [n].concat(c).concat([a]).join("\n")
          }
          return [n].join("\n")
        }
      },
      379: (e) => {
        var n = []
        function r(e) {
          for (var r = -1, t = 0; t < n.length; t++)
            if (n[t].identifier === e) {
              r = t
              break
            }
          return r
        }
        function t(e, t) {
          for (var a = {}, c = [], s = 0; s < e.length; s++) {
            var i = e[s],
              u = t.base ? i[0] + t.base : i[0],
              l = a[u] || 0,
              p = "".concat(u, " ").concat(l)
            a[u] = l + 1
            var d = r(p),
              f = { css: i[1], media: i[2], sourceMap: i[3], supports: i[4], layer: i[5] }
            if (-1 !== d) n[d].references++, n[d].updater(f)
            else {
              var v = o(f, t)
              ;(t.byIndex = s), n.splice(s, 0, { identifier: p, updater: v, references: 1 })
            }
            c.push(p)
          }
          return c
        }
        function o(e, n) {
          var r = n.domAPI(n)
          return (
            r.update(e),
            function (n) {
              if (n) {
                if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap && n.supports === e.supports && n.layer === e.layer) return
                r.update((e = n))
              } else r.remove()
            }
          )
        }
        e.exports = function (e, o) {
          var a = t((e = e || []), (o = o || {}))
          return function (e) {
            e = e || []
            for (var c = 0; c < a.length; c++) {
              var s = r(a[c])
              n[s].references--
            }
            for (var i = t(e, o), u = 0; u < a.length; u++) {
              var l = r(a[u])
              0 === n[l].references && (n[l].updater(), n.splice(l, 1))
            }
            a = i
          }
        }
      },
      569: (e) => {
        var n = {}
        e.exports = function (e, r) {
          var t = (function (e) {
            if (void 0 === n[e]) {
              var r = document.querySelector(e)
              if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement)
                try {
                  r = r.contentDocument.head
                } catch (e) {
                  r = null
                }
              n[e] = r
            }
            return n[e]
          })(e)
          if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.")
          t.appendChild(r)
        }
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style")
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n
        }
      },
      565: (e, n, r) => {
        e.exports = function (e) {
          var n = r.nc
          n && e.setAttribute("nonce", n)
        }
      },
      795: (e) => {
        e.exports = function (e) {
          var n = e.insertStyleElement(e)
          return {
            update: function (r) {
              !(function (e, n, r) {
                var t = ""
                r.supports && (t += "@supports (".concat(r.supports, ") {")), r.media && (t += "@media ".concat(r.media, " {"))
                var o = void 0 !== r.layer
                o && (t += "@layer".concat(r.layer.length > 0 ? " ".concat(r.layer) : "", " {")), (t += r.css), o && (t += "}"), r.media && (t += "}"), r.supports && (t += "}")
                var a = r.sourceMap
                a && "undefined" != typeof btoa && (t += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), n.styleTagTransform(t, e, n.options)
              })(n, e, r)
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1
                e.parentNode.removeChild(e)
              })(n)
            },
          }
        }
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild)
            n.appendChild(document.createTextNode(e))
          }
        }
      },
    },
    n = {}
  function r(t) {
    var o = n[t]
    if (void 0 !== o) return o.exports
    var a = (n[t] = { id: t, exports: {} })
    return e[t](a, a.exports, r), a.exports
  }
  ;(r.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e
    return r.d(n, { a: n }), n
  }),
    (r.d = (e, n) => {
      for (var t in n) r.o(n, t) && !r.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: n[t] })
    }),
    (r.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e = r(379),
        n = r.n(e),
        t = r(795),
        o = r.n(t),
        a = r(569),
        c = r.n(a),
        s = r(565),
        i = r.n(s),
        u = r(216),
        l = r.n(u),
        p = r(589),
        d = r.n(p),
        f = r(28),
        v = {}
      ;(v.styleTagTransform = d()), (v.setAttributes = i()), (v.insert = c().bind(null, "head")), (v.domAPI = o()), (v.insertStyleElement = l()), n()(f.Z, v), f.Z && f.Z.locals && f.Z.locals, console.log("Hello World - index.js"), console.log("Merlin"), console.log("Conan"), console.log("Build Test, i've again been updated")
      console.log({ a: "alpha", b: "bravo", c: "charlie" }), console.log(["a", "b", "c"].includes("b"))
    })()
})()
//# sourceMappingURL=main.js.map
