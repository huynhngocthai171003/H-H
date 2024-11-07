"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [1970], {
        89180: function(t, r, e) {
            e.d(r, {
                A: function() {
                    return b
                }
            });
            e(94226);
            var n = e(23029),
                o = e(92901),
                i = e(9417),
                u = e(90991),
                c = e(85501),
                f = e(56822),
                a = e(53954),
                s = e(64467),
                l = e(44125);

            function p(t, r) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    r && (n = n.filter((function(r) {
                        return Object.getOwnPropertyDescriptor(t, r).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function y(t) {
                var r = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var e, n = (0, a.A)(t);
                    if (r) {
                        var o = (0, a.A)(this).constructor;
                        e = Reflect.construct(n, arguments, o)
                    } else e = n.apply(this, arguments);
                    return (0, f.A)(this, e)
                }
            }
            var b = function(t) {
                (0, c.A)(e, t);
                var r = y(e);

                function e(t, o) {
                    var u;
                    return (0, n.A)(this, e), u = r.call(this, t, function(t) {
                        for (var r = 1; r < arguments.length; r++) {
                            var e = null != arguments[r] ? arguments[r] : {};
                            r % 2 ? p(Object(e), !0).forEach((function(r) {
                                (0, s.A)(t, r, e[r])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : p(Object(e)).forEach((function(r) {
                                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r))
                            }))
                        }
                        return t
                    }({
                        programKey: "parallax-program",
                        vert: "\nattribute vec3 aPosition;\n\nuniform mat3 uvMatrix;\nuniform float uAmount;\nuniform vec2 uAngle;\nuniform float uZoomStart;\nuniform float uZoomEnd;\nuniform float uProgress;\nuniform vec2 uOrigin;\n\nvarying vec2 vUv;\n\nvoid main(){\n  gl_Position = vec4(aPosition, 1.);\n  vec2 uv = gl_Position.xy * .5 + .5;\n\n  vUv = (uvMatrix * vec3(uv, 1.)).xy;\n  vUv -= uOrigin;\n  vUv *= 1.0 - uAmount - mix(uZoomStart, uZoomEnd, uProgress);\n  vUv -= uAngle * mix(\n    (vec2(1.0) - uOrigin) * -uAmount,\n    uOrigin * uAmount,\n    uProgress\n  );\n  vUv += uOrigin;\n}\n",
                        uniforms: {
                            uOrigin: [.5, .5],
                            uProgress: 0
                        }
                    }, o)), (0, s.A)((0, i.A)(u), "targetProgress", 0), (0, s.A)((0, i.A)(u), "isImmediate", !0), (0, s.A)((0, i.A)(u), "onIntersection", (function(t) {
                        t && (u.isImmediate = !0)
                    })), (0, s.A)((0, i.A)(u), "onScrollProgress", (function(t) {
                        u.isImmediate && (u.uniforms.uProgress = t, u.isDirty = !0, u.isImmediate = !1), u.targetProgress = t
                    })), u.autoUpdate = !1, u
                }
                return (0, o.A)(e, [{
                    key: "getUniformsFromProps",
                    value: function() {
                        var t = this.props,
                            r = t.intensity,
                            e = t.rotation,
                            n = t.zoomStart,
                            o = t.zoomEnd,
                            i = t.focalPoint;
                        return {
                            uAmount: .01 * r * .5,
                            uAngle: [Math.cos(e * Math.PI / 180), Math.sin(e * Math.PI / 180)],
                            uZoomStart: .01 * n,
                            uZoomEnd: .01 * o,
                            uOrigin: [i.x, 1 - i.y]
                        }
                    }
                }, {
                    key: "update",
                    value: function() {
                        var t = this.uniforms.uProgress,
                            r = this.targetProgress;
                        if (this.props.scrollProgress >= 0 && (r = .01 * this.props.scrollProgress), t !== r) {
                            var e = r - t;
                            this.uniforms.uProgress = e < .01 ? r : t + .1 * e, this.isDirty = !0
                        }
                    }
                }, {
                    key: "onRefresh",
                    value: function() {
                        (0, u.A)((0, a.A)(e.prototype), "onRefresh", this).call(this), this.isImmediate = !0
                    }
                }]), e
            }(l.A);
            (0, s.A)(b, "defaultProps", {
                intensity: 0,
                rotation: 0,
                zoomStart: 0,
                zoomEnd: 0,
                scrollProgress: -1
            })
        },
        36677: function(t, r, e) {
            e.r(r);
            e(94226);
            var n = e(89180);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }

            function i(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, u(n.key), n)
                }
            }

            function u(t) {
                var r = function(t, r) {
                    if ("object" != o(t) || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var n = e.call(t, r || "default");
                        if ("object" != o(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === r ? String : Number)(t)
                }(t, "string");
                return "symbol" == o(r) ? r : r + ""
            }

            function c(t, r, e) {
                return r = a(r),
                    function(t, r) {
                        if (r && ("object" === o(r) || "function" == typeof r)) return r;
                        if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, f() ? Reflect.construct(r, e || [], a(t).constructor) : r.apply(t, e))
            }

            function f() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (f = function() {
                    return !!t
                })()
            }

            function a(t) {
                return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, a(t)
            }

            function s(t, r) {
                return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
                    return t.__proto__ = r, t
                }, s(t, r)
            }
            var l = function(t) {
                function r(t) {
                    return function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), c(this, r, [t, n.A])
                }
                return function(t, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r && s(t, r)
                }(r, t), e = r, o && i(e.prototype, o), u && i(e, u), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
                var e, o, u
            }(e(61269).A);
            r.default = function(t) {
                return new l(t)
            }
        },
        18199: function(t, r, e) {
            e.r(r);
            e(94226);
            var n = e(89180);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }

            function i(t, r) {
                for (var e = 0; e < r.length; e++) {
                    var n = r[e];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, u(n.key), n)
                }
            }

            function u(t) {
                var r = function(t, r) {
                    if ("object" != o(t) || !t) return t;
                    var e = t[Symbol.toPrimitive];
                    if (void 0 !== e) {
                        var n = e.call(t, r || "default");
                        if ("object" != o(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === r ? String : Number)(t)
                }(t, "string");
                return "symbol" == o(r) ? r : r + ""
            }

            function c(t, r, e) {
                return r = a(r),
                    function(t, r) {
                        if (r && ("object" === o(r) || "function" == typeof r)) return r;
                        if (void 0 !== r) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, f() ? Reflect.construct(r, e || [], a(t).constructor) : r.apply(t, e))
            }

            function f() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (f = function() {
                    return !!t
                })()
            }

            function a(t) {
                return a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, a(t)
            }

            function s(t, r) {
                return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, r) {
                    return t.__proto__ = r, t
                }, s(t, r)
            }
            var l = function(t) {
                function r(t) {
                    return function(t, r) {
                        if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), c(this, r, [t, n.A])
                }
                return function(t, r) {
                    if ("function" != typeof r && null !== r) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), r && s(t, r)
                }(r, t), e = r, o && i(e.prototype, o), u && i(e, u), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e;
                var e, o, u
            }(e(94926).A);
            r.default = function(t) {
                return new l(t)
            }
        },
        90991: function(t, r, e) {
            e.d(r, {
                A: function() {
                    return o
                }
            });
            var n = e(53954);

            function o() {
                return o = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, r, e) {
                    var o = function(t, r) {
                        for (; !Object.prototype.hasOwnProperty.call(t, r) && null !== (t = (0, n.A)(t)););
                        return t
                    }(t, r);
                    if (o) {
                        var i = Object.getOwnPropertyDescriptor(o, r);
                        return i.get ? i.get.call(arguments.length < 3 ? t : e) : i.value
                    }
                }, o.apply(this, arguments)
            }
        }
    }
]);