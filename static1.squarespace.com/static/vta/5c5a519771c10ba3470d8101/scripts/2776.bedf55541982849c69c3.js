"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [2776], {
        23755: function(e, t, n) {
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function o(e, t, n) {
                return t && i(e.prototype, t), n && i(e, n), e
            }

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        s(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function u(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && h(e, t)
            }

            function f(e) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, f(e)
            }

            function h(e, t) {
                return h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, h(e, t)
            }

            function l(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function p(e) {
                return function() {
                    var t, n = f(e);
                    if (function() {
                            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                            if (Reflect.construct.sham) return !1;
                            if ("function" == typeof Proxy) return !0;
                            try {
                                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                            } catch (e) {
                                return !1
                            }
                        }()) {
                        var r = f(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return function(e, t) {
                        return !t || "object" != typeof t && "function" != typeof t ? l(e) : t
                    }(this, t)
                }
            }

            function d(e, t, n) {
                return d = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = f(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, t);
                        return i.get ? i.get.call(n) : i.value
                    }
                }, d(e, t, n || e)
            }

            function v(e) {
                return function(e) {
                    if (Array.isArray(e)) return g(e)
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || function(e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return g(e, t)
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function g(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            n.d(t, {
                _: function() {
                    return r
                },
                a: function() {
                    return v
                },
                b: function() {
                    return o
                },
                c: function() {
                    return u
                },
                d: function() {
                    return p
                },
                e: function() {
                    return s
                },
                f: function() {
                    return c
                },
                g: function() {
                    return d
                },
                h: function() {
                    return f
                },
                i: function() {
                    return l
                }
            })
        },
        73523: function(e, t, n) {
            var r = n(23755),
                i = n(29613);
            t.A = function e(t) {
                var n = t.array,
                    o = t.itemSize,
                    s = t.normalized,
                    a = void 0 !== s && s,
                    c = t.usage,
                    u = void 0 === c ? i.Ek : c,
                    f = t.name,
                    h = void 0 === f ? "" : f,
                    l = t.divisor,
                    p = void 0 === l ? 0 : l;
                (0, r._)(this, e), this.array = n, this.itemSize = o, this.normalized = a, this.usage = u, this.name = h, this.divisor = p, this.count = n ? n.length / o : 0, this.needsUpdate = !1
            }
        },
        4612: function(e, t, n) {
            var r = n(23755),
                i = function(e) {
                    (0, r.c)(n, e);
                    var t = (0, r.d)(n);

                    function n(e) {
                        var i = e.geometry,
                            o = e.material,
                            s = e.offset,
                            a = void 0 === s ? 0 : s,
                            c = e.count,
                            u = void 0 === c ? i.attributes.values().next().value.count : c;
                        return (0, r._)(this, n), t.call(this, {
                            geometry: i,
                            material: o,
                            offset: a,
                            count: u
                        })
                    }
                    return (0, r.b)(n, [{
                        key: "draw",
                        value: function(e) {
                            e.drawArrays(this.mode, this.offset, this.count)
                        }
                    }]), n
                }(n(96662).A);
            t.A = i
        },
        96662: function(e, t, n) {
            var r = n(23755),
                i = function() {
                    function e(t) {
                        var n = t.geometry,
                            i = t.material,
                            o = t.offset,
                            s = t.count;
                        (0, r._)(this, e), this.geometry = n, this.material = i, this.offset = o, this.count = s
                    }
                    return (0, r.b)(e, [{
                        key: "draw",
                        value: function(e) {}
                    }, {
                        key: "uniforms",
                        get: function() {
                            return this.material.uniforms
                        }
                    }, {
                        key: "program",
                        get: function() {
                            return this.material.program
                        },
                        set: function(e) {
                            this.material.program = e
                        }
                    }, {
                        key: "mode",
                        get: function() {
                            return this.material.mode
                        }
                    }, {
                        key: "options",
                        get: function() {
                            return this.material.options
                        }
                    }, {
                        key: "attributes",
                        get: function() {
                            return this.geometry.attributes
                        }
                    }, {
                        key: "index",
                        get: function() {
                            return this.geometry.index
                        }
                    }]), e
                }();
            t.A = i
        },
        94214: function(e, t, n) {
            var r = n(4612),
                i = n(15420),
                o = n(53668);
            t.A = function(e) {
                var t = e.geometry,
                    n = e.vert,
                    s = e.frag,
                    a = e.precision,
                    c = e.program,
                    u = e.uniforms,
                    f = e.options,
                    h = e.mode,
                    l = e.material,
                    p = e.DrawInfoClass,
                    d = void 0 === p ? r.A : p,
                    v = e.offset,
                    g = e.count,
                    y = e.primcount;
                return c = c || new o.A({
                    vert: n,
                    frag: s,
                    precision: a
                }), new d({
                    geometry: t,
                    material: l = l || new i.A({
                        program: c,
                        uniforms: u,
                        options: f,
                        mode: h
                    }),
                    offset: v,
                    count: g,
                    primcount: y
                })
            }
        },
        48282: function(e, t, n) {
            var r = n(23755);
            t.A = function e() {
                (0, r._)(this, e), this.attributes = new Map, this.index = null
            }
        },
        90467: function(e, t) {
            t.A = function(e, t, n) {
                return n.name = t, e.attributes.set(t, n), n
            }
        },
        29613: function(e, t, n) {
            n.d(t, {
                A_: function() {
                    return A
                },
                An: function() {
                    return O
                },
                Ek: function() {
                    return o
                },
                FD: function() {
                    return E
                },
                FY: function() {
                    return P
                },
                GW: function() {
                    return l
                },
                Gz: function() {
                    return x
                },
                H7: function() {
                    return r
                },
                HX: function() {
                    return S
                },
                I8: function() {
                    return y
                },
                IP: function() {
                    return i
                },
                JL: function() {
                    return g
                },
                Mf: function() {
                    return C
                },
                NS: function() {
                    return T
                },
                PG: function() {
                    return p
                },
                QI: function() {
                    return d
                },
                TS: function() {
                    return s
                },
                UD: function() {
                    return b
                },
                UJ: function() {
                    return L
                },
                _Q: function() {
                    return c
                },
                aE: function() {
                    return u
                },
                bU: function() {
                    return f
                },
                eQ: function() {
                    return k
                },
                ey: function() {
                    return h
                },
                l4: function() {
                    return v
                },
                nB: function() {
                    return _
                },
                te: function() {
                    return a
                },
                tw: function() {
                    return w
                },
                uL: function() {
                    return j
                },
                ud: function() {
                    return R
                },
                zH: function() {
                    return m
                }
            });
            var r = 34962,
                i = 34963,
                o = 35044,
                s = 3553,
                a = 9728,
                c = 9729,
                u = 33071,
                f = 6408,
                h = 33984,
                l = 36160,
                p = 36161,
                d = 4,
                v = 5121,
                g = 5123,
                y = 5124,
                b = 5125,
                m = 5126,
                A = 35664,
                w = 35665,
                O = 35666,
                E = 35667,
                C = 35668,
                P = 35669,
                S = 35670,
                R = 35671,
                _ = 35672,
                k = 35673,
                x = 35674,
                T = 35675,
                L = 35676,
                j = 35678,
                I = {
                    BLEND: 3042,
                    DEPTH_TEST: 2929,
                    STENCIL_TEST: 2960,
                    CULL_FACE: 2884,
                    ARRAY_BUFFER: r,
                    ELEMENT_ARRAY_BUFFER: i,
                    STATIC_DRAW: o,
                    DYNAMIC_DRAW: 35048,
                    ZERO: 0,
                    ONE: 1,
                    SRC_COLOR: 768,
                    ONE_MINUS_SRC_COLOR: 769,
                    SRC_ALPHA: 770,
                    ONE_MINUS_SRC_ALPHA: 771,
                    DST_ALPHA: 772,
                    ONE_MINUS_DST_ALPHA: 773,
                    DST_COLOR: 774,
                    ONE_MINUS_DST_COLOR: 775,
                    SRC_ALPHA_SATURATE: 776,
                    CONSTANT_COLOR: 32769,
                    ONE_MINUS_CONSTANT_COLOR: 32770,
                    CONSTANT_ALPHA: 32771,
                    ONE_MINUS_CONSTANT_ALPHA: 32772,
                    FUNC_ADD: 32774,
                    FUNC_SUBTRACT: 32774,
                    FUNC_REVERSE_SUBTRACT: 32774,
                    NEVER: 512,
                    ALWAYS: 519,
                    LESS: 513,
                    EQUAL: 514,
                    LEQUAL: 515,
                    GREATER: 516,
                    GEQUAL: 518,
                    NOTEQUAL: 517,
                    FRONT: 1028,
                    BACK: 1029,
                    FRONT_AND_BACK: 1032,
                    TEXTURE_2D: s,
                    NEAREST: a,
                    LINEAR: c,
                    NEAREST_MIPMAP_NEAREST: 9984,
                    LINEAR_MIPMAP_NEAREST: 9985,
                    NEAREST_MIPMAP_LINEAR: 9986,
                    LINEAR_MIPMAP_LINEAR: 9987,
                    CLAMP_TO_EDGE: u,
                    REPEAT: 10497,
                    MIRRORED_REPEAT: 33648,
                    RGB: 6407,
                    RGBA: f,
                    TEXTURE0: h,
                    FRAMEBUFFER: l,
                    RENDERBUFFER: p,
                    POINTS: 0,
                    LINES: 1,
                    LINE_LOOP: 2,
                    LINE_STRIP: 3,
                    TRIANGLES: d,
                    TRIANGLE_STRIP: 5,
                    TRIANGLE_FAN: 6,
                    BYTE: 5120,
                    UNSIGNED_BYTE: v,
                    SHORT: 5122,
                    UNSIGNED_SHORT: g,
                    INT: y,
                    UNSIGNED_INT: b,
                    FLOAT: m,
                    FLOAT_VEC2: A,
                    FLOAT_VEC3: w,
                    FLOAT_VEC4: O,
                    INT_VEC2: E,
                    INT_VEC3: C,
                    INT_VEC4: P,
                    BOOL: S,
                    BOOL_VEC2: R,
                    BOOL_VEC3: _,
                    BOOL_VEC4: k,
                    FLOAT_MAT2: x,
                    FLOAT_MAT3: T,
                    FLOAT_MAT4: L,
                    SAMPLER_2D: j,
                    SAMPLER_CUBE: 35680,
                    MAX_COMBINED_TEXTURE_IMAGE_UNITS: 35661,
                    MAX_VERTEX_TEXTURE_IMAGE_UNITS: 35660,
                    MAX_TEXTURE_IMAGE_UNITS: 34930,
                    NONE: 0
                };
            t.Ay = I
        },
        15420: function(e, t, n) {
            var r = n(23755),
                i = n(29613);
            t.A = function e(t) {
                var n = t.program,
                    o = t.uniforms,
                    s = void 0 === o ? {} : o,
                    a = t.options,
                    c = void 0 === a ? {} : a,
                    u = t.mode,
                    f = void 0 === u ? i.QI : u;
                (0, r._)(this, e), this.program = n, this.uniforms = s, this.options = c, this.mode = f
            }
        },
        53668: function(e, t, n) {
            var r = n(23755);
            t.A = function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = t.vert,
                    i = t.frag,
                    o = t.precision;
                (0, r._)(this, e), this.vert = n, this.frag = i, this.precision = o
            }
        },
        12462: function(e, t) {
            t.A = function(e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    i = e.gl,
                    o = 0;
                t && (o |= i.COLOR_BUFFER_BIT), n && (o |= i.DEPTH_BUFFER_BIT), r && (o |= i.STENCIL_BUFFER_BIT), i.clear(o)
            }
        },
        70888: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return i
                }
            });
            var r = function(e, t) {
                var n = e.properties.get(t);
                n.glBuffer && (e.gl.deleteBuffer(n.glBuffer), delete n.glBuffer), e.properties.remove(t)
            };
            var i = function(e, t) {
                t.attributes.forEach((function(t) {
                    return r(e, t)
                })), t.index && r(e, t.index)
            }
        },
        77820: function(e, t) {
            t.A = function(e, t) {
                var n = e.properties.get(t);
                n && (e.gl.deleteProgram(n.glProgram), e.properties.remove(t))
            }
        },
        64439: function(e, t) {
            t.A = function(e, t) {
                var n = e.properties.get(t);
                n.glTexture && (e.gl.deleteTexture(n.glTexture), delete n.glTexture, e.properties.remove(t))
            }
        },
        68823: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return S
                }
            });
            var r = n(29613);
            var i = function(e, t, n) {
                var r = "buffer-".concat(t);
                e.get(r) !== n && (e.gl.bindBuffer(t, n), e.set(r, n))
            };
            var o = function(e, t, n) {
                var r = e.properties.get(n);
                return r.glBuffer || (r.glBuffer = e.gl.createBuffer(), n.needsUpdate = !0), i(e.state, t, r.glBuffer), n.needsUpdate && (e.gl.bufferData(t, n.array, n.usage), n.needsUpdate = !1), r.glBuffer
            };
            var s = function(e, t, n) {
                var i = [];
                return n.forEach((function(n, s) {
                    var a = t.attributes.get(s),
                        c = o(e, r.H7, a);
                    i[n(a, c)] = 1
                })), t.index && o(e, r.IP, t.index), i
            };
            var a = function(e, t, n) {
                var r = e.createShader(n);
                if (e.shaderSource(r, t), e.compileShader(r), !e.getShaderParameter(r, e.COMPILE_STATUS)) throw new Error("could not compile shader: ".concat(e.getShaderInfoLog(r)));
                return r
            };
            var c = function(e, t) {
                return "precision" !== e.substring(0, 9) ? "precision ".concat(t, " float;\n").concat(e) : e
            };
            var u = function(e, t) {
                    var n = e.gl,
                        r = n.createProgram(),
                        i = t.vert,
                        o = c(t.frag, t.precision || e.defaultPrecision),
                        s = a(n, i, n.VERTEX_SHADER),
                        u = a(n, o, n.FRAGMENT_SHADER);
                    if (n.attachShader(r, s), n.attachShader(r, u), n.linkProgram(r), !n.getProgramParameter(r, n.LINK_STATUS)) throw new Error("could not link shader: ".concat(n.getProgramInfoLog(r)));
                    return n.deleteShader(s), n.deleteShader(u), r
                },
                f = "enabledAttributes";
            var h = function(e, t) {
                e.get(f) || e.set(f, []);
                var n = e.get(f);
                1 !== n[t] && (e.gl.enableVertexAttribArray(t), n[t] = 1)
            };
            var l = function(e, t) {
                return function(n, o) {
                    return i(e.state, r.H7, o), h(e.state, t), e.gl.vertexAttribPointer(t, n.itemSize, n.type || r.zH, n.normalize || !1, n.stride || 0, n.offset || 0), e.gl.vertexAttribDivisor && e.gl.vertexAttribDivisor(t, n.divisor), t
                }
            };
            var p = function(e, t) {
                for (var n = new Map, r = e.gl, i = r.getProgramParameter(t, r.ACTIVE_ATTRIBUTES), o = 0; o < i; o++) {
                    var s = r.getActiveAttrib(t, o),
                        a = r.getAttribLocation(t, s.name);
                    n.set(s.name, l(e, a))
                }
                return n
            };

            function d(e) {
                switch (e) {
                    case r.zH:
                        return function(e, t, n) {
                            e.uniform1f(t, n)
                        };
                    case r.A_:
                        return function(e, t, n) {
                            e.uniform2f(t, n[0], n[1])
                        };
                    case r.tw:
                        return function(e, t, n) {
                            e.uniform3f(t, n[0], n[1], n[2])
                        };
                    case r.An:
                        return function(e, t, n) {
                            e.uniform4f(t, n[0], n[1], n[2], n[3])
                        };
                    case r.I8:
                    case r.HX:
                    case r.uL:
                        return function(e, t, n) {
                            e.uniform1i(t, n)
                        };
                    case r.FD:
                    case r.ud:
                        return function(e, t, n) {
                            e.uniform2i(t, n[0], n[1])
                        };
                    case r.Mf:
                    case r.nB:
                        return function(e, t, n) {
                            e.uniform3i(t, n[0], n[1], n[2])
                        };
                    case r.FY:
                    case r.eQ:
                        return function(e, t, n) {
                            e.uniform4i(t, n[0], n[1], n[2], n[3])
                        };
                    case r.Gz:
                        return function(e, t, n) {
                            e.uniformMatrix2fv(t, !1, n)
                        };
                    case r.NS:
                        return function(e, t, n) {
                            e.uniformMatrix3fv(t, !1, n)
                        };
                    case r.UJ:
                        return function(e, t, n) {
                            e.uniformMatrix4fv(t, !1, n)
                        }
                }
            }

            function v(e) {
                switch (e) {
                    case r.zH:
                        return function(e, t, n) {
                            e.uniform1fv(t, n)
                        };
                    case r.A_:
                        return function(e, t, n) {
                            e.uniform2fv(t, n)
                        };
                    case r.tw:
                        return function(e, t, n) {
                            e.uniform3fv(t, n)
                        };
                    case r.An:
                        return function(e, t, n) {
                            e.uniform4fv(t, n)
                        };
                    case r.I8:
                    case r.HX:
                    case r.uL:
                        return function(e, t, n) {
                            e.uniform1iv(t, n)
                        };
                    case r.FD:
                    case r.ud:
                        return function(e, t, n) {
                            e.uniform2iv(t, n)
                        };
                    case r.Mf:
                    case r.nB:
                        return function(e, t, n) {
                            e.uniform3iv(t, n)
                        };
                    case r.FY:
                    case r.eQ:
                        return function(e, t, n) {
                            e.uniform4iv(t, n)
                        }
                }
            }
            var g = function(e, t, n) {
                var r = e.getUniformLocation(t, n.name),
                    i = (1 === n.size ? d : v)(n.type);
                return function(t) {
                    i(e, r, t.call ? t() : t)
                }
            };
            var y = function(e, t) {
                    for (var n = new Map, r = e.getProgramParameter(t, e.ACTIVE_UNIFORMS), i = 0; i < r; i++) {
                        var o = e.getActiveUniform(t, i),
                            s = o.name.replace(/\[.*?\]/, "");
                        n.set(s, g(e, t, o))
                    }
                    return n
                },
                b = n(23755),
                m = function e(t, n) {
                    (0, b._)(this, e), this.attributeSetters = t, this.uniformSetters = n
                };
            var A = function(e, t) {
                var n = p(e, t),
                    r = y(e.gl, t);
                return new m(n, r)
            };
            var w = function(e, t) {
                    var n = e.properties.get(t);
                    return n.glProgram || (n.glProgram = u(e, t), n.setters = A(e, n.glProgram)), n
                },
                O = "program";
            var E = function(e, t) {
                return e.get(O) !== t && (e.gl.useProgram(t), e.cache.set(O, t), !0)
            };
            var C = function(e, t) {
                e.forEach((function(e, n) {
                    e(t.get(n))
                }))
            };
            var P = function(e, t) {
                var n = e.get("enabledAttributes");
                0 !== n[t] && (e.gl.disableVertexAttribArray(t), n[t] = 0)
            };
            var S = function(e, t) {
                if (!0 !== e.isContextLost) {
                    var n = w(e, t.program),
                        r = n.glProgram,
                        i = n.setters;
                    E(e.state, r), e.onBeforeRender.dispatch(t);
                    var o = s(e, t, i.attributeSetters);
                    for (var a in e.state.get("enabledAttributes").forEach((function(t, n) {
                            o[n] || P(e.state, n)
                        })), t.uniforms) e.uniformValues.set(a, t.uniforms[a]);
                    C(i.uniformSetters, e.uniformValues), t.draw(e.gl)
                }
            }
        },
        3410: function(e, t) {
            t.A = function(e, t, n) {
                e.uniformValues.set(t, n)
            }
        },
        67001: function(e, t, n) {
            var r = n(23755),
                i = n(43163),
                o = n(10369),
                s = "clearColor";
            t.A = function(e, t) {
                var n, a = e.get(s) || [];
                (0, i.A)(a, t) || ((n = e.gl).clearColor.apply(n, (0, r.a)(t)), e.cache.set(s, (0, o.A)(t, a)))
            }
        },
        49639: function(e, t, n) {
            var r = n(43163),
                i = n(10369),
                o = "viewport",
                s = [];
            t.A = function(e, t, n, a, c) {
                var u = e.get(o) || [];
                s[0] = t, s[1] = n, s[2] = a, s[3] = c, (0, r.A)(u, s) || (e.gl.viewport(t, n, a, c), e.cache.set(o, (0, i.A)(s, u)))
            }
        },
        10369: function(e, t) {
            t.A = function(e, t) {
                for (var n = 0; n < e.length; n++) t[n] = e[n];
                return t.length = e.length, t
            }
        },
        51584: function(e, t) {
            t.A = function(e, t) {
                var n = e.indexOf(t);
                return -1 !== n && e.splice(n, 1), t
            }
        },
        43163: function(e, t) {
            t.A = function(e, t) {
                if (!e || !t) return !1;
                if (e === t) return !0;
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; ++n)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
        },
        92196: function(e, t) {
            t.A = void 0;
            var n = [],
                r = 0,
                i = !1,
                o = !1,
                s = !1,
                a = function() {
                    var e = !1;
                    try {
                        window.addEventListener("test", null, Object.defineProperty({}, "passive", {
                            get: function() {
                                e = {
                                    passive: !0
                                }
                            }
                        }))
                    } catch (e) {}
                    return e
                }(),
                c = {
                    scroll: function(e) {
                        o || (o = !0, requestAnimationFrame(this.executeCallbacks))
                    },
                    executeCallbacks: function() {
                        for (var e = 0; e < r; e += 1) n[e]();
                        o = !1
                    },
                    registerCallback: function(e) {
                        var t = n.indexOf(e);
                        !e || t > -1 || (n.push(e), r += 1)
                    },
                    removeCallback: function(e) {
                        if (e) {
                            var t = n.indexOf(e); - 1 !== t && (n.splice(t, 1), r -= 1)
                        }
                    },
                    bindMethods: function() {
                        i || (this.scroll = this.scroll.bind(this), i = !0)
                    },
                    trigger: function() {
                        this.scroll()
                    },
                    on: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
                        s || (s = !0, this.bindMethods(), this.windowRef = t, t.addEventListener("scroll", this.scroll, a)), this.registerCallback(e)
                    },
                    off: function(e) {
                        this.removeCallback(e), s && 0 === r && (this.bindMethods(), s = !1, this.windowRef.removeEventListener("scroll", this.scroll), this.windowRef = null)
                    }
                };
            t.A = c
        },
        75170: function(e, t, n) {
            n.d(t, {
                Tj: function() {
                    return i
                },
                qE: function() {
                    return r
                }
            });
            var r = function(e, t, n) {
                    return e < t ? t : e > n ? n : e
                },
                i = function(e, t, n, r, i) {
                    return (e - t) * (i - r) / (n - t) + r
                }
        },
        21339: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return ge
                }
            });
            n(94226);
            var r = n(23029),
                i = n(92901),
                o = n(64467),
                s = n(68651),
                a = n(92196);

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(n), !0).forEach((function(t) {
                        p(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function f(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function l(e, t, n) {
                return t && h(e.prototype, t), n && h(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function p(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function d(e, t) {
                return e(t = {
                    exports: {}
                }, t.exports), t.exports
            }
            var v = d((function(e) {
                    var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
                    "number" == typeof __g && (__g = t)
                })),
                g = d((function(e) {
                    var t = e.exports = {
                        version: "2.6.12"
                    };
                    "number" == typeof __e && (__e = t)
                })),
                y = (g.version, function(e) {
                    return "object" == typeof e ? null !== e : "function" == typeof e
                }),
                b = function(e) {
                    if (!y(e)) throw TypeError(e + " is not an object!");
                    return e
                },
                m = function(e) {
                    try {
                        return !!e()
                    } catch (e) {
                        return !0
                    }
                },
                A = !m((function() {
                    return 7 != Object.defineProperty({}, "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })),
                w = v.document,
                O = y(w) && y(w.createElement),
                E = !A && !m((function() {
                    return 7 != Object.defineProperty((e = "div", O ? w.createElement(e) : {}), "a", {
                        get: function() {
                            return 7
                        }
                    }).a;
                    var e
                })),
                C = Object.defineProperty,
                P = {
                    f: A ? Object.defineProperty : function(e, t, n) {
                        if (b(e), t = function(e, t) {
                                if (!y(e)) return e;
                                var n, r;
                                if (t && "function" == typeof(n = e.toString) && !y(r = n.call(e))) return r;
                                if ("function" == typeof(n = e.valueOf) && !y(r = n.call(e))) return r;
                                if (!t && "function" == typeof(n = e.toString) && !y(r = n.call(e))) return r;
                                throw TypeError("Can't convert object to primitive value")
                            }(t, !0), b(n), E) try {
                            return C(e, t, n)
                        } catch (e) {}
                        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                        return "value" in n && (e[t] = n.value), e
                    }
                },
                S = A ? function(e, t, n) {
                    return P.f(e, t, function(e, t) {
                        return {
                            enumerable: !(1 & e),
                            configurable: !(2 & e),
                            writable: !(4 & e),
                            value: t
                        }
                    }(1, n))
                } : function(e, t, n) {
                    return e[t] = n, e
                },
                R = {}.hasOwnProperty,
                _ = function(e, t) {
                    return R.call(e, t)
                },
                k = 0,
                x = Math.random(),
                T = function(e) {
                    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++k + x).toString(36))
                },
                L = d((function(e) {
                    var t = "__core-js_shared__",
                        n = v[t] || (v[t] = {});
                    (e.exports = function(e, t) {
                        return n[e] || (n[e] = void 0 !== t ? t : {})
                    })("versions", []).push({
                        version: g.version,
                        mode: "global",
                        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
                    })
                })),
                j = L("native-function-to-string", Function.toString),
                I = d((function(e) {
                    var t = T("src"),
                        n = "toString",
                        r = ("" + j).split(n);
                    g.inspectSource = function(e) {
                        return j.call(e)
                    }, (e.exports = function(e, n, i, o) {
                        var s = "function" == typeof i;
                        s && (_(i, "name") || S(i, "name", n)), e[n] !== i && (s && (_(i, t) || S(i, t, e[n] ? "" + e[n] : r.join(String(n)))), e === v ? e[n] = i : o ? e[n] ? e[n] = i : S(e, n, i) : (delete e[n], S(e, n, i)))
                    })(Function.prototype, n, (function() {
                        return "function" == typeof this && this[t] || j.call(this)
                    }))
                })),
                M = function(e, t, n) {
                    if (function(e) {
                            if ("function" != typeof e) throw TypeError(e + " is not a function!")
                        }(e), void 0 === t) return e;
                    switch (n) {
                        case 1:
                            return function(n) {
                                return e.call(t, n)
                            };
                        case 2:
                            return function(n, r) {
                                return e.call(t, n, r)
                            };
                        case 3:
                            return function(n, r, i) {
                                return e.call(t, n, r, i)
                            }
                    }
                    return function() {
                        return e.apply(t, arguments)
                    }
                },
                D = "prototype",
                N = function(e, t, n) {
                    var r, i, o, s, a = e & N.F,
                        c = e & N.G,
                        u = e & N.S,
                        f = e & N.P,
                        h = e & N.B,
                        l = c ? v : u ? v[t] || (v[t] = {}) : (v[t] || {})[D],
                        p = c ? g : g[t] || (g[t] = {}),
                        d = p[D] || (p[D] = {});
                    for (r in c && (n = t), n) o = ((i = !a && l && void 0 !== l[r]) ? l : n)[r], s = h && i ? M(o, v) : f && "function" == typeof o ? M(Function.call, o) : o, l && I(l, r, o, e & N.U), p[r] != o && S(p, r, s), f && d[r] != o && (d[r] = o)
                };
            v.core = g, N.F = 1, N.G = 2, N.S = 4, N.P = 8, N.B = 16, N.W = 32, N.U = 64, N.R = 128;
            var F, U, B, H, z, G, W, V, X, Y, K, Q = N,
                q = {}.toString,
                J = function(e) {
                    return q.call(e).slice(8, -1)
                },
                $ = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
                    return "String" == J(e) ? e.split("") : Object(e)
                },
                Z = function(e) {
                    return Object(function(e) {
                        if (null == e) throw TypeError("Can't call method on  " + e);
                        return e
                    }(e))
                },
                ee = Math.ceil,
                te = Math.floor,
                ne = Math.min,
                re = function(e) {
                    return e > 0 ? ne(function(e) {
                        return isNaN(e = +e) ? 0 : (e > 0 ? te : ee)(e)
                    }(e), 9007199254740991) : 0
                },
                ie = Array.isArray || function(e) {
                    return "Array" == J(e)
                },
                oe = d((function(e) {
                    var t = L("wks"),
                        n = v.Symbol,
                        r = "function" == typeof n;
                    (e.exports = function(e) {
                        return t[e] || (t[e] = r && n[e] || (r ? n : T)("Symbol." + e))
                    }).store = t
                }))("species"),
                se = (B = 1 == (F = 0), H = 2 == F, z = 3 == F, G = 4 == F, W = 6 == F, V = 5 == F || W, X = U || function(e, t) {
                    return new(function(e) {
                        var t;
                        return ie(e) && ("function" != typeof(t = e.constructor) || t !== Array && !ie(t.prototype) || (t = void 0), y(t) && null === (t = t[oe]) && (t = void 0)), void 0 === t ? Array : t
                    }(e))(t)
                }, function(e, t, n) {
                    for (var r, i, o = Z(e), s = $(o), a = M(t, n, 3), c = re(s.length), u = 0, f = B ? X(e, c) : H ? X(e, 0) : void 0; c > u; u++)
                        if ((V || u in s) && (i = a(r = s[u], u, o), F))
                            if (B) f[u] = i;
                            else if (i) switch (F) {
                        case 3:
                            return !0;
                        case 5:
                            return r;
                        case 6:
                            return u;
                        case 2:
                            f.push(r)
                    } else if (G) return !1;
                    return W ? -1 : z || G ? G : f
                }),
                ae = (K = !0, !!(Y = [].forEach) && m((function() {
                    K ? Y.call(null, (function() {}), 1) : Y.call(null)
                })));
            Q(Q.P + Q.F * !ae, "Array", {
                forEach: function(e) {
                    return se(this, e, arguments[1])
                }
            }), Q(Q.S + Q.F * !A, "Object", {
                defineProperty: P.f
            });
            var ce = function() {},
                ue = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype && ("isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                }), !0),
                fe = !!("ontouchstart" in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0 || window.DocumentTouch && document instanceof DocumentTouch),
                he = function() {
                    function e(t, n) {
                        var r = this;
                        f(this, e), p(this, "onResize", (function() {
                            var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).shouldSkipUpdate,
                                t = void 0 !== e && e,
                                n = r.props.scrollEvents;
                            r.computePositionData(), r.pos.offsetTop = function(e) {
                                var t = e,
                                    n = 0;
                                do {
                                    n = t.offsetTop + n
                                } while (t = t.offsetParent);
                                return n
                            }(r.node), r.pos.offsetBottom = document.body.scrollHeight - r.pos.offsetTop - r.pos.clientHeight, !n || ue && t || r.onUpdate(!0)
                        })), p(this, "onScroll", (function() {
                            r.onUpdate(!fe)
                        })), p(this, "onIntersect", (function(e) {
                            e.forEach((function(e) {
                                var t = e.isIntersecting,
                                    n = r.props,
                                    i = n.onIntersection,
                                    o = n.windowRef;
                                i(t), r.onUpdate(), t ? a.A.on(r.onScroll, o) : a.A.off(r.onScroll, o)
                            }))
                        })), p(this, "destroy", (function() {
                            r.unbindListeners()
                        })), this.props = u(u({}, this.constructor.defaultProps), n), this.node = t, this.observer = {
                            intersection: null
                        };
                        var i = this.props.windowRef.pageYOffset;
                        this.pos = {
                            scrollTop: i,
                            top: 0,
                            bottom: 0,
                            progress: 0,
                            intersectionProgress: 0,
                            windowHeight: 0,
                            clientHeight: 0,
                            offsetTop: 0,
                            offsetBottom: 0,
                            initial: this.getNodePositionData(this.node, i),
                            isIntersecting: !1
                        }
                    }
                    return l(e, [{
                        key: "start",
                        value: function() {
                            this.bindListeners()
                        }
                    }, {
                        key: "bindListeners",
                        value: function() {
                            if (s.A.on(this.onResize), this.onResize({
                                    shouldSkipUpdate: !0
                                }), ue) return this.observer.intersection = new IntersectionObserver(this.onIntersect, {
                                rootMargin: "0px 0px 0px 0px"
                            }), void this.observer.intersection.observe(this.node);
                            this.onUpdate(!0), a.A.on(this.onScroll, this.props.windowRef)
                        }
                    }, {
                        key: "unbindListeners",
                        value: function() {
                            this.observer.intersection && this.observer.intersection.unobserve(this.node), s.A.off(this.onResize), a.A.off(this.onScroll)
                        }
                    }, {
                        key: "onUpdate",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = this.props,
                                n = t.scrollEvents,
                                r = t.normalize,
                                i = t.onIntersection,
                                o = t.onUpdate,
                                s = t.windowRef;
                            e ? this.pos.scrollTop = s.pageYOffset : this.computePositionData();
                            var a = this.pos,
                                c = a.clientHeight,
                                u = a.windowHeight,
                                f = a.initial;
                            this.pos.top = f.top - this.pos.scrollTop, this.pos.bottom = f.bottom - this.pos.scrollTop - u;
                            var h = r ? Math.min(this.pos.offsetTop, u) : u,
                                l = r ? Math.min(this.pos.offsetBottom, u) : u,
                                p = -this.pos.top + h,
                                d = h + c + l - u,
                                v = 1 - (this.pos.top + c) / (u + c),
                                g = p === d ? 1 : (-this.pos.top + h) / (h + c + l - u);
                            this.pos.progress = g < 0 ? 0 : g > 1 ? 1 : g, this.pos.intersectionProgress = v < 0 ? 0 : v > 1 ? 1 : v, ue || (this.pos.intersectionProgress > 0 && this.pos.intersectionProgress < 1 ? this.pos.isIntersecting || (this.pos.isIntersecting = !0, i(this.pos.isIntersecting), this.onResize()) : this.pos.isIntersecting && (this.pos.isIntersecting = !1, i(this.pos.isIntersecting))), n && o(this.pos)
                        }
                    }, {
                        key: "computePositionData",
                        value: function() {
                            this.pos.windowHeight = this.props.windowRef.innerHeight, this.pos.clientHeight = this.node.clientHeight, this.pos.scrollTop = this.props.windowRef.pageYOffset, this.pos.initial = this.getNodePositionData(this.node, this.pos.scrollTop)
                        }
                    }, {
                        key: "getNodePositionData",
                        value: function(e, t) {
                            var n = e.getBoundingClientRect(),
                                r = n.top,
                                i = n.right,
                                o = n.bottom,
                                s = n.left;
                            return {
                                top: Math.round(r) + t,
                                right: i,
                                bottom: Math.round(o) + t,
                                left: s
                            }
                        }
                    }]), e
                }();
            p(he, "defaultProps", {
                scrollEvents: !0,
                onIntersection: ce,
                onUpdate: ce,
                windowRef: window
            });
            var le = l((function e(t, n) {
                var r = this;
                if (f(this, e), p(this, "onIntersection", (function(e) {
                        var t = r.props.onIntersection;
                        r.state.isIntersecting = e, t(e)
                    })), p(this, "onUpdate", (function(e) {
                        var t = e.progress;
                        r.onProgress(t)
                    })), p(this, "onProgress", (function(e) {
                        var t = r.props.onProgress;
                        r.state.progress !== e && (r.state.progress = e, t(r.state.progress))
                    })), p(this, "destroy", (function() {
                        r.intersection.destroy()
                    })), this.props = u(u({}, this.constructor.defaultProps), n), t) {
                    var i = this.props,
                        o = i.normalize,
                        s = i.progressEvents,
                        a = i.onProgress,
                        c = i.windowRef;
                    this.state = {
                        normalize: o,
                        progressEvents: s && a,
                        progress: -1,
                        isIntersecting: !1
                    }, this.intersection = new he(t, {
                        normalize: o,
                        scrollEvents: this.state.progressEvents,
                        onIntersection: this.onIntersection,
                        onUpdate: this.onUpdate,
                        windowRef: c
                    }), this.intersection.start()
                } else console.error("Error: No valid HTMLElement node was supplied!")
            }));
            p(le, "defaultProps", {
                progressEvents: !0,
                normalize: !0,
                onIntersection: ce,
                onProgress: null,
                windowRef: window
            });
            var pe = le;

            function de(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ve(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? de(Object(n), !0).forEach((function(t) {
                        (0, o.A)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : de(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var ge = function() {
                function e(t, n, i) {
                    var s = this,
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    (0, r.A)(this, e), (0, o.A)(this, "isPaused", !1), (0, o.A)(this, "isIntersecting", !1), (0, o.A)(this, "onIntersection", (function(e) {
                        s.isIntersecting = e, s.updatePlayState(), s.instance.onIntersection && s.instance.onIntersection(e), s.isIntersecting && s.isPaused && s.instance.renderFrame()
                    })), (0, o.A)(this, "setPaused", (function(e) {
                        s.isPaused = e, s.updatePlayState()
                    })), (0, o.A)(this, "togglePaused", (function() {
                        s.setPaused(!s.isPaused)
                    })), (0, o.A)(this, "onResize", (function() {
                        s.instance.refresh()
                    })), this.instance = new t(n, i), this.node = n, this.options = ve(ve({}, e.defaultOptions), a), !0 === this.options.reduceMotion && (this.isPaused = !0), this.bindListeners()
                }
                return (0, i.A)(e, [{
                    key: "bindListeners",
                    value: function() {
                        this.intersectionScroll = new pe(this.node, {
                            onIntersection: this.onIntersection,
                            onProgress: this.instance.onScrollProgress,
                            normalize: this.options.normalizeScroll,
                            windowRef: this.options.scrollWindowRef
                        }), this.resizeObserver = new ResizeObserver(this.onResize), this.resizeObserver.observe(this.node)
                    }
                }, {
                    key: "unbindListeners",
                    value: function() {
                        this.intersectionScroll.destroy(), this.resizeObserver.disconnect()
                    }
                }, {
                    key: "detach",
                    value: function() {
                        this.unbindListeners(), this.instance.detach(), this.node = null
                    }
                }, {
                    key: "attach",
                    value: function(e) {
                        this.node = e, this.bindListeners(), this.instance.attach(e)
                    }
                }, {
                    key: "updatePlayState",
                    value: function() {
                        !this.isIntersecting || this.isPaused ? this.instance.stop() : this.instance.start()
                    }
                }, {
                    key: "setProps",
                    value: function(e) {
                        this.instance.setProps(e)
                    }
                }, {
                    key: "refresh",
                    value: function() {
                        this.instance.refresh()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        this.unbindListeners(), this.instance.destroy()
                    }
                }, {
                    key: "props",
                    get: function() {
                        return this.instance.props
                    }
                }, {
                    key: "autoUpdate",
                    get: function() {
                        return this.instance.autoUpdate
                    }
                }, {
                    key: "isSupported",
                    get: function() {
                        return this.instance.isSupported
                    }
                }]), e
            }();
            (0, o.A)(ge, "defaultOptions", {
                scrollWindowRef: window,
                normalizeScroll: !0,
                reduceMotion: !1
            })
        },
        36630: function(e, t) {
            var n = !0;
            try {
                var r = document.createElement("canvas"),
                    i = {
                        failIfMajorPerformanceCaveat: !0
                    };
                r.getContext("webgl", i) || r.getContext("experimental-webgl", i) || (n = !1)
            } catch (e) {
                n = !1
            }
            t.A = n
        },
        59044: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return $
                }
            });
            n(94226);
            var r = n(23029),
                i = n(92901),
                o = n(64467),
                s = n(36630),
                a = function() {
                    function e(t) {
                        var n = this;
                        (0, r.A)(this, e), (0, o.A)(this, "ticking", !1), (0, o.A)(this, "raf", -1), (0, o.A)(this, "tick", (function(e) {
                            n.raf = requestAnimationFrame(n.tick), n.callback(e)
                        })), this.callback = t
                    }
                    return (0, i.A)(e, [{
                        key: "start",
                        value: function() {
                            this.ticking || (this.raf = requestAnimationFrame(this.tick), this.ticking = !0)
                        }
                    }, {
                        key: "stop",
                        value: function() {
                            this.ticking && (cancelAnimationFrame(this.raf), this.ticking = !1)
                        }
                    }]), e
                }(),
                c = n(23755),
                u = n(51584),
                f = function() {
                    function e() {
                        (0, c._)(this, e), this.listeners = []
                    }
                    return (0, c.b)(e, [{
                        key: "add",
                        value: function(e) {
                            this.listeners.push(e)
                        }
                    }, {
                        key: "remove",
                        value: function(e) {
                            (0, u.A)(this.listeners, e)
                        }
                    }, {
                        key: "dispatch",
                        value: function() {
                            var e = arguments;
                            this.listeners.forEach((function(t) {
                                t.apply(void 0, (0, c.a)(e))
                            }))
                        }
                    }, {
                        key: "dispose",
                        value: function() {
                            this.listeners.length = 0
                        }
                    }]), e
                }(),
                h = f,
                l = function() {
                    function e(t) {
                        var n = this;
                        (0, c._)(this, e), (0, c.e)(this, "handleContextCreate", (function() {
                            n.cache = new Map, n.enabledCapabilities = new Map
                        })), (0, c.e)(this, "dispose", (function() {
                            n.renderer.onDispose.remove(n.dispose), n.cache.clear(), n.enabledCapabilities.clear()
                        })), this.renderer = t, this.renderer.onContextCreate.add(this.handleContextCreate), this.renderer.onDispose.add(this.dispose)
                    }
                    return (0, c.b)(e, [{
                        key: "get",
                        value: function(e) {
                            return this.cache.get(e)
                        }
                    }, {
                        key: "set",
                        value: function(e, t) {
                            this.cache.set(e, t)
                        }
                    }, {
                        key: "enable",
                        value: function(e) {
                            this.enabledCapabilities.get(e) || (this.enabledCapabilities.set(e, !0), this.gl.enable(e))
                        }
                    }, {
                        key: "disable",
                        value: function(e) {
                            this.enabledCapabilities.get(e) && (this.enabledCapabilities.set(e, !1), this.gl.disable(e))
                        }
                    }, {
                        key: "gl",
                        get: function() {
                            return this.renderer.gl
                        }
                    }]), e
                }();
            (0, c.e)(l, "NAME", "state");
            var p = l,
                d = function() {
                    function e(t) {
                        var n = this;
                        (0, c._)(this, e), (0, c.e)(this, "handleContextCreate", (function() {
                            n.cache = new Map
                        })), (0, c.e)(this, "dispose", (function() {
                            n.renderer.onDispose.remove(n.dispose), n.cache.clear()
                        })), this.renderer = t, this.renderer.onContextCreate.add(this.handleContextCreate), this.renderer.onDispose.add(this.dispose)
                    }
                    return (0, c.b)(e, [{
                        key: "get",
                        value: function(e) {
                            var t = this.cache.get(e);
                            return t || (t = {}, this.cache.set(e, t)), t
                        }
                    }, {
                        key: "update",
                        value: function(e, t, n) {
                            this.cache.get(e)[t] = n
                        }
                    }, {
                        key: "remove",
                        value: function(e) {
                            this.cache.delete(e)
                        }
                    }]), e
                }();
            (0, c.e)(d, "NAME", "properties");
            var v = d,
                g = function(e) {
                    return e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0 ? "highp" : e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
                },
                y = function() {
                    function e(t) {
                        var n = this,
                            r = t.canvas,
                            i = t.alpha,
                            o = void 0 !== i && i,
                            s = t.antialias,
                            a = void 0 !== s && s,
                            u = t.depth,
                            f = void 0 !== u && u,
                            h = t.stencil,
                            l = void 0 !== h && h,
                            p = t.premultipliedAlpha,
                            d = void 0 !== p && p,
                            v = t.preserveDrawingBuffer,
                            g = void 0 !== v && v,
                            y = t.failIfMajorPerformanceCaveat,
                            b = void 0 !== y && y,
                            m = t.pixelRatio,
                            A = void 0 === m ? 1 : m,
                            w = t.plugins,
                            O = void 0 === w ? [] : w,
                            E = t.onContextCreate,
                            C = t.onContextLoss;
                        (0, c._)(this, e), (0, c.e)(this, "uniformValues", new Map), (0, c.e)(this, "viewport", [0, 0, 2, 2]), (0, c.e)(this, "handleContextLost", (function(e) {
                            n.isContextLost = !0, n.onContextLoss.dispatch(), e.preventDefault()
                        })), (0, c.e)(this, "handleContextRestored", (function() {
                            n.isContextLost = !1, n.createContext()
                        })), this.contextAttributes = {
                            alpha: o,
                            antialias: a,
                            depth: f,
                            stencil: l,
                            premultipliedAlpha: d,
                            preserveDrawingBuffer: g,
                            failIfMajorPerformanceCaveat: b
                        }, this.canvas = r, this.pixelRatio = A, this.isContextLost = !1, this.initSignals(), this.initPlugins(O), E && this.onContextCreate.add(E), C && this.onContextLoss.add(C), this.createContext()
                    }
                    return (0, c.b)(e, [{
                        key: "initPlugins",
                        value: function(t) {
                            var n = this;
                            [].concat((0, c.a)(e.corePlugins), (0, c.a)(t)).forEach((function(e) {
                                n[e.NAME] = new e(n)
                            }))
                        }
                    }, {
                        key: "initSignals",
                        value: function() {
                            this.onContextCreate = new h, this.onContextLoss = new h, this.onBeforeRender = new h, this.onDispose = new h
                        }
                    }, {
                        key: "createContext",
                        value: function() {
                            if (this.gl = this.canvas.getContext("webgl", this.contextAttributes) || this.canvas.getContext("experimental-webgl", this.contextAttributes), !this.gl) throw this.isContextLost = !0, new Error("Error creating WebGL context");
                            this.canvas.addEventListener("webglcontextlost", this.handleContextLost), this.canvas.addEventListener("webglcontextrestored", this.handleContextRestored), this.defaultPrecision = g(this.gl), this.onContextCreate.dispatch(this)
                        }
                    }]), e
                }();
            (0, c.e)(y, "corePlugins", [p, v]);
            var b = y,
                m = n(49639);
            var A = function(e, t, n, r, i) {
                    e.viewport[0] = t, e.viewport[1] = n, e.viewport[2] = r, e.viewport[3] = i, m.A.apply(void 0, [e.state].concat((0, c.a)(e.viewport)))
                },
                w = n(67001),
                O = n(12462),
                E = n(3410);
            var C = function(e, t, n) {
                !0 !== e.isContextLost && (t = t || e.canvas.clientWidth * e.pixelRatio, n = n || e.canvas.clientHeight * e.pixelRatio, e.canvas.width = t, e.canvas.height = n, A(e, 0, 0, t, n))
            };
            var P = function(e) {
                var t = e.gl;
                e.properties.cache.forEach((function(e) {
                    Object.values(e).forEach((function(n) {
                        switch (n.constructor.name) {
                            case "WebGLFramebuffer":
                                t.deleteFramebuffer(n);
                                break;
                            case "WebGLRenderbuffer":
                                t.deleteRenderbuffer(n);
                                break;
                            case "WebGLTexture":
                                t.deleteTexture(n);
                                break;
                            case "WebGLBuffer":
                                t.deleteBuffer(n);
                                break;
                            case "WebGLProgram":
                                t.deleteProgram(n)
                        }
                        delete e[n]
                    }))
                })), e.properties.cache.clear()
            };
            var S = function(e) {
                    P(e), e.onDispose.dispatch(), e.uniformValues.clear(), e.onContextCreate.dispose(), e.onContextLoss.dispose(), e.onBeforeRender.dispose(), e.onDispose.dispose(), e.canvas.removeEventListener("webglcontextlost", e.handleContextLost), e.canvas.removeEventListener("webglcontextrestored", e.handleContextRestored), e.canvas = null, e.gl = null
                },
                R = n(75170),
                _ = n(64439),
                k = n(77820),
                x = n(70888),
                T = function() {
                    function e(t) {
                        var n = t.renderer,
                            i = t.instance,
                            s = t.disposeMethod;
                        (0, r.A)(this, e), (0, o.A)(this, "usageCount", 0), this.renderer = n, this.instance = i, this.disposeMethod = s
                    }
                    return (0, i.A)(e, [{
                        key: "dispose",
                        value: function() {
                            this.disposeMethod(this.renderer, this.instance)
                        }
                    }]), e
                }(),
                L = function() {
                    function e(t) {
                        (0, r.A)(this, e), (0, o.A)(this, "resources", new Map), this.renderer = t
                    }
                    return (0, i.A)(e, [{
                        key: "getResource",
                        value: function(e) {
                            var t = e.key,
                                n = e.factory,
                                r = e.disposeMethod,
                                i = this.resources.get(t);
                            return i || (i = new T({
                                renderer: this.renderer,
                                instance: n(),
                                disposeMethod: r
                            }), this.resources.set(t, i)), i.usageCount++, i.instance
                        }
                    }, {
                        key: "getTexture",
                        value: function(e) {
                            var t = e.key,
                                n = e.factory;
                            return this.getResource({
                                key: t,
                                factory: n,
                                disposeMethod: _.A
                            })
                        }
                    }, {
                        key: "getProgram",
                        value: function(e) {
                            var t = e.key,
                                n = e.factory;
                            return this.getResource({
                                key: t,
                                factory: n,
                                disposeMethod: k.A
                            })
                        }
                    }, {
                        key: "getGeometry",
                        value: function(e) {
                            var t = e.key,
                                n = e.factory;
                            return this.getResource({
                                key: t,
                                factory: n,
                                disposeMethod: x.A
                            })
                        }
                    }, {
                        key: "releaseResource",
                        value: function(e) {
                            var t = this.resources.get(e);
                            t && 0 == --t.usageCount && (t.dispose(), this.resources.delete(e))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.resources.clear(), this.renderer = null
                        }
                    }]), e
                }();

            function j(e, t) {
                var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!n) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return I(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return I(e, t)
                        }(e)) || t && e && "number" == typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, s = !0,
                    a = !1;
                return {
                    s: function() {
                        n = n.call(e)
                    },
                    n: function() {
                        var e = n.next();
                        return s = e.done, e
                    },
                    e: function(e) {
                        a = !0, o = e
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                }
            }

            function I(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function M(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var D = [1, .79, .62, .5, .4, .31, .25],
                N = function() {
                    function e(t) {
                        var n = t.attributes,
                            i = t.plugins;
                        (0, r.A)(this, e), (0, o.A)(this, "width", 0), (0, o.A)(this, "height", 0), (0, o.A)(this, "rendererWidth", 0), (0, o.A)(this, "rendererHeight", 0), (0, o.A)(this, "scaleStep", 0), (0, o.A)(this, "maxStep", 3), (0, o.A)(this, "avgFrameDuration", 50), (0, o.A)(this, "isWebGLSupported", !0), (0, o.A)(this, "content", []), (0, o.A)(this, "multipleActiveContent", !1), (0, o.A)(this, "renderedLastFrame", !1), (0, o.A)(this, "viewport", []), s.A ? (this.webglCanvas = document.createElement("canvas"), Object.assign(this.webglCanvas.style, {
                            position: "absolute",
                            left: 0,
                            top: 0
                        }), this.renderer = new b(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? M(Object(n), !0).forEach((function(t) {
                                    (0, o.A)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            canvas: this.webglCanvas,
                            plugins: i
                        }, n)), this.resourceCache = new L(this.renderer)) : this.isWebGLSupported = !1
                    }
                    return (0, i.A)(e, [{
                        key: "register",
                        value: function(e) {
                            e.updateSize();
                            var t = Math.ceil(e.width * e.pixelRatio * D[this.scaleStep]),
                                n = Math.ceil(e.height * e.pixelRatio * D[this.scaleStep]);
                            e.setContextSize(t, n), this.content.push(e)
                        }
                    }, {
                        key: "unregister",
                        value: function(e) {
                            var t = this.content.indexOf(e); - 1 !== t && (this.content.splice(t, 1), e.removeCanvas())
                        }
                    }, {
                        key: "tick",
                        value: function(e, t) {
                            var n = this;
                            this.renderedLastFrame && (this.updateScaleStep(t), this.renderedLastFrame = !1), this.countActiveScenes(), this.updateRendererSize(), 0 !== this.rendererWidth && 0 !== this.rendererHeight && this.content.forEach((function(r) {
                                (r.needsForceRender || r.isActive) && (r.update(e, t), r.autoUpdate && (r.isDirty = !0), n.renderContent(r))
                            }))
                        }
                    }, {
                        key: "updateScaleStep",
                        value: function(e) {
                            var t = this.scaleStep;
                            this.avgFrameDuration += (0, R.qE)(.2 * (e - this.avgFrameDuration), -5, 5), this.avgFrameDuration > 60 ? ++this.scaleStep : this.avgFrameDuration < 40 && this.scaleStep > 0 && --this.scaleStep, this.scaleStep = Math.min(this.scaleStep, this.maxStep), t !== this.scaleStep && (this.avgFrameDuration = 50)
                        }
                    }, {
                        key: "countActiveScenes",
                        value: function() {
                            var e, t, n = 0,
                                r = j(this.content);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var i = t.value;
                                    (i.isActive || i.needsForceRender) && n++, i.node === this.webglCanvas.parentElement && (e = i)
                                }
                            } catch (e) {
                                r.e(e)
                            } finally {
                                r.f()
                            }
                            var o = n > 1;
                            if (e) {
                                var s = o && !this.multipleActiveContent,
                                    a = !e.isActive;
                                if (s || a) {
                                    var c = this.getScaledContentSize(e),
                                        u = c.width,
                                        f = c.height;
                                    this.copyPixels(e, u, f), e.removeCanvas(), e.show()
                                }
                            }
                            this.multipleActiveContent = o
                        }
                    }, {
                        key: "updateRendererSize",
                        value: function() {
                            var e, t = 0,
                                n = 0,
                                r = 0,
                                i = 0,
                                o = D[this.scaleStep],
                                s = j(this.content);
                            try {
                                for (s.s(); !(e = s.n()).done;) {
                                    var a = e.value;
                                    t = Math.max(t, a.width), n = Math.max(n, a.height), r = Math.max(r, Math.ceil(a.width * a.pixelRatio * o)), i = Math.max(i, Math.ceil(a.height * a.pixelRatio * o))
                                }
                            } catch (e) {
                                s.e(e)
                            } finally {
                                s.f()
                            }
                            r === this.rendererWidth && i === this.rendererHeight || (this.width = t, this.height = n, this.resizeRenderer(r, i))
                        }
                    }, {
                        key: "renderContent",
                        value: function(e) {
                            var t = e.clearColor,
                                n = e.isActive,
                                r = e.isDirty;
                            if (e.needsForceRender || n && r) {
                                var i = this.getScaledContentSize(e),
                                    o = i.width,
                                    s = i.height;
                                A(this.renderer, 0, this.rendererHeight - s, o, s), (0, w.A)(this.renderer.state, t), (0, O.A)(this.renderer), e.setContextSize(o, s), this.updateViewport(e, o, s), e.render(), this.multipleActiveContent ? (this.copyPixels(e, o, s), e.show()) : (this.resizeWebGLCanvasForContent(e), e.appendCanvas(this.webglCanvas), e.hide()), e.isDirty = !1, e.needsForceRender = !1, this.renderedLastFrame = !0
                            }
                        }
                    }, {
                        key: "updateViewport",
                        value: function(e, t, n) {
                            this.viewport[0] = 0, this.viewport[1] = this.rendererHeight - n, this.viewport[2] = e.canvas.width, this.viewport[3] = e.canvas.height, (0, E.A)(this.renderer, "uViewport", this.viewport)
                        }
                    }, {
                        key: "copyPixels",
                        value: function(e, t, n) {
                            var r = e.context,
                                i = e.canvas.width,
                                o = e.canvas.height;
                            r && 0 !== t && 0 !== n && 0 !== i && 0 !== o && (r.clearRect(0, 0, i, o), r.drawImage(this.webglCanvas, 0, 0, t, n, 0, 0, i, o))
                        }
                    }, {
                        key: "getScaledContentSize",
                        value: function(e) {
                            return {
                                width: Math.ceil(e.width * e.pixelRatio * D[this.scaleStep]),
                                height: Math.ceil(e.height * e.pixelRatio * D[this.scaleStep])
                            }
                        }
                    }, {
                        key: "resizeRenderer",
                        value: function(e, t) {
                            this.rendererWidth = e, this.rendererHeight = t, C(this.renderer, this.rendererWidth, this.rendererHeight)
                        }
                    }, {
                        key: "resizeWebGLCanvasForContent",
                        value: function(e) {
                            var t = e.pixelRatio * D[this.scaleStep];
                            this.webglCanvas.style.width = Math.ceil(this.rendererWidth / t) + "px", this.webglCanvas.style.height = Math.ceil(this.rendererHeight / t) + "px"
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.renderer && (S(this.renderer), this.resourceCache.destroy(), this.renderer = null)
                        }
                    }, {
                        key: "isEmpty",
                        value: function() {
                            return 0 === this.content.length
                        }
                    }, {
                        key: "isContextLost",
                        value: function() {
                            return this.renderer.gl.isContextLost()
                        }
                    }]), e
                }(),
                F = "undefined" != typeof window ? window : {};
            F.__sqsWebGL || (F.__sqsWebGL = {
                initialized: !1,
                ticker: null,
                controllerPool: [],
                controllers: [],
                contentCount: 0,
                sharedController: null,
                dedicatedControllers: [],
                dedicatedControllerPool: [],
                dedicatedContextLimit: 3
            });
            var U = F.__sqsWebGL,
                B = function() {
                    function e(t) {
                        var n = this;
                        (0, c._)(this, e), (0, c.e)(this, "handleContextCreate", (function() {
                            n.cache = new Map
                        })), (0, c.e)(this, "dispose", (function() {
                            n.renderer.onContextCreate.remove(n.handleContextCreate), n.renderer.onDispose.remove(n.dispose), n.cache.clear()
                        })), this.renderer = t, this.renderer.onContextCreate.add(this.handleContextCreate), this.renderer.onDispose.add(this.dispose)
                    }
                    return (0, c.b)(e, [{
                        key: "get",
                        value: function(e) {
                            var t = this.cache.get(e);
                            if (!t) {
                                if (!(t = this.renderer.gl.getExtension(e))) throw new Error("WebGLExtensions: ".concat(e, " extension not supported."));
                                this.cache.set(e, t)
                            }
                            return t
                        }
                    }]), e
                }();
            (0, c.e)(B, "NAME", "extensions");
            var H = B,
                z = function() {
                    function e(t) {
                        var n = this;
                        (0, c._)(this, e), (0, c.e)(this, "nextTextureUnit", 1), (0, c.e)(this, "reset", (function() {
                            n.nextTextureUnit = 1
                        })), this.renderer = t, this.renderer.onBeforeRender.add(this.reset), this.textureBindings = new WeakMap
                    }
                    return (0, c.b)(e, [{
                        key: "dispose",
                        value: function() {
                            this.renderer.onBeforeRender.remove(this.reset), this.renderer = null
                        }
                    }]), e
                }();
            (0, c.e)(z, "NAME", "textures");
            var G = {
                    plugins: [H, z],
                    attributes: {
                        alpha: !0,
                        antialias: !0,
                        depth: !0,
                        stencil: !1,
                        premultipliedAlpha: !0,
                        preserveDrawingBuffer: !0,
                        failIfMajorPerformanceCaveat: !0
                    }
                },
                W = {
                    contextLimit: 4
                },
                V = W;

            function X(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Y() {
                U.ticker.stop(), U.initialized = !1
            }
            var K = function(e) {
                    var t, n = function(e) {
                            return void 0 !== e.controllers || (e.controllers = [], e.controllerPool = [], e.contentCount = 0), e
                        }(U),
                        r = n.initialized,
                        i = n.controllers,
                        s = n.controllerPool,
                        c = n.contentCount,
                        u = V.contextLimit;
                    r || (t = performance.now(), U.ticker = new a((function(e) {
                        var n = e - t;
                        t = e, U.controllers.forEach((function(t) {
                            t.tick(e, n)
                        }))
                    })), U.ticker.start(), U.initialized = !0);
                    var f = i[c % u];
                    return f || ((f = s.pop()) && !f.isContextLost() || (f = new N(function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? X(Object(n), !0).forEach((function(t) {
                                (0, o.A)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : X(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, G))), i.push(f)), f.register(e), U.contentCount++, f
                },
                Q = function(e) {
                    var t = U.controllers,
                        n = U.controllerPool,
                        r = t.find((function(t) {
                            return t.content.find((function(t) {
                                return e === t
                            }))
                        }));
                    r && (r.unregister(e), U.contentCount--, r.isEmpty() && (t.splice(t.indexOf(r), 1), n.push(r)), t.every((function(e) {
                        return e.isEmpty()
                    })) && Y())
                };

            function q(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function J(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? q(Object(n), !0).forEach((function(t) {
                        (0, o.A)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var $ = function() {
                function e(t, n) {
                    var i = this;
                    (0, r.A)(this, e), (0, o.A)(this, "width", 0), (0, o.A)(this, "height", 0), (0, o.A)(this, "contextWidth", 0), (0, o.A)(this, "contextHeight", 0), (0, o.A)(this, "isActive", !1), (0, o.A)(this, "isSupported", !0), (0, o.A)(this, "autoUpdate", !0), (0, o.A)(this, "isDirty", !0), (0, o.A)(this, "needsForceRender", !1), (0, o.A)(this, "clearColor", [1, 1, 1, 1]), (0, o.A)(this, "resourceKeys", []), (0, o.A)(this, "appendedCanvas", null), (0, o.A)(this, "start", (function() {
                        return !i.isSupported || i.isActive || (i.isActive = !0), i
                    })), (0, o.A)(this, "stop", (function() {
                        return i.isSupported && i.isActive ? (i.isActive = !1, i) : i
                    })), (0, o.A)(this, "refresh", (function() {
                        if (i.isSupported) return i.updateSize(), i.onRefresh(), i
                    })), this.node = t, this.props = J(J(J({}, e.defaultProps), this.constructor.defaultProps), n), this.isSupported = s.A, this.isSupported && (this.node.style.overflow = "hidden", this.clearNode(), this.createCanvas(), this.renderController = K(this), this.renderer = this.renderController.renderer, this.resourceCache = this.renderController.resourceCache, this.updateSize())
                }
                return (0, i.A)(e, [{
                    key: "createCanvas",
                    value: function() {
                        this.canvas = document.createElement("canvas"), Object.assign(this.canvas.style, {
                            display: "block",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }), this.node.appendChild(this.canvas)
                    }
                }, {
                    key: "setProps",
                    value: function(e) {
                        if (!this.isSupported) return this;
                        var t = J({}, this.props);
                        return this.props = J(J({}, this.props), e), this.onUpdateProps(t), this.needsForceRender = !0, this
                    }
                }, {
                    key: "onUpdateProps",
                    value: function(e) {}
                }, {
                    key: "detach",
                    value: function() {
                        this.isSupported && (this.node.removeChild(this.canvas), this.appendedCanvas && this.appendedCanvas.parentElement === this.node && this.node.removeChild(this.appendedCanvas), this.onDetach(), this.node = null)
                    }
                }, {
                    key: "onDetach",
                    value: function() {}
                }, {
                    key: "attach",
                    value: function(e) {
                        this.isSupported && this.canvas && (this.node = e, this.clearNode(), this.node.appendChild(this.canvas), this.appendedCanvas && this.node.appendChild(this.appendedCanvas), this.onAttach())
                    }
                }, {
                    key: "onAttach",
                    value: function() {}
                }, {
                    key: "updateSize",
                    value: function() {
                        var e = this.node.getBoundingClientRect(),
                            t = e.width,
                            n = e.height;
                        t === this.width && n === this.height || (this.width = t, this.height = n, this.needsForceRender = !0)
                    }
                }, {
                    key: "setContextSize",
                    value: function(e, t) {
                        this.contextWidth === e && this.contextHeight === t || (this.contextWidth = e, this.contextHeight = t, this.canvas.width = this.contextWidth, this.canvas.height = this.contextHeight)
                    }
                }, {
                    key: "onRefresh",
                    value: function() {}
                }, {
                    key: "update",
                    value: function(e) {}
                }, {
                    key: "render",
                    value: function() {}
                }, {
                    key: "renderFrame",
                    value: function() {
                        if (this.isSupported) return this.needsForceRender = !0, this.canvas
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        if (this.isSupported && this.renderController) return !1 === t && Q(this), this.renderController = null, this.resourceKeys.forEach((function(t) {
                            e.resourceCache.releaseResource(t)
                        })), this.clearNode(), this.onDestroy(), this
                    }
                }, {
                    key: "clearNode",
                    value: function() {
                        this.node && (this.node.innerHTML = "")
                    }
                }, {
                    key: "onDestroy",
                    value: function() {}
                }, {
                    key: "getTexture",
                    value: function(e) {
                        var t = e.key,
                            n = e.factory;
                        return this.resourceKeys.push(t), this.resourceCache.getTexture({
                            key: t,
                            factory: n
                        })
                    }
                }, {
                    key: "getProgram",
                    value: function(e) {
                        var t = e.key,
                            n = e.factory;
                        return this.resourceKeys.push(t), this.resourceCache.getProgram({
                            key: t,
                            factory: n
                        })
                    }
                }, {
                    key: "getGeometry",
                    value: function(e) {
                        var t = e.key,
                            n = e.factory;
                        return this.resourceKeys.push(t), this.resourceCache.getGeometry({
                            key: t,
                            factory: n
                        })
                    }
                }, {
                    key: "releaseResource",
                    value: function(e) {
                        var t = this.resourceKeys.indexOf(e); - 1 !== t && (this.resourceKeys.splice(t, 1), this.resourceCache.releaseResource(e))
                    }
                }, {
                    key: "appendCanvas",
                    value: function(e) {
                        e.parentElement !== this.node && (this.node.appendChild(e), this.appendedCanvas = e)
                    }
                }, {
                    key: "removeCanvas",
                    value: function() {
                        this.appendedCanvas && this.appendedCanvas.parentElement === this.node && (this.node.removeChild(this.appendedCanvas), this.appendedCanvas = null)
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.canvas.style.display = "block"
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.canvas.style.display = "none"
                    }
                }, {
                    key: "pixelRatio",
                    get: function() {
                        return this.props.pixelRatio || 1
                    }
                }, {
                    key: "context",
                    get: function() {
                        return this.canvas.getContext("2d")
                    }
                }]), e
            }();
            (0, o.A)($, "defaultProps", {
                pixelRatio: 1
            })
        },
        9417: function(e, t, n) {
            function r(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.d(t, {
                A: function() {
                    return r
                }
            })
        },
        23029: function(e, t, n) {
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            n.d(t, {
                A: function() {
                    return r
                }
            })
        },
        92901: function(e, t, n) {
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function i(e, t, n) {
                return t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }
            n.d(t, {
                A: function() {
                    return i
                }
            })
        },
        64467: function(e, t, n) {
            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, {
                A: function() {
                    return r
                }
            })
        },
        53954: function(e, t, n) {
            function r(e) {
                return r = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, r(e)
            }
            n.d(t, {
                A: function() {
                    return r
                }
            })
        },
        85501: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return i
                }
            });
            var r = n(63662);

            function i(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && (0, r.A)(e, t)
            }
        },
        56822: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return o
                }
            });
            var r = n(82284),
                i = n(9417);

            function o(e, t) {
                if (t && ("object" === (0, r.A)(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return (0, i.A)(e)
            }
        },
        63662: function(e, t, n) {
            function r(e, t) {
                return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, r(e, t)
            }
            n.d(t, {
                A: function() {
                    return r
                }
            })
        },
        82284: function(e, t, n) {
            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            n.d(t, {
                A: function() {
                    return r
                }
            })
        }
    }
]);