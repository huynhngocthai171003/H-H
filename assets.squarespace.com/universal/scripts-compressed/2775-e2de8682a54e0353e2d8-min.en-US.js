(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [2775], {
        418891: l => {
            l.exports = {
                "2a55ca78e8124468fd12f5631b591477": "Cookie banner",
                "5c9e9d0cbf6046deb40eaa0a5c1722df": "These cookies provide quantitative measures of website visitors. With the usage of these cookies we are able to count visits and traffic sources to improve the performance of our site.",
                "5d34f2ee7358fc231e5c0fb44bb6194d": "Close",
                "67db752e6310686617e98c22c85b3963": "Necessary",
                "6bf1c5ed97ddc6828e7cd5159df2a240": "Performance and Analytics",
                "74472054366bb6c5316e7afadad1093e": "These cookies are used by advertising companies to serve ads that are relevant to your interests.",
                "7f55fe8fa38cccf52495082b8a3b514e": "Required to enable core site functionality and to remember user preferences and choices, such as language preferences or customized settings.",
                ab24934bbb24336ecf14f4c74753cb74: "On",
                b14f9710c8c55c42330cec28b8e5a412: "Manage previously selected cookie options",
                bd5b0ea753d0acb71633f9924dd99e2e: "Advertising",
                c2796a555df59ff64708a37dca691b54: "Save Preferences",
                e1424f67804c73cbeabb38dc6ab1c5b4: "Manage Cookies",
                eed68b0b0145ca4107add1b0eba25227: "Off",
                f5d47dd8f48aea89af7ca857bb5999d2: "Cookie Preferences",
                f75292dded9e49e53481e31e94f738f7: "Always on"
            }
        },
        38109: l => {
            l.exports = {}
        },
        124517: l => {
            l.exports = {}
        },
        568088: l => {
            l.exports = {}
        },
        616207: l => {
            l.exports = {}
        },
        801579: (l, a, e) => {
            "use strict";
            var n = e(875832);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var s = n(e(987195)),
                o = n(e(845076)),
                t = n(e(174161)),
                i = e(218673);
            e(38109);
            var g = v => {
                    var d = v.checked,
                        O = v.onChange,
                        p = v.inputProps,
                        u = () => {
                            O(!d)
                        },
                        N = (0, i.useI18n)(),
                        h = N.t;
                    return t.default.createElement("div", {
                        className: "toggle-wrapper"
                    }, t.default.createElement("p", {
                        "aria-hidden": "true"
                    }, d ? h("On", null, {
                        project: "gdpr-cookie-banner",
                        notes: "A toggle is on"
                    }) : h("Off", null, {
                        project: "gdpr-cookie-banner",
                        notes: "A toggle is off"
                    })), t.default.createElement("label", {
                        className: (0, o.default)("sqs-toggle", {
                            checked: d,
                            "sqs-toggle--on": d,
                            "sqs-toggle--off": !d
                        })
                    }, t.default.createElement("input", (0, s.default)({
                        type: "checkbox",
                        checked: d,
                        onChange: u
                    }, p))))
                },
                E = a.default = g;
            l.exports = a.default
        },
        721963: (l, a) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.MANAGE_COOKIES_OVERLAY_CLASS_NAME = a.MANAGE_COOKIES_BAR_CLASS_NAME = a.COOKIE_BANNER_ROOT_CLASS_NAME = void 0;
            var e = a.COOKIE_BANNER_ROOT_CLASS_NAME = "gdpr-cookie-banner",
                n = a.MANAGE_COOKIES_BAR_CLASS_NAME = "manage-cookies-bar",
                s = a.MANAGE_COOKIES_OVERLAY_CLASS_NAME = "manage-cookies-overlay"
        },
        162049: (l, a, e) => {
            "use strict";
            var n = e(875832);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.useGetWindowWidth = i;
            var s = n(e(375798)),
                o = n(e(418008)),
                t = e(174161);

            function i() {
                var g = (0, t.useState)(window.innerWidth),
                    E = (0, s.default)(g, 2),
                    v = E[0],
                    d = E[1];

                function O() {
                    d(window.innerWidth)
                }
                var p = (0, t.useMemo)(() => (0, o.default)(O, 250), [O]);
                return (0, t.useEffect)(() => (window.addEventListener("resize", O), () => {
                    window.removeEventListener("resize", O)
                }), [p]), v
            }
        },
        218673: (l, a, e) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.useI18n = t, e(392338);
            var n = e(943246),
                s = "gdpr-cookie-banner";

            function o(i) {
                return e(573147)("./".concat(s, ".").concat(i, ".yaml"))
            }

            function t() {
                var i = (0, n.useTranslateWithTranslationLoader)(o),
                    g = i.t,
                    E = i.T;
                return {
                    t: g,
                    T: E
                }
            }
        },
        79803: (l, a, e) => {
            "use strict";
            var n = e(875832);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var s = n(e(174161)),
                o = () => s.default.createElement("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, s.default.createElement("path", {
                    d: "M7 5.58594L12.293 0.292969L13.7072 1.70718L8.41421 7.00015L13.7072 12.2931L12.293 13.7073L7 8.41436L1.70718 13.7072L0.292969 12.293L5.58579 7.00015L0.292969 1.70733L1.70718 0.293119L7 5.58594Z",
                    fill: "white"
                })),
                t = a.default = o;
            l.exports = a.default
        },
        602775: (l, a, e) => {
            "use strict";
            var n = e(875832);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), Object.defineProperty(a, "BannerPosition", {
                enumerable: !0,
                get: function() {
                    return g.BannerPosition
                }
            }), Object.defineProperty(a, "COOKIE_BANNER_ROOT_CLASS_NAME", {
                enumerable: !0,
                get: function() {
                    return i.COOKIE_BANNER_ROOT_CLASS_NAME
                }
            }), Object.defineProperty(a, "CookieBannerProps", {
                enumerable: !0,
                get: function() {
                    return g.CookieBannerProps
                }
            }), Object.defineProperty(a, "MANAGE_COOKIES_BAR_CLASS_NAME", {
                enumerable: !0,
                get: function() {
                    return i.MANAGE_COOKIES_BAR_CLASS_NAME
                }
            }), Object.defineProperty(a, "MANAGE_COOKIES_OVERLAY_CLASS_NAME", {
                enumerable: !0,
                get: function() {
                    return i.MANAGE_COOKIES_OVERLAY_CLASS_NAME
                }
            }), a.default = void 0;
            var s = n(e(784712)),
                o = n(e(945261)),
                t = n(e(496174)),
                i = e(721963),
                g = e(345380),
                E = a.default = {
                    Banner: s.default,
                    ManageBar: o.default,
                    ManageOverlay: t.default
                }
        },
        784712: (l, a, e) => {
            "use strict";
            var n = e(875832);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var s = n(e(845076)),
                o = n(e(174161)),
                t = e(721963),
                i = e(218673),
                g = e(162049),
                E = e(345380);
            e(124517);
            var v = 576,
                d = () => {},
                O = u => {
                    var N = u.acceptCookiesLabel,
                        h = u.bannerPosition,
                        K = u.bannerText,
                        r = u.declineCookiesLabel,
                        f = u.hasManageCookies,
                        m = u.hasDeclineCookies,
                        b = u.manageButtonRef,
                        A = u.manageCookiesLabel,
                        C = u.theme,
                        k = C === void 0 ? "" : C,
                        B = u.onAccept,
                        Y = B === void 0 ? d : B,
                        I = u.onDecline,
                        W = I === void 0 ? d : I,
                        G = u.toggleManageOverlay,
                        z = G === void 0 ? d : G,
                        w = u.isPreview,
                        D = (0, i.useI18n)(),
                        Z = D.t,
                        M = h !== E.BannerPosition.TOP && h !== E.BannerPosition.BOTTOM,
                        F = (0, g.useGetWindowWidth)(),
                        y = "wide";
                    (M || F < v) && (y = "narrow");
                    var J = (0, s.default)("accept", "sqs-button-element--primary", "sqs-cookie-banner-v2-accept", "sqs-cookie-banner-v2-cta"),
                        T = (0, s.default)("decline", "sqs-button-element--secondary", "sqs-cookie-banner-v2-deny", "sqs-cookie-banner-v2-cta"),
                        j = (0, s.default)("button-group", "sqs-cookie-banner-v2-cta-container"),
                        $ = (0, s.default)("disclaimer-text", "sqs-cookie-banner-v2-text"),
                        S = o.default.createElement("button", {
                            className: J,
                            onClick: Y
                        }, o.default.createElement("span", null, N)),
                        V = o.default.createElement("button", {
                            className: T,
                            onClick: W
                        }, o.default.createElement("span", null, r)),
                        L = o.default.createElement("button", {
                            className: "manage sqs-button-element--tertiary",
                            onClick: () => {
                                z(!0)
                            },
                            ref: b
                        }, o.default.createElement("span", null, A)),
                        Q = o.default.createElement("div", {
                            className: j
                        }, f && L, m && V, S),
                        X = o.default.createElement("div", {
                            className: j
                        }, S, m && V, f && L);
                    return o.default.createElement("section", {
                        "data-section-theme": k,
                        "aria-label": Z("Cookie banner", null, {
                            project: "gdpr-cookie-banner"
                        }),
                        className: (0, s.default)(t.COOKIE_BANNER_ROOT_CLASS_NAME, h, k, {
                            bar: !M,
                            popup: M,
                            "full-styling": !w
                        })
                    }, o.default.createElement("p", {
                        className: $,
                        dangerouslySetInnerHTML: {
                            __html: K
                        }
                    }), y === "wide" ? Q : X)
                },
                p = a.default = O;
            l.exports = a.default
        },
        945261: (l, a, e) => {
            "use strict";
            var n = e(875832);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var s = n(e(845076)),
                o = n(e(174161)),
                t = n(e(832979)),
                i = e(721963),
                g = e(218673);
            e(568088);
            var E = d => {
                    var O = (0, g.useI18n)(),
                        p = O.t,
                        u = d.savedPreferencesLayout,
                        N = u === void 0 ? t.default.PILL : u,
                        h = d.savedPreferencesText,
                        K = h === void 0 ? p("Cookie Preferences", null, {
                            project: "gdpr-cookie-banner"
                        }) : h,
                        r = d.theme,
                        f = r === void 0 ? "" : r,
                        m = d.openOverlay,
                        b = d.manageButtonRef;
                    return o.default.createElement("section", {
                        "data-dynamic-strings": "",
                        "data-section-theme": f,
                        "aria-label": p("Manage previously selected cookie options", null, {
                            project: "gdpr-cookie-banner"
                        }),
                        className: (0, s.default)(i.MANAGE_COOKIES_BAR_CLASS_NAME, f, N)
                    }, o.default.createElement("button", {
                        className: "manage-bar-action",
                        onClick: m,
                        ref: b
                    }, K))
                },
                v = a.default = E;
            l.exports = a.default
        },
        496174: (l, a, e) => {
            "use strict";
            e(392338), e(392338), e(392338), e(392338);
            var n = e(875832);
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0, e(392338), e(392338), e(392338);
            var s = n(e(375798)),
                o = n(e(845076)),
                t = u(e(174161)),
                i = n(e(994336)),
                g = e(999762),
                E = n(e(801579)),
                v = e(721963),
                d = e(218673),
                O = n(e(79803));
            e(616207);

            function p(r) {
                if (typeof WeakMap != "function") return null;
                var f = new WeakMap,
                    m = new WeakMap;
                return (p = function(A) {
                    return A ? m : f
                })(r)
            }

            function u(r, f) {
                if (!f && r && r.__esModule) return r;
                if (r === null || typeof r != "object" && typeof r != "function") return {
                    default: r
                };
                var m = p(f);
                if (m && m.has(r)) return m.get(r);
                var b = {
                        __proto__: null
                    },
                    A = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var C in r)
                    if (C !== "default" && Object.prototype.hasOwnProperty.call(r, C)) {
                        var k = A ? Object.getOwnPropertyDescriptor(r, C) : null;
                        k && (k.get || k.set) ? Object.defineProperty(b, C, k) : b[C] = r[C]
                    }
                return b.default = r, m && m.set(r, b), b
            }
            var N = r => {
                    var f = i.default.get(r);
                    return f ? f === "true" : !1
                },
                h = r => {
                    var f = r.theme,
                        m = f === void 0 ? "" : f,
                        b = r.cookieNames,
                        A = r.onClose,
                        C = r.onSave,
                        k = b.performance,
                        B = b.marketing,
                        Y = (0, t.useState)(N(k)),
                        I = (0, s.default)(Y, 2),
                        W = I[0],
                        G = I[1],
                        z = (0, t.useState)(N(B)),
                        w = (0, s.default)(z, 2),
                        D = w[0],
                        Z = w[1],
                        M = (0, d.useI18n)(),
                        F = M.t,
                        y = M.T,
                        J = c => c.stopPropagation(),
                        T = (0, t.useRef)(null),
                        j = (0, t.useId)(),
                        $ = () => {
                            var c;
                            return (((c = T.current) === null || c === void 0 ? void 0 : c.ownerDocument) || document).documentElement
                        },
                        S = (0, t.useCallback)(c => {
                            c.code === "Escape" && (c.stopPropagation(), A())
                        }, [A]);
                    (0, t.useEffect)(() => {
                        var c = $();
                        return c.addEventListener("keyup", S),
                            function() {
                                c.removeEventListener("keyup", S)
                            }
                    }, [S]), (0, t.useEffect)(() => {
                        var c = (0, g.containFocus)({
                            container: T.current,
                            root: $()
                        });
                        return c
                    }, [T]);
                    var V = () => {
                            var c = [];
                            W && c.push(k), D && c.push(B), C(c)
                        },
                        L = {
                            necessary: {
                                title: t.default.createElement(y, {
                                    project: "gdpr-cookie-banner",
                                    notes: "This is a type of cookie. Necessary cookies are essential for websites and cannot be disabled."
                                }, "Necessary"),
                                description: t.default.createElement(y, {
                                    project: "gdpr-cookie-banner"
                                }, "Required to enable core site functionality and to remember user preferences and choices, such as language preferences or customized settings.")
                            },
                            performance: {
                                title: t.default.createElement(y, {
                                    project: "gdpr-cookie-banner",
                                    notes: "This is a type of cookie. Performance cookies collect website data and analytics."
                                }, "Performance and Analytics"),
                                description: t.default.createElement(y, {
                                    project: "gdpr-cookie-banner"
                                }, "These cookies provide quantitative measures of website visitors. With the usage of these cookies we are able to count visits and traffic sources to improve the performance of our site.")
                            },
                            marketing: {
                                title: t.default.createElement(y, {
                                    project: "gdpr-cookie-banner",
                                    notes: "This is a type of cookie. Marketing cookies are used to deliver targeted advertisements."
                                }, "Advertising"),
                                description: t.default.createElement(y, {
                                    project: "gdpr-cookie-banner"
                                }, "These cookies are used by advertising companies to serve ads that are relevant to your interests.")
                            }
                        },
                        Q = [{
                            name: "necessary"
                        }, {
                            name: "performance",
                            checked: W,
                            onChange: G
                        }, {
                            name: "marketing",
                            checked: D,
                            onChange: Z
                        }],
                        X = c => {
                            var P = c.name,
                                H = c.checked,
                                U = c.onChange,
                                R = (0, t.useId)();
                            return t.default.createElement(t.default.Fragment, null, U ? t.default.createElement("div", {
                                className: "category-selection"
                            }, t.default.createElement("h4", {
                                id: "".concat(R, "-title")
                            }, L[P].title), t.default.createElement(E.default, {
                                checked: !!H,
                                onChange: U,
                                inputProps: {
                                    "aria-labelledby": "".concat(R, "-title"),
                                    "aria-describedby": "".concat(R, "-description")
                                }
                            })) : t.default.createElement("div", {
                                className: "category-selection"
                            }, t.default.createElement("h4", null, L[P].title), t.default.createElement("p", null, F("Always on", null, {
                                project: "gdpr-cookie-banner",
                                notes: "This refers to the state of necessary website cookies, they are always on, or in other words they are always enabled"
                            }))), t.default.createElement("p", {
                                className: "category-description",
                                id: "".concat(R, "-description")
                            }, L[P].description))
                        };
                    return t.default.createElement("div", {
                        className: "manage-overlay-wrapper",
                        "data-dynamic-strings": ""
                    }, t.default.createElement("div", {
                        className: "manage-cookies-overlay-backdrop",
                        onClick: A
                    }), t.default.createElement("div", {
                        "data-section-theme": m,
                        "aria-labelledby": j + "-heading",
                        className: (0, o.default)(v.MANAGE_COOKIES_OVERLAY_CLASS_NAME, m),
                        onClick: J,
                        role: "dialog",
                        ref: T
                    }, t.default.createElement("h3", {
                        id: j + "-heading"
                    }, t.default.createElement(y, {
                        project: "gdpr-cookie-banner",
                        notes: "This is the title for a feature that allows site visitors to manage their cookie settings."
                    }, "Manage Cookies")), Q.map((c, P) => {
                        var H = c.name,
                            U = c.checked,
                            R = c.onChange;
                        return t.default.createElement(t.default.Fragment, {
                            key: H
                        }, P > 0 && t.default.createElement("hr", null), t.default.createElement(X, {
                            name: H,
                            checked: U,
                            onChange: R
                        }))
                    }), t.default.createElement("div", {
                        className: "button-group"
                    }, t.default.createElement("button", {
                        className: "save sqs-button-element--primary",
                        onClick: V
                    }, t.default.createElement(y, {
                        project: "gdpr-cookie-banner",
                        notes: "This is a button that saves a site visitor's cookie preferences."
                    }, "Save Preferences"))), t.default.createElement("button", {
                        type: "button",
                        className: "close-icon",
                        "aria-label": F("Close", null, {
                            project: "gdpr-cookie-banner"
                        }),
                        onClick: A
                    }, t.default.createElement(O.default, null))))
                },
                K = a.default = h;
            l.exports = a.default
        },
        345380: (l, a) => {
            "use strict";
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.BannerPosition = void 0;
            var e = a.BannerPosition = function(n) {
                return n.TOP = "TOP", n.BOTTOM_LEFT = "BOTTOM_LEFT", n.BOTTOM_RIGHT = "BOTTOM_RIGHT", n.TOP_LEFT = "TOP_LEFT", n.TOP_RIGHT = "TOP_RIGHT", n.BOTTOM = "BOTTOM", n
            }({})
        },
        573147: (l, a, e) => {
            var n = {
                "./gdpr-cookie-banner.en-US.yaml": 418891,
                "src/main/webapp/frontend/website/gdpr-cookie-banner/sqs-i18n-translations/strings/gdpr-cookie-banner.en-US.yaml": 418891
            };

            function s(t) {
                var i = o(t);
                return e(i)
            }

            function o(t) {
                if (!e.o(n, t)) {
                    var i = new Error("Cannot find module '" + t + "'");
                    throw i.code = "MODULE_NOT_FOUND", i
                }
                return n[t]
            }
            s.keys = function() {
                return Object.keys(n)
            }, s.resolve = o, l.exports = s, s.id = 573147
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/3564830204f494351db1ceab15196096/2775-e2de8682a54e0353e2d8-min.en-US.js.map