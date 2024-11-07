(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [4125], {
        62837: function(t, e, r) {
            "use strict";
            r.d(e, {
                F: function() {
                    return o
                },
                hq: function() {
                    return i
                },
                py: function() {
                    return n
                }
            });
            var i = "aPosition",
                n = "aNormal",
                o = "aUv"
        },
        81538: function(t, e, r) {
            "use strict";
            var i = r(73523),
                n = r(62837),
                o = r(48282),
                a = r(90467);
            e.A = function() {
                var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).position,
                    e = void 0 === t ? n.hq : t,
                    r = new o.A,
                    u = new Float32Array([-1, -1, -1, 3, 3, -1]);
                return (0, a.A)(r, e, new i.A({
                    array: u,
                    itemSize: 2
                })), r
            }
        },
        36802: function(t, e, r) {
            "use strict";
            r.d(e, {
                i: function() {
                    return i
                },
                s: function() {
                    return o
                },
                t: function() {
                    return n
                }
            });
            var i = function(t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            };
            var n = function(t, e, r) {
                var i = e[0],
                    n = e[1],
                    o = e[2],
                    a = e[3],
                    u = e[4],
                    s = e[5],
                    c = e[6],
                    f = e[7],
                    p = e[8],
                    h = r[0],
                    v = r[1];
                return t[0] = i, t[1] = n, t[2] = o, t[3] = a, t[4] = u, t[5] = s, t[6] = h * i + v * a + c, t[7] = h * n + v * u + f, t[8] = h * o + v * s + p, t
            };
            var o = function(t, e, r) {
                var i = r[0],
                    n = r[1];
                return t[0] = i * e[0], t[1] = i * e[1], t[2] = i * e[2], t[3] = n * e[3], t[4] = n * e[4], t[5] = n * e[5], t[6] = e[6], t[7] = e[7], t[8] = e[8], t
            }
        },
        85e3: function(t, e, r) {
            "use strict";
            var i = r(29613),
                n = "activeTexture";
            e.A = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                t.get(n) !== e && (t.gl.activeTexture(i.ey + e), t.set(n, e))
            }
        },
        72235: function(t, e, r) {
            "use strict";
            var i = r(29613);
            e.A = function(t, e, r) {
                var n = "texture-".concat(r);
                t.get(n) !== e && (t.gl.bindTexture(i.TS, e), t.set(n, e))
            }
        },
        84012: function(t, e, r) {
            "use strict";
            var i = r(23755),
                n = r(29613);
            e.A = function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = e.image,
                    o = void 0 === r ? null : r,
                    a = e.minFilter,
                    u = void 0 === a ? n._Q : a,
                    s = e.magFilter,
                    c = void 0 === s ? n._Q : s,
                    f = e.wrapS,
                    p = void 0 === f ? n.aE : f,
                    h = e.wrapT,
                    v = void 0 === h ? n.aE : h,
                    l = e.format,
                    g = void 0 === l ? n.bU : l,
                    m = e.type,
                    d = void 0 === m ? n.l4 : m,
                    y = e.flipY,
                    x = void 0 === y || y,
                    A = e.premultiplyAlpha,
                    P = void 0 !== A && A;
                (0, i._)(this, t), this.image = o, this.minFilter = u, this.magFilter = c, this.wrapS = p, this.wrapT = v, this.format = g, this.type = d, this.flipY = x, this.premultiplyAlpha = P, this.generateMipmap = this.minFilter !== n._Q && this.minFilter !== n.te, this.needsUpdate = !1
            }
        },
        1477: function(t, e, r) {
            "use strict";
            r.d(e, {
                A: function() {
                    return c
                }
            });
            var i = r(54180),
                n = r(85e3),
                o = r(72235),
                a = r(29613);
            var u = function(t, e) {
                var r = t.gl;
                e.image && r.texImage2D(a.TS, 0, e.format, e.format, e.type, e.image), e.generateMipmap && r.generateMipmap(a.TS)
            };
            var s = function(t, e, r) {
                var a = t.gl,
                    s = t.properties.get(e);
                return (0, n.A)(t.state, r), s.glTexture ? ((0, o.A)(t.state, s.glTexture, r), !0 === e.needsUpdate && (u(t.state, e, s.glTexture), e.needsUpdate = !1)) : (s.glTexture = a.createTexture(), (0, o.A)(t.state, s.glTexture, r), (0, i.A)(a, e), u(t.state, e, s.glTexture)), r
            };
            var c = function(t, e) {
                var r = t.textures,
                    i = r.textureBindings,
                    n = i.get(e);
                return n || (n = function() {
                    return s(t, e, r.nextTextureUnit++)
                }, i.set(e, n)), n
            }
        },
        54180: function(t, e) {
            "use strict";
            e.A = function(t, e) {
                var r = e.wrapS,
                    i = e.wrapT,
                    n = e.minFilter,
                    o = e.magFilter,
                    a = e.flipY,
                    u = e.premultiplyAlpha;
                t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, r), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, i), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, n), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, o), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, a), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, u)
            }
        },
        44125: function(t, e, r) {
            "use strict";
            r.d(e, {
                A: function() {
                    return w
                }
            });
            r(94226);
            var i = r(23029),
                n = r(92901),
                o = r(85501),
                a = r(56822),
                u = r(53954),
                s = r(64467),
                c = r(59044),
                f = r(84012),
                p = r(94214),
                h = r(1477),
                v = r(81538),
                l = r(53668),
                g = r(68823),
                m = r(36802);
            var d = function(t) {
                    var e, r, i = t.matrix,
                        n = void 0 === i ? [] : i,
                        o = t.containerWidth,
                        a = t.containerHeight,
                        u = t.contentWidth,
                        s = t.contentHeight,
                        c = t.centerX,
                        f = void 0 === c ? .5 : c,
                        p = t.centerY;
                    u / s > o / a ? (e = o * s / (a * u), r = 1) : (e = 1, r = a * u / (o * s));
                    var h = (e - 1) / 2 * -1,
                        v = (r - 1) / 2 * -1,
                        l = h + (f - .5) * h * 2,
                        g = v + (.5 - (void 0 === p ? .5 : p)) * v * 2;
                    return (0, m.i)(n), (0, m.t)(n, n, [l, g]), (0, m.s)(n, n, [e, r]), n
                },
                y = r(47048),
                x = r.n(y);

            function A(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function P(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? A(Object(r), !0).forEach((function(e) {
                        (0, s.A)(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : A(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function T(t) {
                var e = function() {
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
                    var r, i = (0, u.A)(t);
                    if (e) {
                        var n = (0, u.A)(this).constructor;
                        r = Reflect.construct(i, arguments, n)
                    } else r = i.apply(this, arguments);
                    return (0, a.A)(this, r)
                }
            }
            var w = function(t) {
                (0, o.A)(r, t);
                var e = T(r);

                function r(t, n) {
                    var o;
                    return (0, i.A)(this, r), (o = e.call(this, t, P(P({}, r.defaultProps), n))).createResources(), o
                }
                return (0, n.A)(r, [{
                    key: "createResources",
                    value: function() {
                        var t = this.props,
                            e = t.image,
                            r = t.uniforms;
                        this.texture = new f.A({
                            image: e
                        }), this.drawInfo = (0, p.A)({
                            program: this.createProgram(),
                            uniforms: P(P(P({}, r), this.getUniformsFromProps()), {}, {
                                uvMatrix: x()(),
                                uImage: (0, h.A)(this.renderer, this.texture),
                                uResolution: [this.width, this.height]
                            }),
                            geometry: this.getGeometry({
                                key: "big-triangle",
                                factory: v.A
                            })
                        }), this.uniforms = this.drawInfo.uniforms, this.updateUvMatrix()
                    }
                }, {
                    key: "getUniformsFromProps",
                    value: function() {
                        return {}
                    }
                }, {
                    key: "createProgram",
                    value: function() {
                        var t = this.props,
                            e = t.programKey,
                            r = t.vert,
                            i = t.frag;
                        return this.getProgram({
                            key: e,
                            factory: function() {
                                return new l.A({
                                    vert: r,
                                    frag: i
                                })
                            }
                        })
                    }
                }, {
                    key: "onUpdateProps",
                    value: function(t) {
                        this.props.programKey !== t.programKey && (this.releaseResource(t.programKey), this.drawInfo.program = this.createProgram()), (this.props.imageNeedsUpdate || this.props.image !== t.image) && (this.texture.image = this.props.image, this.texture.needsUpdate = !0, this.props.imageNeedsUpdate = !1), Object.assign(this.uniforms, this.getUniformsFromProps()), this.refresh()
                    }
                }, {
                    key: "render",
                    value: function() {
                        (0, g.A)(this.renderer, this.drawInfo)
                    }
                }, {
                    key: "onRefresh",
                    value: function() {
                        this.uniforms.uResolution[0] = this.width, this.uniforms.uResolution[1] = this.height, this.updateUvMatrix()
                    }
                }, {
                    key: "updateUvMatrix",
                    value: function() {
                        d({
                            matrix: this.drawInfo.material.uniforms.uvMatrix,
                            containerWidth: this.width,
                            containerHeight: this.height,
                            contentWidth: this.props.image.naturalWidth,
                            contentHeight: this.props.image.naturalHeight,
                            centerX: this.props.focalPoint.x,
                            centerY: this.props.focalPoint.y
                        })
                    }
                }]), r
            }(c.A);
            (0, s.A)(w, "defaultProps", {
                programKey: null,
                vert: "\nattribute vec3 aPosition;\nuniform mat3 uvMatrix;\nvarying vec2 vUv;\n\nvoid main(){\n  gl_Position = vec4(aPosition, 1.);\n\n  vec2 uv = gl_Position.xy * .5 + .5;\n\n  vUv = (uvMatrix * vec3(uv, 1.)).xy;\n}\n",
                frag: "\nuniform sampler2D uImage;\nvarying vec2 vUv;\n\nvoid main(){\n  vec4 tx = texture2D(uImage, vUv);\n  tx.xyz *= tx.a;\n\n  gl_FragColor = tx;\n}\n",
                image: null,
                focalPoint: {
                    x: .5,
                    y: .5
                },
                uniforms: {},
                imageNeedsUpdate: !1
            })
        },
        47048: function(t) {
            t.exports = function() {
                var t = new Float32Array(9);
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 0, t[4] = 1, t[5] = 0, t[6] = 0, t[7] = 0, t[8] = 1, t
            }
        }
    }
]);