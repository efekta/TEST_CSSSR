!function(e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var i = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, t),
        i.loaded = !0,
        i.exports
    }
    var n = {};
    return t.m = e,
    t.c = n,
    t.p = "",
    t(0)
}([function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = n(1)
      , o = r(i)
      , s = n(2)
      , a = r(s);
    n(5),
    (0,
    a.default)(function() {
        (0,
        o.default)()
    })
}
, function(e, t, n) {
    var r, i;
    !function(n, o) {
        r = [],
        i = function() {
            return n.svg4everybody = o()
        }
        .apply(t, r),
        !(void 0 !== i && (e.exports = i))
    }(this, function() {
        function e(e, t) {
            if (t) {
                var n = document.createDocumentFragment()
                  , r = !e.getAttribute("viewBox") && t.getAttribute("viewBox");
                r && e.setAttribute("viewBox", r);
                for (var i = t.cloneNode(!0); i.childNodes.length; )
                    n.appendChild(i.firstChild);
                e.appendChild(n)
            }
        }
        function t(t) {
            t.onreadystatechange = function() {
                if (4 === t.readyState) {
                    var n = t._cachedDocument;
                    n || (n = t._cachedDocument = document.implementation.createHTMLDocument(""),
                    n.body.innerHTML = t.responseText,
                    t._cachedTarget = {}),
                    t._embeds.splice(0).map(function(r) {
                        var i = t._cachedTarget[r.id];
                        i || (i = t._cachedTarget[r.id] = n.getElementById(r.id)),
                        e(r.svg, i)
                    })
                }
            }
            ,
            t.onreadystatechange()
        }
        function n(n) {
            function r() {
                for (var n = 0; n < f.length; ) {
                    var s = f[n]
                      , a = s.parentNode;
                    if (a && /svg/i.test(a.nodeName)) {
                        var u = s.getAttribute("xlink:href");
                        if (i && (!o.validate || o.validate(u, a, s))) {
                            a.removeChild(s);
                            var p = u.split("#")
                              , d = p.shift()
                              , h = p.join("#");
                            if (d.length) {
                                var g = l[d];
                                g || (g = l[d] = new XMLHttpRequest,
                                g.open("GET", d),
                                g.send(),
                                g._embeds = []),
                                g._embeds.push({
                                    svg: a,
                                    id: h
                                }),
                                t(g)
                            } else
                                e(a, document.getElementById(h))
                        }
                    } else
                        ++n
                }
                c(r, 67)
            }
            var i, o = Object(n), s = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, a = /\bAppleWebKit\/(\d+)\b/, u = /\bEdge\/12\.(\d+)\b/;
            i = "polyfill"in o ? o.polyfill : s.test(navigator.userAgent) || (navigator.userAgent.match(u) || [])[1] < 10547 || (navigator.userAgent.match(a) || [])[1] < 537;
            var l = {}
              , c = window.requestAnimationFrame || setTimeout
              , f = document.getElementsByTagName("use");
            i && r()
        }
        return n
    })
}
, function(e, t, n) {
    (function(t) {
        e.exports = t.$ = n(3)
    }
    ).call(t, function() {
        return this
    }())
}
, function(e, t, n) {
    (function(t) {
        e.exports = t.jQuery = n(4)
    }
    ).call(t, function() {
        return this
    }())
}
, function(e, t, n) {
    var r, i;
    !function(t, n) {
        "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return n(e)
        }
        : n(t)
    }("undefined" != typeof window ? window : this, function(n, o) {
        function s(e) {
            var t = !!e && "length"in e && e.length
              , n = le.type(e);
            return "function" !== n && !le.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
        }
        function a(e, t, n) {
            if (le.isFunction(t))
                return le.grep(e, function(e, r) {
                    return !!t.call(e, r, e) !== n
                });
            if (t.nodeType)
                return le.grep(e, function(e) {
                    return e === t !== n
                });
            if ("string" == typeof t) {
                if (xe.test(t))
                    return le.filter(t, e, n);
                t = le.filter(t, e)
            }
            return le.grep(e, function(e) {
                return re.call(t, e) > -1 !== n
            })
        }
        function u(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        function l(e) {
            var t = {};
            return le.each(e.match(ke) || [], function(e, n) {
                t[n] = !0
            }),
            t
        }
        function c() {
            Z.removeEventListener("DOMContentLoaded", c),
            n.removeEventListener("load", c),
            le.ready()
        }
        function f() {
            this.expando = le.expando + f.uid++
        }
        function p(e, t, n) {
            var r;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(qe, "-$&").toLowerCase(),
                n = e.getAttribute(r),
                "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Le.test(n) ? le.parseJSON(n) : n)
                    } catch (e) {}
                    je.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        function d(e, t, n, r) {
            var i, o = 1, s = 20, a = r ? function() {
                return r.cur()
            }
            : function() {
                return le.css(e, t, "")
            }
            , u = a(), l = n && n[3] || (le.cssNumber[t] ? "" : "px"), c = (le.cssNumber[t] || "px" !== l && +u) && Fe.exec(le.css(e, t));
            if (c && c[3] !== l) {
                l = l || c[3],
                n = n || [],
                c = +u || 1;
                do
                    o = o || ".5",
                    c /= o,
                    le.style(e, t, c + l);
                while (o !== (o = a() / u) && 1 !== o && --s)
            }
            return n && (c = +c || +u || 0,
            i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
            r && (r.unit = l,
            r.start = c,
            r.end = i)),
            i
        }
        function h(e, t) {
            var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && le.nodeName(e, t) ? le.merge([e], n) : n
        }
        function g(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                De.set(e[n], "globalEval", !t || De.get(t[n], "globalEval"))
        }
        function v(e, t, n, r, i) {
            for (var o, s, a, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, v = e.length; d < v; d++)
                if (o = e[d],
                o || 0 === o)
                    if ("object" === le.type(o))
                        le.merge(p, o.nodeType ? [o] : o);
                    else if (Be.test(o)) {
                        for (s = s || f.appendChild(t.createElement("div")),
                        a = (Pe.exec(o) || ["", ""])[1].toLowerCase(),
                        u = Ie[a] || Ie._default,
                        s.innerHTML = u[1] + le.htmlPrefilter(o) + u[2],
                        c = u[0]; c--; )
                            s = s.lastChild;
                        le.merge(p, s.childNodes),
                        s = f.firstChild,
                        s.textContent = ""
                    } else
                        p.push(t.createTextNode(o));
            for (f.textContent = "",
            d = 0; o = p[d++]; )
                if (r && le.inArray(o, r) > -1)
                    i && i.push(o);
                else if (l = le.contains(o.ownerDocument, o),
                s = h(f.appendChild(o), "script"),
                l && g(s),
                n)
                    for (c = 0; o = s[c++]; )
                        We.test(o.type || "") && n.push(o);
            return f
        }
        function m() {
            return !0
        }
        function y() {
            return !1
        }
        function x() {
            try {
                return Z.activeElement
            } catch (e) {}
        }
        function b(e, t, n, r, i, o) {
            var s, a;
            if ("object" == typeof t) {
                "string" != typeof n && (r = r || n,
                n = void 0);
                for (a in t)
                    b(e, a, n, r, t[a], o);
                return e
            }
            if (null == r && null == i ? (i = n,
            r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
            r = void 0) : (i = r,
            r = n,
            n = void 0)),
            i === !1)
                i = y;
            else if (!i)
                return e;
            return 1 === o && (s = i,
            i = function(e) {
                return le().off(e),
                s.apply(this, arguments)
            }
            ,
            i.guid = s.guid || (s.guid = le.guid++)),
            e.each(function() {
                le.event.add(this, t, i, r, n)
            })
        }
        function w(e, t) {
            return le.nodeName(e, "table") && le.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }
        function T(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function C(e) {
            var t = Ve.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"),
            e
        }
        function E(e, t) {
            var n, r, i, o, s, a, u, l;
            if (1 === t.nodeType) {
                if (De.hasData(e) && (o = De.access(e),
                s = De.set(t, o),
                l = o.events)) {
                    delete s.handle,
                    s.events = {};
                    for (i in l)
                        for (n = 0,
                        r = l[i].length; n < r; n++)
                            le.event.add(t, i, l[i][n])
                }
                je.hasData(e) && (a = je.access(e),
                u = le.extend({}, a),
                je.set(t, u))
            }
        }
        function k(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Re.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
        function N(e, t, n, r) {
            t = te.apply([], t);
            var i, o, s, a, u, l, c = 0, f = e.length, p = f - 1, d = t[0], g = le.isFunction(d);
            if (g || f > 1 && "string" == typeof d && !ae.checkClone && Ye.test(d))
                return e.each(function(i) {
                    var o = e.eq(i);
                    g && (t[0] = d.call(this, i, o.html())),
                    N(o, t, n, r)
                });
            if (f && (i = v(t, e[0].ownerDocument, !1, e, r),
            o = i.firstChild,
            1 === i.childNodes.length && (i = o),
            o || r)) {
                for (s = le.map(h(i, "script"), T),
                a = s.length; c < f; c++)
                    u = i,
                    c !== p && (u = le.clone(u, !0, !0),
                    a && le.merge(s, h(u, "script"))),
                    n.call(e[c], u, c);
                if (a)
                    for (l = s[s.length - 1].ownerDocument,
                    le.map(s, C),
                    c = 0; c < a; c++)
                        u = s[c],
                        We.test(u.type || "") && !De.access(u, "globalEval") && le.contains(l, u) && (u.src ? le._evalUrl && le._evalUrl(u.src) : le.globalEval(u.textContent.replace(Ge, "")))
            }
            return e
        }
        function S(e, t, n) {
            for (var r, i = t ? le.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                n || 1 !== r.nodeType || le.cleanData(h(r)),
                r.parentNode && (n && le.contains(r.ownerDocument, r) && g(h(r, "script")),
                r.parentNode.removeChild(r));
            return e
        }
        function A(e, t) {
            var n = le(t.createElement(e)).appendTo(t.body)
              , r = le.css(n[0], "display");
            return n.detach(),
            r
        }
        function D(e) {
            var t = Z
              , n = Je[e];
            return n || (n = A(e, t),
            "none" !== n && n || (Qe = (Qe || le("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
            t = Qe[0].contentDocument,
            t.write(),
            t.close(),
            n = A(e, t),
            Qe.detach()),
            Je[e] = n),
            n
        }
        function j(e, t, n) {
            var r, i, o, s, a = e.style;
            return n = n || et(e),
            s = n ? n.getPropertyValue(t) || n[t] : void 0,
            "" !== s && void 0 !== s || le.contains(e.ownerDocument, e) || (s = le.style(e, t)),
            n && !ae.pixelMarginRight() && Ze.test(s) && Ke.test(t) && (r = a.width,
            i = a.minWidth,
            o = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = s,
            s = n.width,
            a.width = r,
            a.minWidth = i,
            a.maxWidth = o),
            void 0 !== s ? s + "" : s
        }
        function L(e, t) {
            return {
                get: function() {
                    return e() ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }
        function q(e) {
            if (e in at)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = st.length; n--; )
                if (e = st[n] + t,
                e in at)
                    return e
        }
        function H(e, t, n) {
            var r = Fe.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }
        function F(e, t, n, r, i) {
            for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; o < 4; o += 2)
                "margin" === n && (s += le.css(e, n + Oe[o], !0, i)),
                r ? ("content" === n && (s -= le.css(e, "padding" + Oe[o], !0, i)),
                "margin" !== n && (s -= le.css(e, "border" + Oe[o] + "Width", !0, i))) : (s += le.css(e, "padding" + Oe[o], !0, i),
                "padding" !== n && (s += le.css(e, "border" + Oe[o] + "Width", !0, i)));
            return s
        }
        function O(e, t, n) {
            var r = !0
              , i = "width" === t ? e.offsetWidth : e.offsetHeight
              , o = et(e)
              , s = "border-box" === le.css(e, "boxSizing", !1, o);
            if (i <= 0 || null == i) {
                if (i = j(e, t, o),
                (i < 0 || null == i) && (i = e.style[t]),
                Ze.test(i))
                    return i;
                r = s && (ae.boxSizingReliable() || i === e.style[t]),
                i = parseFloat(i) || 0
            }
            return i + F(e, t, n || (s ? "border" : "content"), r, o) + "px"
        }
        function M(e, t) {
            for (var n, r, i, o = [], s = 0, a = e.length; s < a; s++)
                r = e[s],
                r.style && (o[s] = De.get(r, "olddisplay"),
                n = r.style.display,
                t ? (o[s] || "none" !== n || (r.style.display = ""),
                "" === r.style.display && Me(r) && (o[s] = De.access(r, "olddisplay", D(r.nodeName)))) : (i = Me(r),
                "none" === n && i || De.set(r, "olddisplay", i ? n : le.css(r, "display"))));
            for (s = 0; s < a; s++)
                r = e[s],
                r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
            return e
        }
        function R(e, t, n, r, i) {
            return new R.prototype.init(e,t,n,r,i)
        }
        function P() {
            return n.setTimeout(function() {
                ut = void 0
            }),
            ut = le.now()
        }
        function W(e, t) {
            var n, r = 0, i = {
                height: e
            };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
                n = Oe[r],
                i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e),
            i
        }
        function I(e, t, n) {
            for (var r, i = (_.tweeners[t] || []).concat(_.tweeners["*"]), o = 0, s = i.length; o < s; o++)
                if (r = i[o].call(n, t, e))
                    return r
        }
        function B(e, t, n) {
            var r, i, o, s, a, u, l, c, f = this, p = {}, d = e.style, h = e.nodeType && Me(e), g = De.get(e, "fxshow");
            n.queue || (a = le._queueHooks(e, "fx"),
            null == a.unqueued && (a.unqueued = 0,
            u = a.empty.fire,
            a.empty.fire = function() {
                a.unqueued || u()
            }
            ),
            a.unqueued++,
            f.always(function() {
                f.always(function() {
                    a.unqueued--,
                    le.queue(e, "fx").length || a.empty.fire()
                })
            })),
            1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
            l = le.css(e, "display"),
            c = "none" === l ? De.get(e, "olddisplay") || D(e.nodeName) : l,
            "inline" === c && "none" === le.css(e, "float") && (d.display = "inline-block")),
            n.overflow && (d.overflow = "hidden",
            f.always(function() {
                d.overflow = n.overflow[0],
                d.overflowX = n.overflow[1],
                d.overflowY = n.overflow[2]
            }));
            for (r in t)
                if (i = t[r],
                ct.exec(i)) {
                    if (delete t[r],
                    o = o || "toggle" === i,
                    i === (h ? "hide" : "show")) {
                        if ("show" !== i || !g || void 0 === g[r])
                            continue;
                        h = !0
                    }
                    p[r] = g && g[r] || le.style(e, r)
                } else
                    l = void 0;
            if (le.isEmptyObject(p))
                "inline" === ("none" === l ? D(e.nodeName) : l) && (d.display = l);
            else {
                g ? "hidden"in g && (h = g.hidden) : g = De.access(e, "fxshow", {}),
                o && (g.hidden = !h),
                h ? le(e).show() : f.done(function() {
                    le(e).hide()
                }),
                f.done(function() {
                    var t;
                    De.remove(e, "fxshow");
                    for (t in p)
                        le.style(e, t, p[t])
                });
                for (r in p)
                    s = I(h ? g[r] : 0, r, f),
                    r in g || (g[r] = s.start,
                    h && (s.end = s.start,
                    s.start = "width" === r || "height" === r ? 1 : 0))
            }
        }
        function $(e, t) {
            var n, r, i, o, s;
            for (n in e)
                if (r = le.camelCase(n),
                i = t[r],
                o = e[n],
                le.isArray(o) && (i = o[1],
                o = e[n] = o[0]),
                n !== r && (e[r] = o,
                delete e[n]),
                s = le.cssHooks[r],
                s && "expand"in s) {
                    o = s.expand(o),
                    delete e[r];
                    for (n in o)
                        n in e || (e[n] = o[n],
                        t[n] = i)
                } else
                    t[r] = i
        }
        function _(e, t, n) {
            var r, i, o = 0, s = _.prefilters.length, a = le.Deferred().always(function() {
                delete u.elem
            }), u = function() {
                if (i)
                    return !1;
                for (var t = ut || P(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, s = 0, u = l.tweens.length; s < u; s++)
                    l.tweens[s].run(o);
                return a.notifyWith(e, [l, o, n]),
                o < 1 && u ? n : (a.resolveWith(e, [l]),
                !1)
            }, l = a.promise({
                elem: e,
                props: le.extend({}, t),
                opts: le.extend(!0, {
                    specialEasing: {},
                    easing: le.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ut || P(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = le.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                    return l.tweens.push(r),
                    r
                },
                stop: function(t) {
                    var n = 0
                      , r = t ? l.tweens.length : 0;
                    if (i)
                        return this;
                    for (i = !0; n < r; n++)
                        l.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [l, 1, 0]),
                    a.resolveWith(e, [l, t])) : a.rejectWith(e, [l, t]),
                    this
                }
            }), c = l.props;
            for ($(c, l.opts.specialEasing); o < s; o++)
                if (r = _.prefilters[o].call(l, e, c, l.opts))
                    return le.isFunction(r.stop) && (le._queueHooks(l.elem, l.opts.queue).stop = le.proxy(r.stop, r)),
                    r;
            return le.map(c, I, l),
            le.isFunction(l.opts.start) && l.opts.start.call(e, l),
            le.fx.timer(le.extend(u, {
                elem: e,
                anim: l,
                queue: l.opts.queue
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
        }
        function z(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function X(e) {
            return function(t, n) {
                "string" != typeof t && (n = t,
                t = "*");
                var r, i = 0, o = t.toLowerCase().match(ke) || [];
                if (le.isFunction(n))
                    for (; r = o[i++]; )
                        "+" === r[0] ? (r = r.slice(1) || "*",
                        (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
            }
        }
        function U(e, t, n, r) {
            function i(a) {
                var u;
                return o[a] = !0,
                le.each(e[a] || [], function(e, a) {
                    var l = a(t, n, r);
                    return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (t.dataTypes.unshift(l),
                    i(l),
                    !1)
                }),
                u
            }
            var o = {}
              , s = e === jt;
            return i(t.dataTypes[0]) || !o["*"] && i("*")
        }
        function Y(e, t) {
            var n, r, i = le.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && le.extend(!0, e, r),
            e
        }
        function V(e, t, n) {
            for (var r, i, o, s, a = e.contents, u = e.dataTypes; "*" === u[0]; )
                u.shift(),
                void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
            if (r)
                for (i in a)
                    if (a[i] && a[i].test(r)) {
                        u.unshift(i);
                        break
                    }
            if (u[0]in n)
                o = u[0];
            else {
                for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                        o = i;
                        break
                    }
                    s || (s = i)
                }
                o = o || s
            }
            if (o)
                return o !== u[0] && u.unshift(o),
                n[o]
        }
        function G(e, t, n, r) {
            var i, o, s, a, u, l = {}, c = e.dataTypes.slice();
            if (c[1])
                for (s in e.converters)
                    l[s.toLowerCase()] = e.converters[s];
            for (o = c.shift(); o; )
                if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                u = o,
                o = c.shift())
                    if ("*" === o)
                        o = u;
                    else if ("*" !== u && u !== o) {
                        if (s = l[u + " " + o] || l["* " + o],
                        !s)
                            for (i in l)
                                if (a = i.split(" "),
                                a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                    s === !0 ? s = l[i] : l[i] !== !0 && (o = a[0],
                                    c.unshift(a[1]));
                                    break
                                }
                        if (s !== !0)
                            if (s && e.throws)
                                t = s(t);
                            else
                                try {
                                    t = s(t)
                                } catch (e) {
                                    return {
                                        state: "parsererror",
                                        error: s ? e : "No conversion from " + u + " to " + o
                                    }
                                }
                    }
            return {
                state: "success",
                data: t
            }
        }
        function Q(e, t, n, r) {
            var i;
            if (le.isArray(t))
                le.each(t, function(t, i) {
                    n || Ft.test(e) ? r(e, i) : Q(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
                });
            else if (n || "object" !== le.type(t))
                r(e, t);
            else
                for (i in t)
                    Q(e + "[" + i + "]", t[i], n, r)
        }
        function J(e) {
            return le.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
        }
        var K = []
          , Z = n.document
          , ee = K.slice
          , te = K.concat
          , ne = K.push
          , re = K.indexOf
          , ie = {}
          , oe = ie.toString
          , se = ie.hasOwnProperty
          , ae = {}
          , ue = "2.2.4"
          , le = function(e, t) {
            return new le.fn.init(e,t)
        }
          , ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
          , fe = /^-ms-/
          , pe = /-([\da-z])/gi
          , de = function(e, t) {
            return t.toUpperCase()
        };
        le.fn = le.prototype = {
            jquery: ue,
            constructor: le,
            selector: "",
            length: 0,
            toArray: function() {
                return ee.call(this)
            },
            get: function(e) {
                return null != e ? e < 0 ? this[e + this.length] : this[e] : ee.call(this)
            },
            pushStack: function(e) {
                var t = le.merge(this.constructor(), e);
                return t.prevObject = this,
                t.context = this.context,
                t
            },
            each: function(e) {
                return le.each(this, e)
            },
            map: function(e) {
                return this.pushStack(le.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(ee.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ne,
            sort: K.sort,
            splice: K.splice
        },
        le.extend = le.fn.extend = function() {
            var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof s && (l = s,
            s = arguments[a] || {},
            a++),
            "object" == typeof s || le.isFunction(s) || (s = {}),
            a === u && (s = this,
            a--); a < u; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        n = s[t],
                        r = e[t],
                        s !== r && (l && r && (le.isPlainObject(r) || (i = le.isArray(r))) ? (i ? (i = !1,
                        o = n && le.isArray(n) ? n : []) : o = n && le.isPlainObject(n) ? n : {},
                        s[t] = le.extend(l, o, r)) : void 0 !== r && (s[t] = r));
            return s
        }
        ,
        le.extend({
            expando: "jQuery" + (ue + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === le.type(e)
            },
            isArray: Array.isArray,
            isWindow: function(e) {
                return null != e && e === e.window
            },
            isNumeric: function(e) {
                var t = e && e.toString();
                return !le.isArray(e) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(e) {
                var t;
                if ("object" !== le.type(e) || e.nodeType || le.isWindow(e))
                    return !1;
                if (e.constructor && !se.call(e, "constructor") && !se.call(e.constructor.prototype || {}, "isPrototypeOf"))
                    return !1;
                for (t in e)
                    ;
                return void 0 === t || se.call(e, t)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ie[oe.call(e)] || "object" : typeof e
            },
            globalEval: function(e) {
                var t, n = eval;
                e = le.trim(e),
                e && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"),
                t.text = e,
                Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
            },
            camelCase: function(e) {
                return e.replace(fe, "ms-").replace(pe, de)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t) {
                var n, r = 0;
                if (s(e))
                    for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++)
                        ;
                else
                    for (r in e)
                        if (t.call(e[r], r, e[r]) === !1)
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ce, "")
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (s(Object(e)) ? le.merge(n, "string" == typeof e ? [e] : e) : ne.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : re.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return e.length = i,
                e
            },
            grep: function(e, t, n) {
                for (var r, i = [], o = 0, s = e.length, a = !n; o < s; o++)
                    r = !t(e[o], o),
                    r !== a && i.push(e[o]);
                return i
            },
            map: function(e, t, n) {
                var r, i, o = 0, a = [];
                if (s(e))
                    for (r = e.length; o < r; o++)
                        i = t(e[o], o, n),
                        null != i && a.push(i);
                else
                    for (o in e)
                        i = t(e[o], o, n),
                        null != i && a.push(i);
                return te.apply([], a)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, r, i;
                if ("string" == typeof t && (n = e[t],
                t = e,
                e = n),
                le.isFunction(e))
                    return r = ee.call(arguments, 2),
                    i = function() {
                        return e.apply(t || this, r.concat(ee.call(arguments)))
                    }
                    ,
                    i.guid = e.guid = e.guid || le.guid++,
                    i
            },
            now: Date.now,
            support: ae
        }),
        "function" == typeof Symbol && (le.fn[Symbol.iterator] = K[Symbol.iterator]),
        le.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            ie["[object " + t + "]"] = t.toLowerCase()
        });
        var he = function(e) {
            function t(e, t, n, r) {
                var i, o, s, a, u, l, f, d, h = t && t.ownerDocument, g = t ? t.nodeType : 9;
                if (n = n || [],
                "string" != typeof e || !e || 1 !== g && 9 !== g && 11 !== g)
                    return n;
                if (!r && ((t ? t.ownerDocument || t : I) !== q && L(t),
                t = t || q,
                F)) {
                    if (11 !== g && (l = me.exec(e)))
                        if (i = l[1]) {
                            if (9 === g) {
                                if (!(s = t.getElementById(i)))
                                    return n;
                                if (s.id === i)
                                    return n.push(s),
                                    n
                            } else if (h && (s = h.getElementById(i)) && P(t, s) && s.id === i)
                                return n.push(s),
                                n
                        } else {
                            if (l[2])
                                return K.apply(n, t.getElementsByTagName(e)),
                                n;
                            if ((i = l[3]) && w.getElementsByClassName && t.getElementsByClassName)
                                return K.apply(n, t.getElementsByClassName(i)),
                                n
                        }
                    if (w.qsa && !X[e + " "] && (!O || !O.test(e))) {
                        if (1 !== g)
                            h = t,
                            d = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((a = t.getAttribute("id")) ? a = a.replace(xe, "\\$&") : t.setAttribute("id", a = W),
                            f = k(e),
                            o = f.length,
                            u = pe.test(a) ? "#" + a : "[id='" + a + "']"; o--; )
                                f[o] = u + " " + p(f[o]);
                            d = f.join(","),
                            h = ye.test(e) && c(t.parentNode) || t
                        }
                        if (d)
                            try {
                                return K.apply(n, h.querySelectorAll(d)),
                                n
                            } catch (e) {} finally {
                                a === W && t.removeAttribute("id")
                            }
                    }
                }
                return S(e.replace(ae, "$1"), t, n, r)
            }
            function n() {
                function e(n, r) {
                    return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                    e[n + " "] = r
                }
                var t = [];
                return e
            }
            function r(e) {
                return e[W] = !0,
                e
            }
            function i(e) {
                var t = q.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function o(e, t) {
                for (var n = e.split("|"), r = n.length; r--; )
                    T.attrHandle[n[r]] = t
            }
            function s(e, t) {
                var n = t && e
                  , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
                if (r)
                    return r;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function a(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }
            function u(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }
            function l(e) {
                return r(function(t) {
                    return t = +t,
                    r(function(n, r) {
                        for (var i, o = e([], n.length, t), s = o.length; s--; )
                            n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }
            function c(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }
            function f() {}
            function p(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++)
                    r += e[t].value;
                return r
            }
            function d(e, t, n) {
                var r = t.dir
                  , i = n && "parentNode" === r
                  , o = $++;
                return t.first ? function(t, n, o) {
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i)
                            return e(t, n, o)
                }
                : function(t, n, s) {
                    var a, u, l, c = [B, o];
                    if (s) {
                        for (; t = t[r]; )
                            if ((1 === t.nodeType || i) && e(t, n, s))
                                return !0
                    } else
                        for (; t = t[r]; )
                            if (1 === t.nodeType || i) {
                                if (l = t[W] || (t[W] = {}),
                                u = l[t.uniqueID] || (l[t.uniqueID] = {}),
                                (a = u[r]) && a[0] === B && a[1] === o)
                                    return c[2] = a[2];
                                if (u[r] = c,
                                c[2] = e(t, n, s))
                                    return !0
                            }
                }
            }
            function h(e) {
                return e.length > 1 ? function(t, n, r) {
                    for (var i = e.length; i--; )
                        if (!e[i](t, n, r))
                            return !1;
                    return !0
                }
                : e[0]
            }
            function g(e, n, r) {
                for (var i = 0, o = n.length; i < o; i++)
                    t(e, n[i], r);
                return r
            }
            function v(e, t, n, r, i) {
                for (var o, s = [], a = 0, u = e.length, l = null != t; a < u; a++)
                    (o = e[a]) && (n && !n(o, r, i) || (s.push(o),
                    l && t.push(a)));
                return s
            }
            function m(e, t, n, i, o, s) {
                return i && !i[W] && (i = m(i)),
                o && !o[W] && (o = m(o, s)),
                r(function(r, s, a, u) {
                    var l, c, f, p = [], d = [], h = s.length, m = r || g(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? m : v(m, p, e, a, u), x = n ? o || (r ? e : h || i) ? [] : s : y;
                    if (n && n(y, x, a, u),
                    i)
                        for (l = v(x, d),
                        i(l, [], a, u),
                        c = l.length; c--; )
                            (f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
                    if (r) {
                        if (o || e) {
                            if (o) {
                                for (l = [],
                                c = x.length; c--; )
                                    (f = x[c]) && l.push(y[c] = f);
                                o(null, x = [], l, u)
                            }
                            for (c = x.length; c--; )
                                (f = x[c]) && (l = o ? ee(r, f) : p[c]) > -1 && (r[l] = !(s[l] = f))
                        }
                    } else
                        x = v(x === s ? x.splice(h, x.length) : x),
                        o ? o(null, s, x, u) : K.apply(s, x)
                })
            }
            function y(e) {
                for (var t, n, r, i = e.length, o = T.relative[e[0].type], s = o || T.relative[" "], a = o ? 1 : 0, u = d(function(e) {
                    return e === t
                }, s, !0), l = d(function(e) {
                    return ee(t, e) > -1
                }, s, !0), c = [function(e, n, r) {
                    var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                    return t = null,
                    i
                }
                ]; a < i; a++)
                    if (n = T.relative[e[a].type])
                        c = [d(h(c), n)];
                    else {
                        if (n = T.filter[e[a].type].apply(null, e[a].matches),
                        n[W]) {
                            for (r = ++a; r < i && !T.relative[e[r].type]; r++)
                                ;
                            return m(a > 1 && h(c), a > 1 && p(e.slice(0, a - 1).concat({
                                value: " " === e[a - 2].type ? "*" : ""
                            })).replace(ae, "$1"), n, a < r && y(e.slice(a, r)), r < i && y(e = e.slice(r)), r < i && p(e))
                        }
                        c.push(n)
                    }
                return h(c)
            }
            function x(e, n) {
                var i = n.length > 0
                  , o = e.length > 0
                  , s = function(r, s, a, u, l) {
                    var c, f, p, d = 0, h = "0", g = r && [], m = [], y = A, x = r || o && T.find.TAG("*", l), b = B += null == y ? 1 : Math.random() || .1, w = x.length;
                    for (l && (A = s === q || s || l); h !== w && null != (c = x[h]); h++) {
                        if (o && c) {
                            for (f = 0,
                            s || c.ownerDocument === q || (L(c),
                            a = !F); p = e[f++]; )
                                if (p(c, s || q, a)) {
                                    u.push(c);
                                    break
                                }
                            l && (B = b)
                        }
                        i && ((c = !p && c) && d--,
                        r && g.push(c))
                    }
                    if (d += h,
                    i && h !== d) {
                        for (f = 0; p = n[f++]; )
                            p(g, m, s, a);
                        if (r) {
                            if (d > 0)
                                for (; h--; )
                                    g[h] || m[h] || (m[h] = Q.call(u));
                            m = v(m)
                        }
                        K.apply(u, m),
                        l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
                    }
                    return l && (B = b,
                    A = y),
                    g
                };
                return i ? r(s) : s
            }
            var b, w, T, C, E, k, N, S, A, D, j, L, q, H, F, O, M, R, P, W = "sizzle" + 1 * new Date, I = e.document, B = 0, $ = 0, _ = n(), z = n(), X = n(), U = function(e, t) {
                return e === t && (j = !0),
                0
            }, Y = 1 << 31, V = {}.hasOwnProperty, G = [], Q = G.pop, J = G.push, K = G.push, Z = G.slice, ee = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", se = new RegExp(ne + "+","g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ue = new RegExp("^" + ne + "*," + ne + "*"), le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), fe = new RegExp(oe), pe = new RegExp("^" + re + "$"), de = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + ie),
                PSEUDO: new RegExp("^" + oe),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
                bool: new RegExp("^(?:" + te + ")$","i"),
                needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
            }, he = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, ve = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, xe = /'|\\/g, be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), we = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, Te = function() {
                L()
            };
            try {
                K.apply(G = Z.call(I.childNodes), I.childNodes),
                G[I.childNodes.length].nodeType
            } catch (e) {
                K = {
                    apply: G.length ? function(e, t) {
                        J.apply(e, Z.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, r = 0; e[n++] = t[r++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            w = t.support = {},
            E = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            L = t.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : I;
                return r !== q && 9 === r.nodeType && r.documentElement ? (q = r,
                H = q.documentElement,
                F = !E(q),
                (n = q.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)),
                w.attributes = i(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }),
                w.getElementsByTagName = i(function(e) {
                    return e.appendChild(q.createComment("")),
                    !e.getElementsByTagName("*").length
                }),
                w.getElementsByClassName = ve.test(q.getElementsByClassName),
                w.getById = i(function(e) {
                    return H.appendChild(e).id = W,
                    !q.getElementsByName || !q.getElementsByName(W).length
                }),
                w.getById ? (T.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && F) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }
                ,
                T.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ) : (delete T.find.ID,
                T.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                        var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
                ),
                T.find.TAG = w.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, r = [], i = 0, o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = o[i++]; )
                            1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }
                ,
                T.find.CLASS = w.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && F)
                        return t.getElementsByClassName(e)
                }
                ,
                M = [],
                O = [],
                (w.qsa = ve.test(q.querySelectorAll)) && (i(function(e) {
                    H.appendChild(e).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + W + "-]").length || O.push("~="),
                    e.querySelectorAll(":checked").length || O.push(":checked"),
                    e.querySelectorAll("a#" + W + "+*").length || O.push(".#.+[+~]")
                }),
                i(function(e) {
                    var t = q.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="),
                    e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    O.push(",.*:")
                })),
                (w.matchesSelector = ve.test(R = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && i(function(e) {
                    w.disconnectedMatch = R.call(e, "div"),
                    R.call(e, "[s!='']:x"),
                    M.push("!=", oe)
                }),
                O = O.length && new RegExp(O.join("|")),
                M = M.length && new RegExp(M.join("|")),
                t = ve.test(H.compareDocumentPosition),
                P = t || ve.test(H.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                U = t ? function(e, t) {
                    if (e === t)
                        return j = !0,
                        0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                    1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === q || e.ownerDocument === I && P(I, e) ? -1 : t === q || t.ownerDocument === I && P(I, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & n ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return j = !0,
                        0;
                    var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], u = [t];
                    if (!i || !o)
                        return e === q ? -1 : t === q ? 1 : i ? -1 : o ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                    if (i === o)
                        return s(e, t);
                    for (n = e; n = n.parentNode; )
                        a.unshift(n);
                    for (n = t; n = n.parentNode; )
                        u.unshift(n);
                    for (; a[r] === u[r]; )
                        r++;
                    return r ? s(a[r], u[r]) : a[r] === I ? -1 : u[r] === I ? 1 : 0
                }
                ,
                q) : q
            }
            ,
            t.matches = function(e, n) {
                return t(e, null, null, n)
            }
            ,
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== q && L(e),
                n = n.replace(ce, "='$1']"),
                w.matchesSelector && F && !X[n + " "] && (!M || !M.test(n)) && (!O || !O.test(n)))
                    try {
                        var r = R.call(e, n);
                        if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return r
                    } catch (e) {}
                return t(n, q, null, [e]).length > 0
            }
            ,
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== q && L(e),
                P(e, t)
            }
            ,
            t.attr = function(e, t) {
                (e.ownerDocument || e) !== q && L(e);
                var n = T.attrHandle[t.toLowerCase()]
                  , r = n && V.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !F) : void 0;
                return void 0 !== r ? r : w.attributes || !F ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            t.uniqueSort = function(e) {
                var t, n = [], r = 0, i = 0;
                if (j = !w.detectDuplicates,
                D = !w.sortStable && e.slice(0),
                e.sort(U),
                j) {
                    for (; t = e[i++]; )
                        t === e[i] && (r = n.push(i));
                    for (; r--; )
                        e.splice(n[r], 1)
                }
                return D = null,
                e
            }
            ,
            C = t.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += C(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    for (; t = e[r++]; )
                        n += C(t);
                return n
            }
            ,
            T = t.selectors = {
                cacheLength: 50,
                createPseudo: r,
                match: de,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(be, we),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(be, we),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(be, we).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = _[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && _(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, r) {
                        return function(i) {
                            var o = t.attr(i, e);
                            return null == o ? "!=" === n : !n || (o += "",
                            "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                        }
                    },
                    CHILD: function(e, t, n, r, i) {
                        var o = "nth" !== e.slice(0, 3)
                          , s = "last" !== e.slice(-4)
                          , a = "of-type" === t;
                        return 1 === r && 0 === i ? function(e) {
                            return !!e.parentNode
                        }
                        : function(t, n, u) {
                            var l, c, f, p, d, h, g = o !== s ? "nextSibling" : "previousSibling", v = t.parentNode, m = a && t.nodeName.toLowerCase(), y = !u && !a, x = !1;
                            if (v) {
                                if (o) {
                                    for (; g; ) {
                                        for (p = t; p = p[g]; )
                                            if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType)
                                                return !1;
                                        h = g = "only" === e && !h && "nextSibling"
                                    }
                                    return !0
                                }
                                if (h = [s ? v.firstChild : v.lastChild],
                                s && y) {
                                    for (p = v,
                                    f = p[W] || (p[W] = {}),
                                    c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                    l = c[e] || [],
                                    d = l[0] === B && l[1],
                                    x = d && l[2],
                                    p = d && v.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop(); )
                                        if (1 === p.nodeType && ++x && p === t) {
                                            c[e] = [B, d, x];
                                            break
                                        }
                                } else if (y && (p = t,
                                f = p[W] || (p[W] = {}),
                                c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                l = c[e] || [],
                                d = l[0] === B && l[1],
                                x = d),
                                x === !1)
                                    for (; (p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++x || (y && (f = p[W] || (p[W] = {}),
                                    c = f[p.uniqueID] || (f[p.uniqueID] = {}),
                                    c[e] = [B, x]),
                                    p !== t)); )
                                        ;
                                return x -= i,
                                x === r || x % r === 0 && x / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var i, o = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return o[W] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                        T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                            for (var r, i = o(e, n), s = i.length; s--; )
                                r = ee(e, i[s]),
                                e[r] = !(t[r] = i[s])
                        }) : function(e) {
                            return o(e, 0, i)
                        }
                        ) : o
                    }
                },
                pseudos: {
                    not: r(function(e) {
                        var t = []
                          , n = []
                          , i = N(e.replace(ae, "$1"));
                        return i[W] ? r(function(e, t, n, r) {
                            for (var o, s = i(e, null, r, []), a = e.length; a--; )
                                (o = s[a]) && (e[a] = !(t[a] = o))
                        }) : function(e, r, o) {
                            return t[0] = e,
                            i(t, null, o, n),
                            t[0] = null,
                            !n.pop()
                        }
                    }),
                    has: r(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: r(function(e) {
                        return e = e.replace(be, we),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                    }),
                    lang: r(function(e) {
                        return pe.test(e || "") || t.error("unsupported lang: " + e),
                        e = e.replace(be, we).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = F ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                    return n = n.toLowerCase(),
                                    n === e || 0 === n.indexOf(e + "-");
                            while ((t = t.parentNode) && 1 === t.nodeType);return !1
                        }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === H
                    },
                    focus: function(e) {
                        return e === q.activeElement && (!q.hasFocus || q.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !T.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ge.test(e.nodeName)
                    },
                    input: function(e) {
                        return he.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(e, t) {
                        return [t - 1]
                    }),
                    eq: l(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: l(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: l(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: l(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0; )
                            e.push(r);
                        return e
                    }),
                    gt: l(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    })
                }
            },
            T.pseudos.nth = T.pseudos.eq;
            for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                T.pseudos[b] = a(b);
            for (b in {
                submit: !0,
                reset: !0
            })
                T.pseudos[b] = u(b);
            return f.prototype = T.filters = T.pseudos,
            T.setFilters = new f,
            k = t.tokenize = function(e, n) {
                var r, i, o, s, a, u, l, c = z[e + " "];
                if (c)
                    return n ? 0 : c.slice(0);
                for (a = e,
                u = [],
                l = T.preFilter; a; ) {
                    r && !(i = ue.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                    u.push(o = [])),
                    r = !1,
                    (i = le.exec(a)) && (r = i.shift(),
                    o.push({
                        value: r,
                        type: i[0].replace(ae, " ")
                    }),
                    a = a.slice(r.length));
                    for (s in T.filter)
                        !(i = de[s].exec(a)) || l[s] && !(i = l[s](i)) || (r = i.shift(),
                        o.push({
                            value: r,
                            type: s,
                            matches: i
                        }),
                        a = a.slice(r.length));
                    if (!r)
                        break
                }
                return n ? a.length : a ? t.error(e) : z(e, u).slice(0)
            }
            ,
            N = t.compile = function(e, t) {
                var n, r = [], i = [], o = X[e + " "];
                if (!o) {
                    for (t || (t = k(e)),
                    n = t.length; n--; )
                        o = y(t[n]),
                        o[W] ? r.push(o) : i.push(o);
                    o = X(e, x(i, r)),
                    o.selector = e
                }
                return o
            }
            ,
            S = t.select = function(e, t, n, r) {
                var i, o, s, a, u, l = "function" == typeof e && e, f = !r && k(e = l.selector || e);
                if (n = n || [],
                1 === f.length) {
                    if (o = f[0] = f[0].slice(0),
                    o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && F && T.relative[o[1].type]) {
                        if (t = (T.find.ID(s.matches[0].replace(be, we), t) || [])[0],
                        !t)
                            return n;
                        l && (t = t.parentNode),
                        e = e.slice(o.shift().value.length)
                    }
                    for (i = de.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                    !T.relative[a = s.type]); )
                        if ((u = T.find[a]) && (r = u(s.matches[0].replace(be, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                            e = r.length && p(o),
                            !e)
                                return K.apply(n, r),
                                n;
                            break
                        }
                }
                return (l || N(e, f))(r, t, !F, n, !t || ye.test(e) && c(t.parentNode) || t),
                n
            }
            ,
            w.sortStable = W.split("").sort(U).join("") === W,
            w.detectDuplicates = !!j,
            L(),
            w.sortDetached = i(function(e) {
                return 1 & e.compareDocumentPosition(q.createElement("div"))
            }),
            i(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            w.attributes && i(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || o("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            i(function(e) {
                return null == e.getAttribute("disabled")
            }) || o(te, function(e, t, n) {
                var r;
                if (!n)
                    return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }),
            t
        }(n);
        le.find = he,
        le.expr = he.selectors,
        le.expr[":"] = le.expr.pseudos,
        le.uniqueSort = le.unique = he.uniqueSort,
        le.text = he.getText,
        le.isXMLDoc = he.isXML,
        le.contains = he.contains;
        var ge = function(e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (i && le(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        }
          , ve = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
          , me = le.expr.match.needsContext
          , ye = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
          , xe = /^.[^:#\[\.,]*$/;
        le.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? le.find.matchesSelector(r, e) ? [r] : [] : le.find.matches(e, le.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }
        ,
        le.fn.extend({
            find: function(e) {
                var t, n = this.length, r = [], i = this;
                if ("string" != typeof e)
                    return this.pushStack(le(e).filter(function() {
                        for (t = 0; t < n; t++)
                            if (le.contains(i[t], this))
                                return !0
                    }));
                for (t = 0; t < n; t++)
                    le.find(e, i[t], r);
                return r = this.pushStack(n > 1 ? le.unique(r) : r),
                r.selector = this.selector ? this.selector + " " + e : e,
                r
            },
            filter: function(e) {
                return this.pushStack(a(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(a(this, e || [], !0))
            },
            is: function(e) {
                return !!a(this, "string" == typeof e && me.test(e) ? le(e) : e || [], !1).length
            }
        });
        var be, we = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Te = le.fn.init = function(e, t, n) {
            var r, i;
            if (!e)
                return this;
            if (n = n || be,
            "string" == typeof e) {
                if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : we.exec(e),
                !r || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof le ? t[0] : t,
                    le.merge(this, le.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
                    ye.test(r[1]) && le.isPlainObject(t))
                        for (r in t)
                            le.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return i = Z.getElementById(r[2]),
                i && i.parentNode && (this.length = 1,
                this[0] = i),
                this.context = Z,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e,
            this.length = 1,
            this) : le.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(le) : (void 0 !== e.selector && (this.selector = e.selector,
            this.context = e.context),
            le.makeArray(e, this))
        }
        ;
        Te.prototype = le.fn,
        be = le(Z);
        var Ce = /^(?:parents|prev(?:Until|All))/
          , Ee = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        le.fn.extend({
            has: function(e) {
                var t = le(e, this)
                  , n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (le.contains(this, t[e]))
                            return !0
                })
            },
            closest: function(e, t) {
                for (var n, r = 0, i = this.length, o = [], s = me.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && le.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? le.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? re.call(le(e), this[0]) : re.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(le.uniqueSort(le.merge(this.get(), le(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        le.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return ge(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return ge(e, "parentNode", n)
            },
            next: function(e) {
                return u(e, "nextSibling")
            },
            prev: function(e) {
                return u(e, "previousSibling")
            },
            nextAll: function(e) {
                return ge(e, "nextSibling")
            },
            prevAll: function(e) {
                return ge(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return ge(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return ge(e, "previousSibling", n)
            },
            siblings: function(e) {
                return ve((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return ve(e.firstChild)
            },
            contents: function(e) {
                return e.contentDocument || le.merge([], e.childNodes)
            }
        }, function(e, t) {
            le.fn[e] = function(n, r) {
                var i = le.map(this, t, n);
                return "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = le.filter(r, i)),
                this.length > 1 && (Ee[e] || le.uniqueSort(i),
                Ce.test(e) && i.reverse()),
                this.pushStack(i)
            }
        });
        var ke = /\S+/g;
        le.Callbacks = function(e) {
            e = "string" == typeof e ? l(e) : le.extend({}, e);
            var t, n, r, i, o = [], s = [], a = -1, u = function() {
                for (i = e.once,
                r = t = !0; s.length; a = -1)
                    for (n = s.shift(); ++a < o.length; )
                        o[a].apply(n[0], n[1]) === !1 && e.stopOnFalse && (a = o.length,
                        n = !1);
                e.memory || (n = !1),
                t = !1,
                i && (o = n ? [] : "")
            }, c = {
                add: function() {
                    return o && (n && !t && (a = o.length - 1,
                    s.push(n)),
                    function t(n) {
                        le.each(n, function(n, r) {
                            le.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== le.type(r) && t(r)
                        })
                    }(arguments),
                    n && !t && u()),
                    this
                },
                remove: function() {
                    return le.each(arguments, function(e, t) {
                        for (var n; (n = le.inArray(t, o, n)) > -1; )
                            o.splice(n, 1),
                            n <= a && a--
                    }),
                    this
                },
                has: function(e) {
                    return e ? le.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []),
                    this
                },
                disable: function() {
                    return i = s = [],
                    o = n = "",
                    this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = s = [],
                    n || (o = n = ""),
                    this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [],
                    n = [e, n.slice ? n.slice() : n],
                    s.push(n),
                    t || u()),
                    this
                },
                fire: function() {
                    return c.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!r
                }
            };
            return c
        }
        ,
        le.extend({
            Deferred: function(e) {
                var t = [["resolve", "done", le.Callbacks("once memory"), "resolved"], ["reject", "fail", le.Callbacks("once memory"), "rejected"], ["notify", "progress", le.Callbacks("memory")]]
                  , n = "pending"
                  , r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments),
                        this
                    },
                    then: function() {
                        var e = arguments;
                        return le.Deferred(function(n) {
                            le.each(t, function(t, o) {
                                var s = le.isFunction(e[t]) && e[t];
                                i[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && le.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                                })
                            }),
                            e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? le.extend(e, r) : r
                    }
                }
                  , i = {};
                return r.pipe = r.then,
                le.each(t, function(e, o) {
                    var s = o[2]
                      , a = o[3];
                    r[o[1]] = s.add,
                    a && s.add(function() {
                        n = a
                    }, t[1 ^ e][2].disable, t[2][2].lock),
                    i[o[0]] = function() {
                        return i[o[0] + "With"](this === i ? r : this, arguments),
                        this
                    }
                    ,
                    i[o[0] + "With"] = s.fireWith
                }),
                r.promise(i),
                e && e.call(i, i),
                i
            },
            when: function(e) {
                var t, n, r, i = 0, o = ee.call(arguments), s = o.length, a = 1 !== s || e && le.isFunction(e.promise) ? s : 0, u = 1 === a ? e : le.Deferred(), l = function(e, n, r) {
                    return function(i) {
                        n[e] = this,
                        r[e] = arguments.length > 1 ? ee.call(arguments) : i,
                        r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
                if (s > 1)
                    for (t = new Array(s),
                    n = new Array(s),
                    r = new Array(s); i < s; i++)
                        o[i] && le.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --a;
                return a || u.resolveWith(r, o),
                u.promise()
            }
        });
        var Ne;
        le.fn.ready = function(e) {
            return le.ready.promise().done(e),
            this
        }
        ,
        le.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? le.readyWait++ : le.ready(!0)
            },
            ready: function(e) {
                (e === !0 ? --le.readyWait : le.isReady) || (le.isReady = !0,
                e !== !0 && --le.readyWait > 0 || (Ne.resolveWith(Z, [le]),
                le.fn.triggerHandler && (le(Z).triggerHandler("ready"),
                le(Z).off("ready"))))
            }
        }),
        le.ready.promise = function(e) {
            return Ne || (Ne = le.Deferred(),
            "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? n.setTimeout(le.ready) : (Z.addEventListener("DOMContentLoaded", c),
            n.addEventListener("load", c))),
            Ne.promise(e)
        }
        ,
        le.ready.promise();
        var Se = function(e, t, n, r, i, o, s) {
            var a = 0
              , u = e.length
              , l = null == n;
            if ("object" === le.type(n)) {
                i = !0;
                for (a in n)
                    Se(e, t, a, n[a], !0, o, s)
            } else if (void 0 !== r && (i = !0,
            le.isFunction(r) || (s = !0),
            l && (s ? (t.call(e, r),
            t = null) : (l = t,
            t = function(e, t, n) {
                return l.call(le(e), n)
            }
            )),
            t))
                for (; a < u; a++)
                    t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        }
          , Ae = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        f.uid = 1,
        f.prototype = {
            register: function(e, t) {
                var n = t || {};
                return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                    value: n,
                    writable: !0,
                    configurable: !0
                }),
                e[this.expando]
            },
            cache: function(e) {
                if (!Ae(e))
                    return {};
                var t = e[this.expando];
                return t || (t = {},
                Ae(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)
                    i[t] = n;
                else
                    for (r in t)
                        i[r] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
            },
            access: function(e, t, n) {
                var r;
                return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t),
                void 0 !== r ? r : this.get(e, le.camelCase(t))) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r, i, o = e[this.expando];
                if (void 0 !== o) {
                    if (void 0 === t)
                        this.register(e);
                    else {
                        le.isArray(t) ? r = t.concat(t.map(le.camelCase)) : (i = le.camelCase(t),
                        t in o ? r = [t, i] : (r = i,
                        r = r in o ? [r] : r.match(ke) || [])),
                        n = r.length;
                        for (; n--; )
                            delete o[r[n]]
                    }
                    (void 0 === t || le.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !le.isEmptyObject(t)
            }
        };
        var De = new f
          , je = new f
          , Le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , qe = /[A-Z]/g;
        le.extend({
            hasData: function(e) {
                return je.hasData(e) || De.hasData(e)
            },
            data: function(e, t, n) {
                return je.access(e, t, n)
            },
            removeData: function(e, t) {
                je.remove(e, t)
            },
            _data: function(e, t, n) {
                return De.access(e, t, n)
            },
            _removeData: function(e, t) {
                De.remove(e, t)
            }
        }),
        le.fn.extend({
            data: function(e, t) {
                var n, r, i, o = this[0], s = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && (i = je.get(o),
                    1 === o.nodeType && !De.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--; )
                            s[n] && (r = s[n].name,
                            0 === r.indexOf("data-") && (r = le.camelCase(r.slice(5)),
                            p(o, r, i[r])));
                        De.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof e ? this.each(function() {
                    je.set(this, e)
                }) : Se(this, function(t) {
                    var n, r;
                    if (o && void 0 === t) {
                        if (n = je.get(o, e) || je.get(o, e.replace(qe, "-$&").toLowerCase()),
                        void 0 !== n)
                            return n;
                        if (r = le.camelCase(e),
                        n = je.get(o, r),
                        void 0 !== n)
                            return n;
                        if (n = p(o, r, void 0),
                        void 0 !== n)
                            return n
                    } else
                        r = le.camelCase(e),
                        this.each(function() {
                            var n = je.get(this, r);
                            je.set(this, r, t),
                            e.indexOf("-") > -1 && void 0 !== n && je.set(this, e, t)
                        })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    je.remove(this, e)
                })
            }
        }),
        le.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                    r = De.get(e, t),
                    n && (!r || le.isArray(n) ? r = De.access(e, t, le.makeArray(n)) : r.push(n)),
                    r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = le.queue(e, t)
                  , r = n.length
                  , i = n.shift()
                  , o = le._queueHooks(e, t)
                  , s = function() {
                    le.dequeue(e, t)
                };
                "inprogress" === i && (i = n.shift(),
                r--),
                i && ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(e, s, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return De.get(e, n) || De.access(e, n, {
                    empty: le.Callbacks("once memory").add(function() {
                        De.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        le.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                e = "fx",
                n--),
                arguments.length < n ? le.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = le.queue(this, e, t);
                    le._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && le.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    le.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, i = le.Deferred(), o = this, s = this.length, a = function() {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; s--; )
                    n = De.get(o[s], e + "queueHooks"),
                    n && n.empty && (r++,
                    n.empty.add(a));
                return a(),
                i.promise(t)
            }
        });
        var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , Fe = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$","i")
          , Oe = ["Top", "Right", "Bottom", "Left"]
          , Me = function(e, t) {
            return e = t || e,
            "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
        }
          , Re = /^(?:checkbox|radio)$/i
          , Pe = /<([\w:-]+)/
          , We = /^$|\/(?:java|ecma)script/i
          , Ie = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        Ie.optgroup = Ie.option,
        Ie.tbody = Ie.tfoot = Ie.colgroup = Ie.caption = Ie.thead,
        Ie.th = Ie.td;
        var Be = /<|&#?\w+;/;
        !function() {
            var e = Z.createDocumentFragment()
              , t = e.appendChild(Z.createElement("div"))
              , n = Z.createElement("input");
            n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            t.appendChild(n),
            ae.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
            t.innerHTML = "<textarea>x</textarea>",
            ae.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var $e = /^key/
          , _e = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , ze = /^([^.]*)(?:\.(.+)|)/;
        le.event = {
            global: {},
            add: function(e, t, n, r, i) {
                var o, s, a, u, l, c, f, p, d, h, g, v = De.get(e);
                if (v)
                    for (n.handler && (o = n,
                    n = o.handler,
                    i = o.selector),
                    n.guid || (n.guid = le.guid++),
                    (u = v.events) || (u = v.events = {}),
                    (s = v.handle) || (s = v.handle = function(t) {
                        return "undefined" != typeof le && le.event.triggered !== t.type ? le.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    t = (t || "").match(ke) || [""],
                    l = t.length; l--; )
                        a = ze.exec(t[l]) || [],
                        d = g = a[1],
                        h = (a[2] || "").split(".").sort(),
                        d && (f = le.event.special[d] || {},
                        d = (i ? f.delegateType : f.bindType) || d,
                        f = le.event.special[d] || {},
                        c = le.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && le.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o),
                        (p = u[d]) || (p = u[d] = [],
                        p.delegateCount = 0,
                        f.setup && f.setup.call(e, r, h, s) !== !1 || e.addEventListener && e.addEventListener(d, s)),
                        f.add && (f.add.call(e, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                        i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        le.event.global[d] = !0)
            },
            remove: function(e, t, n, r, i) {
                var o, s, a, u, l, c, f, p, d, h, g, v = De.hasData(e) && De.get(e);
                if (v && (u = v.events)) {
                    for (t = (t || "").match(ke) || [""],
                    l = t.length; l--; )
                        if (a = ze.exec(t[l]) || [],
                        d = g = a[1],
                        h = (a[2] || "").split(".").sort(),
                        d) {
                            for (f = le.event.special[d] || {},
                            d = (r ? f.delegateType : f.bindType) || d,
                            p = u[d] || [],
                            a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            s = o = p.length; o--; )
                                c = p[o],
                                !i && g !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                                c.selector && p.delegateCount--,
                                f.remove && f.remove.call(e, c));
                            s && !p.length && (f.teardown && f.teardown.call(e, h, v.handle) !== !1 || le.removeEvent(e, d, v.handle),
                            delete u[d])
                        } else
                            for (d in u)
                                le.event.remove(e, d + t[l], n, r, !0);
                    le.isEmptyObject(u) && De.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                e = le.event.fix(e);
                var t, n, r, i, o, s = [], a = ee.call(arguments), u = (De.get(this, "events") || {})[e.type] || [], l = le.event.special[e.type] || {};
                if (a[0] = e,
                e.delegateTarget = this,
                !l.preDispatch || l.preDispatch.call(this, e) !== !1) {
                    for (s = le.event.handlers.call(this, e, u),
                    t = 0; (i = s[t++]) && !e.isPropagationStopped(); )
                        for (e.currentTarget = i.elem,
                        n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                            e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o,
                            e.data = o.data,
                            r = ((le.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a),
                            void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                            e.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, e),
                    e.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, s = [], a = t.delegateCount, u = e.target;
                if (a && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
                            for (r = [],
                            n = 0; n < a; n++)
                                o = t[n],
                                i = o.selector + " ",
                                void 0 === r[i] && (r[i] = o.needsContext ? le(i, this).index(u) > -1 : le.find(i, this, null, [u]).length),
                                r[i] && r.push(o);
                            r.length && s.push({
                                elem: u,
                                handlers: r
                            })
                        }
                return a < t.length && s.push({
                    elem: this,
                    handlers: t.slice(a)
                }),
                s
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, r, i, o = t.button;
                    return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z,
                    r = n.documentElement,
                    i = n.body,
                    e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0),
                    e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                    e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    e
                }
            },
            fix: function(e) {
                if (e[le.expando])
                    return e;
                var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
                for (s || (this.fixHooks[i] = s = _e.test(i) ? this.mouseHooks : $e.test(i) ? this.keyHooks : {}),
                r = s.props ? this.props.concat(s.props) : this.props,
                e = new le.Event(o),
                t = r.length; t--; )
                    n = r[t],
                    e[n] = o[n];
                return e.target || (e.target = Z),
                3 === e.target.nodeType && (e.target = e.target.parentNode),
                s.filter ? s.filter(e, o) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== x() && this.focus)
                            return this.focus(),
                            !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === x() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && le.nodeName(this, "input"))
                            return this.click(),
                            !1
                    },
                    _default: function(e) {
                        return le.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        le.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        le.Event = function(e, t) {
            return this instanceof le.Event ? (e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? m : y) : this.type = e,
            t && le.extend(this, t),
            this.timeStamp = e && e.timeStamp || le.now(),
            void (this[le.expando] = !0)) : new le.Event(e,t)
        }
        ,
        le.Event.prototype = {
            constructor: le.Event,
            isDefaultPrevented: y,
            isPropagationStopped: y,
            isImmediatePropagationStopped: y,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = m,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = m,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = m,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        le.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            le.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this, i = e.relatedTarget, o = e.handleObj;
                    return i && (i === r || le.contains(r, i)) || (e.type = o.origType,
                    n = o.handler.apply(this, arguments),
                    e.type = t),
                    n
                }
            }
        }),
        le.fn.extend({
            on: function(e, t, n, r) {
                return b(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return b(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                    le(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                    this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t,
                t = void 0),
                n === !1 && (n = y),
                this.each(function() {
                    le.event.remove(this, e, n, t)
                })
            }
        });
        var Xe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
          , Ue = /<script|<style|<link/i
          , Ye = /checked\s*(?:[^=]|=\s*.checked.)/i
          , Ve = /^true\/(.*)/
          , Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        le.extend({
            htmlPrefilter: function(e) {
                return e.replace(Xe, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var r, i, o, s, a = e.cloneNode(!0), u = le.contains(e.ownerDocument, e);
                if (!(ae.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
                    for (s = h(a),
                    o = h(e),
                    r = 0,
                    i = o.length; r < i; r++)
                        k(o[r], s[r]);
                if (t)
                    if (n)
                        for (o = o || h(e),
                        s = s || h(a),
                        r = 0,
                        i = o.length; r < i; r++)
                            E(o[r], s[r]);
                    else
                        E(e, a);
                return s = h(a, "script"),
                s.length > 0 && g(s, !u && h(e, "script")),
                a
            },
            cleanData: function(e) {
                for (var t, n, r, i = le.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (Ae(n)) {
                        if (t = n[De.expando]) {
                            if (t.events)
                                for (r in t.events)
                                    i[r] ? le.event.remove(n, r) : le.removeEvent(n, r, t.handle);
                            n[De.expando] = void 0
                        }
                        n[je.expando] && (n[je.expando] = void 0)
                    }
            }
        }),
        le.fn.extend({
            domManip: N,
            detach: function(e) {
                return S(this, e, !0)
            },
            remove: function(e) {
                return S(this, e)
            },
            text: function(e) {
                return Se(this, function(e) {
                    return void 0 === e ? le.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return N(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = w(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return N(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = w(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return N(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return N(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (le.cleanData(h(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map(function() {
                    return le.clone(this, e, t)
                })
            },
            html: function(e) {
                return Se(this, function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !Ue.test(e) && !Ie[(Pe.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = le.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                t = this[n] || {},
                                1 === t.nodeType && (le.cleanData(h(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = [];
                return N(this, arguments, function(t) {
                    var n = this.parentNode;
                    le.inArray(this, e) < 0 && (le.cleanData(h(this)),
                    n && n.replaceChild(t, this))
                }, e)
            }
        }),
        le.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            le.fn[e] = function(e) {
                for (var n, r = [], i = le(e), o = i.length - 1, s = 0; s <= o; s++)
                    n = s === o ? this : this.clone(!0),
                    le(i[s])[t](n),
                    ne.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var Qe, Je = {
            HTML: "block",
            BODY: "block"
        }, Ke = /^margin/, Ze = new RegExp("^(" + He + ")(?!px)[a-z%]+$","i"), et = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = n),
            t.getComputedStyle(e)
        }, tt = function(e, t, n, r) {
            var i, o, s = {};
            for (o in t)
                s[o] = e.style[o],
                e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)
                e.style[o] = s[o];
            return i
        }, nt = Z.documentElement;
        !function() {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                a.innerHTML = "",
                nt.appendChild(s);
                var e = n.getComputedStyle(a);
                t = "1%" !== e.top,
                o = "2px" === e.marginLeft,
                r = "4px" === e.width,
                a.style.marginRight = "50%",
                i = "4px" === e.marginRight,
                nt.removeChild(s)
            }
            var t, r, i, o, s = Z.createElement("div"), a = Z.createElement("div");
            a.style && (a.style.backgroundClip = "content-box",
            a.cloneNode(!0).style.backgroundClip = "",
            ae.clearCloneStyle = "content-box" === a.style.backgroundClip,
            s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
            s.appendChild(a),
            le.extend(ae, {
                pixelPosition: function() {
                    return e(),
                    t
                },
                boxSizingReliable: function() {
                    return null == r && e(),
                    r
                },
                pixelMarginRight: function() {
                    return null == r && e(),
                    i
                },
                reliableMarginLeft: function() {
                    return null == r && e(),
                    o
                },
                reliableMarginRight: function() {
                    var e, t = a.appendChild(Z.createElement("div"));
                    return t.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    t.style.marginRight = t.style.width = "0",
                    a.style.width = "1px",
                    nt.appendChild(s),
                    e = !parseFloat(n.getComputedStyle(t).marginRight),
                    nt.removeChild(s),
                    a.removeChild(t),
                    e
                }
            }))
        }();
        var rt = /^(none|table(?!-c[ea]).+)/
          , it = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , ot = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , st = ["Webkit", "O", "Moz", "ms"]
          , at = Z.createElement("div").style;
        le.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = j(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, s, a = le.camelCase(t), u = e.style;
                    return t = le.cssProps[a] || (le.cssProps[a] = q(a) || a),
                    s = le.cssHooks[t] || le.cssHooks[a],
                    void 0 === n ? s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t] : (o = typeof n,
                    "string" === o && (i = Fe.exec(n)) && i[1] && (n = d(e, t, i),
                    o = "number"),
                    null != n && n === n && ("number" === o && (n += i && i[3] || (le.cssNumber[a] ? "" : "px")),
                    ae.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                    s && "set"in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n)),
                    void 0)
                }
            },
            css: function(e, t, n, r) {
                var i, o, s, a = le.camelCase(t);
                return t = le.cssProps[a] || (le.cssProps[a] = q(a) || a),
                s = le.cssHooks[t] || le.cssHooks[a],
                s && "get"in s && (i = s.get(e, !0, n)),
                void 0 === i && (i = j(e, t, r)),
                "normal" === i && t in ot && (i = ot[t]),
                "" === n || n ? (o = parseFloat(i),
                n === !0 || isFinite(o) ? o || 0 : i) : i
            }
        }),
        le.each(["height", "width"], function(e, t) {
            le.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n)
                        return rt.test(le.css(e, "display")) && 0 === e.offsetWidth ? tt(e, it, function() {
                            return O(e, t, r)
                        }) : O(e, t, r)
                },
                set: function(e, n, r) {
                    var i, o = r && et(e), s = r && F(e, t, r, "border-box" === le.css(e, "boxSizing", !1, o), o);
                    return s && (i = Fe.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n,
                    n = le.css(e, t)),
                    H(e, n, s)
                }
            }
        }),
        le.cssHooks.marginLeft = L(ae.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(j(e, "marginLeft")) || e.getBoundingClientRect().left - tt(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        le.cssHooks.marginRight = L(ae.reliableMarginRight, function(e, t) {
            if (t)
                return tt(e, {
                    display: "inline-block"
                }, j, [e, "marginRight"])
        }),
        le.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            le.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                        i[e + Oe[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            },
            Ke.test(e) || (le.cssHooks[e + t].set = H)
        }),
        le.fn.extend({
            css: function(e, t) {
                return Se(this, function(e, t, n) {
                    var r, i, o = {}, s = 0;
                    if (le.isArray(t)) {
                        for (r = et(e),
                        i = t.length; s < i; s++)
                            o[t[s]] = le.css(e, t[s], !1, r);
                        return o
                    }
                    return void 0 !== n ? le.style(e, t, n) : le.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return M(this, !0)
            },
            hide: function() {
                return M(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Me(this) ? le(this).show() : le(this).hide()
                })
            }
        }),
        le.Tween = R,
        R.prototype = {
            constructor: R,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                this.prop = n,
                this.easing = i || le.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = o || (le.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = R.propHooks[this.prop];
                return e && e.get ? e.get(this) : R.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = R.propHooks[this.prop];
                return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : R.propHooks._default.set(this),
                this
            }
        },
        R.prototype.init.prototype = R.prototype,
        R.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = le.css(e.elem, e.prop, ""),
                    t && "auto" !== t ? t : 0)
                },
                set: function(e) {
                    le.fx.step[e.prop] ? le.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[le.cssProps[e.prop]] && !le.cssHooks[e.prop] ? e.elem[e.prop] = e.now : le.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        R.propHooks.scrollTop = R.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        le.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        le.fx = R.prototype.init,
        le.fx.step = {};
        var ut, lt, ct = /^(?:toggle|show|hide)$/, ft = /queueHooks$/;
        le.Animation = le.extend(_, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return d(n.elem, e, Fe.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                le.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.match(ke);
                for (var n, r = 0, i = e.length; r < i; r++)
                    n = e[r],
                    _.tweeners[n] = _.tweeners[n] || [],
                    _.tweeners[n].unshift(t)
            },
            prefilters: [B],
            prefilter: function(e, t) {
                t ? _.prefilters.unshift(e) : _.prefilters.push(e)
            }
        }),
        le.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? le.extend({}, e) : {
                complete: n || !n && t || le.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !le.isFunction(t) && t
            };
            return r.duration = le.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in le.fx.speeds ? le.fx.speeds[r.duration] : le.fx.speeds._default,
            null != r.queue && r.queue !== !0 || (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                le.isFunction(r.old) && r.old.call(this),
                r.queue && le.dequeue(this, r.queue)
            }
            ,
            r
        }
        ,
        le.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Me).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = le.isEmptyObject(e)
                  , o = le.speed(t, n, r)
                  , s = function() {
                    var t = _(this, le.extend({}, e), o);
                    (i || De.get(this, "finish")) && t.stop(!0)
                };
                return s.finish = s,
                i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(n)
                };
                return "string" != typeof e && (n = t,
                t = e,
                e = void 0),
                t && e !== !1 && this.queue(e || "fx", []),
                this.each(function() {
                    var t = !0
                      , i = null != e && e + "queueHooks"
                      , o = le.timers
                      , s = De.get(this);
                    if (i)
                        s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s)
                            s[i] && s[i].stop && ft.test(i) && r(s[i]);
                    for (i = o.length; i--; )
                        o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                        t = !1,
                        o.splice(i, 1));
                    !t && n || le.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"),
                this.each(function() {
                    var t, n = De.get(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = le.timers, s = r ? r.length : 0;
                    for (n.finish = !0,
                    le.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length; t--; )
                        o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                        o.splice(t, 1));
                    for (t = 0; t < s; t++)
                        r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }),
        le.each(["toggle", "show", "hide"], function(e, t) {
            var n = le.fn[t];
            le.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, i)
            }
        }),
        le.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            le.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }),
        le.timers = [],
        le.fx.tick = function() {
            var e, t = 0, n = le.timers;
            for (ut = le.now(); t < n.length; t++)
                e = n[t],
                e() || n[t] !== e || n.splice(t--, 1);
            n.length || le.fx.stop(),
            ut = void 0
        }
        ,
        le.fx.timer = function(e) {
            le.timers.push(e),
            e() ? le.fx.start() : le.timers.pop()
        }
        ,
        le.fx.interval = 13,
        le.fx.start = function() {
            lt || (lt = n.setInterval(le.fx.tick, le.fx.interval))
        }
        ,
        le.fx.stop = function() {
            n.clearInterval(lt),
            lt = null
        }
        ,
        le.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        le.fn.delay = function(e, t) {
            return e = le.fx ? le.fx.speeds[e] || e : e,
            t = t || "fx",
            this.queue(t, function(t, r) {
                var i = n.setTimeout(t, e);
                r.stop = function() {
                    n.clearTimeout(i)
                }
            })
        }
        ,
        function() {
            var e = Z.createElement("input")
              , t = Z.createElement("select")
              , n = t.appendChild(Z.createElement("option"));
            e.type = "checkbox",
            ae.checkOn = "" !== e.value,
            ae.optSelected = n.selected,
            t.disabled = !0,
            ae.optDisabled = !n.disabled,
            e = Z.createElement("input"),
            e.value = "t",
            e.type = "radio",
            ae.radioValue = "t" === e.value
        }();
        var pt, dt = le.expr.attrHandle;
        le.fn.extend({
            attr: function(e, t) {
                return Se(this, le.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    le.removeAttr(this, e)
                })
            }
        }),
        le.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute ? le.prop(e, t, n) : (1 === o && le.isXMLDoc(e) || (t = t.toLowerCase(),
                    i = le.attrHooks[t] || (le.expr.match.bool.test(t) ? pt : void 0)),
                    void 0 !== n ? null === n ? void le.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                    n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = le.find.attr(e, t),
                    null == r ? void 0 : r))
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ae.radioValue && "radio" === t && le.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r, i = 0, o = t && t.match(ke);
                if (o && 1 === e.nodeType)
                    for (; n = o[i++]; )
                        r = le.propFix[n] || n,
                        le.expr.match.bool.test(n) && (e[r] = !1),
                        e.removeAttribute(n)
            }
        }),
        pt = {
            set: function(e, t, n) {
                return t === !1 ? le.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        le.each(le.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = dt[t] || le.find.attr;
            dt[t] = function(e, t, r) {
                var i, o;
                return r || (o = dt[t],
                dt[t] = i,
                i = null != n(e, t, r) ? t.toLowerCase() : null,
                dt[t] = o),
                i
            }
        });
        var ht = /^(?:input|select|textarea|button)$/i
          , gt = /^(?:a|area)$/i;
        le.fn.extend({
            prop: function(e, t) {
                return Se(this, le.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[le.propFix[e] || e]
                })
            }
        }),
        le.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && le.isXMLDoc(e) || (t = le.propFix[t] || t,
                    i = le.propHooks[t]),
                    void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = le.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        ae.optSelected || (le.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        le.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            le.propFix[this.toLowerCase()] = this
        });
        var vt = /[\t\r\n\f]/g;
        le.fn.extend({
            addClass: function(e) {
                var t, n, r, i, o, s, a, u = 0;
                if (le.isFunction(e))
                    return this.each(function(t) {
                        le(this).addClass(e.call(this, t, z(this)))
                    });
                if ("string" == typeof e && e)
                    for (t = e.match(ke) || []; n = this[u++]; )
                        if (i = z(n),
                        r = 1 === n.nodeType && (" " + i + " ").replace(vt, " ")) {
                            for (s = 0; o = t[s++]; )
                                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            a = le.trim(r),
                            i !== a && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, r, i, o, s, a, u = 0;
                if (le.isFunction(e))
                    return this.each(function(t) {
                        le(this).removeClass(e.call(this, t, z(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ("string" == typeof e && e)
                    for (t = e.match(ke) || []; n = this[u++]; )
                        if (i = z(n),
                        r = 1 === n.nodeType && (" " + i + " ").replace(vt, " ")) {
                            for (s = 0; o = t[s++]; )
                                for (; r.indexOf(" " + o + " ") > -1; )
                                    r = r.replace(" " + o + " ", " ");
                            a = le.trim(r),
                            i !== a && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : le.isFunction(e) ? this.each(function(n) {
                    le(this).toggleClass(e.call(this, n, z(this), t), t)
                }) : this.each(function() {
                    var t, r, i, o;
                    if ("string" === n)
                        for (r = 0,
                        i = le(this),
                        o = e.match(ke) || []; t = o[r++]; )
                            i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                    else
                        void 0 !== e && "boolean" !== n || (t = z(this),
                        t && De.set(this, "__className__", t),
                        this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : De.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                for (t = " " + e + " "; n = this[r++]; )
                    if (1 === n.nodeType && (" " + z(n) + " ").replace(vt, " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        });
        var mt = /\r/g
          , yt = /[\x20\t\r\n\f]+/g;
        le.fn.extend({
            val: function(e) {
                var t, n, r, i = this[0];
                {
                    if (arguments.length)
                        return r = le.isFunction(e),
                        this.each(function(n) {
                            var i;
                            1 === this.nodeType && (i = r ? e.call(this, n, le(this).val()) : e,
                            null == i ? i = "" : "number" == typeof i ? i += "" : le.isArray(i) && (i = le.map(i, function(e) {
                                return null == e ? "" : e + ""
                            })),
                            t = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()],
                            t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                        });
                    if (i)
                        return t = le.valHooks[i.type] || le.valHooks[i.nodeName.toLowerCase()],
                        t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                        "string" == typeof n ? n.replace(mt, "") : null == n ? "" : n)
                }
            }
        }),
        le.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = le.find.attr(e, "value");
                        return null != t ? t : le.trim(le.text(e)).replace(yt, " ")
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                            if (n = r[u],
                            (n.selected || u === i) && (ae.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !le.nodeName(n.parentNode, "optgroup"))) {
                                if (t = le(n).val(),
                                o)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, r, i = e.options, o = le.makeArray(t), s = i.length; s--; )
                            r = i[s],
                            (r.selected = le.inArray(le.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        o
                    }
                }
            }
        }),
        le.each(["radio", "checkbox"], function() {
            le.valHooks[this] = {
                set: function(e, t) {
                    if (le.isArray(t))
                        return e.checked = le.inArray(le(e).val(), t) > -1
                }
            },
            ae.checkOn || (le.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        });
        var xt = /^(?:focusinfocus|focusoutblur)$/;
        le.extend(le.event, {
            trigger: function(e, t, r, i) {
                var o, s, a, u, l, c, f, p = [r || Z], d = se.call(e, "type") ? e.type : e, h = se.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = a = r = r || Z,
                3 !== r.nodeType && 8 !== r.nodeType && !xt.test(d + le.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."),
                d = h.shift(),
                h.sort()),
                l = d.indexOf(":") < 0 && "on" + d,
                e = e[le.expando] ? e : new le.Event(d,"object" == typeof e && e),
                e.isTrigger = i ? 2 : 3,
                e.namespace = h.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = r),
                t = null == t ? [e] : le.makeArray(t, [e]),
                f = le.event.special[d] || {},
                i || !f.trigger || f.trigger.apply(r, t) !== !1)) {
                    if (!i && !f.noBubble && !le.isWindow(r)) {
                        for (u = f.delegateType || d,
                        xt.test(u + d) || (s = s.parentNode); s; s = s.parentNode)
                            p.push(s),
                            a = s;
                        a === (r.ownerDocument || Z) && p.push(a.defaultView || a.parentWindow || n)
                    }
                    for (o = 0; (s = p[o++]) && !e.isPropagationStopped(); )
                        e.type = o > 1 ? u : f.bindType || d,
                        c = (De.get(s, "events") || {})[e.type] && De.get(s, "handle"),
                        c && c.apply(s, t),
                        c = l && s[l],
                        c && c.apply && Ae(s) && (e.result = c.apply(s, t),
                        e.result === !1 && e.preventDefault());
                    return e.type = d,
                    i || e.isDefaultPrevented() || f._default && f._default.apply(p.pop(), t) !== !1 || !Ae(r) || l && le.isFunction(r[d]) && !le.isWindow(r) && (a = r[l],
                    a && (r[l] = null),
                    le.event.triggered = d,
                    r[d](),
                    le.event.triggered = void 0,
                    a && (r[l] = a)),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                var r = le.extend(new le.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                le.event.trigger(r, null, t)
            }
        }),
        le.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    le.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return le.event.trigger(e, t, n, !0)
            }
        }),
        le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            le.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }),
        le.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        ae.focusin = "onfocusin"in n,
        ae.focusin || le.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                le.event.simulate(t, e.target, le.event.fix(e))
            };
            le.event.special[t] = {
                setup: function() {
                    var r = this.ownerDocument || this
                      , i = De.access(r, t);
                    i || r.addEventListener(e, n, !0),
                    De.access(r, t, (i || 0) + 1)
                },
                teardown: function() {
                    var r = this.ownerDocument || this
                      , i = De.access(r, t) - 1;
                    i ? De.access(r, t, i) : (r.removeEventListener(e, n, !0),
                    De.remove(r, t))
                }
            }
        });
        var bt = n.location
          , wt = le.now()
          , Tt = /\?/;
        le.parseJSON = function(e) {
            return JSON.parse(e + "")
        }
        ,
        le.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new n.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + e),
            t
        }
        ;
        var Ct = /#.*$/
          , Et = /([?&])_=[^&]*/
          , kt = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Nt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , St = /^(?:GET|HEAD)$/
          , At = /^\/\//
          , Dt = {}
          , jt = {}
          , Lt = "*/".concat("*")
          , qt = Z.createElement("a");
        qt.href = bt.href,
        le.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: bt.href,
                type: "GET",
                isLocal: Nt.test(bt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Lt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": le.parseJSON,
                    "text xml": le.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Y(Y(e, le.ajaxSettings), t) : Y(le.ajaxSettings, e)
            },
            ajaxPrefilter: X(Dt),
            ajaxTransport: X(jt),
            ajax: function(e, t) {
                function r(e, t, r, a) {
                    var l, f, y, x, w, C = t;
                    2 !== b && (b = 2,
                    u && n.clearTimeout(u),
                    i = void 0,
                    s = a || "",
                    T.readyState = e > 0 ? 4 : 0,
                    l = e >= 200 && e < 300 || 304 === e,
                    r && (x = V(p, T, r)),
                    x = G(p, x, T, l),
                    l ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"),
                    w && (le.lastModified[o] = w),
                    w = T.getResponseHeader("etag"),
                    w && (le.etag[o] = w)),
                    204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state,
                    f = x.data,
                    y = x.error,
                    l = !y)) : (y = C,
                    !e && C || (C = "error",
                    e < 0 && (e = 0))),
                    T.status = e,
                    T.statusText = (t || C) + "",
                    l ? g.resolveWith(d, [f, C, T]) : g.rejectWith(d, [T, C, y]),
                    T.statusCode(m),
                    m = void 0,
                    c && h.trigger(l ? "ajaxSuccess" : "ajaxError", [T, p, l ? f : y]),
                    v.fireWith(d, [T, C]),
                    c && (h.trigger("ajaxComplete", [T, p]),
                    --le.active || le.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var i, o, s, a, u, l, c, f, p = le.ajaxSetup({}, t), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? le(d) : le.event, g = le.Deferred(), v = le.Callbacks("once memory"), m = p.statusCode || {}, y = {}, x = {}, b = 0, w = "canceled", T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === b) {
                            if (!a)
                                for (a = {}; t = kt.exec(s); )
                                    a[t[1].toLowerCase()] = t[2];
                            t = a[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === b ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return b || (e = x[n] = x[n] || e,
                        y[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return b || (p.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (b < 2)
                                for (t in e)
                                    m[t] = [m[t], e[t]];
                            else
                                T.always(e[T.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || w;
                        return i && i.abort(t),
                        r(0, t),
                        this
                    }
                };
                if (g.promise(T).complete = v.add,
                T.success = T.done,
                T.error = T.fail,
                p.url = ((e || p.url || bt.href) + "").replace(Ct, "").replace(At, bt.protocol + "//"),
                p.type = t.method || t.type || p.method || p.type,
                p.dataTypes = le.trim(p.dataType || "*").toLowerCase().match(ke) || [""],
                null == p.crossDomain) {
                    l = Z.createElement("a");
                    try {
                        l.href = p.url,
                        l.href = l.href,
                        p.crossDomain = qt.protocol + "//" + qt.host != l.protocol + "//" + l.host
                    } catch (e) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = le.param(p.data, p.traditional)),
                U(Dt, p, t, T),
                2 === b)
                    return T;
                c = le.event && p.global,
                c && 0 === le.active++ && le.event.trigger("ajaxStart"),
                p.type = p.type.toUpperCase(),
                p.hasContent = !St.test(p.type),
                o = p.url,
                p.hasContent || (p.data && (o = p.url += (Tt.test(o) ? "&" : "?") + p.data,
                delete p.data),
                p.cache === !1 && (p.url = Et.test(o) ? o.replace(Et, "$1_=" + wt++) : o + (Tt.test(o) ? "&" : "?") + "_=" + wt++)),
                p.ifModified && (le.lastModified[o] && T.setRequestHeader("If-Modified-Since", le.lastModified[o]),
                le.etag[o] && T.setRequestHeader("If-None-Match", le.etag[o])),
                (p.data && p.hasContent && p.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", p.contentType),
                T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : p.accepts["*"]);
                for (f in p.headers)
                    T.setRequestHeader(f, p.headers[f]);
                if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === b))
                    return T.abort();
                w = "abort";
                for (f in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    T[f](p[f]);
                if (i = U(jt, p, t, T)) {
                    if (T.readyState = 1,
                    c && h.trigger("ajaxSend", [T, p]),
                    2 === b)
                        return T;
                    p.async && p.timeout > 0 && (u = n.setTimeout(function() {
                        T.abort("timeout")
                    }, p.timeout));
                    try {
                        b = 1,
                        i.send(y, r)
                    } catch (e) {
                        if (!(b < 2))
                            throw e;
                        r(-1, e)
                    }
                } else
                    r(-1, "No Transport");
                return T
            },
            getJSON: function(e, t, n) {
                return le.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return le.get(e, void 0, t, "script")
            }
        }),
        le.each(["get", "post"], function(e, t) {
            le[t] = function(e, n, r, i) {
                return le.isFunction(n) && (i = i || r,
                r = n,
                n = void 0),
                le.ajax(le.extend({
                    url: e,
                    type: t,
                    dataType: i,
                    data: n,
                    success: r
                }, le.isPlainObject(e) && e))
            }
        }),
        le._evalUrl = function(e) {
            return le.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        le.fn.extend({
            wrapAll: function(e) {
                var t;
                return le.isFunction(e) ? this.each(function(t) {
                    le(this).wrapAll(e.call(this, t))
                }) : (this[0] && (t = le(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }).append(this)),
                this)
            },
            wrapInner: function(e) {
                return le.isFunction(e) ? this.each(function(t) {
                    le(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = le(this)
                      , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = le.isFunction(e);
                return this.each(function(n) {
                    le(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        le.expr.filters.hidden = function(e) {
            return !le.expr.filters.visible(e)
        }
        ,
        le.expr.filters.visible = function(e) {
            return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
        }
        ;
        var Ht = /%20/g
          , Ft = /\[\]$/
          , Ot = /\r?\n/g
          , Mt = /^(?:submit|button|image|reset|file)$/i
          , Rt = /^(?:input|select|textarea|keygen)/i;
        le.param = function(e, t) {
            var n, r = [], i = function(e, t) {
                t = le.isFunction(t) ? t() : null == t ? "" : t,
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
            if (void 0 === t && (t = le.ajaxSettings && le.ajaxSettings.traditional),
            le.isArray(e) || e.jquery && !le.isPlainObject(e))
                le.each(e, function() {
                    i(this.name, this.value)
                });
            else
                for (n in e)
                    Q(n, e[n], t, i);
            return r.join("&").replace(Ht, "+")
        }
        ,
        le.fn.extend({
            serialize: function() {
                return le.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = le.prop(this, "elements");
                    return e ? le.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !le(this).is(":disabled") && Rt.test(this.nodeName) && !Mt.test(e) && (this.checked || !Re.test(e))
                }).map(function(e, t) {
                    var n = le(this).val();
                    return null == n ? null : le.isArray(n) ? le.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Ot, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Ot, "\r\n")
                    }
                }).get()
            }
        }),
        le.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (e) {}
        }
        ;
        var Pt = {
            0: 200,
            1223: 204
        }
          , Wt = le.ajaxSettings.xhr();
        ae.cors = !!Wt && "withCredentials"in Wt,
        ae.ajax = Wt = !!Wt,
        le.ajaxTransport(function(e) {
            var t, r;
            if (ae.cors || Wt && !e.crossDomain)
                return {
                    send: function(i, o) {
                        var s, a = e.xhr();
                        if (a.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                            for (s in e.xhrFields)
                                a[s] = e.xhrFields[s];
                        e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                        e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (s in i)
                            a.setRequestHeader(s, i[s]);
                        t = function(e) {
                            return function() {
                                t && (t = r = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                                "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Pt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                    binary: a.response
                                } : {
                                    text: a.responseText
                                }, a.getAllResponseHeaders()))
                            }
                        }
                        ,
                        a.onload = t(),
                        r = a.onerror = t("error"),
                        void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                            4 === a.readyState && n.setTimeout(function() {
                                t && r()
                            })
                        }
                        ,
                        t = t("abort");
                        try {
                            a.send(e.hasContent && e.data || null)
                        } catch (e) {
                            if (t)
                                throw e
                        }
                    },
                    abort: function() {
                        t && t()
                    }
                }
        }),
        le.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return le.globalEval(e),
                    e
                }
            }
        }),
        le.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        le.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n;
                return {
                    send: function(r, i) {
                        t = le("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", n = function(e) {
                            t.remove(),
                            n = null,
                            e && i("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        Z.head.appendChild(t[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
        var It = []
          , Bt = /(=)\?(?=&|$)|\?\?/;
        le.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = It.pop() || le.expando + "_" + wt++;
                return this[e] = !0,
                e
            }
        }),
        le.ajaxPrefilter("json jsonp", function(e, t, r) {
            var i, o, s, a = e.jsonp !== !1 && (Bt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return i = e.jsonpCallback = le.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                a ? e[a] = e[a].replace(Bt, "$1" + i) : e.jsonp !== !1 && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                e.converters["script json"] = function() {
                    return s || le.error(i + " was not called"),
                    s[0]
                }
                ,
                e.dataTypes[0] = "json",
                o = n[i],
                n[i] = function() {
                    s = arguments
                }
                ,
                r.always(function() {
                    void 0 === o ? le(n).removeProp(i) : n[i] = o,
                    e[i] && (e.jsonpCallback = t.jsonpCallback,
                    It.push(i)),
                    s && le.isFunction(o) && o(s[0]),
                    s = o = void 0
                }),
                "script"
        }),
        le.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e)
                return null;
            "boolean" == typeof t && (n = t,
            t = !1),
            t = t || Z;
            var r = ye.exec(e)
              , i = !n && [];
            return r ? [t.createElement(r[1])] : (r = v([e], t, i),
            i && i.length && le(i).remove(),
            le.merge([], r.childNodes))
        }
        ;
        var $t = le.fn.load;
        le.fn.load = function(e, t, n) {
            if ("string" != typeof e && $t)
                return $t.apply(this, arguments);
            var r, i, o, s = this, a = e.indexOf(" ");
            return a > -1 && (r = le.trim(e.slice(a)),
            e = e.slice(0, a)),
            le.isFunction(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (i = "POST"),
            s.length > 0 && le.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments,
                s.html(r ? le("<div>").append(le.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }
            ),
            this
        }
        ,
        le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            le.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        le.expr.filters.animated = function(e) {
            return le.grep(le.timers, function(t) {
                return e === t.elem
            }).length
        }
        ,
        le.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, s, a, u, l, c = le.css(e, "position"), f = le(e), p = {};
                "static" === c && (e.style.position = "relative"),
                a = f.offset(),
                o = le.css(e, "top"),
                u = le.css(e, "left"),
                l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
                l ? (r = f.position(),
                s = r.top,
                i = r.left) : (s = parseFloat(o) || 0,
                i = parseFloat(u) || 0),
                le.isFunction(t) && (t = t.call(e, n, le.extend({}, a))),
                null != t.top && (p.top = t.top - a.top + s),
                null != t.left && (p.left = t.left - a.left + i),
                "using"in t ? t.using.call(e, p) : f.css(p)
            }
        },
        le.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        le.offset.setOffset(this, e, t)
                    });
                var t, n, r = this[0], i = {
                    top: 0,
                    left: 0
                }, o = r && r.ownerDocument;
                if (o)
                    return t = o.documentElement,
                    le.contains(t, r) ? (i = r.getBoundingClientRect(),
                    n = J(o),
                    {
                        top: i.top + n.pageYOffset - t.clientTop,
                        left: i.left + n.pageXOffset - t.clientLeft
                    }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === le.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(),
                    t = this.offset(),
                    le.nodeName(e[0], "html") || (r = e.offset()),
                    r.top += le.css(e[0], "borderTopWidth", !0),
                    r.left += le.css(e[0], "borderLeftWidth", !0)),
                    {
                        top: t.top - r.top - le.css(n, "marginTop", !0),
                        left: t.left - r.left - le.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === le.css(e, "position"); )
                        e = e.offsetParent;
                    return e || nt
                })
            }
        }),
        le.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = "pageYOffset" === t;
            le.fn[e] = function(r) {
                return Se(this, function(e, r, i) {
                    var o = J(e);
                    return void 0 === i ? o ? o[t] : e[r] : void (o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
                }, e, r, arguments.length)
            }
        }),
        le.each(["top", "left"], function(e, t) {
            le.cssHooks[t] = L(ae.pixelPosition, function(e, n) {
                if (n)
                    return n = j(e, t),
                    Ze.test(n) ? le(e).position()[t] + "px" : n
            })
        }),
        le.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            le.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, r) {
                le.fn[r] = function(r, i) {
                    var o = arguments.length && (n || "boolean" != typeof r)
                      , s = n || (r === !0 || i === !0 ? "margin" : "border");
                    return Se(this, function(t, n, r) {
                        var i;
                        return le.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                        Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? le.css(t, n, s) : le.style(t, n, r, s)
                    }, t, o ? r : void 0, o, null)
                }
            })
        }),
        le.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            size: function() {
                return this.length
            }
        }),
        le.fn.andSelf = le.fn.addBack,
        r = [],
        i = function() {
            return le
        }
        .apply(t, r),
        !(void 0 !== i && (e.exports = i));
        var _t = n.jQuery
          , zt = n.$;
        return le.noConflict = function(e) {
            return n.$ === le && (n.$ = zt),
            e && n.jQuery === le && (n.jQuery = _t),
            le
        }
        ,
        o || (n.jQuery = n.$ = le),
        le
    })
}
, function(e, t, n) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var i = n(6)
      , o = r(i)
      , s = document.querySelectorAll(".textarea");
    (0,
    o.default)(s)
}
, function(e, t, n) {
    var r, i, o;
    !function(n, s) {
        i = [t, e],
        r = s,
        o = "function" == typeof r ? r.apply(t, i) : r,
        !(void 0 !== o && (e.exports = o))
    }(this, function(e, t) {
        "use strict";
        function n(e) {
            function t() {
                var t = window.getComputedStyle(e, null);
                "vertical" === t.resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"),
                u = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth),
                isNaN(u) && (u = 0),
                a()
            }
            function n(t) {
                var n = e.style.width;
                e.style.width = "0px",
                e.offsetWidth,
                e.style.width = n,
                e.style.overflowY = t
            }
            function r(e) {
                for (var t = []; e && e.parentNode && e.parentNode instanceof Element; )
                    e.parentNode.scrollTop && t.push({
                        node: e.parentNode,
                        scrollTop: e.parentNode.scrollTop
                    }),
                    e = e.parentNode;
                return t
            }
            function i() {
                var t = e.style.height
                  , n = r(e)
                  , i = document.documentElement && document.documentElement.scrollTop;
                e.style.height = "auto";
                var o = e.scrollHeight + u;
                return 0 === e.scrollHeight ? void (e.style.height = t) : (e.style.height = o + "px",
                l = e.clientWidth,
                n.forEach(function(e) {
                    e.node.scrollTop = e.scrollTop
                }),
                void (i && (document.documentElement.scrollTop = i)))
            }
            function a() {
                i();
                var t = Math.round(parseFloat(e.style.height))
                  , r = window.getComputedStyle(e, null)
                  , o = Math.round(parseFloat(r.height));
                if (o !== t ? "visible" !== r.overflowY && (n("visible"),
                i(),
                o = Math.round(parseFloat(window.getComputedStyle(e, null).height))) : "hidden" !== r.overflowY && (n("hidden"),
                i(),
                o = Math.round(parseFloat(window.getComputedStyle(e, null).height))),
                c !== o) {
                    c = o;
                    var a = s("autosize:resized");
                    try {
                        e.dispatchEvent(a)
                    } catch (e) {}
                }
            }
            if (e && e.nodeName && "TEXTAREA" === e.nodeName && !o.has(e)) {
                var u = null
                  , l = e.clientWidth
                  , c = null
                  , f = function() {
                    e.clientWidth !== l && a()
                }
                  , p = function(t) {
                    window.removeEventListener("resize", f, !1),
                    e.removeEventListener("input", a, !1),
                    e.removeEventListener("keyup", a, !1),
                    e.removeEventListener("autosize:destroy", p, !1),
                    e.removeEventListener("autosize:update", a, !1),
                    Object.keys(t).forEach(function(n) {
                        e.style[n] = t[n]
                    }),
                    o.delete(e)
                }
                .bind(e, {
                    height: e.style.height,
                    resize: e.style.resize,
                    overflowY: e.style.overflowY,
                    overflowX: e.style.overflowX,
                    wordWrap: e.style.wordWrap
                });
                e.addEventListener("autosize:destroy", p, !1),
                "onpropertychange"in e && "oninput"in e && e.addEventListener("keyup", a, !1),
                window.addEventListener("resize", f, !1),
                e.addEventListener("input", a, !1),
                e.addEventListener("autosize:update", a, !1),
                e.style.overflowX = "hidden",
                e.style.wordWrap = "break-word",
                o.set(e, {
                    destroy: p,
                    update: a
                }),
                t()
            }
        }
        function r(e) {
            var t = o.get(e);
            t && t.destroy()
        }
        function i(e) {
            var t = o.get(e);
            t && t.update()
        }
        var o = "function" == typeof Map ? new Map : function() {
            var e = []
              , t = [];
            return {
                has: function(t) {
                    return e.indexOf(t) > -1
                },
                get: function(n) {
                    return t[e.indexOf(n)]
                },
                set: function(n, r) {
                    e.indexOf(n) === -1 && (e.push(n),
                    t.push(r))
                },
                delete: function(n) {
                    var r = e.indexOf(n);
                    r > -1 && (e.splice(r, 1),
                    t.splice(r, 1))
                }
            }
        }()
          , s = function(e) {
            return new Event(e,{
                bubbles: !0
            })
        };
        try {
            new Event("test")
        } catch (e) {
            s = function(e) {
                var t = document.createEvent("Event");
                return t.initEvent(e, !0, !1),
                t
            }
        }
        var a = null;
        "undefined" == typeof window || "function" != typeof window.getComputedStyle ? (a = function(e) {
            return e
        }
        ,
        a.destroy = function(e) {
            return e
        }
        ,
        a.update = function(e) {
            return e
        }
        ) : (a = function(e, t) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], function(e) {
                return n(e, t)
            }),
            e
        }
        ,
        a.destroy = function(e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], r),
            e
        }
        ,
        a.update = function(e) {
            return e && Array.prototype.forEach.call(e.length ? e : [e], i),
            e
        }
        ),
        t.exports = a
    })
}
]);


var sheet = document.createElement('style'),  
  $rangeInput = $('.range input'),
  prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

document.body.appendChild(sheet);

var getTrackStyle = function (el) {  
  var curVal = el.value,
      val = (curVal - 1) * 16.666666667,
      style = '';
  
  // Set active label
  $('.range-labels li').removeClass('active selected');
  
  var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');
  
  curLabel.addClass('active selected');
  curLabel.prevAll().addClass('selected');
  
  // Change background gradient
  // for (var i = 0; i < prefs.length; i++) {
  //   style += '.range {background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #fff ' + val + '%, #fff 100%)}';
  //   style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
  // }

  return style;
}

$rangeInput.on('input', function () {
  sheet.textContent = getTrackStyle(this);
});

// Change input value on label click
$('.range-labels li').on('click', function () {
  var index = $(this).index();
  
  $rangeInput.val(index + 1).trigger('input');
  
});
