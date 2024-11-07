(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [9807], {
        55580: function(t, r, n) {
            var e = n(56110)(n(9325), "DataView");
            t.exports = e
        },
        32804: function(t, r, n) {
            var e = n(56110)(n(9325), "Promise");
            t.exports = e
        },
        76545: function(t, r, n) {
            var e = n(56110)(n(9325), "Set");
            t.exports = e
        },
        38859: function(t, r, n) {
            var e = n(53661),
                o = n(31380),
                u = n(51459);

            function c(t) {
                var r = -1,
                    n = null == t ? 0 : t.length;
                for (this.__data__ = new e; ++r < n;) this.add(t[r])
            }
            c.prototype.add = c.prototype.push = o, c.prototype.has = u, t.exports = c
        },
        37217: function(t, r, n) {
            var e = n(80079),
                o = n(51420),
                u = n(90938),
                c = n(63605),
                i = n(29817),
                f = n(80945);

            function a(t) {
                var r = this.__data__ = new e(t);
                this.size = r.size
            }
            a.prototype.clear = o, a.prototype.delete = u, a.prototype.get = c, a.prototype.has = i, a.prototype.set = f, t.exports = a
        },
        37828: function(t, r, n) {
            var e = n(9325).Uint8Array;
            t.exports = e
        },
        28303: function(t, r, n) {
            var e = n(56110)(n(9325), "WeakMap");
            t.exports = e
        },
        79770: function(t) {
            t.exports = function(t, r) {
                for (var n = -1, e = null == t ? 0 : t.length, o = 0, u = []; ++n < e;) {
                    var c = t[n];
                    r(c, n, t) && (u[o++] = c)
                }
                return u
            }
        },
        70695: function(t, r, n) {
            var e = n(78096),
                o = n(72428),
                u = n(56449),
                c = n(3656),
                i = n(30361),
                f = n(37167),
                a = Object.prototype.hasOwnProperty;
            t.exports = function(t, r) {
                var n = u(t),
                    s = !n && o(t),
                    p = !n && !s && c(t),
                    l = !n && !s && !p && f(t),
                    v = n || s || p || l,
                    b = v ? e(t.length, String) : [],
                    y = b.length;
                for (var x in t) !r && !a.call(t, x) || v && ("length" == x || p && ("offset" == x || "parent" == x) || l && ("buffer" == x || "byteLength" == x || "byteOffset" == x) || i(x, y)) || b.push(x);
                return b
            }
        },
        14528: function(t) {
            t.exports = function(t, r) {
                for (var n = -1, e = r.length, o = t.length; ++n < e;) t[o + n] = r[n];
                return t
            }
        },
        14248: function(t) {
            t.exports = function(t, r) {
                for (var n = -1, e = null == t ? 0 : t.length; ++n < e;)
                    if (r(t[n], n, t)) return !0;
                return !1
            }
        },
        43360: function(t, r, n) {
            var e = n(93243);
            t.exports = function(t, r, n) {
                "__proto__" == r && e ? e(t, r, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : t[r] = n
            }
        },
        82199: function(t, r, n) {
            var e = n(14528),
                o = n(56449);
            t.exports = function(t, r, n) {
                var u = r(t);
                return o(t) ? u : e(u, n(t))
            }
        },
        28077: function(t) {
            t.exports = function(t, r) {
                return null != t && r in Object(t)
            }
        },
        27534: function(t, r, n) {
            var e = n(72552),
                o = n(40346);
            t.exports = function(t) {
                return o(t) && "[object Arguments]" == e(t)
            }
        },
        60270: function(t, r, n) {
            var e = n(87068),
                o = n(40346);
            t.exports = function t(r, n, u, c, i) {
                return r === n || (null == r || null == n || !o(r) && !o(n) ? r != r && n != n : e(r, n, u, c, t, i))
            }
        },
        87068: function(t, r, n) {
            var e = n(37217),
                o = n(25911),
                u = n(21986),
                c = n(50689),
                i = n(5861),
                f = n(56449),
                a = n(3656),
                s = n(37167),
                p = "[object Arguments]",
                l = "[object Array]",
                v = "[object Object]",
                b = Object.prototype.hasOwnProperty;
            t.exports = function(t, r, n, y, x, h) {
                var _ = f(t),
                    j = f(r),
                    d = _ ? l : i(t),
                    g = j ? l : i(r),
                    w = (d = d == p ? v : d) == v,
                    m = (g = g == p ? v : g) == v,
                    O = d == g;
                if (O && a(t)) {
                    if (!a(r)) return !1;
                    _ = !0, w = !1
                }
                if (O && !w) return h || (h = new e), _ || s(t) ? o(t, r, n, y, x, h) : u(t, r, d, n, y, x, h);
                if (!(1 & n)) {
                    var A = w && b.call(t, "__wrapped__"),
                        k = m && b.call(r, "__wrapped__");
                    if (A || k) {
                        var S = A ? t.value() : t,
                            z = k ? r.value() : r;
                        return h || (h = new e), x(S, z, n, y, h)
                    }
                }
                return !!O && (h || (h = new e), c(t, r, n, y, x, h))
            }
        },
        41799: function(t, r, n) {
            var e = n(37217),
                o = n(60270);
            t.exports = function(t, r, n, u) {
                var c = n.length,
                    i = c,
                    f = !u;
                if (null == t) return !i;
                for (t = Object(t); c--;) {
                    var a = n[c];
                    if (f && a[2] ? a[1] !== t[a[0]] : !(a[0] in t)) return !1
                }
                for (; ++c < i;) {
                    var s = (a = n[c])[0],
                        p = t[s],
                        l = a[1];
                    if (f && a[2]) {
                        if (void 0 === p && !(s in t)) return !1
                    } else {
                        var v = new e;
                        if (u) var b = u(p, l, s, t, r, v);
                        if (!(void 0 === b ? o(l, p, 3, u, v) : b)) return !1
                    }
                }
                return !0
            }
        },
        4901: function(t, r, n) {
            var e = n(72552),
                o = n(30294),
                u = n(40346),
                c = {};
            c["[object Float32Array]"] = c["[object Float64Array]"] = c["[object Int8Array]"] = c["[object Int16Array]"] = c["[object Int32Array]"] = c["[object Uint8Array]"] = c["[object Uint8ClampedArray]"] = c["[object Uint16Array]"] = c["[object Uint32Array]"] = !0, c["[object Arguments]"] = c["[object Array]"] = c["[object ArrayBuffer]"] = c["[object Boolean]"] = c["[object DataView]"] = c["[object Date]"] = c["[object Error]"] = c["[object Function]"] = c["[object Map]"] = c["[object Number]"] = c["[object Object]"] = c["[object RegExp]"] = c["[object Set]"] = c["[object String]"] = c["[object WeakMap]"] = !1, t.exports = function(t) {
                return u(t) && o(t.length) && !!c[e(t)]
            }
        },
        15389: function(t, r, n) {
            var e = n(93663),
                o = n(87978),
                u = n(83488),
                c = n(56449),
                i = n(50583);
            t.exports = function(t) {
                return "function" == typeof t ? t : null == t ? u : "object" == typeof t ? c(t) ? o(t[0], t[1]) : e(t) : i(t)
            }
        },
        88984: function(t, r, n) {
            var e = n(55527),
                o = n(3650),
                u = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!e(t)) return o(t);
                var r = [];
                for (var n in Object(t)) u.call(t, n) && "constructor" != n && r.push(n);
                return r
            }
        },
        93663: function(t, r, n) {
            var e = n(41799),
                o = n(10776),
                u = n(67197);
            t.exports = function(t) {
                var r = o(t);
                return 1 == r.length && r[0][2] ? u(r[0][0], r[0][1]) : function(n) {
                    return n === t || e(n, t, r)
                }
            }
        },
        87978: function(t, r, n) {
            var e = n(60270),
                o = n(58156),
                u = n(80631),
                c = n(28586),
                i = n(30756),
                f = n(67197),
                a = n(77797);
            t.exports = function(t, r) {
                return c(t) && i(r) ? f(a(t), r) : function(n) {
                    var c = o(n, t);
                    return void 0 === c && c === r ? u(n, t) : e(r, c, 3)
                }
            }
        },
        47237: function(t) {
            t.exports = function(t) {
                return function(r) {
                    return null == r ? void 0 : r[t]
                }
            }
        },
        17255: function(t, r, n) {
            var e = n(47422);
            t.exports = function(t) {
                return function(r) {
                    return e(r, t)
                }
            }
        },
        78096: function(t) {
            t.exports = function(t, r) {
                for (var n = -1, e = Array(t); ++n < t;) e[n] = r(n);
                return e
            }
        },
        27301: function(t) {
            t.exports = function(t) {
                return function(r) {
                    return t(r)
                }
            }
        },
        19219: function(t) {
            t.exports = function(t, r) {
                return t.has(r)
            }
        },
        93243: function(t, r, n) {
            var e = n(56110),
                o = function() {
                    try {
                        var t = e(Object, "defineProperty");
                        return t({}, "", {}), t
                    } catch (t) {}
                }();
            t.exports = o
        },
        25911: function(t, r, n) {
            var e = n(38859),
                o = n(14248),
                u = n(19219);
            t.exports = function(t, r, n, c, i, f) {
                var a = 1 & n,
                    s = t.length,
                    p = r.length;
                if (s != p && !(a && p > s)) return !1;
                var l = f.get(t),
                    v = f.get(r);
                if (l && v) return l == r && v == t;
                var b = -1,
                    y = !0,
                    x = 2 & n ? new e : void 0;
                for (f.set(t, r), f.set(r, t); ++b < s;) {
                    var h = t[b],
                        _ = r[b];
                    if (c) var j = a ? c(_, h, b, r, t, f) : c(h, _, b, t, r, f);
                    if (void 0 !== j) {
                        if (j) continue;
                        y = !1;
                        break
                    }
                    if (x) {
                        if (!o(r, (function(t, r) {
                                if (!u(x, r) && (h === t || i(h, t, n, c, f))) return x.push(r)
                            }))) {
                            y = !1;
                            break
                        }
                    } else if (h !== _ && !i(h, _, n, c, f)) {
                        y = !1;
                        break
                    }
                }
                return f.delete(t), f.delete(r), y
            }
        },
        21986: function(t, r, n) {
            var e = n(51873),
                o = n(37828),
                u = n(75288),
                c = n(25911),
                i = n(20317),
                f = n(84247),
                a = e ? e.prototype : void 0,
                s = a ? a.valueOf : void 0;
            t.exports = function(t, r, n, e, a, p, l) {
                switch (n) {
                    case "[object DataView]":
                        if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset) return !1;
                        t = t.buffer, r = r.buffer;
                    case "[object ArrayBuffer]":
                        return !(t.byteLength != r.byteLength || !p(new o(t), new o(r)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return u(+t, +r);
                    case "[object Error]":
                        return t.name == r.name && t.message == r.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return t == r + "";
                    case "[object Map]":
                        var v = i;
                    case "[object Set]":
                        var b = 1 & e;
                        if (v || (v = f), t.size != r.size && !b) return !1;
                        var y = l.get(t);
                        if (y) return y == r;
                        e |= 2, l.set(t, r);
                        var x = c(v(t), v(r), e, a, p, l);
                        return l.delete(t), x;
                    case "[object Symbol]":
                        if (s) return s.call(t) == s.call(r)
                }
                return !1
            }
        },
        50689: function(t, r, n) {
            var e = n(50002),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t, r, n, u, c, i) {
                var f = 1 & n,
                    a = e(t),
                    s = a.length;
                if (s != e(r).length && !f) return !1;
                for (var p = s; p--;) {
                    var l = a[p];
                    if (!(f ? l in r : o.call(r, l))) return !1
                }
                var v = i.get(t),
                    b = i.get(r);
                if (v && b) return v == r && b == t;
                var y = !0;
                i.set(t, r), i.set(r, t);
                for (var x = f; ++p < s;) {
                    var h = t[l = a[p]],
                        _ = r[l];
                    if (u) var j = f ? u(_, h, l, r, t, i) : u(h, _, l, t, r, i);
                    if (!(void 0 === j ? h === _ || c(h, _, n, u, i) : j)) {
                        y = !1;
                        break
                    }
                    x || (x = "constructor" == l)
                }
                if (y && !x) {
                    var d = t.constructor,
                        g = r.constructor;
                    d == g || !("constructor" in t) || !("constructor" in r) || "function" == typeof d && d instanceof d && "function" == typeof g && g instanceof g || (y = !1)
                }
                return i.delete(t), i.delete(r), y
            }
        },
        50002: function(t, r, n) {
            var e = n(82199),
                o = n(4664),
                u = n(95950);
            t.exports = function(t) {
                return e(t, u, o)
            }
        },
        10776: function(t, r, n) {
            var e = n(30756),
                o = n(95950);
            t.exports = function(t) {
                for (var r = o(t), n = r.length; n--;) {
                    var u = r[n],
                        c = t[u];
                    r[n] = [u, c, e(c)]
                }
                return r
            }
        },
        4664: function(t, r, n) {
            var e = n(79770),
                o = n(63345),
                u = Object.prototype.propertyIsEnumerable,
                c = Object.getOwnPropertySymbols,
                i = c ? function(t) {
                    return null == t ? [] : (t = Object(t), e(c(t), (function(r) {
                        return u.call(t, r)
                    })))
                } : o;
            t.exports = i
        },
        5861: function(t, r, n) {
            var e = n(55580),
                o = n(68223),
                u = n(32804),
                c = n(76545),
                i = n(28303),
                f = n(72552),
                a = n(47473),
                s = "[object Map]",
                p = "[object Promise]",
                l = "[object Set]",
                v = "[object WeakMap]",
                b = "[object DataView]",
                y = a(e),
                x = a(o),
                h = a(u),
                _ = a(c),
                j = a(i),
                d = f;
            (e && d(new e(new ArrayBuffer(1))) != b || o && d(new o) != s || u && d(u.resolve()) != p || c && d(new c) != l || i && d(new i) != v) && (d = function(t) {
                var r = f(t),
                    n = "[object Object]" == r ? t.constructor : void 0,
                    e = n ? a(n) : "";
                if (e) switch (e) {
                    case y:
                        return b;
                    case x:
                        return s;
                    case h:
                        return p;
                    case _:
                        return l;
                    case j:
                        return v
                }
                return r
            }), t.exports = d
        },
        49326: function(t, r, n) {
            var e = n(31769),
                o = n(72428),
                u = n(56449),
                c = n(30361),
                i = n(30294),
                f = n(77797);
            t.exports = function(t, r, n) {
                for (var a = -1, s = (r = e(r, t)).length, p = !1; ++a < s;) {
                    var l = f(r[a]);
                    if (!(p = null != t && n(t, l))) break;
                    t = t[l]
                }
                return p || ++a != s ? p : !!(s = null == t ? 0 : t.length) && i(s) && c(l, s) && (u(t) || o(t))
            }
        },
        30361: function(t) {
            var r = /^(?:0|[1-9]\d*)$/;
            t.exports = function(t, n) {
                var e = typeof t;
                return !!(n = null == n ? 9007199254740991 : n) && ("number" == e || "symbol" != e && r.test(t)) && t > -1 && t % 1 == 0 && t < n
            }
        },
        55527: function(t) {
            var r = Object.prototype;
            t.exports = function(t) {
                var n = t && t.constructor;
                return t === ("function" == typeof n && n.prototype || r)
            }
        },
        30756: function(t, r, n) {
            var e = n(23805);
            t.exports = function(t) {
                return t == t && !e(t)
            }
        },
        20317: function(t) {
            t.exports = function(t) {
                var r = -1,
                    n = Array(t.size);
                return t.forEach((function(t, e) {
                    n[++r] = [e, t]
                })), n
            }
        },
        67197: function(t) {
            t.exports = function(t, r) {
                return function(n) {
                    return null != n && (n[t] === r && (void 0 !== r || t in Object(n)))
                }
            }
        },
        3650: function(t, r, n) {
            var e = n(74335)(Object.keys, Object);
            t.exports = e
        },
        86009: function(t, r, n) {
            t = n.nmd(t);
            var e = n(34840),
                o = r && !r.nodeType && r,
                u = o && t && !t.nodeType && t,
                c = u && u.exports === o && e.process,
                i = function() {
                    try {
                        var t = u && u.require && u.require("util").types;
                        return t || c && c.binding && c.binding("util")
                    } catch (t) {}
                }();
            t.exports = i
        },
        74335: function(t) {
            t.exports = function(t, r) {
                return function(n) {
                    return t(r(n))
                }
            }
        },
        31380: function(t) {
            t.exports = function(t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this
            }
        },
        51459: function(t) {
            t.exports = function(t) {
                return this.__data__.has(t)
            }
        },
        84247: function(t) {
            t.exports = function(t) {
                var r = -1,
                    n = Array(t.size);
                return t.forEach((function(t) {
                    n[++r] = t
                })), n
            }
        },
        51420: function(t, r, n) {
            var e = n(80079);
            t.exports = function() {
                this.__data__ = new e, this.size = 0
            }
        },
        90938: function(t) {
            t.exports = function(t) {
                var r = this.__data__,
                    n = r.delete(t);
                return this.size = r.size, n
            }
        },
        63605: function(t) {
            t.exports = function(t) {
                return this.__data__.get(t)
            }
        },
        29817: function(t) {
            t.exports = function(t) {
                return this.__data__.has(t)
            }
        },
        80945: function(t, r, n) {
            var e = n(80079),
                o = n(68223),
                u = n(53661);
            t.exports = function(t, r) {
                var n = this.__data__;
                if (n instanceof e) {
                    var c = n.__data__;
                    if (!o || c.length < 199) return c.push([t, r]), this.size = ++n.size, this;
                    n = this.__data__ = new u(c)
                }
                return n.set(t, r), this.size = n.size, this
            }
        },
        80631: function(t, r, n) {
            var e = n(28077),
                o = n(49326);
            t.exports = function(t, r) {
                return null != t && o(t, r, e)
            }
        },
        83488: function(t) {
            t.exports = function(t) {
                return t
            }
        },
        72428: function(t, r, n) {
            var e = n(27534),
                o = n(40346),
                u = Object.prototype,
                c = u.hasOwnProperty,
                i = u.propertyIsEnumerable,
                f = e(function() {
                    return arguments
                }()) ? e : function(t) {
                    return o(t) && c.call(t, "callee") && !i.call(t, "callee")
                };
            t.exports = f
        },
        64894: function(t, r, n) {
            var e = n(1882),
                o = n(30294);
            t.exports = function(t) {
                return null != t && o(t.length) && !e(t)
            }
        },
        3656: function(t, r, n) {
            t = n.nmd(t);
            var e = n(9325),
                o = n(89935),
                u = r && !r.nodeType && r,
                c = u && t && !t.nodeType && t,
                i = c && c.exports === u ? e.Buffer : void 0,
                f = (i ? i.isBuffer : void 0) || o;
            t.exports = f
        },
        30294: function(t) {
            t.exports = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
            }
        },
        37167: function(t, r, n) {
            var e = n(4901),
                o = n(27301),
                u = n(86009),
                c = u && u.isTypedArray,
                i = c ? o(c) : e;
            t.exports = i
        },
        95950: function(t, r, n) {
            var e = n(70695),
                o = n(88984),
                u = n(64894);
            t.exports = function(t) {
                return u(t) ? e(t) : o(t)
            }
        },
        50583: function(t, r, n) {
            var e = n(47237),
                o = n(17255),
                u = n(28586),
                c = n(77797);
            t.exports = function(t) {
                return u(t) ? e(c(t)) : o(t)
            }
        },
        63345: function(t) {
            t.exports = function() {
                return []
            }
        },
        89935: function(t) {
            t.exports = function() {
                return !1
            }
        },
        73738: function(t) {
            function r(n) {
                return t.exports = r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, t.exports.__esModule = !0, t.exports.default = t.exports, r(n)
            }
            t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports
        }
    }
]);