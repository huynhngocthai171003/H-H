"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [4904], {
        48442: function(t, e) {
            var o;
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0,
                function(t) {
                    t.SQUARE = "square", t.ROUND = "round"
                }(o || (o = {}));
            var n = o;
            e.default = n, t.exports = e.default
        },
        90373: function(t, e) {
            var o;
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0,
                function(t) {
                    t.NONE = "none", t.SOFT_CORNERS = "soft-corners", t.ROUNDED = "rounded", t.SLANTED = "slanted", t.SCALLOPED = "scalloped", t.WAVY = "wavy", t.POINTED = "pointed", t.JAGGED = "jagged"
                }(o || (o = {}));
            var n = o;
            e.default = n, t.exports = e.default
        },
        71924: function(t, e) {
            var o;
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0,
                function(t) {
                    t.NONE = "none", t.SOLID = "solid", t.DASHED = "dashed"
                }(o || (o = {}));
            var n = o;
            e.default = n, t.exports = e.default
        },
        86320: function(t, e, o) {
            o.d(e, {
                jz: function() {
                    return b
                },
                ww: function() {
                    return g
                }
            });
            o(94226);
            var n = o(95443);

            function r(t) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, r(t)
            }

            function i(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(o), !0).forEach((function(e) {
                        a(t, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : i(Object(o)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return t
            }

            function a(t, e, o) {
                var n;
                return n = function(t, e) {
                    if ("object" != r(t) || !t) return t;
                    var o = t[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(t, e || "default");
                        if ("object" != r(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(e, "string"), (e = "symbol" == r(n) ? n : n + "") in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t
            }
            var s = "SITE_PALETTE_COLOR",
                l = "CUSTOM_COLOR",
                u = "THEME_COLOR";
            var d = function(t) {
                    return t && t.type === u
                },
                f = function(t) {
                    return t && t.type === s
                },
                v = function(t) {
                    return t && t.type === l
                },
                h = function(t) {
                    var e, o, r, i = (e = t.customColor.hslaValue, o = e.saturation, r = e.lightness, o *= 100, r *= 100, c(c({}, e), {}, {
                            saturation: o,
                            lightness: r
                        })),
                        a = {
                            userFormat: t.customColor.userFormat,
                            values: i
                        },
                        s = (0, n.JW)(a);
                    return {
                        type: l,
                        customColor: s
                    }
                },
                p = function(t) {
                    var e, o, n;
                    return {
                        colorName: null !== (e = t.id) && void 0 !== e ? e : t.colorName,
                        alphaModifier: null !== (o = null !== (n = t.alpha) && void 0 !== n ? n : t.alphaModifier) && void 0 !== o ? o : 1
                    }
                },
                y = new WeakMap;

            function b(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document.documentElement;
                if (!t || !o) return null;
                var r = t.customColor,
                    i = t.sitePaletteColor,
                    c = function(t) {
                        if (y.has(t)) return y.get(t);
                        var e = getComputedStyle(t);
                        return y.set(t, e), e
                    }(o);
                if (d(t) && e) return c.getPropertyValue(e);
                if (f(t)) {
                    var a = p(i),
                        s = a.colorName,
                        l = a.alphaModifier,
                        u = c.getPropertyValue("--".concat(s, "-hsl"));
                    return "hsla(".concat(u, ",").concat(l, ")")
                }
                if (v(t)) {
                    var b = null != r && r.hslaValue ? h(t) : t;
                    return (0, n.JW)(b.customColor)
                }
                return null
            }

            function g(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if (!t) return null;
                var o = t.customColor,
                    r = t.sitePaletteColor;
                if (d(t) && e) return "var(".concat(e, ")");
                if (f(t)) {
                    var i = p(r),
                        c = i.colorName,
                        a = i.alphaModifier;
                    return "hsla(var(--".concat(c, "-hsl),").concat(a, ")")
                }
                if (v(t)) {
                    var s = null != o && o.hslaValue ? h(t) : t;
                    return (0, n.JW)(s.customColor)
                }
                return null
            }
        },
        84076: function(t, e, o) {
            o.r(e), o.d(e, {
                SectionDivider: function() {
                    return z
                },
                default: function() {
                    return Y
                }
            });
            o(94226);
            var n = o(68651),
                r = o(90373),
                i = o.n(r),
                c = o(71924),
                a = o.n(c),
                s = o(48442),
                l = o.n(s),
                u = o(67373),
                d = function(t) {
                    var e = t.value,
                        o = t.unit,
                        n = t.clientWidth,
                        r = t.clientHeight;
                    return "vw" === o || "%" === o ? n * (.01 * e) : "vh" === o ? r * (.01 * e) : "vmax" === o ? Math.max(n, r) * (.01 * e) : "vmin" === o ? Math.min(n, r) * (.01 * e) : e
                },
                f = o(86320),
                v = ".page-section, [data-course-item-footer]";

            function h() {
                return Array.from(document.querySelectorAll(v)).filter((function(t) {
                    var e;
                    return "none" !== (null === (e = window.getComputedStyle(t.parentElement)) || void 0 === e ? void 0 : e.display)
                }))
            }
            var p = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.width,
                        o = void 0 === e ? 1 : e,
                        n = t.height,
                        r = void 0 === n ? 1 : n,
                        i = t.offsetX,
                        c = void 0 === i ? 0 : i,
                        a = t.offsetY,
                        s = void 0 === a ? 0 : a,
                        l = t.iterations,
                        u = void 0 === l ? 1 : l,
                        d = t.isFlipX,
                        f = void 0 !== d && d,
                        v = f ? 1 : 1 - r,
                        h = .5 * o,
                        p = f ? -r : r,
                        y = ["l0,0", "c0,0 ".concat(.5 * h, ",").concat(p, " ").concat(h, ",").concat(p), "s".concat(h, ",").concat(-p, " ").concat(h, ",").concat(-p), "l0,0"].join(" ").repeat(u);
                    return {
                        shape: ["M".concat(c, ", ").concat(s), "L".concat(c, ", ").concat(v), y, "L1, -1", "L0, -1", "z"].join(" "),
                        stroke: ["M".concat(c, ", ").concat(s), "L".concat(c, ", ").concat(v), y].join(" ")
                    }
                },
                y = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.width,
                        o = void 0 === e ? 1 : e,
                        n = t.height,
                        r = void 0 === n ? 1 : n,
                        i = t.offsetX,
                        c = void 0 === i ? 0 : i,
                        a = t.offsetY,
                        s = void 0 === a ? 0 : a,
                        l = t.iterations,
                        u = void 0 === l ? 1 : l,
                        d = t.isFlipX,
                        f = void 0 !== d && d,
                        v = t.isFlipY,
                        h = void 0 !== v && v,
                        p = h ? c : 1 - c,
                        y = f ? 1 - r : 1,
                        b = h ? o : -o,
                        g = f ? r : -r,
                        O = ["l0,0", "c".concat(.25 * b, ",0 ").concat(.5 * b, ",0 ").concat(b, ",").concat(g), "l0,".concat(-g)].join(" ").repeat(u);
                    return {
                        shape: ["M".concat(p, ", ").concat(s), "L".concat(p, ", ").concat(y), O, "L".concat(1 - p, ", -1"), "L".concat(p, ", -1"), "z"].join(" "),
                        stroke: ["M".concat(p, ", ").concat(s), "L".concat(p, ", ").concat(y), O].join(" ")
                    }
                },
                b = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.width,
                        o = void 0 === e ? 1 : e,
                        n = t.height,
                        r = void 0 === n ? 1 : n,
                        i = t.offsetX,
                        c = void 0 === i ? 0 : i,
                        a = t.offsetY,
                        s = void 0 === a ? 0 : a,
                        l = t.iterations,
                        u = void 0 === l ? 1 : l,
                        d = t.isFlipX,
                        f = .5 * o,
                        v = .64 * r * (void 0 !== d && d ? -1 : 1),
                        h = ["c".concat(.5 * f, ",").concat(-v, " ").concat(.5 * f, ",").concat(-v, " ").concat(f, ",0"), "s".concat(.5 * f, ",").concat(v, " ").concat(f, ",0")].join(" ").repeat(u);
                    return {
                        shape: ["M".concat(c, ", ").concat(s), "L".concat(c, ", ").concat(1 - .5 * r), h, "L1, -1", "L0, -1", "z"].join(" "),
                        stroke: ["M".concat(c, ", ").concat(s), "L".concat(c, ", ").concat(1 - .5 * r), h].join(" ")
                    }
                },
                g = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.width,
                        o = void 0 === e ? 1 : e,
                        n = t.height,
                        r = void 0 === n ? 1 : n,
                        i = t.offsetX,
                        c = void 0 === i ? 0 : i,
                        a = t.offsetY,
                        s = void 0 === a ? 0 : a,
                        l = t.iterations,
                        u = void 0 === l ? 1 : l,
                        d = t.isFlipX,
                        f = void 0 !== d && d,
                        v = t.isFlipY,
                        h = void 0 !== v && v,
                        p = h ? 1 - c : c,
                        y = f ? 1 - r : 1,
                        b = f ? r : -r,
                        g = ["l0,0", "l".concat(h ? -o : o, ",").concat(b), "l0,".concat(-b)].join(" ").repeat(u);
                    return {
                        shape: ["M".concat(p, ", ").concat(s), "L".concat(p, ", ").concat(y), g, "L".concat(1 - p, ", -1"), "L".concat(p, ", -1"), "z"].join(" "),
                        stroke: ["M".concat(p, ", ").concat(s), "L".concat(p, ", ").concat(y), g].join(" ")
                    }
                },
                O = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.width,
                        o = void 0 === e ? 1 : e,
                        n = t.height,
                        r = void 0 === n ? 1 : n,
                        i = t.offsetX,
                        c = void 0 === i ? 0 : i,
                        a = t.offsetY,
                        s = void 0 === a ? 0 : a,
                        l = t.iterations,
                        u = void 0 === l ? 1 : l,
                        d = t.isFlipX,
                        f = void 0 !== d && d,
                        v = f ? 1 - r : 1,
                        h = f ? r : -r,
                        p = .5 * o,
                        y = ["l0,0", "l".concat(p, ",").concat(h), "l".concat(p, ",").concat(-h)].join(" ").repeat(u);
                    return {
                        shape: ["M".concat(c, ", ").concat(s), "L".concat(c, ", ").concat(v), y, "L1, -1", "L0, -1", "z"].join(" "),
                        stroke: ["M".concat(c, ", ").concat(s), "L".concat(c, ", ").concat(v), y].join(" ")
                    }
                },
                m = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.width,
                        o = void 0 === e ? 1 : e,
                        n = t.height,
                        r = void 0 === n ? 1 : n,
                        i = t.offsetX,
                        c = void 0 === i ? 0 : i,
                        a = t.offsetY,
                        s = void 0 === a ? 0 : a,
                        l = t.iterations,
                        u = void 0 === l ? 1 : l,
                        d = t.isFlipX,
                        f = void 0 !== d && d,
                        v = t.isFlipY,
                        h = void 0 !== v && v,
                        p = h ? 1 - c : c,
                        y = f ? 1 : 1 - r,
                        b = h ? -o : o,
                        g = f ? -r : r,
                        O = ["l0,0", "l".concat(.75 * b, ",").concat(g), "l".concat(.25 * b, ",").concat(-g)].join(" ").repeat(u);
                    return {
                        shape: ["M".concat(p, ", ").concat(s), "L".concat(p, ", ").concat(y), O, "L".concat(1 - p, ", -1"), "L".concat(p, ", -1"), "z"].join(" "),
                        stroke: ["M".concat(p, ", ").concat(s), "L".concat(p, ", ").concat(y), O].join(" ")
                    }
                },
                w = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.aspect,
                        o = void 0 === e ? 1 : e,
                        n = t.width,
                        r = void 0 === n ? 1 : n,
                        i = t.height,
                        c = void 0 === i ? 1 : i,
                        a = t.offsetX,
                        s = void 0 === a ? 0 : a,
                        l = (t.offsetY, t.isFlipX),
                        u = void 0 !== l && l,
                        d = u ? 1 : 1 - c,
                        f = u ? -c : c,
                        v = Math.min(.5 * r, o),
                        h = .75 * c,
                        p = .75 * v,
                        y = u ? -1 : 1,
                        b = r - 2 * v,
                        g = ["l0,0", "c0,".concat(h * y, " ").concat(v - p, ",").concat(f, " ").concat(v, ",").concat(f), "h".concat(b), "c".concat(p, ",0 ").concat(v, ",").concat(h * y - f, " ").concat(v, ",").concat(-f), "l0,0"].join(" ");
                    return {
                        shape: ["M".concat(s, ", ").concat(d), g, "L1, -1", "L0, -1", "z"].join(" "),
                        stroke: ["M".concat(s, ", ").concat(d), g].join(" ")
                    }
                },
                j = {
                    rounded: p,
                    scalloped: y,
                    wavy: b,
                    slanted: g,
                    pointed: O,
                    jagged: m,
                    "soft-corners": w
                };

            function P(t) {
                return P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, P(t)
            }

            function S(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function L(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? S(Object(o), !0).forEach((function(e) {
                        N(t, e, o[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : S(Object(o)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                    }))
                }
                return t
            }

            function k(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var n = e[o];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, _(n.key), n)
                }
            }

            function E(t, e, o) {
                return e = C(e),
                    function(t, e) {
                        if (e && ("object" === P(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, M() ? Reflect.construct(e, o || [], C(t).constructor) : e.apply(t, o))
            }

            function M() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (M = function() {
                    return !!t
                })()
            }

            function C(t) {
                return C = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, C(t)
            }

            function D(t, e) {
                return D = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, D(t, e)
            }

            function N(t, e, o) {
                return (e = _(e)) in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t
            }

            function _(t) {
                var e = function(t, e) {
                    if ("object" != P(t) || !t) return t;
                    var o = t[Symbol.toPrimitive];
                    if (void 0 !== o) {
                        var n = o.call(t, e || "default");
                        if ("object" != P(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == P(e) ? e : e + ""
            }
            var R = "sections:change",
                z = function(t) {
                    function e(t) {
                        var o;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), N(o = E(this, e), "resizeObserver", null), N(o, "onResize", (function() {
                            o.isDestroyed || (o.update(), o.refreshStyles())
                        })), o.node = t, o.section = o.node.closest("section"), o.display = o.section.querySelector(".section-divider-display");
                        var n = o.section.dataset.currentContext;
                        o.currentContext = JSON.parse(n), o.currentContext.divider && o.setState(L({}, o.currentContext.divider));
                        var r = o.section.dataset.sectionId;
                        return o.sectionId = r, o.ref = {
                            style: o.display.querySelector("[data-section-divider-style]"),
                            block: o.display.querySelector(".section-divider-block"),
                            svgClipPath: o.display.querySelector("clipPath"),
                            svgClipPathContainer: o.display.querySelector(".section-divider-svg-clip"),
                            svgPath: o.display.querySelector(".section-divider-clip"),
                            svgPathStroke: o.display.querySelector(".section-divider-stroke")
                        }, o.bindListeners(), o
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && D(t, e)
                    }(e, t), o = e, (r = [{
                        key: "bindListeners",
                        value: function() {
                            n.A.on(this.onResize, 10), this.resizeObserver = new ResizeObserver(this.onResize), this.resizeObserver.observe(this.section), window.Y && window.Y.Global && window.Y.Global.on(R, this.refreshStyles, this), this.onResize()
                        }
                    }, {
                        key: "unbindListeners",
                        value: function() {
                            this.resizeObserver && this.resizeObserver.disconnect(), n.A.off(this.onResize), window.Y && window.Y.Global && window.Y.Global.detach(R, this.refreshStyles, this)
                        }
                    }, {
                        key: "refreshStyles",
                        value: function() {
                            var t = this,
                                e = this.state,
                                o = e.type,
                                n = e.height,
                                r = e.stroke,
                                c = o === i().NONE ? "0px" : "".concat(n.value).concat(n.unit),
                                s = h(),
                                u = s.findIndex((function(e) {
                                    return e === t.section
                                })),
                                d = s.length - u,
                                v = (null == r ? void 0 : r.style) !== a().NONE && r.thickness ? "".concat(r.thickness.value).concat(r.thickness.unit) : 0,
                                p = r.style === a().DASHED ? "".concat(r.dashLength.value).concat(r.dashLength.unit, " calc(").concat(r.thickness.value).concat(r.thickness.unit, " + ").concat(r.gapLength.value).concat(r.gapLength.unit, ")") : 0,
                                y = r.style === a().DASHED ? r.linecap : l().SQUARE;
                            this.display.style.setProperty("--section-divider-stroke-color", (0, f.ww)(r.color)), this.display.style.setProperty("--stroke-thickness", v), this.display.style.setProperty("--stroke-dasharray", p), this.display.style.setProperty("--stroke-linecap", y);
                            var b = function(t) {
                                    var e, o = h(),
                                        n = o.findIndex((function(e) {
                                            return e === t
                                        }));
                                    if (-1 !== n || !document.contains(t)) {
                                        var r = o[n + 1];
                                        return null != r && null !== (e = r.dataset) && void 0 !== e && e.sectionId ? '[data-section-id="'.concat(r.dataset.sectionId, '"]') : null != r && r.hasAttribute("data-course-item-footer") ? "[data-course-item-footer]" : void(r && console.error("Invalid page element was found"))
                                    }
                                    console.error("The divider page element was not found within the visible page elements")
                                }(this.section),
                                g = '\n      [data-section-id="'.concat(this.sectionId, '"] { \n        --divider-height: ').concat(c, "; \n        --z-index: ").concat(d, ";\n      }\n    ");
                            b && (g += "\n        ".concat(b, " {\n          --previous-section-divider-offset: ").concat(c, ";\n        }\n      ")), this.ref.style.innerHTML = g
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var t = this.state.type,
                                e = this.state,
                                o = e.width,
                                n = e.offset,
                                r = e.stroke,
                                c = e.isFlipY,
                                s = e.isFlipX,
                                l = "M-100,0.5 L-100,1.5";
                            if (t === i().NONE) return this.ref.svgClipPathContainer.style.display = "none", void this.ref.svgPathStroke.setAttribute("d", "".concat(l, " M0,1 L1,1"));
                            var u = this.node.getBoundingClientRect(),
                                f = u.width,
                                v = document.documentElement.clientHeight,
                                h = this.ref.block.getBoundingClientRect(),
                                p = j[t];
                            if (!(f <= 0 || v <= 0)) {
                                var y = r.style !== a().NONE ? d(L(L({}, r.thickness), {}, {
                                        clientWidth: f,
                                        clientHeight: v
                                    })) : 0,
                                    b = 0,
                                    g = f,
                                    O = 1;
                                t !== i().SOFT_CORNERS && (b = d(L(L({}, n), {}, {
                                    clientWidth: f,
                                    clientHeight: v
                                })), g = d(L(L({}, o), {}, {
                                    clientWidth: f,
                                    clientHeight: v
                                })), O = (O = Math.ceil((h.width + Math.abs(b)) / g)) % 2 == 0 ? O + 1 : O + 2), g += g === f ? y : 0;
                                var m = 1 / u.width,
                                    w = 1 / u.height,
                                    P = h.height / g,
                                    S = Math.round(g * m * 1e3) / 1e3,
                                    k = Math.round(Math.floor(h.height - .5) * w * 1e3) / 1e3,
                                    E = p({
                                        width: S,
                                        height: k,
                                        aspect: P,
                                        offsetX: -Math.round(b * m * 1e3) / 1e3 * .5 + .5 - S * O * .5,
                                        offsetY: 1 - k,
                                        iterations: O,
                                        isFlipX: s,
                                        isFlipY: c
                                    }),
                                    M = E.shape,
                                    C = E.stroke;
                                this.ref.svgClipPathContainer.style.display = "block", this.ref.svgPath.setAttribute("d", M), this.ref.svgPathStroke.setAttribute("d", "".concat(l, " ").concat(C))
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.isDestroyed = !0, this.unbindListeners(), delete this.ref
                        }
                    }]) && k(o.prototype, r), c && k(o, c), Object.defineProperty(o, "prototype", {
                        writable: !1
                    }), o;
                    var o, r, c
                }(u.A),
                Y = function(t) {
                    return new z(t)
                }
        }
    }
]);