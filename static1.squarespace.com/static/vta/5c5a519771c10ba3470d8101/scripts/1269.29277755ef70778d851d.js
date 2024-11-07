"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [1269], {
        94926: function(t, e, r) {
            r.d(e, {
                A: function() {
                    return g
                }
            });
            r(94226);
            var n = r(36630),
                o = r(21339),
                i = r(67373),
                a = r(73864),
                c = r(22902),
                u = {
                    none: {
                        type: "none"
                    },
                    liquid: {
                        type: "liquid",
                        scale: 2,
                        rotation: 270,
                        intensity: 10,
                        morphSpeed: 5,
                        seed: 100,
                        shadow: 8,
                        smoothness: 100,
                        speed: 50
                    },
                    pan: {
                        type: "parallax",
                        intensity: 12,
                        rotation: 15,
                        zoomStart: 10,
                        zoomEnd: 0
                    },
                    tilt: {
                        type: "parallax",
                        intensity: 15,
                        rotation: 90,
                        zoomStart: 0,
                        zoomEnd: 0
                    },
                    zoom: {
                        type: "parallax",
                        intensity: 0,
                        rotation: 90,
                        zoomStart: 30,
                        zoomEnd: 0
                    },
                    "film-grain": {
                        type: "filmGrain",
                        intensity: 50,
                        shadow: 0,
                        speed: 30
                    },
                    "refracted-lines": {
                        type: "refractedLines",
                        intensity: -25,
                        size: 120,
                        offsetScaleX: 50,
                        offsetScaleY: 50,
                        rotation: 135,
                        scale: 80,
                        interactionType: "scroll",
                        shiftIntensity: 25,
                        shiftSpeed: 20
                    },
                    "refracted-circles": {
                        type: "refractedCircles",
                        isLimitRings: !1,
                        numRings: 5,
                        centerOffsetSize: 55,
                        size: 150,
                        rotation: 2,
                        scaleEven: 100,
                        scaleOdd: 90,
                        scaleTaperEven: 10,
                        scaleTaperOdd: -10,
                        interactionType: "mouse",
                        shiftIntensity: 50,
                        shiftSpeed: 20,
                        isStepFlipRotation: !0,
                        isStepFlipX: !1,
                        isStepFlipY: !1
                    }
                };

            function f(t) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, f(t)
            }

            function l(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, v(n.key), n)
                }
            }

            function p(t, e, r) {
                return e = b(e), y(t, d() ? Reflect.construct(e, r || [], b(t).constructor) : e.apply(t, r))
            }

            function y(t, e) {
                if (e && ("object" === f(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }

            function d() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (d = function() {
                    return !!t
                })()
            }

            function b(t) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, b(t)
            }

            function m(t, e) {
                return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, m(t, e)
            }

            function h(t, e, r) {
                return (e = v(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function v(t) {
                var e = function(t, e) {
                    if ("object" != f(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != f(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == f(e) ? e : e + ""
            }
            var g = function(t) {
                function e(t, r) {
                    var o;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), h(o = p(this, e), "onImageLoaded", (function() {
                        o.isImageLoaded && o.component ? o.component.setProps({
                            imageNeedsUpdate: !0
                        }) : (o.isImageLoaded = !0, o.initComponent())
                    })), o.node = t, o.WebGLComponent = r, o.image = t.querySelector("img"), o.focalPoint = (0, c.TT)(o.image), o.section = t.closest("section");
                    var i = o.section.dataset,
                        u = i.sectionId,
                        f = i.currentStyles,
                        l = i.currentContext;
                    return o.sectionId = u, o.state = o.resolveImageEffectProps(JSON.parse(f), JSON.parse(l).backgroundMediaEffect), o.isImageLoaded = !1, o.isEnabled = n.A && !a.oZ, o.image ? o.isEnabled ? (o.checkImageLoaded(), o) : (o.image.style.visibility = "visible", y(o)) : y(o)
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
                    }), e && m(t, e)
                }(e, t), r = e, i = [{
                    key: "resolveImageEffectProps",
                    value: function(t, e) {
                        return e && "none" !== e.type ? e : t.imageEffect ? function(t) {
                            var e = u[t];
                            if (!e) throw new Error("No props found for type: ".concat(t));
                            return e
                        }(t.imageEffect) : {}
                    }
                }, {
                    key: "checkImageLoaded",
                    value: function() {
                        this.image.onload = this.onImageLoaded, this.image.complete && "" !== this.image.currentSrc && this.onImageLoaded()
                    }
                }, {
                    key: "initComponent",
                    value: function() {
                        var t = this.node.querySelector(".background-fx-canvas"),
                            e = this.state;
                        this.component = new o.A(this.WebGLComponent, t, function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? l(Object(r), !0).forEach((function(e) {
                                    h(t, e, r[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                }))
                            }
                            return t
                        }({
                            image: this.image,
                            focalPoint: this.focalPoint,
                            pixelRatio: Math.min(devicePixelRatio, 1.5)
                        }, e))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t;
                        null === (t = this.component) || void 0 === t || t.destroy()
                    }
                }], i && s(r.prototype, i), f && s(r, f), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), r;
                var r, i, f
            }(i.A)
        },
        61269: function(t, e, r) {
            r.d(e, {
                A: function() {
                    return s
                }
            });
            r(94226);

            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }

            function o(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, l(n.key), n)
                }
            }

            function i(t, e, r) {
                return e = u(e),
                    function(t, e) {
                        if (e && ("object" === n(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, a() ? Reflect.construct(e, r || [], u(t).constructor) : e.apply(t, r))
            }

            function a() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (a = function() {
                    return !!t
                })()
            }

            function c() {
                return c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, r) {
                    var n = function(t, e) {
                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
                        return t
                    }(t, e);
                    if (n) {
                        var o = Object.getOwnPropertyDescriptor(n, e);
                        return o.get ? o.get.call(arguments.length < 3 ? t : r) : o.value
                    }
                }, c.apply(this, arguments)
            }

            function u(t) {
                return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, u(t)
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }

            function l(t) {
                var e = function(t, e) {
                    if ("object" != n(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var o = r.call(t, e || "default");
                        if ("object" != n(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == n(e) ? e : e + ""
            }
            var s = function(t) {
                function e(t, r) {
                    var n, o, a, c;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), n = i(this, e, [t, r]), o = n, c = function(t, e) {
                        var r = e.styles,
                            o = e.backgroundMediaEffect,
                            i = n.resolveImageEffectProps(r, o);
                        return i.type === n.state.type && (n.component.setProps(i), n.setState(i), !0)
                    }, (a = l(a = "sectionWillChange")) in o ? Object.defineProperty(o, a, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : o[a] = c, n
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
                    }), e && f(t, e)
                }(e, t), r = e, (n = [{
                    key: "destroy",
                    value: function() {
                        c(u(e.prototype), "destroy", this).call(this)
                    }
                }]) && o(r.prototype, n), a && o(r, a), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), r;
                var r, n, a
            }(r(94926).A)
        },
        22902: function(t, e, r) {
            r.d(e, {
                P6: function() {
                    return a
                },
                TT: function() {
                    return l
                },
                _v: function() {
                    return u
                },
                kr: function() {
                    return c
                },
                pG: function() {
                    return f
                }
            });
            r(94226), r(68444);
            var n = r(63285);

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i, a, c = [],
                            u = !0,
                            f = !1;
                        try {
                            if (i = (r = r.call(t)).next, 0 === e) {
                                if (Object(r) !== r) return;
                                u = !1
                            } else
                                for (; !(u = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); u = !0);
                        } catch (t) {
                            f = !0, o = t
                        } finally {
                            try {
                                if (!u && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (f) throw o
                            }
                        }
                        return c
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return i(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return i(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            var a = function(t) {
                    if (!t) return 1;
                    if (!t.dataset.imageDimensions) {
                        var e = t.getAttribute("width"),
                            r = t.getAttribute("height");
                        return e && r ? +e / +r : 1
                    }
                    var n = t.dataset.imageDimensions.split("x");
                    return n[0] && n[1] ? +n[0] / +n[1] : void 0
                },
                c = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 20,
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
                    if (t <= e) return t;
                    var r = window.innerWidth;
                    return r <= n.fi.sm ? Math.max(e, Math.round(.25 * t)) : r <= n.fi.md ? Math.max(e, Math.round(.5 * t)) : r <= n.fi.lg ? Math.max(e, Math.round(.75 * t)) : t
                },
                u = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                        e = window.innerWidth,
                        r = Math.max(1, t);
                    return 1 === r ? r : e <= n.fi.sm ? 2 : e <= n.fi.md ? Math.max(Math.ceil(.5 * r), 2) : e <= n.fi.lg ? Math.ceil(.75 * r) : r
                },
                f = function(t) {
                    var e = 0,
                        r = 0,
                        n = {
                            width: e,
                            height: r
                        };
                    if (!t) return n;
                    if (t.dataset.imageDimensions) {
                        var i = o(t.dataset.imageDimensions.split("x"), 2);
                        e = i[0], r = i[1]
                    } else e = t.getAttribute("width"), r = t.getAttribute("height");
                    return e && r ? {
                        width: +e,
                        height: +r
                    } : n
                },
                l = function(t) {
                    var e = {
                        x: .5,
                        y: .5
                    };
                    if (!t) return e;
                    if (!t.dataset.imageFocalPoint) return e;
                    var r = o(t.dataset.imageFocalPoint.split(","), 2),
                        n = r[0],
                        i = r[1];
                    return n && i ? {
                        x: +n,
                        y: +i
                    } : e
                }
        }
    }
]);