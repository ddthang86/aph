(function(g) {
    var window = this;
    'use strict';
    var PG = function(P) {
            g.Fj(P, "zx", Math.floor(Math.random() * 2147483648).toString(36) + Math.abs(Math.floor(Math.random() * 2147483648) ^ g.Vw()).toString(36));
            return P
        },
        vG = function(P, v, l) {
            Array.isArray(l) || (l = [String(l)]);
            g.HS7(P.Y, v, l)
        },
        p73 = function(P) {
            if (P instanceof g.Cb) return P;
            if (typeof P.eM == "function") return P.eM(!1);
            if (g.Ww(P)) {
                var v = 0,
                    l = new g.Cb;
                l.next = function() {
                    for (;;) {
                        if (v >= P.length) return g.fu;
                        if (v in P) return g.fb(P[v++]);
                        v++
                    }
                };
                return l
            }
            throw Error("Not implemented");
        },
        Lry = function(P, v, l) {
            if (g.Ww(P)) g.f$(P, v, l);
            else
                for (P = p73(P);;) {
                    var e = P.next();
                    if (e.done) break;
                    v.call(l, e.value, void 0, P)
                }
        },
        S7Q = function(P, v) {
            var l = [];
            Lry(v, function(e) {
                try {
                    var h = g.U7.prototype.K.call(this, e, !0)
                } catch (z) {
                    if (z == "Storage: Invalid value was encountered") return;
                    throw z;
                }
                h === void 0 ? l.push(e) : g.vgy(h) && l.push(e)
            }, P);
            return l
        },
        Gl1 = function(P, v) {
            S7Q(P, v).forEach(function(l) {
                g.U7.prototype.remove.call(this, l)
            }, P)
        },
        X7y = function(P) {
            if (P.Wg) {
                if (P.Wg.locationOverrideToken) return {
                    locationOverrideToken: P.Wg.locationOverrideToken
                };
                if (P.Wg.latitudeE7 != null && P.Wg.longitudeE7 != null) return {
                    latitudeE7: P.Wg.latitudeE7,
                    longitudeE7: P.Wg.longitudeE7
                }
            }
            return null
        },
        BtG = function(P, v) {
            g.ro(P, v) || P.push(v)
        },
        izy = function(P) {
            var v = 0,
                l;
            for (l in P) v++;
            return v
        },
        UFd = function(P, v) {
            return g.b6(P, v)
        },
        ZzG = function(P) {
            try {
                return g.Uy.JSON.parse(P)
            } catch (v) {}
            P = String(P);
            if (/^\s*$/.test(P) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(P.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
                return eval("(" + P + ")")
            } catch (v) {}
            throw Error("Invalid JSON string: " + P);
        },
        lG = function(P) {
            if (g.Uy.JSON) try {
                return g.Uy.JSON.parse(P)
            } catch (v) {}
            return ZzG(P)
        },
        jXm = function(P) {
            if (P.Gm && typeof P.Gm == "function") return P.Gm();
            if (typeof Map !== "undefined" && P instanceof Map || typeof Set !== "undefined" && P instanceof Set) return Array.from(P.values());
            if (typeof P === "string") return P.split("");
            if (g.Ww(P)) {
                for (var v = [], l = P.length, e = 0; e < l; e++) v.push(P[e]);
                return v
            }
            return g.FN(P)
        },
        aEb = function(P) {
            if (P.t6 && typeof P.t6 == "function") return P.t6();
            if (!P.Gm || typeof P.Gm != "function") {
                if (typeof Map !== "undefined" && P instanceof Map) return Array.from(P.keys());
                if (!(typeof Set !== "undefined" && P instanceof Set)) {
                    if (g.Ww(P) || typeof P === "string") {
                        var v = [];
                        P = P.length;
                        for (var l = 0; l < P; l++) v.push(l);
                        return v
                    }
                    return g.A3(P)
                }
            }
        },
        Hzj = function(P, v) {
            if (P.forEach && typeof P.forEach == "function") P.forEach(v, void 0);
            else if (g.Ww(P) || typeof P === "string") Array.prototype.forEach.call(P, v, void 0);
            else
                for (var l = aEb(P), e = jXm(P), h = e.length, z = 0; z < h; z++) v.call(void 0, e[z], l && l[z], P)
        },
        Ek1 = function(P, v, l, e) {
            var h = new g.DA(null);
            P && g.nJ(h, P);
            v && g.N$(h, v);
            l && g.J7(h, l);
            e && (h.K = e);
            return h
        },
        Wrd = function() {
            var P = em();
            this.K = P;
            P.X2("/client_streamz/youtube/living_room/mdx/channel/opened", g.k3("channel_type"))
        },
        Ozj = function() {
            var P = em();
            this.K = P;
            P.X2("/client_streamz/youtube/living_room/mdx/channel/closed", g.k3("channel_type"))
        },
        ok3 = function() {
            var P = em();
            this.K = P;
            P.X2("/client_streamz/youtube/living_room/mdx/channel/message_received", g.k3("channel_type"))
        },
        sXb = function() {
            var P = em();
            this.K = P;
            P.X2("/client_streamz/youtube/living_room/mdx/channel/error", g.k3("channel_type"))
        },
        r81 = function() {
            var P = em();
            this.K = P;
            P.X2("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
        },
        MdQ = function() {
            var P = em();
            this.K = P;
            P.X2("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
        },
        Ttj = function(P, v) {
            return new g.yD(P, v)
        },
        hN = function(P, v) {
            return Object.prototype.hasOwnProperty.call(P, v)
        },
        Vd1 = function(P, v) {
            return P === v
        },
        zp = function(P, v) {
            this.K = {};
            this.W = [];
            this.XP = this.size = 0;
            var l = arguments.length;
            if (l > 1) {
                if (l % 2) throw Error("Uneven number of arguments");
                for (var e = 0; e < l; e += 2) this.set(arguments[e], arguments[e + 1])
            } else if (P)
                if (P instanceof zp)
                    for (l = P.t6(), e = 0; e < l.length; e++) this.set(l[e], P.get(l[e]));
                else
                    for (e in P) this.set(e, P[e])
        },
        mB = function(P) {
            if (P.size != P.W.length) {
                for (var v = 0, l = 0; v < P.W.length;) {
                    var e = P.W[v];
                    hN(P.K, e) && (P.W[l++] = e);
                    v++
                }
                P.W.length = l
            }
            if (P.size != P.W.length) {
                v = {};
                for (e = l = 0; l < P.W.length;) {
                    var h = P.W[l];
                    hN(v, h) || (P.W[e++] = h, v[h] = 1);
                    l++
                }
                P.W.length = e
            }
        },
        RP = function(P) {
            this.name = this.id = "";
            this.clientName = "UNKNOWN_INTERFACE";
            this.app = "";
            this.type = "REMOTE_CONTROL";
            this.ownerObfuscatedGaiaId = this.obfuscatedGaiaId = this.avatar = this.username = "";
            this.capabilities = new Set;
            this.compatibleSenderThemes = new Set;
            this.experiments = new Set;
            this.theme = "u";
            new zp;
            this.model = this.brand = "";
            this.year = 0;
            this.chipset = this.osVersion = this.os = "";
            this.mdxDialServerType = "MDX_DIAL_SERVER_TYPE_UNKNOWN";
            P && (this.id = P.id || P.name, this.name = P.name, this.clientName = P.clientName ? P.clientName.toUpperCase() : "UNKNOWN_INTERFACE",
                this.app = P.app, this.type = P.type || "REMOTE_CONTROL", this.username = P.user || "", this.avatar = P.userAvatarUri || "", this.obfuscatedGaiaId = P.obfuscatedGaiaId || "", this.ownerObfuscatedGaiaId = P.ownerObfuscatedGaiaId || "", this.theme = P.theme || "u", dFQ(this, P.capabilities || ""), PO1(this, P.compatibleSenderThemes || ""), nIx(this, P.experiments || ""), this.brand = P.brand || "", this.model = P.model || "", this.year = P.year || 0, this.os = P.os || "", this.osVersion = P.osVersion || "", this.chipset = P.chipset || "", this.mdxDialServerType = P.mdxDialServerType ||
                "MDX_DIAL_SERVER_TYPE_UNKNOWN", P = P.deviceInfo) && (P = JSON.parse(P), this.brand = P.brand || "", this.model = P.model || "", this.year = P.year || 0, this.os = P.os || "", this.osVersion = P.osVersion || "", this.chipset = P.chipset || "", this.clientName = P.clientName ? P.clientName.toUpperCase() : "UNKNOWN_INTERFACE", this.mdxDialServerType = P.mdxDialServerType || "MDX_DIAL_SERVER_TYPE_UNKNOWN")
        },
        dFQ = function(P, v) {
            P.capabilities.clear();
            g.$g(v.split(","), g.TW(UFd, N_d)).forEach(function(l) {
                P.capabilities.add(l)
            })
        },
        PO1 = function(P, v) {
            P.compatibleSenderThemes.clear();
            g.$g(v.split(","), g.TW(UFd, Jrb)).forEach(function(l) {
                P.compatibleSenderThemes.add(l)
            })
        },
        nIx = function(P, v) {
            P.experiments.clear();
            v.split(",").forEach(function(l) {
                P.experiments.add(l)
            })
        },
        Qq = function(P) {
            P = P || {};
            this.name = P.name || "";
            this.id = P.id || P.screenId || "";
            this.token = P.token || P.loungeToken || "";
            this.uuid = P.uuid || P.dialId || "";
            this.idType = P.screenIdType || "normal"
        },
        tN = function(P, v) {
            return !!v && (P.id == v || P.uuid == v)
        },
        u71 = function(P) {
            return {
                name: P.name,
                screenId: P.id,
                loungeToken: P.token,
                dialId: P.uuid,
                screenIdType: P.idType
            }
        },
        K7G = function(P) {
            return new Qq(P)
        },
        crd = function(P) {
            return Array.isArray(P) ? g.LC(P, K7G) : []
        },
        yq = function(P) {
            return P ? '{name:"' + P.name + '",id:' + P.id.substr(0, 6) + "..,token:" + ((P.token ? ".." + P.token.slice(-6) : "-") + ",uuid:" + (P.uuid ? ".." + P.uuid.slice(-6) : "-") + ",idType:" + P.idType + "}") : "null"
        },
        q5y = function(P) {
            return Array.isArray(P) ? "[" + g.LC(P, yq).join(",") + "]" : "null"
        },
        F7G = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
                function(P) {
                    var v = Math.random() * 16 | 0;
                    return (P == "x" ? v : v & 3 | 8).toString(16)
                })
        },
        Arv = function(P) {
            return g.LC(P, function(v) {
                return {
                    key: v.id,
                    name: v.name
                }
            })
        },
        Y5A = function(P, v) {
            return g.om(P, function(l) {
                return l || v ? !l != !v ? !1 : l.id == v.id : !0
            })
        },
        C8 = function(P, v) {
            return g.om(P, function(l) {
                return tN(l, v)
            })
        },
        bKA = function() {
            var P = (0, g.UY)();
            P && Gl1(P, P.W.eM(!0))
        },
        f8 = function() {
            var P = g.au("yt-remote-connected-devices") || [];
            g.tK(P);
            return P
        },
        xWG = function(P) {
            if (P.length == 0) return [];
            var v = P[0].indexOf("#"),
                l = v == -1 ? P[0] : P[0].substring(0, v);
            return g.LC(P, function(e, h) {
                return h == 0 ? e : e.substring(l.length)
            })
        },
        p0v = function(P) {
            g.jB("yt-remote-connected-devices", P, 86400)
        },
        gf = function() {
            if (L7j) return L7j;
            var P = g.au("yt-remote-device-id");
            P || (P = F7G(), g.jB("yt-remote-device-id", P, 31536E3));
            for (var v = f8(), l = 1, e = P; g.ro(v, e);) l++, e = P + "#" + l;
            return L7j = e
        },
        S53 = function() {
            var P = f8(),
                v = gf();
            g.EY() && g.C$(P, v);
            P = xWG(P);
            if (P.length == 0) try {
                g.Ok("remote_sid")
            } catch (l) {} else try {
                g.Ek("remote_sid", P.join(","), -1)
            } catch (l) {}
        },
        Goy = function() {
            return g.au("yt-remote-session-browser-channel")
        },
        X01 = function() {
            return g.au("yt-remote-local-screens") || []
        },
        B_m = function() {
            g.jB("yt-remote-lounge-token-expiration", !0, 86400)
        },
        iKx = function(P) {
            P.length > 5 && (P = P.slice(P.length - 5));
            var v = g.LC(X01(), function(e) {
                    return e.loungeToken
                }),
                l = g.LC(P, function(e) {
                    return e.loungeToken
                });
            g.SK(l, function(e) {
                return !g.ro(v, e)
            }) && B_m();
            g.jB("yt-remote-local-screens", P, 31536E3)
        },
        kE = function(P) {
            P || (g.Hx("yt-remote-session-screen-id"), g.Hx("yt-remote-session-video-id"));
            S53();
            P = f8();
            g.Tv(P, gf());
            p0v(P)
        },
        UWd = function() {
            if (!wf) {
                var P = g.W7();
                P && (wf = new g.X3(P))
            }
        },
        ZKA = function() {
            UWd();
            return wf ? !!wf.get("yt-remote-use-staging-server") : !1
        },
        $E = function(P, v) {
            g.t$[P] = !0;
            var l = g.Rn();
            l && l.publish.apply(l, arguments);
            g.t$[P] = !1
        },
        jTy = function() {},
        em = function() {
            if (!IP) {
                IP = new g.SC(new jTy);
                var P = g.ba("client_streamz_web_flush_count", -1);
                P !== -1 && (IP.G = P)
            }
            return IP
        },
        aed = function() {
            var P = window.navigator.userAgent.match(/Chrome\/([0-9]+)/);
            return P ? parseInt(P[1], 10) : 0
        },
        HKj = function(P) {
            return !!document.currentScript && (document.currentScript.src.indexOf("?" + P) != -1 || document.currentScript.src.indexOf("&" + P) != -1)
        },
        EIb = function() {
            return typeof window.__onGCastApiAvailable == "function" ? window.__onGCastApiAvailable : null
        },
        DV = function(P) {
            P.length ? W7x(P.shift(), function() {
                DV(P)
            }) : OK1()
        },
        oIY = function(P) {
            return "chrome-extension://" + P + "/cast_sender.js"
        },
        W7x = function(P, v, l) {
            var e = document.createElement("script");
            e.onerror = v;
            l && (e.onload = l);
            g.ON(e, g.LK(P));
            (document.head || document.documentElement).appendChild(e)
        },
        sTv = function() {
            var P = aed(),
                v = [];
            if (P > 1) {
                var l = P - 1;
                v.push("//www.gstatic.com/eureka/clank/" + P + "/cast_sender.js");
                v.push("//www.gstatic.com/eureka/clank/" + l + "/cast_sender.js")
            }
            return v
        },
        OK1 = function() {
            var P = EIb();
            P && P(!1, "No cast extension found")
        },
        MSy = function() {
            if (rrA) {
                var P = 2,
                    v = EIb(),
                    l = function() {
                        P--;
                        P == 0 && v && v(!0)
                    };
                window.__onGCastApiAvailable = l;
                W7x("//www.gstatic.com/cast/sdk/libs/sender/1.0/cast_framework.js", OK1, l)
            }
        },
        T_m = function() {
            MSy();
            var P = sTv();
            P.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            DV(P)
        },
        dWy = function() {
            MSy();
            var P = sTv();
            P.push.apply(P, g.u(VSd.map(oIY)));
            P.push("//www.gstatic.com/eureka/clank/cast_sender.js");
            DV(P)
        },
        n8 = function(P, v, l) {
            g.U.call(this);
            this.T = l != null ? (0, g.ru)(P, l) : P;
            this.x5 = v;
            this.Z = (0, g.ru)(this.Cs, this);
            this.W = !1;
            this.K = 0;
            this.G = this.bq = null;
            this.Y = []
        },
        NM = function(P, v, l) {
            g.U.call(this);
            this.Y = l != null ? P.bind(l) : P;
            this.x5 = v;
            this.G = null;
            this.W = !1;
            this.K = 0;
            this.bq = null
        },
        PaY = function(P) {
            P.bq = g.b0(function() {
                P.bq = null;
                P.W && !P.K && (P.W = !1, PaY(P))
            }, P.x5);
            var v = P.G;
            P.G = null;
            P.Y.apply(null, v)
        },
        JN = function() {},
        vN1 = function() {
            g.ZH.call(this, "p")
        },
        lp3 = function() {
            g.ZH.call(this, "o")
        },
        hRQ = function() {
            return eRA = eRA || new g.zQ
        },
        zR3 = function(P) {
            g.ZH.call(this, "serverreachability", P)
        },
        uG = function(P) {
            var v = hRQ();
            v.dispatchEvent(new zR3(v, P))
        },
        mco = function(P) {
            g.ZH.call(this, "statevent", P)
        },
        K8 = function(P) {
            var v = hRQ();
            v.dispatchEvent(new mco(v, P))
        },
        RRo = function(P, v, l, e) {
            g.ZH.call(this, "timingevent", P);
            this.size = v;
            this.rtt = l;
            this.retries = e
        },
        cG = function(P, v) {
            if (typeof P !== "function") throw Error("Fn must not be null and must be a function");
            return g.Uy.setTimeout(function() {
                P()
            }, v)
        },
        qM = function() {},
        FT = function(P, v, l, e) {
            this.G = P;
            this.Y = v;
            this.It = l;
            this.jS = e || 1;
            this.Bg = new g.pJ(this);
            this.D3 = 45E3;
            this.Hg = null;
            this.T = !1;
            this.X = this.h5 = this.S = this.Pg = this.J5 = this.U$ = this.Wg = null;
            this.QW = [];
            this.W = null;
            this.j = 0;
            this.Z = this.T1 = null;
            this.nI = -1;
            this.wM = !1;
            this.A5 = 0;
            this.Ic = null;
            this.TG = this.q5 = this.WK = this.kf = !1;
            this.K = new QZd
        },
        QZd = function() {
            this.G = null;
            this.W = "";
            this.K = !1
        },
        yZd = function(P, v, l) {
            P.Pg = 1;
            P.S = PG(v.clone());
            P.X = l;
            P.kf = !0;
            tNQ(P, null)
        },
        tNQ = function(P, v) {
            P.J5 = Date.now();
            AN(P);
            P.h5 = P.S.clone();
            vG(P.h5, "t", P.jS);
            P.j = 0;
            var l = P.G.Pg;
            P.K = new QZd;
            P.W = Cax(P.G, l ? v : null, !P.X);
            P.A5 > 0 && (P.Ic = new NM((0, g.ru)(P.UI, P, P.W), P.A5));
            P.Bg.listen(P.W, "readystatechange", P.U8);
            v = P.Hg ? g.GA(P.Hg) : {};
            P.X ? (P.T1 || (P.T1 = "POST"), v["Content-Type"] = "application/x-www-form-urlencoded", P.W.send(P.h5, P.T1, P.X, v)) : (P.T1 = "GET", P.W.send(P.h5, P.T1, null, v));
            uG(1)
        },
        gNo = function(P) {
            if (!fpj(P)) return g.h4(P.W);
            var v = g.z7(P.W);
            if (v === "") return "";
            var l = "",
                e = v.length,
                h = g.lK(P.W) == 4;
            if (!P.K.G) {
                if (typeof TextDecoder === "undefined") return YE(P), bG(P), "";
                P.K.G = new g.Uy.TextDecoder
            }
            for (var z = 0; z < e; z++) P.K.K = !0, l += P.K.G.decode(v[z], {
                stream: !(h && z == e - 1)
            });
            v.length = 0;
            P.K.W += l;
            P.j = 0;
            return P.K.W
        },
        fpj = function(P) {
            return P.W ? P.T1 == "GET" && P.Pg != 2 && P.G.GP : !1
        },
        $cY = function(P, v) {
            var l = P.j,
                e = v.indexOf("\n", l);
            if (e == -1) return k_j;
            l = Number(v.substring(l, e));
            if (isNaN(l)) return wMy;
            e += 1;
            if (e + l > v.length) return k_j;
            v = v.slice(e, e + l);
            P.j = e + l;
            return v
        },
        AN = function(P) {
            P.U$ = Date.now() + P.D3;
            Ipm(P, P.D3)
        },
        Ipm = function(P, v) {
            if (P.Wg != null) throw Error("WatchDog timer not null");
            P.Wg = cG((0, g.ru)(P.S1, P), v)
        },
        Dcy = function(P) {
            P.Wg && (g.Uy.clearTimeout(P.Wg), P.Wg = null)
        },
        bG = function(P) {
            P.G.iA() || P.wM || nN3(P.G, P)
        },
        YE = function(P) {
            Dcy(P);
            g.Rm(P.Ic);
            P.Ic = null;
            P.Bg.removeAll();
            if (P.W) {
                var v = P.W;
                P.W = null;
                v.abort();
                v.dispose()
            }
        },
        AZA = function(P, v) {
            try {
                var l = P.G;
                if (l.xM != 0 && (l.W == P || N$b(l.K, P)))
                    if (!P.q5 && N$b(l.K, P) && l.xM == 3) {
                        try {
                            var e = l.Ro.W.parse(v)
                        } catch (J) {
                            e = null
                        }
                        if (Array.isArray(e) && e.length == 3) {
                            var h = e;
                            if (h[0] == 0) a: {
                                if (!l.S) {
                                    if (l.W)
                                        if (l.W.J5 + 3E3 < P.J5) xE(l), p8(l);
                                        else break a;
                                    JZo(l);
                                    K8(18)
                                }
                            }
                            else l.hs = h[1], 0 < l.hs - l.Ic && h[2] < 37500 && l.q5 && l.QW == 0 && !l.Wg && (l.Wg = cG((0, g.ru)(l.Bn, l), 6E3));
                            if (ut3(l.K) <= 1 && l.Xq) {
                                try {
                                    l.Xq()
                                } catch (J) {}
                                l.Xq = void 0
                            }
                        } else L8(l, 11)
                    } else if ((P.q5 || l.W == P) && xE(l), !g.Jj(v))
                    for (h = l.Ro.W.parse(v), v = 0; v < h.length; v++) {
                        var z = h[v];
                        l.Ic = z[0];
                        z = z[1];
                        if (l.xM == 2)
                            if (z[0] == "c") {
                                l.Y = z[1];
                                l.jS = z[2];
                                var m = z[3];
                                m != null && (l.BO = m);
                                var Q = z[5];
                                Q != null && typeof Q === "number" && Q > 0 && (l.A5 = 1.5 * Q);
                                e = l;
                                var t = P.rX();
                                if (t) {
                                    var y = g.m3(t, "X-Client-Wire-Protocol");
                                    if (y) {
                                        var C = e.K;
                                        !C.W && (g.uY(y, "spdy") || g.uY(y, "quic") || g.uY(y, "h2")) && (C.Y = C.Z, C.W = new Set, C.K && (KVQ(C, C.K), C.K = null))
                                    }
                                    if (e.kf) {
                                        var f = g.m3(t, "X-HTTP-Session-Id");
                                        f && (e.bC = f, g.Fj(e.Hg, e.kf, f))
                                    }
                                }
                                l.xM = 3;
                                l.Z && l.Z.WF();
                                l.Nd && (l.aV = Date.now() - P.J5);
                                e = l;
                                var k = P;
                                e.MV = cZy(e, e.Pg ? e.jS : null, e.It);
                                if (k.q5) {
                                    qko(e.K,
                                        k);
                                    var w = k,
                                        I = e.A5;
                                    I && w.setTimeout(I);
                                    w.Wg && (Dcy(w), AN(w));
                                    e.W = k
                                } else FVx(e);
                                l.G.length > 0 && Sm(l)
                            } else z[0] != "stop" && z[0] != "close" || L8(l, 7);
                        else l.xM == 3 && (z[0] == "stop" || z[0] == "close" ? z[0] == "stop" ? L8(l, 7) : l.disconnect() : z[0] != "noop" && l.Z && l.Z.Ma(z), l.QW = 0)
                    }
                uG(4)
            } catch (J) {}
        },
        Yky = function(P, v) {
            this.W = P;
            this.map = v;
            this.context = null
        },
        bGm = function(P) {
            this.Z = P || 10;
            g.Uy.PerformanceNavigationTiming ? (P = g.Uy.performance.getEntriesByType("navigation"), P = P.length > 0 && (P[0].nextHopProtocol == "hq" || P[0].nextHopProtocol == "h2")) : P = !!(g.Uy.chrome && g.Uy.chrome.loadTimes && g.Uy.chrome.loadTimes() && g.Uy.chrome.loadTimes().wasFetchedViaSpdy);
            this.Y = P ? this.Z : 1;
            this.W = null;
            this.Y > 1 && (this.W = new Set);
            this.K = null;
            this.G = []
        },
        xcv = function(P) {
            return P.K ? !0 : P.W ? P.W.size >= P.Y : !1
        },
        ut3 = function(P) {
            return P.K ? 1 : P.W ? P.W.size : 0
        },
        N$b = function(P, v) {
            return P.K ? P.K == v : P.W ? P.W.has(v) : !1
        },
        KVQ =
        function(P, v) {
            P.W ? P.W.add(v) : P.K = v
        },
        qko = function(P, v) {
            P.K && P.K == v ? P.K = null : P.W && P.W.has(v) && P.W.delete(v)
        },
        pMY = function(P) {
            if (P.K != null) return P.G.concat(P.K.QW);
            if (P.W != null && P.W.size !== 0) {
                var v = P.G;
                P = g.N(P.W.values());
                for (var l = P.next(); !l.done; l = P.next()) v = v.concat(l.value.QW);
                return v
            }
            return g.vZ(P.G)
        },
        LVd = function(P, v) {
            var l = new qM;
            if (g.Uy.Image) {
                var e = new Image;
                e.onload = g.TW(Gp, l, "TestLoadImage: loaded", !0, v, e);
                e.onerror = g.TW(Gp, l, "TestLoadImage: error", !1, v, e);
                e.onabort = g.TW(Gp, l, "TestLoadImage: abort", !1, v, e);
                e.ontimeout = g.TW(Gp, l, "TestLoadImage: timeout", !1, v, e);
                g.Uy.setTimeout(function() {
                    if (e.ontimeout) e.ontimeout()
                }, 1E4);
                e.src = P
            } else v(!1)
        },
        Sk1 = function(P, v) {
            var l = new qM,
                e = new AbortController,
                h = setTimeout(function() {
                    e.abort();
                    Gp(l, "TestPingServer: timeout", !1, v)
                }, 1E4);
            fetch(P, {
                signal: e.signal
            }).then(function(z) {
                clearTimeout(h);
                z.ok ? Gp(l, "TestPingServer: ok", !0, v) : Gp(l, "TestPingServer: server error", !1, v)
            }).catch(function() {
                clearTimeout(h);
                Gp(l, "TestPingServer: error", !1, v)
            })
        },
        Gp = function(P, v, l, e, h) {
            try {
                h && (h.onload = null, h.onerror = null, h.onabort = null, h.ontimeout = null), e(l)
            } catch (z) {}
        },
        G_o = function() {
            this.W = new JN
        },
        XMj = function(P, v, l) {
            var e = l || "";
            try {
                Hzj(P, function(h, z) {
                    var m = h;
                    g.Oy(h) && (m = g.XQ(h));
                    v.push(e + z + "=" + encodeURIComponent(m))
                })
            } catch (h) {
                throw v.push(e + "type=" + encodeURIComponent("_badmap")), h;
            }
        },
        XT = function(P, v, l) {
            return l && l.m5W ? l.m5W[P] || v : v
        },
        B$Y = function(P) {
            this.G = [];
            this.jS = this.MV = this.Hg = this.It = this.W = this.bC = this.kf = this.wM = this.j = this.nI = this.X = null;
            this.jg = this.h5 = 0;
            this.t3 = XT("failFast", !1, P);
            this.q5 = this.Wg = this.S = this.T = this.Z = null;
            this.CI = !0;
            this.hs = this.Ic = -1;
            this.TG = this.QW = this.J5 = 0;
            this.XE = XT("baseRetryDelayMs", 5E3, P);
            this.uM = XT("retryDelaySeedMs", 1E4, P);
            this.Hl = XT("forwardChannelMaxRetries", 2, P);
            this.oV = XT("forwardChannelRequestTimeoutMs", 2E4, P);
            this.SN = P && P.uX1 || void 0;
            this.FL = P && P.nE$ || void 0;
            this.GP = P && P.rp0 || !1;
            this.A5 = void 0;
            this.Pg = P && P.GAc ||
                !1;
            this.Y = "";
            this.K = new bGm(P && P.pUW);
            this.Ro = new G_o;
            this.Bg = P && P.xH6 || !1;
            this.U$ = P && P.Voc || !1;
            this.Bg && this.U$ && (this.U$ = !1);
            this.vl = P && P.KY$ || !1;
            P && P.y8$ && (this.CI = !1);
            this.Nd = !this.Bg && this.CI && P && P.s7M || !1;
            this.zK = void 0;
            P && P.z0 && P.z0 > 0 && (this.zK = P.z0);
            this.Xq = void 0;
            this.aV = 0;
            this.D3 = !1;
            this.WK = this.T1 = null
        },
        p8 = function(P) {
            P.W && (iGQ(P), P.W.cancel(), P.W = null)
        },
        Ucj = function(P) {
            p8(P);
            P.S && (g.Uy.clearTimeout(P.S), P.S = null);
            xE(P);
            P.K.cancel();
            P.T && (typeof P.T === "number" && g.Uy.clearTimeout(P.T), P.T = null)
        },
        Sm = function(P) {
            xcv(P.K) || P.T || (P.T = !0, g.w5(P.g_, P), P.J5 = 0)
        },
        jZQ = function(P, v) {
            if (ut3(P.K) >= P.K.Y - (P.T ? 1 : 0)) return !1;
            if (P.T) return P.G = v.QW.concat(P.G), !0;
            if (P.xM == 1 || P.xM == 2 || P.J5 >= (P.t3 ? 0 : P.Hl)) return !1;
            P.T = cG((0, g.ru)(P.g_, P, v), ZGA(P, P.J5));
            P.J5++;
            return !0
        },
        HG1 = function(P, v) {
            var l;
            v ? l = v.It : l = P.h5++;
            var e = P.Hg.clone();
            g.Fj(e, "SID", P.Y);
            g.Fj(e, "RID", l);
            g.Fj(e, "AID", P.Ic);
            BG(P, e);
            P.j && P.X && g.xY(e, P.j, P.X);
            l = new FT(P, P.Y, l, P.J5 + 1);
            P.j === null && (l.Hg = P.X);
            v && (P.G = v.QW.concat(P.G));
            v = apY(P, l, 1E3);
            l.setTimeout(Math.round(P.oV * .5) + Math.round(P.oV * .5 * Math.random()));
            KVQ(P.K, l);
            yZd(l, e, v)
        },
        BG = function(P, v) {
            P.wM && g.J3(P.wM, function(l, e) {
                g.Fj(v, e, l)
            });
            P.Z && Hzj({}, function(l, e) {
                g.Fj(v, e, l)
            })
        },
        apY = function(P, v, l) {
            l = Math.min(P.G.length, l);
            var e = P.Z ? (0, g.ru)(P.Z.F7, P.Z, P) : null;
            a: {
                for (var h = P.G, z = -1;;) {
                    var m = ["count=" + l];
                    z == -1 ? l > 0 ? (z = h[0].W, m.push("ofs=" + z)) : z = 0 : m.push("ofs=" + z);
                    for (var Q = !0, t = 0; t < l; t++) {
                        var y = h[t].W,
                            C = h[t].map;
                        y -= z;
                        if (y < 0) z = Math.max(0, h[t].W - 100), Q = !1;
                        else try {
                            XMj(C, m, "req" + y + "_")
                        } catch (f) {
                            e && e(C)
                        }
                    }
                    if (Q) {
                        e = m.join("&");
                        break a
                    }
                }
                e = void 0
            }
            P = P.G.splice(0, l);
            v.QW = P;
            return e
        },
        FVx = function(P) {
            P.W || P.S || (P.TG = 1, g.w5(P.FZ, P), P.QW = 0)
        },
        JZo = function(P) {
            if (P.W || P.S || P.QW >= 3) return !1;
            P.TG++;
            P.S = cG((0, g.ru)(P.FZ, P), ZGA(P, P.QW));
            P.QW++;
            return !0
        },
        iGQ = function(P) {
            P.T1 != null && (g.Uy.clearTimeout(P.T1), P.T1 = null)
        },
        ENY = function(P) {
            P.W = new FT(P, P.Y, "rpc", P.TG);
            P.j === null && (P.W.Hg = P.X);
            P.W.A5 = 0;
            var v = P.MV.clone();
            g.Fj(v, "RID", "rpc");
            g.Fj(v, "SID", P.Y);
            g.Fj(v, "AID", P.Ic);
            g.Fj(v, "CI", P.q5 ? "0" : "1");
            !P.q5 && P.zK && g.Fj(v, "TO", P.zK);
            g.Fj(v, "TYPE", "xmlhttp");
            BG(P, v);
            P.j && P.X && g.xY(v, P.j, P.X);
            P.A5 && P.W.setTimeout(P.A5);
            var l = P.W;
            P = P.jS;
            l.Pg = 1;
            l.S = PG(v.clone());
            l.X = null;
            l.kf = !0;
            tNQ(l, P)
        },
        xE = function(P) {
            P.Wg != null && (g.Uy.clearTimeout(P.Wg), P.Wg = null)
        },
        nN3 = function(P, v) {
            var l = null;
            if (P.W == v) {
                xE(P);
                iGQ(P);
                P.W = null;
                var e = 2
            } else if (N$b(P.K, v)) l = v.QW, qko(P.K, v), e = 1;
            else return;
            if (P.xM != 0)
                if (v.T)
                    if (e == 1) {
                        l = v.X ? v.X.length : 0;
                        v = Date.now() - v.J5;
                        var h = P.J5;
                        e = hRQ();
                        e.dispatchEvent(new RRo(e, l, v, h));
                        Sm(P)
                    } else FVx(P);
            else {
                var z = v.nI;
                h = v.getLastError();
                if (h == 3 || h == 0 && z > 0 || !(e == 1 && jZQ(P, v) || e == 2 && JZo(P))) switch (l && l.length > 0 && (v = P.K, v.G = v.G.concat(l)), h) {
                    case 1:
                        L8(P, 5);
                        break;
                    case 4:
                        L8(P, 10);
                        break;
                    case 3:
                        L8(P, 6);
                        break;
                    default:
                        L8(P, 2)
                }
            }
        },
        ZGA = function(P, v) {
            var l = P.XE + Math.floor(Math.random() *
                P.uM);
            P.isActive() || (l *= 2);
            return l * v
        },
        L8 = function(P, v) {
            if (v == 2) {
                var l = (0, g.ru)(P.pB$, P),
                    e = P.FL,
                    h = !e;
                e = new g.DA(e || "//www.google.com/images/cleardot.gif");
                g.Uy.location && g.Uy.location.protocol == "http" || g.nJ(e, "https");
                PG(e);
                h ? LVd(e.toString(), l) : Sk1(e.toString(), l)
            } else K8(2);
            P.xM = 0;
            P.Z && P.Z.OJ(v);
            WVo(P);
            Ucj(P)
        },
        WVo = function(P) {
            P.xM = 0;
            P.WK = [];
            if (P.Z) {
                var v = pMY(P.K);
                if (v.length != 0 || P.G.length != 0) g.l9(P.WK, v), g.l9(P.WK, P.G), P.K.G.length = 0, g.vZ(P.G), P.G.length = 0;
                P.Z.XZ()
            }
        },
        OGY = function(P) {
            if (P.xM == 0) return P.WK;
            var v = [];
            g.l9(v, pMY(P.K));
            g.l9(v, P.G);
            return v
        },
        cZy = function(P, v, l) {
            var e = g.A7(l);
            e.W != "" ? (v && g.N$(e, v + "." + e.W), g.J7(e, e.G)) : (e = g.Uy.location, e = Ek1(e.protocol, v ? v + "." + e.hostname : e.hostname, +e.port, l));
            v = P.kf;
            l = P.bC;
            v && l && g.Fj(e, v, l);
            g.Fj(e, "VER", P.BO);
            BG(P, e);
            return e
        },
        Cax = function(P, v, l) {
            if (v && !P.Pg) throw Error("Can't create secondary domain capable XhrIo object.");
            v = P.GP && !P.SN ? new g.d5(new g.kY({
                Ya: l
            })) : new g.d5(P.SN);
            v.j = P.Pg;
            return v
        },
        oNG = function() {},
        sZY = function() {},
        Uj = function(P, v) {
            g.zQ.call(this);
            this.W = new B$Y(v);
            this.Z = P;
            this.K = v && v.a5M || null;
            P = v && v.pKM || null;
            v && v.T02 && (P ? P["X-Client-Protocol"] = "webchannel" : P = {
                "X-Client-Protocol": "webchannel"
            });
            this.W.X = P;
            P = v && v.gLg || null;
            v && v.qK && (P ? P["X-WebChannel-Content-Type"] = v.qK : P = {
                "X-WebChannel-Content-Type": v.qK
            });
            v && v.V2 && (P ? P["X-WebChannel-Client-Profile"] = v.V2 : P = {
                "X-WebChannel-Client-Profile": v.V2
            });
            this.W.nI = P;
            (P = v && v.FJ$) && !g.Jj(P) && (this.W.j = P);
            this.T = v && v.GAc || !1;
            this.Y = v && v.dJ2 || !1;
            (v = v && v.scW) && !g.Jj(v) && (this.W.kf = v, g.Yr(this.K, v) && (P =
                this.K, v in P && delete P[v]));
            this.G = new iG(this)
        },
        rZd = function(P) {
            vN1.call(this);
            P.__headers__ && (this.headers = P.__headers__, this.statusCode = P.__status__, delete P.__headers__, delete P.__status__);
            var v = P.__sm__;
            v ? this.data = (this.W = g.qT(v)) ? g.LU(v, this.W) : v : this.data = P
        },
        MNG = function(P) {
            lp3.call(this);
            this.status = 1;
            this.errorCode = P
        },
        iG = function(P) {
            this.W = P
        },
        T$v = function(P, v) {
            this.K = P;
            this.W = v
        },
        VNA = function(P) {
            return OGY(P.W).map(function(v) {
                var l = P.K;
                v = v.map;
                "__data__" in v ? (v = v.__data__, l = l.Y ? ZzG(v) : v) : l = v;
                return l
            })
        },
        ZV = function(P, v) {
            if (typeof P !== "function") throw Error("Fn must not be null and must be a function");
            return g.Uy.setTimeout(function() {
                P()
            }, v)
        },
        aP = function(P) {
            jm.dispatchEvent(new dc1(jm, P))
        },
        dc1 = function(P) {
            g.ZH.call(this, "statevent", P)
        },
        HG = function(P, v, l, e) {
            this.W = P;
            this.Y = v;
            this.j = l;
            this.T = e || 1;
            this.K = 45E3;
            this.G = new g.pJ(this);
            this.Z = new g.Y9;
            this.Z.setInterval(250)
        },
        vdv = function(P, v, l) {
            P.Gb = 1;
            P.Sh = PG(v.clone());
            P.sT = l;
            P.kf = !0;
            PZd(P, null)
        },
        ldv = function(P, v, l, e, h) {
            P.Gb = 1;
            P.Sh = PG(v.clone());
            P.sT = null;
            P.kf = l;
            h && (P.qO = !1);
            PZd(P, e)
        },
        PZd = function(P, v) {
            P.FG = Date.now();
            eI1(P);
            P.Ky = P.Sh.clone();
            vG(P.Ky, "t", P.T);
            P.Ly = 0;
            P.U_ = P.W.PC(P.W.gP() ? v : null);
            P.Va > 0 && (P.Qk = new NM((0, g.ru)(P.QN, P, P.U_), P.Va));
            P.G.listen(P.U_, "readystatechange", P.X7);
            v = P.tX ? g.GA(P.tX) : {};
            P.sT ? (P.Yj = "POST", v["Content-Type"] = "application/x-www-form-urlencoded", P.U_.send(P.Ky, P.Yj, P.sT, v)) : (P.Yj = "GET", P.qO && !g.V3 && (v.Connection = "close"), P.U_.send(P.Ky, P.Yj, null, v));
            P.W.dW(1)
        },
        m1x = function(P, v) {
            var l = P.Ly,
                e = v.indexOf("\n", l);
            if (e == -1) return hIY;
            l = Number(v.substring(l, e));
            if (isNaN(l)) return zIG;
            e += 1;
            if (e + l > v.length) return hIY;
            v = v.slice(e, e + l);
            P.Ly = e + l;
            return v
        },
        eI1 = function(P) {
            P.mH = Date.now() + P.K;
            RIy(P, P.K)
        },
        RIy = function(P, v) {
            if (P.Mz != null) throw Error("WatchDog timer not null");
            P.Mz = ZV((0, g.ru)(P.gb, P), v)
        },
        QuQ = function(P) {
            P.Mz && (g.Uy.clearTimeout(P.Mz), P.Mz = null)
        },
        tBo = function(P) {
            P.W.iA() || P.UE || P.W.j7(P)
        },
        Ej = function(P) {
            QuQ(P);
            g.Rm(P.Qk);
            P.Qk = null;
            P.Z.stop();
            P.G.removeAll();
            if (P.U_) {
                var v = P.U_;
                P.U_ = null;
                v.abort();
                v.dispose()
            }
            P.xa && (P.xa = null)
        },
        yBQ = function(P, v) {
            try {
                P.W.Ka(P, v), P.W.dW(4)
            } catch (l) {}
        },
        fdv = function(P, v, l, e, h) {
            if (e == 0) l(!1);
            else {
                var z = h || 0;
                e--;
                CZd(P, v, function(m) {
                    m ? l(!0) : g.Uy.setTimeout(function() {
                        fdv(P, v, l, e, z)
                    }, z)
                })
            }
        },
        CZd = function(P, v, l) {
            var e = new Image;
            e.onload = function() {
                try {
                    WG(e), l(!0)
                } catch (h) {}
            };
            e.onerror = function() {
                try {
                    WG(e), l(!1)
                } catch (h) {}
            };
            e.onabort = function() {
                try {
                    WG(e), l(!1)
                } catch (h) {}
            };
            e.ontimeout = function() {
                try {
                    WG(e), l(!1)
                } catch (h) {}
            };
            g.Uy.setTimeout(function() {
                if (e.ontimeout) e.ontimeout()
            }, v);
            e.src = P
        },
        WG = function(P) {
            P.onload = null;
            P.onerror = null;
            P.onabort = null;
            P.ontimeout = null
        },
        gd1 = function(P) {
            this.W = P;
            this.K = new JN
        },
        kTv = function(P) {
            var v = Oj(P.W, P.YU, "/mail/images/cleardot.gif");
            PG(v);
            fdv(v.toString(), 5E3, (0, g.ru)(P.HS, P), 3, 2E3);
            P.dW(1)
        },
        wxA = function(P) {
            var v = P.W.T;
            v != null ? (aP(5), v ? (aP(11), oP(P.W, P, !1)) : (aP(12), oP(P.W, P, !0))) : (P.e6 = new HG(P), P.e6.tX = P.rh, v = P.W, v = Oj(v, v.gP() ? P.Ja : null, P.uS), aP(5), vG(v, "TYPE", "xmlhttp"), ldv(P.e6, v, !1, P.Ja, !1))
        },
        $1m = function(P, v, l) {
            this.W = 1;
            this.K = [];
            this.G = [];
            this.Z = new JN;
            this.X = P || null;
            this.T = v != null ? v : null;
            this.S = l || !1
        },
        Id3 = function(P, v) {
            this.W = P;
            this.map = v;
            this.context = null
        },
        D11 = function(P, v, l, e) {
            g.ZH.call(this, "timingevent", P);
            this.size = v;
            this.rtt = l;
            this.retries = e
        },
        ndy = function(P) {
            g.ZH.call(this, "serverreachability", P)
        },
        JB1 = function(P) {
            P.OS(1, 0);
            P.ZW = Oj(P, null, P.bS);
            NDy(P)
        },
        uzY = function(P) {
            P.YK && (P.YK.abort(), P.YK = null);
            P.Ur && (P.Ur.cancel(), P.Ur = null);
            P.Od && (g.Uy.clearTimeout(P.Od), P.Od = null);
            sj(P);
            P.Kw && (P.Kw.cancel(), P.Kw = null);
            P.NJ && (g.Uy.clearTimeout(P.NJ), P.NJ = null)
        },
        Kpj = function(P, v) {
            if (P.W == 0) throw Error("Invalid operation: sending map when state is closed");
            P.K.push(new Id3(P.fM++, v));
            P.W != 2 && P.W != 3 || NDy(P)
        },
        cBG = function(P) {
            var v = 0;
            P.Ur && v++;
            P.Kw && v++;
            return v
        },
        NDy = function(P) {
            P.Kw || P.NJ || (P.NJ = ZV((0, g.ru)(P.JV, P), 0), P.Qw = 0)
        },
        ABv = function(P, v) {
            if (P.W == 1) {
                if (!v) {
                    P.O5 = Math.floor(Math.random() * 1E5);
                    v = P.O5++;
                    var l = new HG(P, "", v);
                    l.tX = P.hI;
                    var e = qYy(P),
                        h = P.ZW.clone();
                    g.Fj(h, "RID", v);
                    g.Fj(h, "CVER", "1");
                    rf(P, h);
                    vdv(l, h, e);
                    P.Kw = l;
                    P.W = 2
                }
            } else P.W == 3 && (v ? Fpd(P, v) : P.K.length == 0 || P.Kw || Fpd(P))
        },
        Fpd = function(P, v) {
            if (v)
                if (P.z5 > 6) {
                    P.K = P.G.concat(P.K);
                    P.G.length = 0;
                    var l = P.O5 - 1;
                    v = qYy(P)
                } else l = v.j, v = v.sT;
            else l = P.O5++, v = qYy(P);
            var e = P.ZW.clone();
            g.Fj(e, "SID", P.Y);
            g.Fj(e, "RID", l);
            g.Fj(e, "AID", P.Ko);
            rf(P, e);
            l = new HG(P, P.Y, l, P.Qw + 1);
            l.tX = P.hI;
            l.setTimeout(1E4 + Math.round(1E4 * Math.random()));
            P.Kw = l;
            vdv(l, e, v)
        },
        rf = function(P, v) {
            P.nY && (P = P.nY.ag()) && g.J3(P, function(l, e) {
                g.Fj(v, e, l)
            })
        },
        qYy = function(P) {
            var v = Math.min(P.K.length, 1E3),
                l = ["count=" + v];
            if (P.z5 > 6 && v > 0) {
                var e = P.K[0].W;
                l.push("ofs=" + e)
            } else e = 0;
            for (var h = {}, z = 0; z < v; h = {
                    Ex: void 0
                }, z++) {
                h.Ex = P.K[z].W;
                var m = P.K[z].map;
                h.Ex = P.z5 <= 6 ? z : h.Ex - e;
                try {
                    g.J3(m, function(Q) {
                        return function(t, y) {
                            l.push("req" + Q.Ex + "_" + y + "=" + encodeURIComponent(t))
                        }
                    }(h))
                } catch (Q) {
                    l.push("req" + h.Ex + "_type=" + encodeURIComponent("_badmap"))
                }
            }
            P.G = P.G.concat(P.K.splice(0, v));
            return l.join("&")
        },
        YYo = function(P) {
            P.Ur || P.Od || (P.j = 1, P.Od = ZV((0, g.ru)(P.La, P), 0), P.Wj = 0)
        },
        x1x = function(P) {
            if (P.Ur || P.Od || P.Wj >= 3) return !1;
            P.j++;
            P.Od = ZV((0, g.ru)(P.La, P), bkj(P, P.Wj));
            P.Wj++;
            return !0
        },
        oP = function(P, v, l) {
            P.On = P.T == null ? l : !P.T;
            P.Z7 = v.Xw;
            P.S || JB1(P)
        },
        sj = function(P) {
            P.wr != null && (g.Uy.clearTimeout(P.wr), P.wr = null)
        },
        bkj = function(P, v) {
            var l = 5E3 + Math.floor(Math.random() * 1E4);
            P.isActive() || (l *= 2);
            return l * v
        },
        MM = function(P, v) {
            if (v == 2 || v == 9) {
                var l = null;
                P.nY && (l = null);
                var e = (0, g.ru)(P.T71, P);
                l || (l = new g.DA("//www.google.com/images/cleardot.gif"), PG(l));
                CZd(l.toString(), 1E4, e)
            } else aP(2);
            pxG(P, v)
        },
        pxG = function(P, v) {
            P.W = 0;
            P.nY && P.nY.Z8(v);
            LpQ(P);
            uzY(P)
        },
        LpQ = function(P) {
            P.W = 0;
            P.Z7 = -1;
            if (P.nY)
                if (P.G.length == 0 && P.K.length == 0) P.nY.oP();
                else {
                    var v = g.vZ(P.G),
                        l = g.vZ(P.K);
                    P.G.length = 0;
                    P.K.length = 0;
                    P.nY.oP(v, l)
                }
        },
        Oj = function(P, v, l) {
            var e = g.A7(l);
            if (e.W != "") v && g.N$(e, v + "." + e.W), g.J7(e, e.G);
            else {
                var h = window.location;
                e = Ek1(h.protocol, v ? v + "." + h.hostname : h.hostname, +h.port, l)
            }
            P.XG && g.J3(P.XG, function(z, m) {
                g.Fj(e, m, z)
            });
            g.Fj(e, "VER", P.z5);
            rf(P, e);
            return e
        },
        SYb = function() {},
        GTy = function() {
            this.W = [];
            this.K = []
        },
        Xx1 = function(P) {
            g.ZH.call(this, "channelMessage");
            this.message = P
        },
        BDQ = function(P) {
            g.ZH.call(this, "channelError");
            this.error = P
        },
        ikA = function(P, v) {
            this.action = P;
            this.params = v || {}
        },
        Tp = function(P, v) {
            g.U.call(this);
            this.W = new g.mr(this.dVc, 0, this);
            g.Z(this, this.W);
            this.x5 = 5E3;
            this.K = 0;
            if (typeof P === "function") v && (P = (0, g.ru)(P, v));
            else if (P && typeof P.handleEvent === "function") P = (0, g.ru)(P.handleEvent, P);
            else throw Error("Invalid listener argument");
            this.G = P
        },
        U1G = function(P, v, l, e, h, z, m) {
            l = l === void 0 ? !1 : l;
            e = e === void 0 ? function() {
                return ""
            } : e;
            h = h === void 0 ? !1 : h;
            z = z === void 0 ? !1 : z;
            m = m === void 0 ? function() {
                return g.K7({})
            } : m;
            this.wM = P;
            this.Wg = v;
            this.Z = new g.Gl;
            this.K = new Tp(this.aA$, this);
            this.W = null;
            this.j = !1;
            this.X = null;
            this.J5 = "";
            this.QW = this.S = 0;
            this.G = [];
            this.h5 = l;
            this.T1 = e;
            this.T = z;
            this.kf = m;
            this.Y = g.K7();
            this.A5 = h;
            this.Ic = new Wrd;
            this.Hg = new Ozj;
            this.q5 = new ok3;
            this.Pg = new sXb;
            this.D3 = new r81;
            this.U$ = new MdQ
        },
        juy = function(P, v, l, e, h) {
            Zkv(P);
            if (P.W) {
                var z = g.la("ID_TOKEN"),
                    m = P.W.hI || {};
                z ? m["x-youtube-identity-token"] = z : delete m["x-youtube-identity-token"];
                P.W.hI = m
            }
            e ? (e.getState() != 3 && cBG(e) == 0 || e.getState(), P.W.connect(v, l, P.Wg, e.Y, e.Ko)) : h ? P.W.connect(v, l, P.Wg, h.sessionId, h.arrayId) : P.W.connect(v, l, P.Wg)
        },
        Edj = function(P) {
            var v, l;
            g.p(function(e) {
                if (e.W == 1) return g.Jq(e, 2), g.b(e, ady(P), 2);
                g.cw(e);
                v = P.G;
                P.G = [];
                l = v.length;
                Hkm(P, v, l);
                Vq(P);
                return g.qP(e, 0)
            })
        },
        Hkm = function(P, v, l) {
            for (var e = 0; e < l; ++e) Kpj(P.W, v[e]);
            Vq(P)
        },
        Vq = function(P) {
            P.publish("handlerOpened");
            P.Ic.W("BROWSER_CHANNEL")
        },
        Zkv = function(P) {
            if (P.W) {
                var v = P.T1(),
                    l = P.W.hI || {};
                v ? l["x-youtube-lounge-xsrf-token"] = v : delete l["x-youtube-lounge-xsrf-token"];
                P.W.hI = l
            }
        },
        ady = function(P) {
            return P.kf().then(function(v) {
                var l = P.W.hI || {};
                v && Object.keys(v).length > 0 ? l = Object.assign({}, l, v) : delete l.Authorization;
                P.W.hI = l
            }).catch(function() {})
        },
        df = function(P) {
            this.scheme = "https";
            this.port = this.domain = "";
            this.W = "/api/lounge";
            this.K = !0;
            P = P || document.location.href;
            var v = Number(g.ap(4, P)) || "";
            v && (this.port = ":" + v);
            this.domain = g.Hl(P) || "";
            P = g.Y3();
            P.search("MSIE") >= 0 && (P = P.match(/MSIE ([\d.]+)/)[1], g.Aj(P, "10.0") < 0 && (this.K = !1))
        },
        PO = function(P, v) {
            var l = P.W;
            P.K && (l = P.scheme + "://" + P.domain + P.port + P.W);
            return g.r5(l + v, {})
        },
        WpY = function(P, v) {
            g.zQ.call(this);
            var l = this;
            this.Ub = P();
            this.Ub.subscribe("handlerOpened", this.Wa, this);
            this.Ub.subscribe("handlerClosed", this.onClosed, this);
            this.Ub.subscribe("handlerError", function(e, h) {
                l.onError(h)
            });
            this.Ub.subscribe("handlerMessage", this.onMessage, this);
            this.W = v
        },
        Okx = function(P, v, l) {
            var e = this;
            l = l === void 0 ? function() {
                return ""
            } : l;
            var h = h === void 0 ? new sZY : h;
            var z = z === void 0 ? new g.Gl : z;
            this.pathPrefix = P;
            this.W = v;
            this.J5 = l;
            this.Z = z;
            this.S = null;
            this.X = this.j = 0;
            this.channel = null;
            this.T = 0;
            this.G = new Tp(function() {
                e.G.isActive();
                var m;
                ((m = e.channel) == null ? void 0 : ut3((new T$v(m, m.W)).W.K)) === 0 && e.connect(e.S, e.j)
            });
            this.Y = {};
            this.K = {};
            this.Wg = !1;
            this.logger = null;
            this.QW = [];
            this.zW = void 0;
            this.Hg = new Wrd;
            this.T1 = new Ozj;
            this.wM = new ok3;
            this.kf = new sXb
        },
        odA = function(P) {
            g.T9(P.channel, "m", function() {
                P.T = 3;
                P.G.reset();
                P.S = null;
                P.j = 0;
                for (var v = g.N(P.QW), l = v.next(); !l.done; l = v.next()) l = l.value, P.channel && P.channel.send(l);
                P.QW = [];
                P.publish("webChannelOpened");
                P.Hg.W("WEB_CHANNEL")
            });
            g.T9(P.channel, "n", function() {
                P.T = 0;
                P.G.isActive() || P.publish("webChannelClosed");
                var v, l = (v = P.channel) == null ? void 0 : VNA(new T$v(v, v.W));
                l && (P.QW = [].concat(g.u(l)));
                P.T1.W("WEB_CHANNEL")
            });
            g.T9(P.channel, "p", function(v) {
                var l = v.data;
                l[0] === "gracefulReconnect" ? (P.G.start(), P.channel && P.channel.close()) : P.publish("webChannelMessage", new ikA(l[0], l[1]));
                P.zW = v.statusCode;
                P.wM.W("WEB_CHANNEL")
            });
            g.T9(P.channel, "o", function() {
                P.zW === 401 || P.G.start();
                P.publish("webChannelError");
                P.kf.W("WEB_CHANNEL")
            })
        },
        sum = function(P) {
            var v = P.J5();
            v ? P.Y["x-youtube-lounge-xsrf-token"] = v : delete P.Y["x-youtube-lounge-xsrf-token"]
        },
        rBo = function(P) {
            g.zQ.call(this);
            this.W = P();
            this.W.subscribe("webChannelOpened", this.Qj, this);
            this.W.subscribe("webChannelClosed", this.onClosed, this);
            this.W.subscribe("webChannelError", this.onError, this);
            this.W.subscribe("webChannelMessage", this.onMessage, this)
        },
        MBb = function(P, v, l, e, h) {
            function z() {
                return new U1G(PO(P, "/bc"), v, !1, l, e)
            }
            l = l === void 0 ? function() {
                return ""
            } : l;
            return g.YN("enable_mdx_web_channel_desktop") ? new rBo(function() {
                return new Okx(PO(P, "/wc"), v, l)
            }) : new WpY(z, h)
        },
        PHQ = function() {
            var P = TDy;
            VBQ();
            vO.push(P);
            d13()
        },
        lv = function(P, v) {
            VBQ();
            var l = v6y(P, String(v));
            vO.length == 0 ? l0d(l) : (d13(), g.f$(vO, function(e) {
                e(l)
            }))
        },
        eb = function(P) {
            lv("CP", P)
        },
        VBQ = function() {
            vO || (vO = g.j9("yt.mdx.remote.debug.handlers_") || [], g.ZB("yt.mdx.remote.debug.handlers_", vO))
        },
        l0d = function(P) {
            var v = (hO + 1) % 50;
            hO = v;
            zD[v] = P;
            mE || (mE = v == 49)
        },
        d13 = function() {
            var P = vO;
            if (zD[0]) {
                var v = mE ? hO : -1,
                    l = {};
                do l = {
                    Zd: void 0
                }, v = (v + 1) % 50, l.Zd = zD[v], g.f$(P, function(e) {
                    return function(h) {
                        h(e.Zd)
                    }
                }(l));
                while (v != hO);
                zD = Array(50);
                hO = -1;
                mE = !1
            }
        },
        v6y = function(P, v) {
            var l = (Date.now() - epA) / 1E3;
            l.toFixed && (l = l.toFixed(3));
            var e = [];
            e.push("[", l + "s", "] ");
            e.push("[", "yt.mdx.remote", "] ");
            e.push(P + ": " + v, "\n");
            return e.join("")
        },
        RN = function(P) {
            g.gA.call(this);
            this.T = P;
            this.screens = []
        },
        hpy = function(P, v) {
            var l = P.get(v.uuid) || P.get(v.id);
            if (l) return P = l.name, l.id = v.id || l.id, l.name = v.name, l.token = v.token, l.uuid = v.uuid || l.uuid, l.name != P;
            P.screens.push(v);
            return !0
        },
        zpj = function(P, v) {
            var l = P.screens.length != v.length;
            P.screens = g.$g(P.screens, function(z) {
                return !!Y5A(v, z)
            });
            for (var e = v.length, h = 0; h < e; h++) l = hpy(P, v[h]) || l;
            return l
        },
        m4A = function(P, v) {
            var l = P.screens.length;
            P.screens = g.$g(P.screens, function(e) {
                return !(e || v ? !e != !v ? 0 : e.id == v.id : 1)
            });
            return P.screens.length < l
        },
        Rpx = function(P, v, l, e, h) {
            g.gA.call(this);
            this.G = P;
            this.j = v;
            this.Y = l;
            this.T = e;
            this.Z = h;
            this.K = 0;
            this.W = null;
            this.bq = NaN
        },
        tO = function(P) {
            RN.call(this, "LocalScreenService");
            this.K = P;
            this.W = NaN;
            QG(this);
            this.info("Initializing with " + q5y(this.screens))
        },
        QGA = function(P) {
            if (P.screens.length) {
                var v = g.LC(P.screens, function(e) {
                        return e.id
                    }),
                    l = PO(P.K, "/pairing/get_lounge_token_batch");
                P.K.sendRequest("POST", l, {
                    screen_ids: v.join(",")
                }, (0, g.ru)(P.Sw, P), (0, g.ru)(P.NU, P))
            }
        },
        QG = function(P) {
            if (g.YN("deprecate_pair_servlet_enabled")) return zpj(P, []);
            var v = crd(X01());
            v = g.$g(v, function(l) {
                return !l.uuid
            });
            return zpj(P, v)
        },
        yG = function(P, v) {
            iKx(g.LC(P.screens, u71));
            v && B_m()
        },
        yPQ = function(P, v) {
            g.gA.call(this);
            this.T = v;
            v = (v = g.au("yt-remote-online-screen-ids") || "") ? v.split(",") : [];
            for (var l = {}, e = this.T(), h = e.length, z = 0; z < h; ++z) {
                var m = e[z].id;
                l[m] = g.ro(v, m)
            }
            this.W = l;
            this.Z = P;
            this.G = this.Y = NaN;
            this.K = null;
            tYj("Initialized with " + g.XQ(this.W))
        },
        CHd = function(P, v, l) {
            var e = PO(P.Z, "/pairing/get_screen_availability");
            P.Z.sendRequest("POST", e, {
                lounge_token: v.token
            }, (0, g.ru)(function(h) {
                h = h.screens || [];
                for (var z = h.length, m = 0; m < z; ++m)
                    if (h[m].loungeToken == v.token) {
                        l(h[m].status == "online");
                        return
                    }
                l(!1)
            }, P), (0, g.ru)(function() {
                l(!1)
            }, P))
        },
        g6x = function(P, v) {
            a: if (izy(v) != izy(P.W)) var l = !1;
                else {
                    l = g.A3(v);
                    for (var e = l.length, h = 0; h < e; ++h)
                        if (!P.W[l[h]]) {
                            l = !1;
                            break a
                        }
                    l = !0
                }l || (tYj("Updated online screens: " + g.XQ(P.W)), P.W = v, P.publish("screenChange"));f0y(P)
        },
        Cp = function(P) {
            isNaN(P.G) || g.qc(P.G);
            P.G = g.KG((0, g.ru)(P.lj, P), P.Y > 0 && P.Y < g.Vw() ? 2E4 : 1E4)
        },
        tYj = function(P) {
            lv("OnlineScreenService", P)
        },
        kzj = function(P) {
            var v = {};
            g.f$(P.T(), function(l) {
                l.token ? v[l.token] = l.id : this.JB("Requesting availability of screen w/o lounge token.")
            });
            return v
        },
        f0y = function(P) {
            P = g.A3(g.u6(P.W, function(v) {
                return v
            }));
            g.tK(P);
            P.length ? g.jB("yt-remote-online-screen-ids", P.join(","), 60) : g.Hx("yt-remote-online-screen-ids")
        },
        fp = function(P, v) {
            v = v === void 0 ? !1 : v;
            RN.call(this, "ScreenService");
            this.Y = P;
            this.j = v;
            this.W = this.K = null;
            this.G = [];
            this.Z = {};
            whx(this)
        },
        I0x = function(P, v, l, e, h, z) {
            P.info("getAutomaticScreenByIds " + l + " / " + v);
            l || (l = P.Z[v]);
            var m = P.Yg(),
                Q = l ? C8(m, l) : null;
            l && (P.j || Q) || (Q = C8(m, v));
            if (Q) {
                Q.uuid = v;
                var t = gr(P, Q);
                CHd(P.W, t, function(y) {
                    h(y ? t : null)
                })
            } else l ? $4G(P, l, (0, g.ru)(function(y) {
                var C = gr(this, new Qq({
                    name: e,
                    screenId: l,
                    loungeToken: y,
                    dialId: v || ""
                }));
                CHd(this.W, C, function(f) {
                    h(f ? C : null)
                })
            }, P), z) : h(null)
        },
        D4j = function(P, v) {
            for (var l = P.screens.length, e = 0; e < l; ++e)
                if (P.screens[e].name == v) return P.screens[e];
            return null
        },
        n6d = function(P, v, l) {
            CHd(P.W, v, l)
        },
        $4G = function(P, v, l, e) {
            P.info("requestLoungeToken_ for " + v);
            var h = {
                postParams: {
                    screen_ids: v
                },
                method: "POST",
                context: P,
                onSuccess: function(z, m) {
                    z = m && m.screens || [];
                    z[0] && z[0].screenId == v ? l(z[0].loungeToken) : e(Error("Missing lounge token in token response"))
                },
                onError: function() {
                    e(Error("Request screen lounge token failed"))
                }
            };
            g.SN(PO(P.Y, "/pairing/get_lounge_token_batch"), h)
        },
        Nnj = function(P) {
            P.screens = P.K.Yg();
            var v = P.Z,
                l = {},
                e;
            for (e in v) l[v[e]] = e;
            v = P.screens.length;
            for (e = 0; e < v; ++e) {
                var h = P.screens[e];
                h.uuid = l[h.id] || ""
            }
            P.info("Updated manual screens: " + q5y(P.screens))
        },
        whx = function(P) {
            JPy(P);
            P.K = new tO(P.Y);
            P.K.subscribe("screenChange", (0, g.ru)(P.Qc1, P));
            Nnj(P);
            P.j || (P.G = crd(g.au("yt-remote-automatic-screen-cache") || []));
            JPy(P);
            P.info("Initializing automatic screens: " + q5y(P.G));
            P.W = new yPQ(P.Y, (0, g.ru)(P.Yg, P, !0));
            P.W.subscribe("screenChange", (0, g.ru)(function() {
                this.publish("onlineScreenChange")
            }, P))
        },
        gr = function(P, v) {
            var l = P.get(v.id);
            l ? (l.uuid = v.uuid, v = l) : ((l = C8(P.G, v.uuid)) ? (l.id = v.id, l.token = v.token, v = l) : P.G.push(v), P.j || uA1(P));
            JPy(P);
            P.Z[v.uuid] = v.id;
            g.jB("yt-remote-device-id-map", P.Z, 31536E3);
            return v
        },
        uA1 = function(P) {
            P = g.$g(P.G, function(v) {
                return v.idType != "shortLived"
            });
            g.jB("yt-remote-automatic-screen-cache", g.LC(P, u71))
        },
        JPy = function(P) {
            P.Z = g.au("yt-remote-device-id-map") || {}
        },
        kZ = function(P, v, l) {
            g.gA.call(this);
            this.kf = l;
            this.Y = P;
            this.K = v;
            this.W = null
        },
        wr = function(P, v) {
            P.W = v;
            P.publish("sessionScreen", P.W)
        },
        K_3 = function(P, v) {
            P.W && (P.W.token = v, gr(P.Y, P.W));
            P.publish("sessionScreen", P.W)
        },
        $Z = function(P, v) {
            lv(P.kf, v)
        },
        IN = function(P, v, l) {
            kZ.call(this, P, v, "CastSession");
            var e = this;
            this.config_ = l;
            this.G = null;
            this.QW = (0, g.ru)(this.Jv, this);
            this.T1 = (0, g.ru)(this.YF2, this);
            this.Wg = g.KG(function() {
                cPv(e, null)
            }, 12E4);
            this.j = this.Z = this.T = this.S = 0;
            this.J5 = !1;
            this.X = "unknown"
        },
        F_x = function(P, v) {
            g.qc(P.j);
            P.j = 0;
            v == 0 ? qPG(P) : P.j = g.KG(function() {
                qPG(P)
            }, v)
        },
        qPG = function(P) {
            AP3(P, "getLoungeToken");
            g.qc(P.Z);
            P.Z = g.KG(function() {
                YPy(P, null)
            }, 3E4)
        },
        AP3 = function(P, v) {
            P.info("sendYoutubeMessage_: " + v + " " + g.XQ());
            var l = {};
            l.type = v;
            P.G ? P.G.sendMessage("urn:x-cast:com.google.youtube.mdx", l, function() {}, (0, g.ru)(function() {
                $Z(this, "Failed to send message: " + v + ".")
            }, P)) : $Z(P, "Sending yt message without session: " + g.XQ(l))
        },
        bRb = function(P, v) {
            v ? (P.info("onConnectedScreenId_: Received screenId: " + v), P.W && P.W.id == v || P.RR(v, function(l) {
                wr(P, l)
            }, function() {
                return P.tN()
            }, 5)) : P.tN(Error("Waiting for session status timed out."))
        },
        ph1 = function(P, v, l) {
            P.info("onConnectedScreenData_: Received screenData: " + JSON.stringify(v));
            var e = new Qq(v);
            x4Q(P, e, function(h) {
                h ? (P.J5 = !0, gr(P.Y, e), wr(P, e), P.X = "unknown", F_x(P, l)) : (g.z_(Error("CastSession, RemoteScreen from screenData: " + JSON.stringify(v) + " is not online.")), P.tN())
            }, 5)
        },
        cPv = function(P, v) {
            g.qc(P.Wg);
            P.Wg = 0;
            v ? P.config_.enableCastLoungeToken && v.loungeToken ? v.deviceId ? P.W && P.W.uuid == v.deviceId || (v.loungeTokenRefreshIntervalMs ? ph1(P, {
                    name: P.K.friendlyName,
                    screenId: v.screenId,
                    loungeToken: v.loungeToken,
                    dialId: v.deviceId,
                    screenIdType: "shortLived"
                }, v.loungeTokenRefreshIntervalMs) : (g.z_(Error("No loungeTokenRefreshIntervalMs presents in mdxSessionStatusData: " + JSON.stringify(v) + ".")), bRb(P, v.screenId))) : (g.z_(Error("No device id presents in mdxSessionStatusData: " + JSON.stringify(v) + ".")), bRb(P, v.screenId)) :
                bRb(P, v.screenId) : P.tN(Error("Waiting for session status timed out."))
        },
        YPy = function(P, v) {
            g.qc(P.Z);
            P.Z = 0;
            var l = null;
            if (v)
                if (v.loungeToken) {
                    var e;
                    ((e = P.W) == null ? void 0 : e.token) == v.loungeToken && (l = "staleLoungeToken")
                } else l = "missingLoungeToken";
            else l = "noLoungeTokenResponse";
            l ? (P.info("Did not receive a new lounge token in onLoungeToken_ with data: " + (JSON.stringify(v) + ", error: " + l)), P.X = l, F_x(P, 3E4)) : (K_3(P, v.loungeToken), P.J5 = !1, P.X = "unknown", F_x(P, v.loungeTokenRefreshIntervalMs))
        },
        x4Q = function(P, v, l, e) {
            g.qc(P.T);
            P.T = 0;
            n6d(P.Y, v, function(h) {
                h || e < 0 ? l(h) : P.T = g.KG(function() {
                    x4Q(P, v, l, e - 1)
                }, 300)
            })
        },
        L_G = function(P) {
            g.qc(P.S);
            P.S = 0;
            g.qc(P.T);
            P.T = 0;
            g.qc(P.Wg);
            P.Wg = 0;
            g.qc(P.Z);
            P.Z = 0;
            g.qc(P.j);
            P.j = 0
        },
        D3 = function(P, v, l, e) {
            kZ.call(this, P, v, "DialSession");
            this.config_ = e;
            this.G = this.S = null;
            this.T1 = "";
            this.Pg = l;
            this.Hg = null;
            this.Wg = function() {};
            this.X = NaN;
            this.wM = (0, g.ru)(this.Z4, this);
            this.Z = function() {};
            this.j = this.T = 0;
            this.QW = !1;
            this.J5 = "unknown"
        },
        np = function(P) {
            var v;
            return !!(P.config_.enableDialLoungeToken && ((v = P.G) == null ? 0 : v.getDialAppInfo))
        },
        SPy = function(P) {
            P.Z = P.Y.EJ(P.T1, P.K.label, P.K.friendlyName, np(P), function(v, l) {
                P.Z = function() {};
                P.QW = !0;
                wr(P, v);
                v.idType == "shortLived" && l > 0 && Nm(P, l)
            }, function(v) {
                P.Z = function() {};
                P.tN(v)
            })
        },
        Gzd = function(P) {
            var v = {};
            v.pairingCode = P.T1;
            v.theme = P.Pg;
            ZKA() && (v.env_useStageMdx = 1);
            return g.sU(v)
        },
        Xhy = function(P) {
            return new Promise(function(v) {
                P.T1 = F7G();
                if (P.Hg) {
                    var l = new chrome.cast.DialLaunchResponse(!0, Gzd(P));
                    v(l);
                    SPy(P)
                } else P.Wg = function() {
                    g.qc(P.X);
                    P.Wg = function() {};
                    P.X = NaN;
                    var e = new chrome.cast.DialLaunchResponse(!0, Gzd(P));
                    v(e);
                    SPy(P)
                }, P.X = g.KG(function() {
                    P.Wg()
                }, 100)
            })
        },
        iRA = function(P, v, l) {
            P.info("initOnConnectedScreenDataPromise_: Received screenData: " + JSON.stringify(v));
            var e = new Qq(v);
            return (new Promise(function(h) {
                Bn3(P, e, function(z) {
                    z ? (P.QW = !0, gr(P.Y, e), wr(P, e), Nm(P, l)) : g.z_(Error("DialSession, RemoteScreen from screenData: " + JSON.stringify(v) + " is not online."));
                    h(z)
                }, 5)
            })).then(function(h) {
                return h ? new chrome.cast.DialLaunchResponse(!1) : Xhy(P)
            })
        },
        U4Y = function(P, v) {
            var l = P.S.receiver.label,
                e = P.K.friendlyName;
            return (new Promise(function(h) {
                I0x(P.Y, l, v, e, function(z) {
                    z && z.token && wr(P, z);
                    h(z)
                }, function(z) {
                    $Z(P, "Failed to get DIAL screen: " + z);
                    h(null)
                })
            })).then(function(h) {
                return h && h.token ? new chrome.cast.DialLaunchResponse(!1) : Xhy(P)
            })
        },
        Bn3 = function(P, v, l, e) {
            g.qc(P.T);
            P.T = 0;
            n6d(P.Y, v, function(h) {
                h || e < 0 ? l(h) : P.T = g.KG(function() {
                    Bn3(P, v, l, e - 1)
                }, 300)
            })
        },
        Nm = function(P, v) {
            P.info("getDialAppInfoWithTimeout_ " + v);
            np(P) && (g.qc(P.j), P.j = 0, v == 0 ? ZRY(P) : P.j = g.KG(function() {
                ZRY(P)
            }, v))
        },
        ZRY = function(P) {
            np(P) && P.G.getDialAppInfo(function(v) {
                P.info("getDialAppInfo dialLaunchData: " + JSON.stringify(v));
                v = v.extraData || {};
                var l = null;
                if (v.loungeToken) {
                    var e;
                    ((e = P.W) == null ? void 0 : e.token) == v.loungeToken && (l = "staleLoungeToken")
                } else l = "missingLoungeToken";
                l ? (P.J5 = l, Nm(P, 3E4)) : (P.QW = !1, P.J5 = "unknown", K_3(P, v.loungeToken), Nm(P, v.loungeTokenRefreshIntervalMs))
            }, function(v) {
                P.info("getDialAppInfo error: " + v);
                P.J5 = "noLoungeTokenResponse";
                Nm(P, 3E4)
            })
        },
        jGA = function(P) {
            g.qc(P.T);
            P.T = 0;
            g.qc(P.j);
            P.j = 0;
            P.Z();
            P.Z = function() {};
            g.qc(P.X)
        },
        JO = function(P, v) {
            kZ.call(this, P, v, "ManualSession");
            this.G = g.KG((0, g.ru)(this.UG, this, null), 150)
        },
        uv = function(P, v) {
            g.gA.call(this);
            this.config_ = v;
            this.K = P;
            this.S = v.appId || "233637DE";
            this.Y = v.theme || "cl";
            this.X = v.disableCastApi || !1;
            this.T = v.forceMirroring || !1;
            this.W = null;
            this.j = !1;
            this.G = [];
            this.Z = (0, g.ru)(this.Qo6, this)
        },
        a0b = function(P, v) {
            return v ? g.om(P.G, function(l) {
                return tN(v, l.label)
            }, P) : null
        },
        Kp = function(P) {
            lv("Controller", P)
        },
        TDy = function(P) {
            window.chrome && chrome.cast && chrome.cast.logMessage && chrome.cast.logMessage(P)
        },
        cO = function(P) {
            return P.j || !!P.G.length || !!P.W
        },
        qm = function(P, v, l) {
            v != P.W && (g.Rm(P.W), (P.W = v) ? (l ? P.publish("yt-remote-cast2-receiver-resumed",
                v.K) : P.publish("yt-remote-cast2-receiver-selected", v.K), v.subscribe("sessionScreen", (0, g.ru)(P.rK, P, v)), v.subscribe("sessionFailed", function() {
                return HRo(P, v)
            }), v.W ? P.publish("yt-remote-cast2-session-change", v.W) : l && P.W.UG(null)) : P.publish("yt-remote-cast2-session-change", null))
        },
        HRo = function(P, v) {
            P.W == v && P.publish("yt-remote-cast2-session-failed")
        },
        E6j = function(P) {
            var v = P.K.k8(),
                l = P.W && P.W.K;
            P = g.LC(v, function(e) {
                l && tN(e, l.label) && (l = null);
                var h = e.uuid ? e.uuid : e.id,
                    z = a0b(this, e);
                z ? (z.label = h, z.friendlyName = e.name) : (z = new chrome.cast.Receiver(h, e.name), z.receiverType = chrome.cast.ReceiverType.CUSTOM);
                return z
            }, P);
            l && (l.receiverType != chrome.cast.ReceiverType.CUSTOM && (l = new chrome.cast.Receiver(l.label, l.friendlyName), l.receiverType = chrome.cast.ReceiverType.CUSTOM), P.push(l));
            return P
        },
        TnG = function(P, v, l, e) {
            e.disableCastApi ? Fy("Cannot initialize because disabled by Mdx config.") : W_m() ? ORx(v, e) && (o6b(!0), window.chrome && chrome.cast && chrome.cast.isAvailable ? sGj(P, l) : (window.__onGCastApiAvailable = function(h, z) {
                h ? sGj(P, l) : (AO("Failed to load cast API: " + z), rPd(!1), o6b(!1), g.Hx("yt-remote-cast-available"), g.Hx("yt-remote-cast-receiver"),
                    MYy(), l(!1))
            }, e.loadCastApiSetupScript ? g.kR("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js") : window.navigator.userAgent.indexOf("Android") >= 0 && window.navigator.userAgent.indexOf("Chrome/") >= 0 && window.navigator.presentation ? aed() >= 60 && T_m() : !window.chrome || !window.navigator.presentation || window.navigator.userAgent.indexOf("Edge") >= 0 ? OK1() : aed() >= 89 ? dWy() : (MSy(), DV(VSd.map(oIY))))) : Fy("Cannot initialize because not running Chrome")
        },
        MYy = function() {
            Fy("dispose");
            var P = YZ();
            P && P.dispose();
            g.ZB("yt.mdx.remote.cloudview.instance_", null);
            VYY(!1);
            g.fy(d4d);
            d4d.length = 0
        },
        bv = function() {
            return !!g.au("yt-remote-cast-installed")
        },
        PXb = function() {
            var P = g.au("yt-remote-cast-receiver");
            return P ? P.friendlyName : null
        },
        vzY = function() {
            Fy("clearCurrentReceiver");
            g.Hx("yt-remote-cast-receiver")
        },
        ls1 = function() {
            return bv() ? YZ() ? YZ().getCastSession() : (AO("getCastSelector: Cast is not initialized."), null) : (AO("getCastSelector: Cast API is not installed!"), null)
        },
        eQQ = function() {
            bv() ? YZ() ? xZ() ? (Fy("Requesting cast selector."), YZ().requestSession()) : (Fy("Wait for cast API to be ready to request the session."), d4d.push(g.Cy("yt-remote-cast2-api-ready", eQQ))) : AO("requestCastSelector: Cast is not initialized.") : AO("requestCastSelector: Cast API is not installed!")
        },
        pp = function(P, v) {
            xZ() ? YZ().setConnectedScreenStatus(P, v) : AO("setConnectedScreenStatus called before ready.")
        },
        W_m = function() {
            var P = g.Y3().search(/ (CrMo|Chrome|CriOS)\//) >= 0;
            return g.Xs || P
        },
        hQY = function(P, v) {
            YZ().init(P, v)
        },
        ORx = function(P, v) {
            var l = !1;
            YZ() || (P = new uv(P, v), P.subscribe("yt-remote-cast2-availability-change", function(e) {
                g.jB("yt-remote-cast-available", e);
                $E("yt-remote-cast2-availability-change", e)
            }), P.subscribe("yt-remote-cast2-receiver-selected", function(e) {
                Fy("onReceiverSelected: " + e.friendlyName);
                g.jB("yt-remote-cast-receiver", e);
                $E("yt-remote-cast2-receiver-selected", e)
            }), P.subscribe("yt-remote-cast2-receiver-resumed", function(e) {
                Fy("onReceiverResumed: " + e.friendlyName);
                g.jB("yt-remote-cast-receiver", e);
                $E("yt-remote-cast2-receiver-resumed", e)
            }), P.subscribe("yt-remote-cast2-session-change", function(e) {
                Fy("onSessionChange: " + yq(e));
                e || g.Hx("yt-remote-cast-receiver");
                $E("yt-remote-cast2-session-change", e)
            }), g.ZB("yt.mdx.remote.cloudview.instance_", P), l = !0);
            Fy("cloudview.createSingleton_: " + l);
            return l
        },
        YZ = function() {
            return g.j9("yt.mdx.remote.cloudview.instance_")
        },
        sGj = function(P, v) {
            rPd(!0);
            o6b(!1);
            hQY(P, function(l) {
                l ? (VYY(!0), g.gm("yt-remote-cast2-api-ready")) : (AO("Failed to initialize cast API."), rPd(!1), g.Hx("yt-remote-cast-available"), g.Hx("yt-remote-cast-receiver"), MYy());
                v(l)
            })
        },
        Fy = function(P) {
            lv("cloudview", P)
        },
        AO = function(P) {
            lv("cloudview", P)
        },
        rPd = function(P) {
            Fy("setCastInstalled_ " + P);
            g.jB("yt-remote-cast-installed", P)
        },
        xZ = function() {
            return !!g.j9("yt.mdx.remote.cloudview.apiReady_")
        },
        VYY = function(P) {
            Fy("setApiReady_ " + P);
            g.ZB("yt.mdx.remote.cloudview.apiReady_", P)
        },
        o6b = function(P) {
            g.ZB("yt.mdx.remote.cloudview.initializing_", P)
        },
        Lp = function(P) {
            this.index = -1;
            this.videoId = this.listId = "";
            this.volume = this.playerState = -1;
            this.muted = !1;
            this.audioTrackId = null;
            this.T = this.j = 0;
            this.trackData = null;
            this.JI = this.Up = !1;
            this.S = this.Z = this.W = this.Y = 0;
            this.G = NaN;
            this.K = !1;
            this.reset(P)
        },
        zQy = function(P) {
            P.audioTrackId = null;
            P.trackData = null;
            P.playerState = -1;
            P.Up = !1;
            P.JI = !1;
            P.j = 0;
            P.T = g.Vw();
            P.Y = 0;
            P.W = 0;
            P.Z = 0;
            P.S = 0;
            P.G = NaN;
            P.K = !1
        },
        Sb = function(P) {
            return P.isPlaying() ? (g.Vw() - P.T) / 1E3 : 0
        },
        GD = function(P, v) {
            P.j = v;
            P.T = g.Vw()
        },
        Xy = function(P) {
            switch (P.playerState) {
                case 1:
                case 1081:
                    return (g.Vw() - P.T) / 1E3 + P.j;
                case -1E3:
                    return 0
            }
            return P.j
        },
        BO = function(P, v, l) {
            var e = P.videoId;
            P.videoId = v;
            P.index = l;
            v != e && zQy(P)
        },
        mIv = function(P) {
            var v = {};
            v.index = P.index;
            v.listId = P.listId;
            v.videoId = P.videoId;
            v.playerState = P.playerState;
            v.volume = P.volume;
            v.muted = P.muted;
            v.audioTrackId = P.audioTrackId;
            v.trackData = g.XN(P.trackData);
            v.hasPrevious = P.Up;
            v.hasNext = P.JI;
            v.playerTime = P.j;
            v.playerTimeAt = P.T;
            v.seekableStart = P.Y;
            v.seekableEnd = P.W;
            v.duration = P.Z;
            v.loadedTime = P.S;
            v.liveIngestionTime = P.G;
            return v
        },
        U0 = function(P, v) {
            g.gA.call(this);
            var l = this;
            this.G = 0;
            this.Y = P;
            this.T = [];
            this.Z = new GTy;
            this.K = this.W = null;
            this.X = (0, g.ru)(this.Na1, this);
            this.j = (0, g.ru)(this.vN, this);
            this.S = (0, g.ru)(this.CQc, this);
            this.Wg = (0, g.ru)(this.SiJ, this);
            var e = 0;
            P ? (e = P.getProxyState(), e != 3 && (P.subscribe("proxyStateChange", this.Eg, this), RQx(this))) : e = 3;
            e != 0 && (v ? this.Eg(e) : g.KG(function() {
                l.Eg(e)
            }, 0));
            (P = ls1()) && iv(this, P);
            this.subscribe("yt-remote-cast2-session-change", this.Wg)
        },
        Z3 = function(P) {
            return new Lp(P.Y.getPlayerContextData())
        },
        RQx = function(P) {
            g.f$("nowAutoplaying autoplayDismissed remotePlayerChange remoteQueueChange autoplayModeChange autoplayUpNext previousNextChange multiStateLoopEnabled loopModeChange".split(" "), function(v) {
                this.T.push(this.Y.subscribe(v, g.TW(this.fRf, v), this))
            }, P)
        },
        QOY = function(P) {
            g.f$(P.T, function(v) {
                this.Y.unsubscribeByKey(v)
            }, P);
            P.T.length = 0
        },
        jb = function(P) {
            return P.getState() == 1
        },
        aN = function(P, v) {
            var l = P.Z;
            l.W.length + l.K.length < 50 && P.Z.enqueue(v)
        },
        tly = function(P, v, l) {
            var e = Z3(P);
            GD(e, l);
            e.playerState != -1E3 && (e.playerState = v);
            HO(P, e)
        },
        E0 = function(P, v, l) {
            P.Y.sendMessage(v, l)
        },
        HO = function(P, v) {
            QOY(P);
            P.Y.setPlayerContextData(mIv(v));
            RQx(P)
        },
        iv = function(P, v) {
            P.K && (P.K.removeUpdateListener(P.X), P.K.removeMediaListener(P.j), P.vN(null));
            P.K = v;
            P.K && (eb("Setting cast session: " + P.K.sessionId), P.K.addUpdateListener(P.X), P.K.addMediaListener(P.j), P.K.media.length && P.vN(P.K.media[0]))
        },
        y6A = function(P) {
            var v = P.W.media,
                l = P.W.customData;
            if (v && l) {
                var e = Z3(P);
                v.contentId != e.videoId && eb("Cast changing video to: " + v.contentId);
                e.videoId = v.contentId;
                e.playerState = l.playerState;
                GD(e, P.W.getEstimatedTime());
                HO(P, e)
            } else eb("No cast media video. Ignoring state update.")
        },
        WO = function(P, v, l) {
            return (0, g.ru)(function(e) {
                this.JB("Failed to " + v + " with cast v2 channel. Error code: " + e.code);
                e.code != chrome.cast.ErrorCode.TIMEOUT && (this.JB("Retrying " + v + " using MDx browser channel."), E0(this, v, l))
            }, P)
        },
        s0 = function(P, v, l, e) {
            e = e === void 0 ? !1 : e;
            g.gA.call(this);
            var h = this;
            this.T = NaN;
            this.T1 = !1;
            this.X = this.S = this.QW = this.J5 = NaN;
            this.Wg = [];
            this.Z = this.j = this.Y = this.W = this.K = null;
            this.Hg = P;
            this.wM = e;
            this.Wg.push(g.bZ(window, "beforeunload", function() {
                h.Nz(2)
            }));
            this.G = [];
            this.W = new Lp;
            this.Pg = v.id;
            this.kf = v.idType;
            this.K = MBb(this.Hg, l, this.zn, this.kf == "shortLived", this.Pg);
            this.K.listen("channelOpened", function() {
                CXd(h)
            });
            this.K.listen("channelClosed", function() {
                O0("Channel closed");
                isNaN(h.T) ? kE(!0) : kE();
                h.dispose()
            });
            this.K.listen("channelError", function(z) {
                kE();
                isNaN(h.nH()) ? (z == 1 && h.kf == "shortLived" && h.publish("browserChannelAuthError", z), O0("Channel error: " + z + " without reconnection"), h.dispose()) : (h.T1 = !0, O0("Channel error: " + z + " with reconnection in " + h.nH() + " ms"), oN(h, 2))
            });
            this.K.listen("channelMessage", function(z) {
                fsb(h, z)
            });
            this.K.EX(v.token);
            this.subscribe("remoteQueueChange", function() {
                var z = h.W.videoId;
                g.EY() && g.jB("yt-remote-session-video-id", z)
            })
        },
        gzy = function(P) {
            return g.om(P.G, function(v) {
                return v.type == "LOUNGE_SCREEN"
            })
        },
        O0 = function(P) {
            lv("conn", P)
        },
        oN = function(P, v) {
            P.publish("proxyStateChange", v)
        },
        kJG = function(P) {
            P.T = g.KG(function() {
                O0("Connecting timeout");
                P.Nz(1)
            }, 2E4)
        },
        wsj = function(P) {
            g.qc(P.T);
            P.T = NaN
        },
        $Iy = function(P) {
            g.qc(P.J5);
            P.J5 = NaN
        },
        DIy = function(P) {
            Iso(P);
            P.QW = g.KG(function() {
                rr(P, "getNowPlaying")
            }, 2E4)
        },
        Iso = function(P) {
            g.qc(P.QW);
            P.QW = NaN
        },
        CXd = function(P) {
            O0("Channel opened");
            P.T1 && (P.T1 = !1, $Iy(P), P.J5 = g.KG(function() {
                O0("Timing out waiting for a screen.");
                P.Nz(1)
            }, 15E3))
        },
        NWd = function(P, v) {
            var l = null;
            if (v) {
                var e = gzy(P);
                e && (l = {
                    clientName: e.clientName,
                    deviceMake: e.brand,
                    deviceModel: e.model,
                    osVersion: e.osVersion
                })
            }
            g.ZB("yt.mdx.remote.remoteClient_", l);
            v && (wsj(P), $Iy(P));
            l = P.K.W1() && isNaN(P.T);
            v == l ? v && (oN(P, 1), rr(P, "getSubtitlesTrack")) : v ? (P.qb() && P.W.reset(), oN(P, 1), rr(P, "getNowPlaying"), nzv(P)) : P.Nz(1)
        },
        J6o = function(P, v) {
            var l = v.params.videoId;
            delete v.params.videoId;
            l == P.W.videoId && (g.pU(v.params) ? P.W.trackData = null : P.W.trackData = v.params, P.publish("remotePlayerChange"))
        },
        uUG = function(P, v, l) {
            var e = v.params.videoId || v.params.video_id,
                h = parseInt(v.params.currentIndex, 10);
            P.W.listId = v.params.listId || P.W.listId;
            BO(P.W, e, h);
            P.publish("remoteQueueChange", l)
        },
        c6A = function(P, v) {
            v.params = v.params || {};
            uUG(P, v, "NOW_PLAYING_MAY_CHANGE");
            KIy(P, v);
            P.publish("autoplayDismissed")
        },
        KIy = function(P, v) {
            var l = parseInt(v.params.currentTime || v.params.current_time, 10);
            GD(P.W, isNaN(l) ? 0 : l);
            l = parseInt(v.params.state, 10);
            l = isNaN(l) ? -1 : l;
            l == -1 && P.W.playerState == -1E3 && (l = -1E3);
            P.W.playerState = l;
            l = Number(v.params.loadedTime);
            P.W.S = isNaN(l) ? 0 : l;
            P.W.vU(Number(v.params.duration));
            l = P.W;
            var e = Number(v.params.liveIngestionTime);
            l.G = e;
            l.K = isNaN(e) ? !1 : !0;
            l = P.W;
            e = Number(v.params.seekableStartTime);
            v = Number(v.params.seekableEndTime);
            l.Y = isNaN(e) ? 0 : e;
            l.W = isNaN(v) ? 0 : v;
            P.W.playerState == 1 ? DIy(P) : Iso(P);
            P.publish("remotePlayerChange")
        },
        qhy = function(P, v) {
            if (P.W.playerState != -1E3) {
                var l =
                    1085;
                switch (parseInt(v.params.adState, 10)) {
                    case 1:
                        l = 1081;
                        break;
                    case 2:
                        l = 1084;
                        break;
                    case 0:
                        l = 1083
                }
                P.W.playerState = l;
                v = parseInt(v.params.currentTime, 10);
                GD(P.W, isNaN(v) ? 0 : v);
                P.publish("remotePlayerChange")
            }
        },
        FIy = function(P, v) {
            var l = v.params.muted == "true";
            P.W.volume = parseInt(v.params.volume, 10);
            P.W.muted = l;
            P.publish("remotePlayerChange")
        },
        A6Q = function(P, v) {
            P.j = v.params.videoId;
            P.publish("nowAutoplaying", parseInt(v.params.timeout, 10))
        },
        YhG = function(P, v) {
            P.j = v.params.videoId || null;
            P.publish("autoplayUpNext", P.j)
        },
        b93 = function(P, v) {
            P.Z = v.params.autoplayMode;
            P.publish("autoplayModeChange", P.Z);
            P.Z == "DISABLED" && P.publish("autoplayDismissed")
        },
        xIA = function(P, v) {
            var l = v.params.hasNext == "true";
            P.W.Up = v.params.hasPrevious == "true";
            P.W.JI = l;
            P.publish("previousNextChange")
        },
        fsb = function(P, v) {
            v = v.message;
            v.params ? O0("Received: action=" + v.action + ", params=" + g.XQ(v.params)) : O0("Received: action=" + v.action + " {}");
            switch (v.action) {
                case "loungeStatus":
                    v = lG(v.params.devices);
                    P.G = g.LC(v, function(e) {
                        return new RP(e)
                    });
                    v = !!g.om(P.G, function(e) {
                        return e.type == "LOUNGE_SCREEN"
                    });
                    NWd(P, v);
                    v = P.lO("mlm");
                    P.publish("multiStateLoopEnabled", v);
                    break;
                case "loungeScreenDisconnected":
                    g.VQ(P.G, function(e) {
                        return e.type == "LOUNGE_SCREEN"
                    });
                    NWd(P, !1);
                    break;
                case "remoteConnected":
                    var l = new RP(lG(v.params.device));
                    g.om(P.G, function(e) {
                        return e.ZA(l)
                    }) || BtG(P.G, l);
                    break;
                case "remoteDisconnected":
                    l = new RP(lG(v.params.device));
                    g.VQ(P.G, function(e) {
                        return e.ZA(l)
                    });
                    break;
                case "gracefulDisconnect":
                    break;
                case "playlistModified":
                    uUG(P, v, "QUEUE_MODIFIED");
                    break;
                case "nowPlaying":
                    c6A(P, v);
                    break;
                case "onStateChange":
                    KIy(P, v);
                    break;
                case "onAdStateChange":
                    qhy(P, v);
                    break;
                case "onVolumeChanged":
                    FIy(P, v);
                    break;
                case "onSubtitlesTrackChanged":
                    J6o(P, v);
                    break;
                case "nowAutoplaying":
                    A6Q(P, v);
                    break;
                case "autoplayDismissed":
                    P.publish("autoplayDismissed");
                    break;
                case "autoplayUpNext":
                    YhG(P, v);
                    break;
                case "onAutoplayModeChanged":
                    b93(P, v);
                    break;
                case "onHasPreviousNextChanged":
                    xIA(P,
                        v);
                    break;
                case "requestAssistedSignIn":
                    P.publish("assistedSignInRequested", v.params.authCode);
                    break;
                case "onLoopModeChanged":
                    P.publish("loopModeChange", v.params.loopMode);
                    break;
                default:
                    O0("Unrecognized action: " + v.action)
            }
        },
        nzv = function(P) {
            g.qc(P.X);
            P.X = g.KG(function() {
                P.Nz(1)
            }, 864E5)
        },
        rr = function(P, v, l) {
            l ? O0("Sending: action=" + v + ", params=" + g.XQ(l)) : O0("Sending: action=" + v);
            P.K.sendMessage(v, l)
        },
        pso = function(P) {
            RN.call(this, "ScreenServiceProxy");
            this.QP = P;
            this.W = [];
            this.W.push(this.QP.$_s("screenChange", (0, g.ru)(this.kz, this)));
            this.W.push(this.QP.$_s("onlineScreenChange", (0, g.ru)(this.ys$, this)))
        },
        BWQ = function(P, v) {
            UWd();
            if (!wf || !wf.get("yt-remote-disable-remote-module-for-dev")) {
                v = g.la("MDX_CONFIG") || v;
                bKA();
                S53();
                Mm || (Mm = new df(v ? v.loungeApiHost : void 0), ZKA() && (Mm.W = "/api/loungedev"));
                TD || (TD = g.j9("yt.mdx.remote.deferredProxies_") || [], g.ZB("yt.mdx.remote.deferredProxies_", TD));
                LIm();
                var l = VG();
                if (!l) {
                    var e = new fp(Mm, v ? v.disableAutomaticScreenCache || !1 : !1);
                    g.ZB("yt.mdx.remote.screenService_", e);
                    l = VG();
                    var h = {};
                    v && (h = {
                        appId: v.appId,
                        disableDial: v.disableDial,
                        theme: v.theme,
                        loadCastApiSetupScript: v.loadCastApiSetupScript,
                        disableCastApi: v.disableCastApi,
                        enableDialLoungeToken: v.enableDialLoungeToken,
                        enableCastLoungeToken: v.enableCastLoungeToken,
                        forceMirroring: v.forceMirroring
                    });
                    g.ZB("yt.mdx.remote.enableConnectWithInitialState_", v ? v.enableConnectWithInitialState || !1 : !1);
                    TnG(P, e, function(z) {
                        z ? dr() && pp(dr(), "YouTube TV") : e.subscribe("onlineScreenChange", function() {
                            $E("yt-remote-receiver-availability-change")
                        })
                    }, h)
                }
                v && !g.j9("yt.mdx.remote.initialized_") && (g.ZB("yt.mdx.remote.initialized_", !0), P3("Initializing: " + g.XQ(v)),
                    v3.push(g.Cy("yt-remote-cast2-api-ready", function() {
                        $E("yt-remote-api-ready")
                    })), v3.push(g.Cy("yt-remote-cast2-availability-change", function() {
                        $E("yt-remote-receiver-availability-change")
                    })), v3.push(g.Cy("yt-remote-cast2-receiver-selected", function() {
                        lA(null);
                        $E("yt-remote-auto-connect", "cast-selector-receiver")
                    })), v3.push(g.Cy("yt-remote-cast2-receiver-resumed", function() {
                        $E("yt-remote-receiver-resumed", "cast-selector-receiver")
                    })), v3.push(g.Cy("yt-remote-cast2-session-change", Shx)), v3.push(g.Cy("yt-remote-connection-change", function(z) {
                        z ? pp(dr(), "YouTube TV") : eU() || (pp(null, null), vzY())
                    })), v3.push(g.Cy("yt-remote-cast2-session-failed", function() {
                        $E("yt-remote-connection-failed")
                    })), P = GJG(), v.isAuto && (P.id += "#dial"), h = v.capabilities || [], g.YN("desktop_enable_autoplay") &&
                    h.push("atp"), h.length > 0 && (P.capabilities = h), P.name = v.device, P.app = v.app, (v = v.theme) && (P.theme = v), P3(" -- with channel params: " + g.XQ(P)), P ? (g.jB("yt-remote-session-app", P.app), g.jB("yt-remote-session-name", P.name)) : (g.Hx("yt-remote-session-app"), g.Hx("yt-remote-session-name")), g.ZB("yt.mdx.remote.channelParams_", P), l.start(), dr() || XsG())
            }
        },
        i9Y = function() {
            var P = VG().QP.$_gos();
            var v = hI();
            v && zm() && (Y5A(P, v) || P.push(v));
            return Arv(P)
        },
        Z9y = function() {
            var P = UIA();
            !P && bv() && PXb() && (P = {
                key: "cast-selector-receiver",
                name: PXb()
            });
            return P
        },
        UIA = function() {
            var P = i9Y(),
                v = hI();
            v || (v = eU());
            return g.om(P, function(l) {
                return v && tN(v, l.key) ? !0 : !1
            })
        },
        hI = function() {
            var P = dr();
            if (!P) return null;
            var v = VG().Yg();
            return C8(v, P)
        },
        Shx = function(P) {
            P3("remote.onCastSessionChange_: " + yq(P));
            if (P) {
                var v = hI();
                if (v && v.id == P.id) {
                    if (pp(v.id, "YouTube TV"), P.idType == "shortLived" && (P = P.token)) mR && (mR.token = P), (v = zm()) && v.EX(P)
                } else v && Ri(), Qk(P, 1)
            } else zm() && Ri()
        },
        Ri = function() {
            xZ() ? YZ().stopSession() : AO("stopSession called before API ready.");
            var P = zm();
            P && (P.disconnect(1), jOj(null))
        },
        asA = function() {
            var P = zm();
            return !!P && P.getProxyState() != 3
        },
        P3 = function(P) {
            lv("remote", P)
        },
        VG = function() {
            if (!H9m) {
                var P = g.j9("yt.mdx.remote.screenService_");
                H9m = P ? new pso(P) : null
            }
            return H9m
        },
        dr = function() {
            return g.j9("yt.mdx.remote.currentScreenId_")
        },
        Ezj = function(P) {
            g.ZB("yt.mdx.remote.currentScreenId_", P)
        },
        WIy = function() {
            return g.j9("yt.mdx.remote.connectData_")
        },
        lA = function(P) {
            g.ZB("yt.mdx.remote.connectData_", P)
        },
        zm = function() {
            return g.j9("yt.mdx.remote.connection_")
        },
        jOj = function(P) {
            var v = zm();
            lA(null);
            P || Ezj("");
            g.ZB("yt.mdx.remote.connection_", P);
            TD && (g.f$(TD, function(l) {
                l(P)
            }), TD.length = 0);
            v && !P ? $E("yt-remote-connection-change", !1) : !v && P && $E("yt-remote-connection-change", !0)
        },
        eU = function() {
            var P = g.EY();
            if (!P) return null;
            var v = VG();
            if (!v) return null;
            v = v.Yg();
            return C8(v, P)
        },
        Qk = function(P, v) {
            dr();
            hI() && hI();
            if (tI) mR = P;
            else {
                Ezj(P.id);
                var l = g.j9("yt.mdx.remote.enableConnectWithInitialState_") || !1;
                P = new s0(Mm, P, GJG(), l);
                P.connect(v, WIy());
                P.subscribe("beforeDisconnect", function(e) {
                    $E("yt-remote-before-disconnect", e)
                });
                P.subscribe("beforeDispose", function() {
                    zm() && (zm(), jOj(null))
                });
                P.subscribe("browserChannelAuthError", function() {
                    var e = hI();
                    e && e.idType == "shortLived" && (xZ() ? YZ().handleBrowserChannelAuthError() : AO("refreshLoungeToken called before API ready."))
                });
                jOj(P)
            }
        },
        XsG = function() {
            var P = eU();
            P ? (P3("Resume connection to: " + yq(P)), Qk(P, 0)) : (kE(), vzY(), P3("Skipping connecting because no session screen found."))
        },
        LIm = function() {
            var P = GJG();
            if (g.pU(P)) {
                P = gf();
                var v = g.au("yt-remote-session-name") || "",
                    l = g.au("yt-remote-session-app") || "";
                P = {
                    device: "REMOTE_CONTROL",
                    id: P,
                    name: v,
                    app: l,
                    mdxVersion: 3
                };
                P.authuser = String(g.la("SESSION_INDEX", "0"));
                (v = g.la("DELEGATED_SESSION_ID")) && (P.pageId = String(v));
                g.ZB("yt.mdx.remote.channelParams_", P)
            }
        },
        GJG = function() {
            return g.j9("yt.mdx.remote.channelParams_") || {}
        },
        sOy = function(P, v, l) {
            g.U.call(this);
            var e = this;
            this.module = P;
            this.J = v;
            this.Zx = l;
            this.events = new g.Z1(this);
            this.Y = !1;
            this.Z = new g.mQ(64);
            this.W = new g.mr(this.M3, 500, this);
            this.K = new g.mr(this.WJ, 1E3, this);
            this.j = new n8(this.xN0, 0, this);
            this.G = {};
            this.S = new g.mr(this.Km, 1E3, this);
            this.T = new NM(this.seekTo, 1E3, this);
            this.X = this.events.C(this.J, "onVolumeChange", function(h) {
                O9Q(e, h)
            });
            g.Z(this, this.events);
            this.events.C(v, "onCaptionsTrackListChanged", this.wR6);
            this.events.C(v, "captionschanged", this.l52);
            this.events.C(v, "captionssettingschanged", this.cJ);
            this.events.C(v, "videoplayerreset", this.kO);
            this.events.C(v, "mdxautoplaycancel", function() {
                e.Zx.Ds()
            });
            v.V("enable_mdx_video_play_directly") && this.events.C(v, "videodatachange", function() {
                ozy(e.module) || yk(e) || CN(e, 0)
            });
            P = this.Zx;
            P.s$();
            P.subscribe("proxyStateChange", this.nK, this);
            P.subscribe("remotePlayerChange", this.hC, this);
            P.subscribe("remoteQueueChange", this.kO, this);
            P.subscribe("previousNextChange", this.s7, this);
            P.subscribe("nowAutoplaying", this.aT, this);
            P.subscribe("autoplayDismissed", this.gm, this);
            g.Z(this, this.W);
            g.Z(this, this.K);
            g.Z(this, this.j);
            g.Z(this, this.S);
            g.Z(this, this.T);
            this.cJ();
            this.kO();
            this.hC()
        },
        O9Q = function(P, v) {
            if (yk(P)) {
                P.Zx.unsubscribe("remotePlayerChange", P.hC, P);
                var l = Math.round(v.volume);
                v = !!v.muted;
                var e = Z3(P.Zx);
                if (l !== e.volume || v !== e.muted) P.Zx.setVolume(l, v), P.S.start();
                P.Zx.subscribe("remotePlayerChange", P.hC, P)
            }
        },
        r6b = function(P) {
            P.sb(0);
            P.W.stop();
            P.Y_(new g.mQ(64))
        },
        Mld = function(P, v) {
            if (yk(P) && !P.Y) {
                var l = null;
                v && (l = {
                    style: P.J.getSubtitlesUserSettings()
                }, Object.assign(l, v));
                P.Zx.sJ(P.J.getVideoData(1).videoId, l);
                P.G = Z3(P.Zx).trackData
            }
        },
        CN = function(P, v) {
            var l = P.J.getPlaylist();
            if (l == null ? 0 : l.listId) {
                var e = l.index;
                var h = l.listId.toString()
            }
            l = P.J.getVideoData(1);
            P.Zx.playVideo(l.videoId, v, e, h, l.playerParams, l.kf, X7y(l));
            P.Y_(new g.mQ(1))
        },
        TW3 = function(P, v) {
            if (v) {
                var l = P.J.getOption("captions", "tracklist", {
                    rD: 1
                });
                l && l.length ? (P.J.setOption("captions", "track", v), P.Y = !1) : (P.J.loadModule("captions"), P.Y = !0)
            } else P.J.setOption("captions", "track", {})
        },
        yk = function(P) {
            return Z3(P.Zx).videoId === P.J.getVideoData(1).videoId
        },
        fN = function() {
            g.O.call(this, {
                L: "div",
                D: "ytp-mdx-popup-dialog",
                B: {
                    role: "dialog"
                },
                U: [{
                    L: "div",
                    D: "ytp-mdx-popup-dialog-inner-content",
                    U: [{
                        L: "div",
                        D: "ytp-mdx-popup-title",
                        Yf: "You're signed out"
                    }, {
                        L: "div",
                        D: "ytp-mdx-popup-description",
                        Yf: "Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer."
                    }, {
                        L: "div",
                        D: "ytp-mdx-privacy-popup-buttons",
                        U: [{
                            L: "button",
                            z1: ["ytp-button", "ytp-mdx-privacy-popup-cancel"],
                            Yf: "Cancel"
                        }, {
                            L: "button",
                            z1: ["ytp-button",
                                "ytp-mdx-privacy-popup-confirm"
                            ],
                            Yf: "Confirm"
                        }]
                    }]
                }]
            });
            this.W = new g.mA(this, 250);
            this.cancelButton = this.cg("ytp-mdx-privacy-popup-cancel");
            this.confirmButton = this.cg("ytp-mdx-privacy-popup-confirm");
            g.Z(this, this.W);
            this.C(this.cancelButton, "click", this.K);
            this.C(this.confirmButton, "click", this.G)
        },
        g0 = function(P) {
            g.O.call(this, {
                L: "div",
                D: "ytp-remote",
                U: [{
                    L: "div",
                    D: "ytp-remote-display-status",
                    U: [{
                        L: "div",
                        D: "ytp-remote-display-status-icon",
                        U: [g.I09()]
                    }, {
                        L: "div",
                        D: "ytp-remote-display-status-text",
                        Yf: "{{statustext}}"
                    }]
                }]
            });
            this.api = P;
            this.W = new g.mA(this, 250);
            g.Z(this, this.W);
            this.C(P, "presentingplayerstatechange", this.onStateChange);
            this.As(P.getPlayerStateObject())
        },
        kX = function(P, v) {
            g.PK.call(this, "Play on", 1, P, v);
            this.J = P;
            this.m2 = {};
            this.C(P, "onMdxReceiversChange", this.Y);
            this.C(P, "presentingplayerstatechange", this.Y);
            this.Y()
        },
        Vlx = function(P) {
            g.x0.call(this, P);
            this.Zw = {
                key: F7G(),
                name: "This computer"
            };
            this.Dt = null;
            this.subscriptions = [];
            this.wO = this.Zx = null;
            this.m2 = [this.Zw];
            this.Jp = this.Zw;
            this.Ak = new g.mQ(64);
            this.fA = 0;
            this.Sd = -1;
            this.fS = !1;
            this.OC = this.Rl = null;
            if (!g.ZY(this.player.N()) && !g.H$(this.player.N())) {
                P = this.player;
                var v = g.Dn(P);
                v && (v = v.Kg()) && (v = new kX(P, v), g.Z(this, v));
                v = new g0(P);
                g.Z(this, v);
                g.i2(P, v.element, 4);
                this.Rl = new fN;
                g.Z(this, this.Rl);
                g.i2(P, this.Rl.element, 4);
                this.fS = !!eU()
            }
        },
        w0 = function(P) {
            P.OC && (P.player.removeEventListener("presentingplayerstatechange",
                P.OC), P.OC = null)
        },
        dIY = function(P, v, l) {
            P.Ak = l;
            P.player.publish("presentingplayerstatechange", new g.DS(l, v))
        },
        $X = function(P, v) {
            if (v.key !== P.Jp.key)
                if (v.key === P.Zw.key) Ri();
                else if (ozy(P) && PC3(P), P.Jp = v, !P.player.N().V("disable_mdx_connection_in_mdx_module_for_music_web") || !g.H$(P.player.N())) {
                var l = P.player.getPlaylistId();
                var e = P.player.getVideoData(1);
                var h = e.videoId;
                if (!l && !h || (P.player.getAppState() === 2 || P.player.getAppState() === 1) && P.player.N().V("should_clear_video_data_on_player_cued_unstarted")) e = null;
                else {
                    var z = P.player.getPlaylist();
                    if (z) {
                        var m = [];
                        for (var Q = 0; Q < z.getLength(); Q++) m[Q] = g.Ak(z, Q).videoId
                    } else m = [h];
                    z = P.player.getCurrentTime(1);
                    P = {
                        videoIds: m,
                        listId: l,
                        videoId: h,
                        playerParams: e.playerParams,
                        clickTrackingParams: e.kf,
                        index: Math.max(P.player.getPlaylistIndex(), 0),
                        currentTime: z === 0 ? void 0 : z
                    };
                    (e = X7y(e)) && (P.locationInfo = e);
                    e = P
                }
                P3("Connecting to: " + g.XQ(v));
                v.key == "cast-selector-receiver" ? (lA(e || null), v = e || null, xZ() ? YZ().setLaunchParams(v) : AO("setLaunchParams called before ready.")) : !e && asA() && dr() == v.key ? $E("yt-remote-connection-change", !0) : (Ri(), lA(e || null), e = VG().Yg(), (v = C8(e, v.key)) && Qk(v, 1))
            }
        },
        ozy = function(P) {
            var v = P.player.N();
            return !v.V("mdx_enable_privacy_disclosure_ui") || P.isLoggedIn() || P.fS || !P.Rl ? !1 : g.Po(v) || g.lN(v)
        },
        PC3 = function(P) {
            P.player.getPlayerStateObject().isPlaying() ? P.player.pauseVideo() : (P.OC = function(v) {
                !P.fS && g.NQ(v, 8) && (P.player.pauseVideo(), w0(P))
            }, P.player.addEventListener("presentingplayerstatechange", P.OC));
            P.Rl && P.Rl.uq();
            zm() || (tI = !0)
        };
    Wrd.prototype.W = function(P) {
        this.K.eI("/client_streamz/youtube/living_room/mdx/channel/opened", P)
    };
    Ozj.prototype.W = function(P) {
        this.K.eI("/client_streamz/youtube/living_room/mdx/channel/closed", P)
    };
    ok3.prototype.W = function(P) {
        this.K.eI("/client_streamz/youtube/living_room/mdx/channel/message_received", P)
    };
    sXb.prototype.W = function(P) {
        this.K.eI("/client_streamz/youtube/living_room/mdx/channel/error", P)
    };
    r81.prototype.W = function() {
        this.K.eI("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps")
    };
    MdQ.prototype.W = function() {
        this.K.eI("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps")
    };
    g.R = zp.prototype;
    g.R.Gm = function() {
        mB(this);
        for (var P = [], v = 0; v < this.W.length; v++) P.push(this.K[this.W[v]]);
        return P
    };
    g.R.t6 = function() {
        mB(this);
        return this.W.concat()
    };
    g.R.has = function(P) {
        return hN(this.K, P)
    };
    g.R.ZA = function(P, v) {
        if (this === P) return !0;
        if (this.size != P.size) return !1;
        v = v || Vd1;
        mB(this);
        for (var l, e = 0; l = this.W[e]; e++)
            if (!v(this.get(l), P.get(l))) return !1;
        return !0
    };
    g.R.isEmpty = function() {
        return this.size == 0
    };
    g.R.clear = function() {
        this.K = {};
        this.XP = this.size = this.W.length = 0
    };
    g.R.remove = function(P) {
        return this.delete(P)
    };
    g.R.delete = function(P) {
        return hN(this.K, P) ? (delete this.K[P], --this.size, this.XP++, this.W.length > 2 * this.size && mB(this), !0) : !1
    };
    g.R.get = function(P, v) {
        return hN(this.K, P) ? this.K[P] : v
    };
    g.R.set = function(P, v) {
        hN(this.K, P) || (this.size += 1, this.W.push(P), this.XP++);
        this.K[P] = v
    };
    g.R.forEach = function(P, v) {
        for (var l = this.t6(), e = 0; e < l.length; e++) {
            var h = l[e],
                z = this.get(h);
            P.call(v, z, h, this)
        }
    };
    g.R.clone = function() {
        return new zp(this)
    };
    g.R.keys = function() {
        return g.Yk(this.eM(!0)).W()
    };
    g.R.values = function() {
        return g.Yk(this.eM(!1)).W()
    };
    g.R.entries = function() {
        var P = this;
        return Ttj(this.keys(), function(v) {
            return [v, P.get(v)]
        })
    };
    g.R.eM = function(P) {
        mB(this);
        var v = 0,
            l = this.XP,
            e = this,
            h = new g.Cb;
        h.next = function() {
            if (l != e.XP) throw Error("The map has changed since the iterator was created");
            if (v >= e.W.length) return g.fu;
            var z = e.W[v++];
            return g.fb(P ? z : e.K[z])
        };
        return h
    };
    var N_d = {
            Uw1: "atp",
            sw5: "ska",
            ig0: "que",
            XTf: "mus",
            tk3: "sus",
            uVM: "dsp",
            Mk6: "seq",
            Djf: "mic",
            ljJ: "dpa",
            Mb2: "cds",
            F92: "mlm",
            iq0: "dsdtr",
            GmW: "ntb",
            QuW: "vsp",
            fo5: "scn",
            lhM: "rpe",
            yN2: "dcn",
            hc1: "dcp",
            ws5: "pas",
            Rc5: "drq",
            cA2: "opf",
            OwM: "els",
            Xfc: "isg",
            YWc: "svq",
            gg3: "mvp",
            f06: "ads",
            N4J: "iat"
        },
        Jrb = {
            M3$: "u",
            TY5: "cl",
            wT$: "k",
            d_6: "i",
            jO5: "cr",
            Ogf: "m",
            kVJ: "g",
            Dp: "up"
        };
    RP.prototype.ZA = function(P) {
        return P ? this.id == P.id : !1
    };
    var L7j = "",
        wf = null;
    jTy.prototype.flush = function(P, v) {
        P = P === void 0 ? [] : P;
        v = v === void 0 ? !1 : v;
        if (g.YN("enable_client_streamz_web")) {
            P = g.N(P);
            for (var l = P.next(); !l.done; l = P.next()) l = g.$u2(l.value), l = {
                serializedIncrementBatch: g.D7(l.W())
            }, g.$6("streamzIncremented", l, {
                sendIsolatedPayload: v
            })
        }
    };
    var IP, rrA = HKj("loadCastFramework") || HKj("loadCastApplicationFramework"),
        VSd = ["pkedcjkdefgpdelpbcmbmeomcjbeemfm", "enhhojjnijigcajfphajepfemndkmdlo"];
    g.PA(n8, g.U);
    g.R = n8.prototype;
    g.R.DJ = function(P) {
        this.Y = arguments;
        this.W = !1;
        this.bq ? this.G = g.Vw() + this.x5 : this.bq = g.b0(this.Z, this.x5)
    };
    g.R.stop = function() {
        this.bq && (g.Uy.clearTimeout(this.bq), this.bq = null);
        this.G = null;
        this.W = !1;
        this.Y = []
    };
    g.R.pause = function() {
        ++this.K
    };
    g.R.resume = function() {
        this.K && (--this.K, !this.K && this.W && (this.W = !1, this.T.apply(null, this.Y)))
    };
    g.R.G1 = function() {
        this.stop();
        n8.Bl.G1.call(this)
    };
    g.R.Cs = function() {
        this.bq && (g.Uy.clearTimeout(this.bq), this.bq = null);
        this.G ? (this.bq = g.b0(this.Z, this.G - g.Vw()), this.G = null) : this.K ? this.W = !0 : (this.W = !1, this.T.apply(null, this.Y))
    };
    g.D(NM, g.U);
    g.R = NM.prototype;
    g.R.nF = function(P) {
        this.G = arguments;
        this.bq || this.K ? this.W = !0 : PaY(this)
    };
    g.R.stop = function() {
        this.bq && (g.Uy.clearTimeout(this.bq), this.bq = null, this.W = !1, this.G = null)
    };
    g.R.pause = function() {
        this.K++
    };
    g.R.resume = function() {
        this.K--;
        this.K || !this.W || this.bq || (this.W = !1, PaY(this))
    };
    g.R.G1 = function() {
        g.U.prototype.G1.call(this);
        this.stop()
    };
    JN.prototype.stringify = function(P) {
        return g.Uy.JSON.stringify(P, void 0)
    };
    JN.prototype.parse = function(P) {
        return g.Uy.JSON.parse(P, void 0)
    };
    g.PA(vN1, g.ZH);
    g.PA(lp3, g.ZH);
    var eRA = null;
    g.PA(zR3, g.ZH);
    g.PA(mco, g.ZH);
    g.PA(RRo, g.ZH);
    qM.prototype.debug = function() {};
    qM.prototype.info = function() {};
    qM.prototype.warning = function() {};
    var wMy = {},
        k_j = {};
    g.R = FT.prototype;
    g.R.setTimeout = function(P) {
        this.D3 = P
    };
    g.R.U8 = function(P) {
        P = P.target;
        var v = this.Ic;
        v && g.lK(P) == 3 ? v.nF() : this.UI(P)
    };
    g.R.UI = function(P) {
        try {
            if (P == this.W) a: {
                var v = g.lK(this.W),
                    l = this.W.K,
                    e = this.W.getStatus();
                if (!(v < 3) && (v != 3 || this.W && (this.K.K || g.h4(this.W) || g.z7(this.W)))) {
                    this.wM || v != 4 || l == 7 || (l == 8 || e <= 0 ? uG(3) : uG(2));
                    Dcy(this);
                    var h = this.W.getStatus();
                    this.nI = h;
                    var z = gNo(this);
                    if (this.T = h == 200) {
                        if (this.WK && !this.q5) {
                            b: {
                                if (this.W) {
                                    var m = g.m3(this.W, "X-HTTP-Initial-Response");
                                    if (m && !g.Jj(m)) {
                                        var Q = m;
                                        break b
                                    }
                                }
                                Q = null
                            }
                            if (P = Q) this.q5 = !0,
                            AZA(this, P);
                            else {
                                this.T = !1;
                                this.Z = 3;
                                K8(12);
                                YE(this);
                                bG(this);
                                break a
                            }
                        }
                        if (this.kf) {
                            P = !0;
                            for (var t; !this.wM && this.j < z.length;)
                                if (t = $cY(this, z), t == k_j) {
                                    v == 4 && (this.Z = 4, K8(14), P = !1);
                                    break
                                } else if (t == wMy) {
                                this.Z = 4;
                                K8(15);
                                P = !1;
                                break
                            } else AZA(this, t);
                            fpj(this) && this.j != 0 && (this.K.W = this.K.W.slice(this.j), this.j = 0);
                            v != 4 || z.length != 0 || this.K.K || (this.Z = 1, K8(16), P = !1);
                            this.T = this.T && P;
                            P ? z.length > 0 && !this.TG && (this.TG = !0, this.G.mX(this)) : (YE(this), bG(this))
                        } else AZA(this, z);
                        v == 4 && YE(this);
                        this.T && !this.wM && (v == 4 ? nN3(this.G, this) : (this.T = !1, AN(this)))
                    } else g.BYP(this.W), h == 400 && z.indexOf("Unknown SID") >
                        0 ? (this.Z = 3, K8(12)) : (this.Z = 0, K8(13)), YE(this), bG(this)
                }
            }
        } catch (y) {} finally {}
    };
    g.R.cancel = function() {
        this.wM = !0;
        YE(this)
    };
    g.R.S1 = function() {
        this.Wg = null;
        var P = Date.now();
        P - this.U$ >= 0 ? (this.Pg != 2 && (uG(3), K8(17)), YE(this), this.Z = 2, bG(this)) : Ipm(this, this.U$ - P)
    };
    g.R.getLastError = function() {
        return this.Z
    };
    g.R.rX = function() {
        return this.W
    };
    bGm.prototype.cancel = function() {
        this.G = pMY(this);
        if (this.K) this.K.cancel(), this.K = null;
        else if (this.W && this.W.size !== 0) {
            for (var P = g.N(this.W.values()), v = P.next(); !v.done; v = P.next()) v.value.cancel();
            this.W.clear()
        }
    };
    g.R = B$Y.prototype;
    g.R.BO = 8;
    g.R.xM = 1;
    g.R.connect = function(P, v, l, e) {
        K8(0);
        this.It = P;
        this.wM = v || {};
        l && e !== void 0 && (this.wM.OSID = l, this.wM.OAID = e);
        this.q5 = this.CI;
        this.Hg = cZy(this, null, this.It);
        Sm(this)
    };
    g.R.disconnect = function() {
        Ucj(this);
        if (this.xM == 3) {
            var P = this.h5++,
                v = this.Hg.clone();
            g.Fj(v, "SID", this.Y);
            g.Fj(v, "RID", P);
            g.Fj(v, "TYPE", "terminate");
            BG(this, v);
            P = new FT(this, this.Y, P);
            P.Pg = 2;
            P.S = PG(v.clone());
            v = !1;
            if (g.Uy.navigator && g.Uy.navigator.sendBeacon) try {
                v = g.Uy.navigator.sendBeacon(P.S.toString(), "")
            } catch (l) {}!v && g.Uy.Image && ((new Image).src = P.S, v = !0);
            v || (P.W = Cax(P.G, null), P.W.send(P.S));
            P.J5 = Date.now();
            AN(P)
        }
        WVo(this)
    };
    g.R.iA = function() {
        return this.xM == 0
    };
    g.R.getState = function() {
        return this.xM
    };
    g.R.g_ = function(P) {
        if (this.T)
            if (this.T = null, this.xM == 1) {
                if (!P) {
                    this.h5 = Math.floor(Math.random() * 1E5);
                    P = this.h5++;
                    var v = new FT(this, "", P),
                        l = this.X;
                    this.nI && (l ? (l = g.GA(l), g.Br(l, this.nI)) : l = this.nI);
                    this.j !== null || this.U$ || (v.Hg = l, l = null);
                    var e;
                    if (this.Bg) a: {
                        for (var h = e = 0; h < this.G.length; h++) {
                            b: {
                                var z = this.G[h];
                                if ("__data__" in z.map && (z = z.map.__data__, typeof z === "string")) {
                                    z = z.length;
                                    break b
                                }
                                z = void 0
                            }
                            if (z === void 0) break;e += z;
                            if (e > 4096) {
                                e = h;
                                break a
                            }
                            if (e === 4096 || h === this.G.length - 1) {
                                e = h + 1;
                                break a
                            }
                        }
                        e =
                        1E3
                    }
                    else e = 1E3;
                    e = apY(this, v, e);
                    h = this.Hg.clone();
                    g.Fj(h, "RID", P);
                    g.Fj(h, "CVER", 22);
                    this.kf && g.Fj(h, "X-HTTP-Session-Id", this.kf);
                    BG(this, h);
                    l && (this.U$ ? e = "headers=" + g.VC(g.E77(l)) + "&" + e : this.j && g.xY(h, this.j, l));
                    KVQ(this.K, v);
                    this.vl && g.Fj(h, "TYPE", "init");
                    this.Bg ? (g.Fj(h, "$req", e), g.Fj(h, "SID", "null"), v.WK = !0, yZd(v, h, null)) : yZd(v, h, e);
                    this.xM = 2
                }
            } else this.xM == 3 && (P ? HG1(this, P) : this.G.length == 0 || xcv(this.K) || HG1(this))
    };
    g.R.FZ = function() {
        this.S = null;
        ENY(this);
        if (this.Nd && !(this.D3 || this.W == null || this.aV <= 0)) {
            var P = 2 * this.aV;
            this.T1 = cG((0, g.ru)(this.er3, this), P)
        }
    };
    g.R.er3 = function() {
        this.T1 && (this.T1 = null, this.q5 = !1, this.D3 = !0, K8(10), p8(this), ENY(this))
    };
    g.R.mX = function(P) {
        this.W == P && this.Nd && !this.D3 && (iGQ(this), this.D3 = !0, K8(11))
    };
    g.R.Bn = function() {
        this.Wg != null && (this.Wg = null, p8(this), JZo(this), K8(19))
    };
    g.R.pB$ = function(P) {
        P ? K8(2) : K8(1)
    };
    g.R.isActive = function() {
        return !!this.Z && this.Z.isActive(this)
    };
    g.R = oNG.prototype;
    g.R.WF = function() {};
    g.R.Ma = function() {};
    g.R.OJ = function() {};
    g.R.XZ = function() {};
    g.R.isActive = function() {
        return !0
    };
    g.R.F7 = function() {};
    g.PA(Uj, g.zQ);
    Uj.prototype.open = function() {
        this.W.Z = this.G;
        this.T && (this.W.Pg = !0);
        this.W.connect(this.Z, this.K || void 0)
    };
    Uj.prototype.close = function() {
        this.W.disconnect()
    };
    Uj.prototype.send = function(P) {
        var v = this.W;
        if (typeof P === "string") {
            var l = {};
            l.__data__ = P;
            P = l
        } else this.Y && (l = {}, l.__data__ = g.XQ(P), P = l);
        v.G.push(new Yky(v.jg++, P));
        v.xM == 3 && Sm(v)
    };
    Uj.prototype.G1 = function() {
        this.W.Z = null;
        delete this.G;
        this.W.disconnect();
        delete this.W;
        Uj.Bl.G1.call(this)
    };
    g.PA(rZd, vN1);
    g.PA(MNG, lp3);
    g.PA(iG, oNG);
    iG.prototype.WF = function() {
        this.W.dispatchEvent("m")
    };
    iG.prototype.Ma = function(P) {
        this.W.dispatchEvent(new rZd(P))
    };
    iG.prototype.OJ = function(P) {
        this.W.dispatchEvent(new MNG(P))
    };
    iG.prototype.XZ = function() {
        this.W.dispatchEvent("n")
    };
    var jm = new g.zQ;
    g.D(dc1, g.ZH);
    g.R = HG.prototype;
    g.R.tX = null;
    g.R.CR = !1;
    g.R.Mz = null;
    g.R.mH = null;
    g.R.FG = null;
    g.R.Gb = null;
    g.R.Sh = null;
    g.R.Ky = null;
    g.R.sT = null;
    g.R.U_ = null;
    g.R.Ly = 0;
    g.R.xa = null;
    g.R.Yj = null;
    g.R.H3 = null;
    g.R.By = -1;
    g.R.qO = !0;
    g.R.UE = !1;
    g.R.Va = 0;
    g.R.Qk = null;
    var zIG = {},
        hIY = {};
    g.R = HG.prototype;
    g.R.setTimeout = function(P) {
        this.K = P
    };
    g.R.X7 = function(P) {
        P = P.target;
        var v = this.Qk;
        v && g.lK(P) == 3 ? v.nF() : this.QN(P)
    };
    g.R.QN = function(P) {
        try {
            if (P == this.U_) a: {
                var v = g.lK(this.U_),
                    l = this.U_.K,
                    e = this.U_.getStatus();
                if (g.V3 && !g.I4("420+")) {
                    if (v < 4) break a
                } else if (v < 3 || v == 3 && !g.h4(this.U_)) break a;this.UE || v != 4 || l == 7 || (l == 8 || e <= 0 ? this.W.dW(3) : this.W.dW(2));QuQ(this);
                var h = this.U_.getStatus();this.By = h;
                var z = g.h4(this.U_);
                if (this.CR = h == 200) {
                    v == 4 && Ej(this);
                    if (this.kf) {
                        for (P = !0; !this.UE && this.Ly < z.length;) {
                            var m = m1x(this, z);
                            if (m == hIY) {
                                v == 4 && (this.H3 = 4, aP(15), P = !1);
                                break
                            } else if (m == zIG) {
                                this.H3 = 4;
                                aP(16);
                                P = !1;
                                break
                            } else yBQ(this,
                                m)
                        }
                        v == 4 && z.length == 0 && (this.H3 = 1, aP(17), P = !1);
                        this.CR = this.CR && P;
                        P || (Ej(this), tBo(this))
                    } else yBQ(this, z);
                    this.CR && !this.UE && (v == 4 ? this.W.j7(this) : (this.CR = !1, eI1(this)))
                } else h == 400 && z.indexOf("Unknown SID") > 0 ? (this.H3 = 3, aP(13)) : (this.H3 = 0, aP(14)),
                Ej(this),
                tBo(this)
            }
        } catch (Q) {} finally {}
    };
    g.R.cancel = function() {
        this.UE = !0;
        Ej(this)
    };
    g.R.gb = function() {
        this.Mz = null;
        var P = Date.now();
        P - this.mH >= 0 ? (this.Gb != 2 && this.W.dW(3), Ej(this), this.H3 = 2, aP(18), tBo(this)) : RIy(this, this.mH - P)
    };
    g.R.getLastError = function() {
        return this.H3
    };
    g.R = gd1.prototype;
    g.R.rh = null;
    g.R.e6 = null;
    g.R.Bu = !1;
    g.R.uS = null;
    g.R.yZ = null;
    g.R.Xw = -1;
    g.R.Ja = null;
    g.R.YU = null;
    g.R.connect = function(P) {
        this.uS = P;
        P = Oj(this.W, null, this.uS);
        aP(3);
        Date.now();
        var v = this.W.X;
        v != null ? (this.Ja = v[0], (this.YU = v[1]) ? (this.yZ = 1, kTv(this)) : (this.yZ = 2, wxA(this))) : (vG(P, "MODE", "init"), this.e6 = new HG(this), this.e6.tX = this.rh, ldv(this.e6, P, !1, null, !0), this.yZ = 0)
    };
    g.R.HS = function(P) {
        if (P) this.yZ = 2, wxA(this);
        else {
            aP(4);
            var v = this.W;
            v.Z7 = v.YK.Xw;
            MM(v, 9)
        }
        P && this.dW(2)
    };
    g.R.PC = function(P) {
        return this.W.PC(P)
    };
    g.R.abort = function() {
        this.e6 && (this.e6.cancel(), this.e6 = null);
        this.Xw = -1
    };
    g.R.iA = function() {
        return !1
    };
    g.R.Ka = function(P, v) {
        this.Xw = P.By;
        if (this.yZ == 0)
            if (v) {
                try {
                    var l = this.K.parse(v)
                } catch (e) {
                    P = this.W;
                    P.Z7 = this.Xw;
                    MM(P, 2);
                    return
                }
                this.Ja = l[0];
                this.YU = l[1]
            } else P = this.W, P.Z7 = this.Xw, MM(P, 2);
        else this.yZ == 2 && (this.Bu ? (aP(7), Date.now()) : v == "11111" ? (aP(6), this.Bu = !0, Date.now(), this.Xw = 200, this.e6.cancel(), aP(12), oP(this.W, this, !0)) : (aP(8), Date.now(), this.Bu = !1))
    };
    g.R.j7 = function() {
        this.Xw = this.e6.By;
        if (this.e6.CR) this.yZ == 0 ? this.YU ? (this.yZ = 1, kTv(this)) : (this.yZ = 2, wxA(this)) : this.yZ == 2 && (this.Bu ? (aP(12), oP(this.W, this, !0)) : (aP(11), oP(this.W, this, !1)));
        else {
            this.yZ == 0 ? aP(9) : this.yZ == 2 && aP(10);
            var P = this.W;
            this.e6.getLastError();
            P.Z7 = this.Xw;
            MM(P, 2)
        }
    };
    g.R.gP = function() {
        return this.W.gP()
    };
    g.R.isActive = function() {
        return this.W.isActive()
    };
    g.R.dW = function(P) {
        this.W.dW(P)
    };
    g.R = $1m.prototype;
    g.R.hI = null;
    g.R.XG = null;
    g.R.Kw = null;
    g.R.Ur = null;
    g.R.bS = null;
    g.R.ZW = null;
    g.R.Gn = null;
    g.R.vC = null;
    g.R.O5 = 0;
    g.R.fM = 0;
    g.R.nY = null;
    g.R.NJ = null;
    g.R.Od = null;
    g.R.wr = null;
    g.R.YK = null;
    g.R.On = null;
    g.R.Ko = -1;
    g.R.Y8 = -1;
    g.R.Z7 = -1;
    g.R.Qw = 0;
    g.R.Wj = 0;
    g.R.z5 = 8;
    g.PA(D11, g.ZH);
    g.PA(ndy, g.ZH);
    g.R = $1m.prototype;
    g.R.connect = function(P, v, l, e, h) {
        aP(0);
        this.bS = v;
        this.XG = l || {};
        e && h !== void 0 && (this.XG.OSID = e, this.XG.OAID = h);
        this.S ? (ZV((0, g.ru)(this.r8, this, P), 100), JB1(this)) : this.r8(P)
    };
    g.R.disconnect = function() {
        uzY(this);
        if (this.W == 3) {
            var P = this.O5++,
                v = this.ZW.clone();
            g.Fj(v, "SID", this.Y);
            g.Fj(v, "RID", P);
            g.Fj(v, "TYPE", "terminate");
            rf(this, v);
            P = new HG(this, this.Y, P);
            P.Gb = 2;
            P.Sh = PG(v.clone());
            (new Image).src = P.Sh.toString();
            P.FG = Date.now();
            eI1(P)
        }
        LpQ(this)
    };
    g.R.r8 = function(P) {
        this.YK = new gd1(this);
        this.YK.rh = this.hI;
        this.YK.K = this.Z;
        this.YK.connect(P)
    };
    g.R.iA = function() {
        return this.W == 0
    };
    g.R.getState = function() {
        return this.W
    };
    g.R.JV = function(P) {
        this.NJ = null;
        ABv(this, P)
    };
    g.R.La = function() {
        this.Od = null;
        this.Ur = new HG(this, this.Y, "rpc", this.j);
        this.Ur.tX = this.hI;
        this.Ur.Va = 0;
        var P = this.Gn.clone();
        g.Fj(P, "RID", "rpc");
        g.Fj(P, "SID", this.Y);
        g.Fj(P, "CI", this.On ? "0" : "1");
        g.Fj(P, "AID", this.Ko);
        rf(this, P);
        g.Fj(P, "TYPE", "xmlhttp");
        ldv(this.Ur, P, !0, this.vC, !1)
    };
    g.R.Ka = function(P, v) {
        if (this.W != 0 && (this.Ur == P || this.Kw == P))
            if (this.Z7 = P.By, this.Kw == P && this.W == 3)
                if (this.z5 > 7) {
                    try {
                        var l = this.Z.parse(v)
                    } catch (e) {
                        l = null
                    }
                    if (Array.isArray(l) && l.length == 3)
                        if (P = l, P[0] == 0) a: {
                            if (!this.Od) {
                                if (this.Ur)
                                    if (this.Ur.FG + 3E3 < this.Kw.FG) sj(this), this.Ur.cancel(), this.Ur = null;
                                    else break a;
                                x1x(this);
                                aP(19)
                            }
                        }
                    else this.Y8 = P[1], 0 < this.Y8 - this.Ko && P[2] < 37500 && this.On && this.Wj == 0 && !this.wr && (this.wr = ZV((0, g.ru)(this.M7, this), 6E3));
                    else MM(this, 11)
                } else v != "y2f%" && MM(this, 11);
        else if (this.Ur ==
            P && sj(this), !g.Jj(v))
            for (P = this.Z.parse(v), v = 0; v < P.length; v++) l = P[v], this.Ko = l[0], l = l[1], this.W == 2 ? l[0] == "c" ? (this.Y = l[1], this.vC = l[2], l = l[3], l != null ? this.z5 = l : this.z5 = 6, this.W = 3, this.nY && this.nY.Tn(), this.Gn = Oj(this, this.gP() ? this.vC : null, this.bS), YYo(this)) : l[0] == "stop" && MM(this, 7) : this.W == 3 && (l[0] == "stop" ? MM(this, 7) : l[0] != "noop" && this.nY && this.nY.cF(l), this.Wj = 0)
    };
    g.R.M7 = function() {
        this.wr != null && (this.wr = null, this.Ur.cancel(), this.Ur = null, x1x(this), aP(20))
    };
    g.R.j7 = function(P) {
        if (this.Ur == P) {
            sj(this);
            this.Ur = null;
            var v = 2
        } else if (this.Kw == P) this.Kw = null, v = 1;
        else return;
        this.Z7 = P.By;
        if (this.W != 0)
            if (P.CR)
                if (v == 1) {
                    v = P.sT ? P.sT.length : 0;
                    P = Date.now() - P.FG;
                    var l = jm;
                    l.dispatchEvent(new D11(l, v, P, this.Qw));
                    NDy(this);
                    this.G.length = 0
                } else YYo(this);
        else {
            l = P.getLastError();
            var e;
            if (!(e = l == 3 || l == 7 || l == 0 && this.Z7 > 0)) {
                if (e = v == 1) this.Kw || this.NJ || this.W == 1 || this.Qw >= 2 ? e = !1 : (this.NJ = ZV((0, g.ru)(this.JV, this, P), bkj(this, this.Qw)), this.Qw++, e = !0);
                e = !(e || v == 2 && x1x(this))
            }
            if (e) switch (l) {
                case 1:
                    MM(this,
                        5);
                    break;
                case 4:
                    MM(this, 10);
                    break;
                case 3:
                    MM(this, 6);
                    break;
                case 7:
                    MM(this, 12);
                    break;
                default:
                    MM(this, 2)
            }
        }
    };
    g.R.OS = function(P) {
        if (!g.ro(arguments, this.W)) throw Error("Unexpected channel state: " + this.W);
    };
    g.R.T71 = function(P) {
        P ? aP(2) : (aP(1), pxG(this, 8))
    };
    g.R.PC = function(P) {
        if (P) throw Error("Can't create secondary domain capable XhrIo object.");
        P = new g.d5;
        P.j = !1;
        return P
    };
    g.R.isActive = function() {
        return !!this.nY && this.nY.isActive(this)
    };
    g.R.dW = function(P) {
        var v = jm;
        v.dispatchEvent(new ndy(v, P))
    };
    g.R.gP = function() {
        return !1
    };
    g.R = SYb.prototype;
    g.R.Tn = function() {};
    g.R.cF = function() {};
    g.R.Z8 = function() {};
    g.R.oP = function() {};
    g.R.ag = function() {
        return {}
    };
    g.R.isActive = function() {
        return !0
    };
    g.R = GTy.prototype;
    g.R.enqueue = function(P) {
        this.K.push(P)
    };
    g.R.isEmpty = function() {
        return this.W.length === 0 && this.K.length === 0
    };
    g.R.clear = function() {
        this.W = [];
        this.K = []
    };
    g.R.contains = function(P) {
        return g.ro(this.W, P) || g.ro(this.K, P)
    };
    g.R.remove = function(P) {
        var v = this.W;
        var l = (0, g.SVB)(v, P);
        l >= 0 ? (g.MG(v, l), v = !0) : v = !1;
        return v || g.Tv(this.K, P)
    };
    g.R.Gm = function() {
        for (var P = [], v = this.W.length - 1; v >= 0; --v) P.push(this.W[v]);
        v = this.K.length;
        for (var l = 0; l < v; ++l) P.push(this.K[l]);
        return P
    };
    g.D(Xx1, g.ZH);
    g.D(BDQ, g.ZH);
    g.PA(Tp, g.U);
    g.R = Tp.prototype;
    g.R.dVc = function() {
        this.x5 = Math.min(3E5, this.x5 * 2);
        this.G();
        this.K && this.start()
    };
    g.R.start = function() {
        var P = this.x5 + 15E3 * Math.random();
        g.RX(this.W, P);
        this.K = Date.now() + P
    };
    g.R.stop = function() {
        this.W.stop();
        this.K = 0
    };
    g.R.isActive = function() {
        return this.W.isActive()
    };
    g.R.reset = function() {
        this.W.stop();
        this.x5 = 5E3
    };
    g.PA(U1G, SYb);
    g.R = U1G.prototype;
    g.R.subscribe = function(P, v, l) {
        return this.Z.subscribe(P, v, l)
    };
    g.R.unsubscribe = function(P, v, l) {
        return this.Z.unsubscribe(P, v, l)
    };
    g.R.IZ = function(P) {
        return this.Z.IZ(P)
    };
    g.R.publish = function(P, v) {
        return this.Z.publish.apply(this.Z, arguments)
    };
    g.R.dispose = function() {
        this.j || (this.j = !0, g.Rm(this.Z), this.disconnect(), g.Rm(this.K), this.K = null, this.T1 = function() {
            return ""
        }, this.kf = function() {
            return g.K7({})
        })
    };
    g.R.s$ = function() {
        return this.j
    };
    g.R.connect = function(P, v, l) {
        var e = this,
            h, z, m, Q;
        return g.p(function(t) {
            if (t.W == 1) return g.Jq(t, 2), e.T ? g.b(t, e.Y, 2) : t.ac(2);
            g.cw(t);
            if (e.j || e.W && e.W.getState() == 2) return t.return();
            e.J5 = "";
            e.K.stop();
            e.X = P || null;
            e.S = v || 0;
            h = e.wM + "/test";
            z = e.wM + "/bind";
            m = new $1m(l ? l.firstTestResults : null, l ? l.secondTestResults : null, e.h5);
            if (Q = e.W) Q.nY = null;
            m.nY = e;
            e.W = m;
            if (e.T) return e.Y = ady(e).then(function() {
                return juy(e, h, z, Q, l)
            }), t.return(e.Y.then(function() {
                e.Y = g.K7()
            }));
            juy(e, h, z, Q, l);
            return g.qP(t, 0)
        })
    };
    g.R.disconnect = function(P) {
        try {
            this.T && (this.Y.cancel(), this.Y = g.K7())
        } finally {
            this.QW = P || 0, this.K && this.K.stop(), Zkv(this), this.W && (this.W.getState() == 3 && ABv(this.W), this.W.disconnect()), this.QW = 0
        }
    };
    g.R.sendMessage = function(P, v) {
        var l = this,
            e;
        return g.p(function(h) {
            switch (h.W) {
                case 1:
                    g.Jq(h, 2);
                    if (!l.T) {
                        h.ac(2);
                        break
                    }
                    return g.b(h, l.Y, 2);
                case 2:
                    g.cw(h);
                    if (l.j) return h.return();
                    e = {
                        _sc: P
                    };
                    v && g.Br(e, v);
                    if (l.K.isActive() || (l.W ? l.W.getState() : 0) == 2) {
                        l.G.push(e);
                        h.ac(6);
                        break
                    }
                    if (!l.W1()) {
                        h.ac(6);
                        break
                    }
                    g.Jq(h, 8);
                    if (!l.T) {
                        h.ac(8);
                        break
                    }
                    return g.b(h, ady(l), 8);
                case 8:
                    g.cw(h, 0, 0, 1);
                    l.W1() && (Zkv(l), Kpj(l.W, e));
                    g.qP(h, 6, 1);
                    break;
                case 6:
                    g.qP(h, 0)
            }
        })
    };
    g.R.Tn = function() {
        this.K.reset();
        this.X = null;
        this.S = 0;
        if (this.G.length)
            if (this.T) Edj(this);
            else {
                var P = this.G;
                this.G = [];
                Hkm(this, P, P.length);
                Vq(this)
            }
        else Vq(this)
    };
    g.R.Z8 = function(P) {
        var v = P == 2 && this.W.Z7 == 401;
        P == 4 || v || this.K.start();
        this.publish("handlerError", P, v);
        this.Pg.W("BROWSER_CHANNEL")
    };
    g.R.oP = function(P, v) {
        if (!this.K.isActive()) this.publish("handlerClosed");
        else if (v)
            for (var l = v.length, e = 0; e < l; ++e) {
                var h = v[e].map;
                h && this.G.push(h)
            }
        this.Hg.W("BROWSER_CHANNEL");
        P && this.D3.K.IP("/client_streamz/youtube/living_room/mdx/browser_channel/pending_maps", P.length);
        v && this.U$.K.IP("/client_streamz/youtube/living_room/mdx/browser_channel/undelivered_maps", v.length)
    };
    g.R.ag = function() {
        var P = {
            v: 2
        };
        this.J5 && (P.gsessionid = this.J5);
        this.S != 0 && (P.ui = "" + this.S);
        this.QW != 0 && (P.ui = "" + this.QW);
        this.X && g.Br(P, this.X);
        return P
    };
    g.R.cF = function(P) {
        P[0] == "S" ? this.J5 = P[1] : P[0] == "gracefulReconnect" ? (this.K.start(), this.W.disconnect()) : this.publish("handlerMessage", new ikA(P[0], P[1]));
        this.q5.W("BROWSER_CHANNEL")
    };
    g.R.W1 = function() {
        return !!this.W && this.W.getState() == 3
    };
    g.R.EX = function(P) {
        (this.Wg.loungeIdToken = P) || this.K.stop();
        if (this.A5 && this.W) {
            var v = this.W.hI || {};
            P ? v["X-YouTube-LoungeId-Token"] = P : delete v["X-YouTube-LoungeId-Token"];
            this.W.hI = v
        }
    };
    g.R.getDeviceId = function() {
        return this.Wg.id
    };
    g.R.b9 = function() {
        return this.K.isActive() ? this.K.K - Date.now() : NaN
    };
    g.R.JK = function() {
        var P = this.K;
        g.QD(P.W);
        P.start()
    };
    g.R.aA$ = function() {
        this.K.isActive();
        cBG(this.W) == 0 && this.connect(this.X, this.S)
    };
    df.prototype.sendRequest = function(P, v, l, e, h, z, m) {
        P = {
            format: z ? "RAW" : "JSON",
            method: P,
            context: this,
            timeout: 5E3,
            withCredentials: !!m,
            onSuccess: g.TW(this.Y, e, !z),
            onError: g.TW(this.G, h),
            onTimeout: g.TW(this.Z, h)
        };
        l && (P.postParams = l, P.headers = {
            "Content-Type": "application/x-www-form-urlencoded"
        });
        return g.SN(v, P)
    };
    df.prototype.Y = function(P, v, l, e) {
        v ? P(e) : P({
            text: l.responseText
        })
    };
    df.prototype.G = function(P, v) {
        P(Error("Request error: " + v.status))
    };
    df.prototype.Z = function(P) {
        P(Error("request timed out"))
    };
    g.D(WpY, g.zQ);
    g.R = WpY.prototype;
    g.R.connect = function(P, v, l) {
        this.Ub.connect(P, v, l)
    };
    g.R.disconnect = function(P) {
        this.Ub.disconnect(P)
    };
    g.R.JK = function() {
        this.Ub.JK()
    };
    g.R.getDeviceId = function() {
        return this.Ub.getDeviceId()
    };
    g.R.b9 = function() {
        return this.Ub.b9()
    };
    g.R.W1 = function() {
        return this.Ub.W1()
    };
    g.R.Wa = function() {
        this.dispatchEvent("channelOpened");
        var P = this.Ub,
            v = this.W;
        g.jB("yt-remote-session-browser-channel", {
            firstTestResults: [""],
            secondTestResults: !P.W.On,
            sessionId: P.W.Y,
            arrayId: P.W.Ko
        });
        g.jB("yt-remote-session-screen-id", v);
        P = f8();
        v = gf();
        g.ro(P, v) || P.push(v);
        p0v(P);
        S53()
    };
    g.R.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.R.onMessage = function(P) {
        this.dispatchEvent(new Xx1(P))
    };
    g.R.onError = function(P) {
        this.dispatchEvent(new BDQ(P ? 1 : 0))
    };
    g.R.sendMessage = function(P, v) {
        this.Ub.sendMessage(P, v)
    };
    g.R.EX = function(P) {
        this.Ub.EX(P)
    };
    g.R.dispose = function() {
        this.Ub.dispose()
    };
    g.R = Okx.prototype;
    g.R.connect = function(P, v) {
        P = P === void 0 ? {} : P;
        v = v === void 0 ? 0 : v;
        this.T !== 2 && (this.G.stop(), this.S = P, this.j = v, sum(this), (P = g.la("ID_TOKEN")) ? this.Y["x-youtube-identity-token"] = P : delete this.Y["x-youtube-identity-token"], this.W && (this.K.device = this.W.device, this.K.name = this.W.name, this.K.app = this.W.app, this.K.id = this.W.id, this.W.JR3 && (this.K.mdxVersion = "" + this.W.JR3), this.W.theme && (this.K.theme = this.W.theme), this.W.capabilities && (this.K.capabilities = this.W.capabilities), this.W.i8 && (this.K.cst = this.W.i8),
            this.W.authuser && (this.K.authuser = this.W.authuser), this.W.pageId && (this.K.pageId = this.W.pageId)), this.j !== 0 ? this.K.ui = "" + this.j : delete this.K.ui, Object.assign(this.K, this.S), this.channel = new Uj(this.pathPrefix, {
            scW: "gsessionid",
            pKM: this.Y,
            a5M: this.K
        }), this.channel.open(), this.T = 2, odA(this))
    };
    g.R.disconnect = function(P) {
        this.X = P === void 0 ? 0 : P;
        this.G.stop();
        sum(this);
        this.channel && (this.X !== 0 ? this.K.ui = "" + this.X : delete this.K.ui, this.channel.close());
        this.X = 0
    };
    g.R.b9 = function() {
        return this.G.isActive() ? this.G.K - Date.now() : NaN
    };
    g.R.JK = function() {
        var P = this.G;
        g.QD(P.W);
        P.start()
    };
    g.R.sendMessage = function(P, v) {
        this.channel && (sum(this), P = Object.assign({}, {
            _sc: P
        }, v), this.channel.send(P))
    };
    g.R.EX = function(P) {
        P || this.G.stop();
        P ? this.Y["X-YouTube-LoungeId-Token"] = P : delete this.Y["X-YouTube-LoungeId-Token"]
    };
    g.R.getDeviceId = function() {
        return this.W ? this.W.id : ""
    };
    g.R.publish = function(P) {
        return this.Z.publish.apply(this.Z, [P].concat(g.u(g.bD.apply(1, arguments))))
    };
    g.R.subscribe = function(P, v, l) {
        return this.Z.subscribe(P, v, l)
    };
    g.R.unsubscribe = function(P, v, l) {
        return this.Z.unsubscribe(P, v, l)
    };
    g.R.IZ = function(P) {
        return this.Z.IZ(P)
    };
    g.R.dispose = function() {
        this.Wg || (this.Wg = !0, g.Rm(this.Z), this.disconnect(), g.Rm(this.G), this.J5 = function() {
            return ""
        })
    };
    g.R.s$ = function() {
        return this.Wg
    };
    g.D(rBo, g.zQ);
    g.R = rBo.prototype;
    g.R.connect = function(P, v) {
        this.W.connect(P, v)
    };
    g.R.disconnect = function(P) {
        this.W.disconnect(P)
    };
    g.R.JK = function() {
        this.W.JK()
    };
    g.R.getDeviceId = function() {
        return this.W.getDeviceId()
    };
    g.R.b9 = function() {
        return this.W.b9()
    };
    g.R.W1 = function() {
        return this.W.T === 3
    };
    g.R.Qj = function() {
        this.dispatchEvent("channelOpened")
    };
    g.R.onClosed = function() {
        this.dispatchEvent("channelClosed")
    };
    g.R.onMessage = function(P) {
        this.dispatchEvent(new Xx1(P))
    };
    g.R.onError = function() {
        this.dispatchEvent(new BDQ(this.W.zW === 401 ? 1 : 0))
    };
    g.R.sendMessage = function(P, v) {
        this.W.sendMessage(P, v)
    };
    g.R.EX = function(P) {
        this.W.EX(P)
    };
    g.R.dispose = function() {
        this.W.dispose()
    };
    var epA = Date.now(),
        vO = null,
        zD = Array(50),
        hO = -1,
        mE = !1;
    g.PA(RN, g.gA);
    RN.prototype.Yg = function() {
        return this.screens
    };
    RN.prototype.contains = function(P) {
        return !!Y5A(this.screens, P)
    };
    RN.prototype.get = function(P) {
        return P ? C8(this.screens, P) : null
    };
    RN.prototype.info = function(P) {
        lv(this.T, P)
    };
    g.D(Rpx, g.gA);
    g.R = Rpx.prototype;
    g.R.start = function() {
        !this.W && isNaN(this.bq) && this.OD()
    };
    g.R.stop = function() {
        this.W && (this.W.abort(), this.W = null);
        isNaN(this.bq) || (g.qc(this.bq), this.bq = NaN)
    };
    g.R.G1 = function() {
        this.stop();
        g.gA.prototype.G1.call(this)
    };
    g.R.OD = function() {
        this.bq = NaN;
        this.W = g.SN(PO(this.G, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: this.j
            },
            timeout: 5E3,
            onSuccess: (0, g.ru)(this.Gc, this),
            onError: (0, g.ru)(this.KM, this),
            onTimeout: (0, g.ru)(this.Yz, this)
        })
    };
    g.R.Gc = function(P, v) {
        this.W = null;
        P = v.screen || {};
        P.dialId = this.Y;
        P.name = this.T;
        v = -1;
        this.Z && P.shortLivedLoungeToken && P.shortLivedLoungeToken.value && P.shortLivedLoungeToken.refreshIntervalMs && (P.screenIdType = "shortLived", P.loungeToken = P.shortLivedLoungeToken.value, v = P.shortLivedLoungeToken.refreshIntervalMs);
        this.publish("pairingComplete", new Qq(P), v)
    };
    g.R.KM = function(P) {
        this.W = null;
        P.status && P.status == 404 ? this.K >= vRb.length ? this.publish("pairingFailed", Error("DIAL polling timed out")) : (P = vRb[this.K], this.bq = g.KG((0, g.ru)(this.OD, this), P), this.K++) : this.publish("pairingFailed", Error("Server error " + P.status))
    };
    g.R.Yz = function() {
        this.W = null;
        this.publish("pairingFailed", Error("Server not responding"))
    };
    var vRb = [2E3, 2E3, 1E3, 1E3, 1E3, 2E3, 2E3, 5E3, 5E3, 1E4];
    g.PA(tO, RN);
    g.R = tO.prototype;
    g.R.start = function() {
        QG(this) && this.publish("screenChange");
        !g.au("yt-remote-lounge-token-expiration") && QGA(this);
        g.qc(this.W);
        this.W = g.KG((0, g.ru)(this.start, this), 1E4)
    };
    g.R.add = function(P, v) {
        QG(this);
        hpy(this, P);
        yG(this, !1);
        this.publish("screenChange");
        v(P);
        P.token || QGA(this)
    };
    g.R.remove = function(P, v) {
        var l = QG(this);
        m4A(this, P) && (yG(this, !1), l = !0);
        v(P);
        l && this.publish("screenChange")
    };
    g.R.Xn = function(P, v, l, e) {
        var h = QG(this),
            z = this.get(P.id);
        z ? (z.name != v && (z.name = v, yG(this, !1), h = !0), l(P)) : e(Error("no such local screen."));
        h && this.publish("screenChange")
    };
    g.R.G1 = function() {
        g.qc(this.W);
        tO.Bl.G1.call(this)
    };
    g.R.Sw = function(P) {
        QG(this);
        var v = this.screens.length;
        P = P && P.screens || [];
        for (var l = P.length, e = 0; e < l; ++e) {
            var h = P[e],
                z = this.get(h.screenId);
            z && (z.token = h.loungeToken, --v)
        }
        yG(this, !v);
        v && lv(this.T, "Missed " + v + " lounge tokens.")
    };
    g.R.NU = function(P) {
        lv(this.T, "Requesting lounge tokens failed: " + P)
    };
    g.D(yPQ, g.gA);
    g.R = yPQ.prototype;
    g.R.start = function() {
        var P = parseInt(g.au("yt-remote-fast-check-period") || "0", 10);
        (this.Y = g.Vw() - 144E5 < P ? 0 : P) ? Cp(this): (this.Y = g.Vw() + 3E5, g.jB("yt-remote-fast-check-period", this.Y), this.lj())
    };
    g.R.isEmpty = function() {
        return g.pU(this.W)
    };
    g.R.update = function() {
        tYj("Updating availability on schedule.");
        var P = this.T(),
            v = g.u6(this.W, function(l, e) {
                return l && !!C8(P, e)
            }, this);
        g6x(this, v)
    };
    g.R.G1 = function() {
        g.qc(this.G);
        this.G = NaN;
        this.K && (this.K.abort(), this.K = null);
        g.gA.prototype.G1.call(this)
    };
    g.R.lj = function() {
        g.qc(this.G);
        this.G = NaN;
        this.K && this.K.abort();
        var P = kzj(this);
        if (izy(P)) {
            var v = PO(this.Z, "/pairing/get_screen_availability");
            this.K = this.Z.sendRequest("POST", v, {
                lounge_token: g.A3(P).join(",")
            }, (0, g.ru)(this.jo5, this, P), (0, g.ru)(this.rkW, this))
        } else g6x(this, {}), Cp(this)
    };
    g.R.jo5 = function(P, v) {
        this.K = null;
        var l = g.A3(kzj(this));
        if (g.yv(l, g.A3(P))) {
            v = v.screens || [];
            l = {};
            for (var e = v.length, h = 0; h < e; ++h) l[P[v[h].loungeToken]] = v[h].status == "online";
            g6x(this, l);
            Cp(this)
        } else this.JB("Changing Screen set during request."), this.lj()
    };
    g.R.rkW = function(P) {
        this.JB("Screen availability failed: " + P);
        this.K = null;
        Cp(this)
    };
    g.R.JB = function(P) {
        lv("OnlineScreenService", P)
    };
    g.PA(fp, RN);
    g.R = fp.prototype;
    g.R.start = function() {
        this.K.start();
        this.W.start();
        this.screens.length && (this.publish("screenChange"), this.W.isEmpty() || this.publish("onlineScreenChange"))
    };
    g.R.add = function(P, v, l) {
        this.K.add(P, v, l)
    };
    g.R.remove = function(P, v, l) {
        this.K.remove(P, v, l);
        this.W.update()
    };
    g.R.Xn = function(P, v, l, e) {
        this.K.contains(P) ? this.K.Xn(P, v, l, e) : (P = "Updating name of unknown screen: " + P.name, lv(this.T, P), e(Error(P)))
    };
    g.R.Yg = function(P) {
        return P ? this.screens : g.PZ(this.screens, g.$g(this.G, function(v) {
            return !this.contains(v)
        }, this))
    };
    g.R.k8 = function() {
        return g.$g(this.Yg(!0), function(P) {
            return !!this.W.W[P.id]
        }, this)
    };
    g.R.EJ = function(P, v, l, e, h, z) {
        var m = this;
        this.info("getDialScreenByPairingCode " + P + " / " + v);
        var Q = new Rpx(this.Y, P, v, l, e);
        Q.subscribe("pairingComplete", function(t, y) {
            g.Rm(Q);
            h(gr(m, t), y)
        });
        Q.subscribe("pairingFailed", function(t) {
            g.Rm(Q);
            z(t)
        });
        Q.start();
        return (0, g.ru)(Q.stop, Q)
    };
    g.R.LM = function(P, v, l, e) {
        g.SN(PO(this.Y, "/pairing/get_screen"), {
            method: "POST",
            postParams: {
                pairing_code: P
            },
            timeout: 5E3,
            onSuccess: (0, g.ru)(function(h, z) {
                h = new Qq(z.screen || {});
                if (!h.name || D4j(this, h.name)) {
                    a: {
                        z = h.name;
                        for (var m = 2, Q = v(z, m); D4j(this, Q);) {
                            m++;
                            if (m > 20) break a;
                            Q = v(z, m)
                        }
                        z = Q
                    }
                    h.name = z
                }
                l(gr(this, h))
            }, this),
            onError: (0, g.ru)(function(h) {
                e(Error("pairing request failed: " + h.status))
            }, this),
            onTimeout: (0, g.ru)(function() {
                e(Error("pairing request timed out."))
            }, this)
        })
    };
    g.R.G1 = function() {
        g.Rm(this.K);
        g.Rm(this.W);
        fp.Bl.G1.call(this)
    };
    g.R.Qc1 = function() {
        Nnj(this);
        this.publish("screenChange");
        this.W.update()
    };
    fp.prototype.dispose = fp.prototype.dispose;
    g.PA(kZ, g.gA);
    g.R = kZ.prototype;
    g.R.tN = function(P) {
        this.s$() || (P && ($Z(this, "" + P), this.publish("sessionFailed")), this.W = null, this.publish("sessionScreen", null))
    };
    g.R.info = function(P) {
        lv(this.kf, P)
    };
    g.R.tV = function() {
        return null
    };
    g.R.Zb = function(P) {
        var v = this.K;
        P ? (v.displayStatus = new chrome.cast.ReceiverDisplayStatus(P, []), v.displayStatus.showStop = !0) : v.displayStatus = null;
        chrome.cast.setReceiverDisplayStatus(v, (0, g.ru)(function() {
            this.info("Updated receiver status for " + v.friendlyName + ": " + P)
        }, this), (0, g.ru)(function() {
            $Z(this, "Failed to update receiver status for: " + v.friendlyName)
        }, this))
    };
    g.R.G1 = function() {
        this.Zb("");
        kZ.Bl.G1.call(this)
    };
    g.D(IN, kZ);
    g.R = IN.prototype;
    g.R.LQ = function(P) {
        if (this.G) {
            if (this.G == P) return;
            $Z(this, "Overriding cast session with new session object");
            L_G(this);
            this.J5 = !1;
            this.X = "unknown";
            this.G.removeUpdateListener(this.QW);
            this.G.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.T1)
        }
        this.G = P;
        this.G.addUpdateListener(this.QW);
        this.G.addMessageListener("urn:x-cast:com.google.youtube.mdx", this.T1);
        AP3(this, "getMdxSessionStatus")
    };
    g.R.UG = function(P) {
        this.info("launchWithParams no-op for Cast: " + g.XQ(P))
    };
    g.R.stop = function() {
        this.G ? this.G.stop((0, g.ru)(function() {
            this.tN()
        }, this), (0, g.ru)(function() {
            this.tN(Error("Failed to stop receiver app."))
        }, this)) : this.tN(Error("Stopping cast device without session."))
    };
    g.R.Zb = function() {};
    g.R.G1 = function() {
        this.info("disposeInternal");
        L_G(this);
        this.G && (this.G.removeUpdateListener(this.QW), this.G.removeMessageListener("urn:x-cast:com.google.youtube.mdx", this.T1));
        this.G = null;
        kZ.prototype.G1.call(this)
    };
    g.R.YF2 = function(P, v) {
        if (!this.s$())
            if (v)
                if (v = lG(v), g.Oy(v)) switch (P = "" + v.type, v = v.data || {}, this.info("onYoutubeMessage_: " + P + " " + g.XQ(v)), P) {
                    case "mdxSessionStatus":
                        cPv(this, v);
                        break;
                    case "loungeToken":
                        YPy(this, v);
                        break;
                    default:
                        $Z(this, "Unknown youtube message: " + P)
                } else $Z(this, "Unable to parse message.");
                else $Z(this, "No data in message.")
    };
    g.R.RR = function(P, v, l, e) {
        g.qc(this.S);
        this.S = 0;
        I0x(this.Y, this.K.label, P, this.K.friendlyName, (0, g.ru)(function(h) {
            h ? v(h) : e >= 0 ? ($Z(this, "Screen " + P + " appears to be offline. " + e + " retries left."), this.S = g.KG((0, g.ru)(this.RR, this, P, v, l, e - 1), 300)) : l(Error("Unable to fetch screen."))
        }, this), l)
    };
    g.R.tV = function() {
        return this.G
    };
    g.R.Jv = function(P) {
        this.s$() || P || ($Z(this, "Cast session died."), this.tN())
    };
    g.D(D3, kZ);
    g.R = D3.prototype;
    g.R.LQ = function(P) {
        this.G = P;
        this.G.addUpdateListener(this.wM)
    };
    g.R.UG = function(P) {
        this.Hg = P;
        this.Wg()
    };
    g.R.stop = function() {
        jGA(this);
        this.G ? this.G.stop((0, g.ru)(this.tN, this, null), (0, g.ru)(this.tN, this, "Failed to stop DIAL device.")) : this.tN()
    };
    g.R.G1 = function() {
        jGA(this);
        this.G && this.G.removeUpdateListener(this.wM);
        this.G = null;
        kZ.prototype.G1.call(this)
    };
    g.R.Z4 = function(P) {
        this.s$() || P || ($Z(this, "DIAL session died."), this.Z(), this.Z = function() {}, this.tN())
    };
    g.D(JO, kZ);
    JO.prototype.stop = function() {
        this.tN()
    };
    JO.prototype.LQ = function() {};
    JO.prototype.UG = function() {
        g.qc(this.G);
        this.G = NaN;
        var P = C8(this.Y.Yg(), this.K.label);
        P ? wr(this, P) : this.tN(Error("No such screen"))
    };
    JO.prototype.G1 = function() {
        g.qc(this.G);
        this.G = NaN;
        kZ.prototype.G1.call(this)
    };
    g.D(uv, g.gA);
    g.R = uv.prototype;
    g.R.init = function(P, v) {
        chrome.cast.timeout.requestSession = 3E4;
        var l = new chrome.cast.SessionRequest(this.S, [chrome.cast.Capability.AUDIO_OUT]);
        g.YN("desktop_enable_cast_connect") && (l.androidReceiverCompatible = !0);
        this.X || (l.dialRequest = new chrome.cast.DialRequest("YouTube"));
        var e = chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
        P = P || this.T ? chrome.cast.DefaultActionPolicy.CAST_THIS_TAB : chrome.cast.DefaultActionPolicy.CREATE_SESSION;
        var h = (0, g.ru)(this.YQW, this);
        l = new chrome.cast.ApiConfig(l, (0, g.ru)(this.mC,
            this), h, e, P);
        l.customDialLaunchCallback = (0, g.ru)(this.fxJ, this);
        chrome.cast.initialize(l, (0, g.ru)(function() {
            this.s$() || (chrome.cast.addReceiverActionListener(this.Z), PHQ(), this.K.subscribe("onlineScreenChange", (0, g.ru)(this.HF, this)), this.G = E6j(this), chrome.cast.setCustomReceivers(this.G, function() {}, (0, g.ru)(function(z) {
                this.JB("Failed to set initial custom receivers: " + g.XQ(z))
            }, this)), this.publish("yt-remote-cast2-availability-change", cO(this)), v(!0))
        }, this), (0, g.ru)(function(z) {
            this.JB("Failed to initialize API: " +
                g.XQ(z));
            v(!1)
        }, this))
    };
    g.R.rBM = function(P, v) {
        Kp("Setting connected screen ID: " + P + " -> " + v);
        if (this.W) {
            var l = this.W.W;
            if (!P || l && l.id != P) Kp("Unsetting old screen status: " + this.W.K.friendlyName), qm(this, null)
        }
        if (P && v) {
            if (!this.W) {
                P = C8(this.K.Yg(), P);
                if (!P) {
                    Kp("setConnectedScreenStatus: Unknown screen.");
                    return
                }
                if (P.idType == "shortLived") {
                    Kp("setConnectedScreenStatus: Screen with id type to be short lived.");
                    return
                }
                l = a0b(this, P);
                l || (Kp("setConnectedScreenStatus: Connected receiver not custom..."), l = new chrome.cast.Receiver(P.uuid ?
                    P.uuid : P.id, P.name), l.receiverType = chrome.cast.ReceiverType.CUSTOM, this.G.push(l), chrome.cast.setCustomReceivers(this.G, function() {}, (0, g.ru)(function(e) {
                    this.JB("Failed to set initial custom receivers: " + g.XQ(e))
                }, this)));
                Kp("setConnectedScreenStatus: new active receiver: " + l.friendlyName);
                qm(this, new JO(this.K, l), !0)
            }
            this.W.Zb(v)
        } else Kp("setConnectedScreenStatus: no screen.")
    };
    g.R.bX0 = function(P) {
        this.s$() ? this.JB("Setting connection data on disposed cast v2") : this.W ? this.W.UG(P) : this.JB("Setting connection data without a session")
    };
    g.R.pM = function() {
        this.s$() ? this.JB("Stopping session on disposed cast v2") : this.W ? (this.W.stop(), qm(this, null)) : Kp("Stopping non-existing session")
    };
    g.R.requestSession = function() {
        chrome.cast.requestSession((0, g.ru)(this.mC, this), (0, g.ru)(this.b6g, this))
    };
    g.R.G1 = function() {
        this.K.unsubscribe("onlineScreenChange", (0, g.ru)(this.HF, this));
        window.chrome && chrome.cast && chrome.cast.removeReceiverActionListener(this.Z);
        var P = TDy,
            v = g.j9("yt.mdx.remote.debug.handlers_");
        g.Tv(v || [], P);
        g.Rm(this.W);
        g.gA.prototype.G1.call(this)
    };
    g.R.JB = function(P) {
        lv("Controller", P)
    };
    g.R.rK = function(P, v) {
        this.W == P && (v || qm(this, null), this.publish("yt-remote-cast2-session-change", v))
    };
    g.R.Qo6 = function(P, v) {
        if (!this.s$())
            if (P) switch (P.friendlyName = chrome.cast.unescape(P.friendlyName), Kp("onReceiverAction_ " + P.label + " / " + P.friendlyName + "-- " + v), v) {
                case chrome.cast.ReceiverAction.CAST:
                    if (this.W)
                        if (this.W.K.label != P.label) Kp("onReceiverAction_: Stopping active receiver: " + this.W.K.friendlyName), this.W.stop();
                        else {
                            Kp("onReceiverAction_: Casting to active receiver.");
                            this.W.W && this.publish("yt-remote-cast2-session-change", this.W.W);
                            break
                        }
                    switch (P.receiverType) {
                        case chrome.cast.ReceiverType.CUSTOM:
                            qm(this,
                                new JO(this.K, P));
                            break;
                        case chrome.cast.ReceiverType.DIAL:
                            qm(this, new D3(this.K, P, this.Y, this.config_));
                            break;
                        case chrome.cast.ReceiverType.CAST:
                            qm(this, new IN(this.K, P, this.config_));
                            break;
                        default:
                            this.JB("Unknown receiver type: " + P.receiverType)
                    }
                    break;
                case chrome.cast.ReceiverAction.STOP:
                    this.W && this.W.K.label == P.label ? this.W.stop() : this.JB("Stopping receiver w/o session: " + P.friendlyName)
            } else this.JB("onReceiverAction_ called without receiver.")
    };
    g.R.fxJ = function(P) {
        if (this.s$()) return Promise.reject(Error("disposed"));
        var v = P.receiver;
        v.receiverType != chrome.cast.ReceiverType.DIAL && (this.JB("Not DIAL receiver: " + v.friendlyName), v.receiverType = chrome.cast.ReceiverType.DIAL);
        var l = this.W ? this.W.K : null;
        if (!l || l.label != v.label) return this.JB("Receiving DIAL launch request for non-clicked DIAL receiver: " + v.friendlyName), Promise.reject(Error("illegal DIAL launch"));
        if (l && l.label == v.label && l.receiverType != chrome.cast.ReceiverType.DIAL) {
            if (this.W.W) return Kp("Reselecting dial screen."),
                this.publish("yt-remote-cast2-session-change", this.W.W), Promise.resolve(new chrome.cast.DialLaunchResponse(!1));
            this.JB('Changing CAST intent from "' + l.receiverType + '" to "dial" for ' + v.friendlyName);
            qm(this, new D3(this.K, v, this.Y, this.config_))
        }
        v = this.W;
        v.S = P;
        v.S.appState == chrome.cast.DialAppState.RUNNING ? (P = v.S.extraData || {}, l = P.screenId || null, np(v) && P.loungeToken ? P.loungeTokenRefreshIntervalMs ? P = iRA(v, {
            name: v.K.friendlyName,
            screenId: P.screenId,
            loungeToken: P.loungeToken,
            dialId: v.S.receiver.label,
            screenIdType: "shortLived"
        }, P.loungeTokenRefreshIntervalMs) : (g.z_(Error("No loungeTokenRefreshIntervalMs presents in additionalData: " + JSON.stringify(P) + ".")), P = U4Y(v, l)) : P = U4Y(v, l)) : P = Xhy(v);
        return P
    };
    g.R.mC = function(P) {
        var v = this;
        if (!this.s$() && !this.T) {
            Kp("New cast session ID: " + P.sessionId);
            var l = P.receiver;
            if (l.receiverType != chrome.cast.ReceiverType.CUSTOM) {
                if (!this.W)
                    if (l.receiverType == chrome.cast.ReceiverType.CAST) Kp("Got resumed cast session before resumed mdx connection."), l.friendlyName = chrome.cast.unescape(l.friendlyName), qm(this, new IN(this.K, l, this.config_), !0);
                    else {
                        this.JB("Got non-cast session without previous mdx receiver event, or mdx resume.");
                        return
                    }
                var e = this.W.K,
                    h = C8(this.K.Yg(),
                        e.label);
                h && tN(h, l.label) && e.receiverType != chrome.cast.ReceiverType.CAST && l.receiverType == chrome.cast.ReceiverType.CAST && (Kp("onSessionEstablished_: manual to cast session change " + l.friendlyName), g.Rm(this.W), this.W = new IN(this.K, l, this.config_), this.W.subscribe("sessionScreen", (0, g.ru)(this.rK, this, this.W)), this.W.subscribe("sessionFailed", function() {
                    return HRo(v, v.W)
                }), this.W.UG(null));
                this.W.LQ(P)
            }
        }
    };
    g.R.Tc = function() {
        return this.W ? this.W.tV() : null
    };
    g.R.b6g = function(P) {
        this.s$() || (this.JB("Failed to estabilish a session: " + g.XQ(P)), P.code != chrome.cast.ErrorCode.CANCEL && qm(this, null), this.publish("yt-remote-cast2-session-failed"))
    };
    g.R.YQW = function(P) {
        Kp("Receiver availability updated: " + P);
        if (!this.s$()) {
            var v = cO(this);
            this.j = P == chrome.cast.ReceiverAvailability.AVAILABLE;
            cO(this) != v && this.publish("yt-remote-cast2-availability-change", cO(this))
        }
    };
    g.R.HF = function() {
        this.s$() || (this.G = E6j(this), Kp("Updating custom receivers: " + g.XQ(this.G)), chrome.cast.setCustomReceivers(this.G, function() {}, (0, g.ru)(function() {
            this.JB("Failed to set custom receivers.")
        }, this)), this.publish("yt-remote-cast2-availability-change", cO(this)))
    };
    uv.prototype.setLaunchParams = uv.prototype.bX0;
    uv.prototype.setConnectedScreenStatus = uv.prototype.rBM;
    uv.prototype.stopSession = uv.prototype.pM;
    uv.prototype.getCastSession = uv.prototype.Tc;
    uv.prototype.requestSession = uv.prototype.requestSession;
    uv.prototype.init = uv.prototype.init;
    uv.prototype.dispose = uv.prototype.dispose;
    var d4d = [];
    g.R = Lp.prototype;
    g.R.reset = function(P) {
        this.listId = "";
        this.index = -1;
        this.videoId = "";
        zQy(this);
        this.volume = -1;
        this.muted = !1;
        P && (this.index = P.index, this.listId = P.listId, this.videoId = P.videoId, this.playerState = P.playerState, this.volume = P.volume, this.muted = P.muted, this.audioTrackId = P.audioTrackId, this.trackData = P.trackData, this.Up = P.hasPrevious, this.JI = P.hasNext, this.j = P.playerTime, this.T = P.playerTimeAt, this.Y = P.seekableStart, this.W = P.seekableEnd, this.Z = P.duration, this.S = P.loadedTime, this.G = P.liveIngestionTime, this.K = !isNaN(this.G))
    };
    g.R.isPlaying = function() {
        return this.playerState == 1
    };
    g.R.isBuffering = function() {
        return this.playerState == 3
    };
    g.R.Zo = function() {
        return this.playerState == 1081
    };
    g.R.vU = function(P) {
        this.Z = isNaN(P) ? 0 : P
    };
    g.R.getDuration = function() {
        return this.K ? this.Z + Sb(this) : this.Z
    };
    g.R.clone = function() {
        return new Lp(mIv(this))
    };
    g.D(U0, g.gA);
    g.R = U0.prototype;
    g.R.getState = function() {
        return this.G
    };
    g.R.b9 = function() {
        return this.Y.getReconnectTimeout()
    };
    g.R.JK = function() {
        this.Y.reconnect()
    };
    g.R.play = function() {
        jb(this) ? (this.W ? this.W.play(null, g.Ip, WO(this, "play")) : E0(this, "play"), tly(this, 1, Xy(Z3(this))), this.publish("remotePlayerChange")) : aN(this, this.play)
    };
    g.R.pause = function() {
        jb(this) ? (this.W ? this.W.pause(null, g.Ip, WO(this, "pause")) : E0(this, "pause"), tly(this, 2, Xy(Z3(this))), this.publish("remotePlayerChange")) : aN(this, this.pause)
    };
    g.R.seekTo = function(P) {
        if (jb(this)) {
            if (this.W) {
                var v = Z3(this),
                    l = new chrome.cast.media.SeekRequest;
                l.currentTime = P;
                v.isPlaying() || v.isBuffering() ? l.resumeState = chrome.cast.media.ResumeState.PLAYBACK_START : l.resumeState = chrome.cast.media.ResumeState.PLAYBACK_PAUSE;
                this.W.seek(l, g.Ip, WO(this, "seekTo", {
                    newTime: P
                }))
            } else E0(this, "seekTo", {
                newTime: P
            });
            tly(this, 3, P);
            this.publish("remotePlayerChange")
        } else aN(this, g.TW(this.seekTo, P))
    };
    g.R.stop = function() {
        if (jb(this)) {
            this.W ? this.W.stop(null, g.Ip, WO(this, "stopVideo")) : E0(this, "stopVideo");
            var P = Z3(this);
            P.index = -1;
            P.videoId = "";
            zQy(P);
            HO(this, P);
            this.publish("remotePlayerChange")
        } else aN(this, this.stop)
    };
    g.R.setVolume = function(P, v) {
        if (jb(this)) {
            var l = Z3(this);
            if (this.K) {
                if (l.volume != P) {
                    var e = Math.round(P) / 100;
                    this.K.setReceiverVolumeLevel(e, (0, g.ru)(function() {
                        eb("set receiver volume: " + e)
                    }, this), (0, g.ru)(function() {
                        this.JB("failed to set receiver volume.")
                    }, this))
                }
                l.muted != v && this.K.setReceiverMuted(v, (0, g.ru)(function() {
                    eb("set receiver muted: " + v)
                }, this), (0, g.ru)(function() {
                    this.JB("failed to set receiver muted.")
                }, this))
            } else {
                var h = {
                    volume: P,
                    muted: v
                };
                l.volume != -1 && (h.delta = P - l.volume);
                E0(this, "setVolume", h)
            }
            l.muted = v;
            l.volume = P;
            HO(this, l)
        } else aN(this, g.TW(this.setVolume, P, v))
    };
    g.R.sJ = function(P, v) {
        if (jb(this)) {
            var l = Z3(this);
            P = {
                videoId: P
            };
            v && (l.trackData = {
                trackName: v.name,
                languageCode: v.languageCode,
                sourceLanguageCode: v.translationLanguage ? v.translationLanguage.languageCode : "",
                languageName: v.languageName,
                kind: v.kind
            }, P.style = g.XQ(v.style), g.Br(P, l.trackData));
            E0(this, "setSubtitlesTrack", P);
            HO(this, l)
        } else aN(this, g.TW(this.sJ, P, v))
    };
    g.R.setAudioTrack = function(P, v) {
        jb(this) ? (v = v.getLanguageInfo().getId(), E0(this, "setAudioTrack", {
            videoId: P,
            audioTrackId: v
        }), P = Z3(this), P.audioTrackId = v, HO(this, P)) : aN(this, g.TW(this.setAudioTrack, P, v))
    };
    g.R.playVideo = function(P, v, l, e, h, z, m) {
        e = e === void 0 ? null : e;
        h = h === void 0 ? null : h;
        z = z === void 0 ? null : z;
        m = m === void 0 ? null : m;
        var Q = Z3(this),
            t = {
                videoId: P
            };
        l !== void 0 && (t.currentIndex = l);
        BO(Q, P, l || 0);
        v !== void 0 && (GD(Q, v), t.currentTime = v);
        e && (t.listId = e);
        h && (t.playerParams = h);
        z && (t.clickTrackingParams = z);
        m && (t.locationInfo = g.XQ(m));
        E0(this, "setPlaylist", t);
        e || HO(this, Q)
    };
    g.R.ez = function(P, v) {
        if (jb(this)) {
            if (P && v) {
                var l = Z3(this);
                BO(l, P, v);
                HO(this, l)
            }
            E0(this, "previous")
        } else aN(this, g.TW(this.ez, P, v))
    };
    g.R.nextVideo = function(P, v) {
        if (jb(this)) {
            if (P && v) {
                var l = Z3(this);
                BO(l, P, v);
                HO(this, l)
            }
            E0(this, "next")
        } else aN(this, g.TW(this.nextVideo, P, v))
    };
    g.R.ib = function() {
        if (jb(this)) {
            E0(this, "clearPlaylist");
            var P = Z3(this);
            P.reset();
            HO(this, P);
            this.publish("remotePlayerChange")
        } else aN(this, this.ib)
    };
    g.R.Ds = function() {
        jb(this) ? E0(this, "dismissAutoplay") : aN(this, this.Ds)
    };
    g.R.dispose = function() {
        if (this.G != 3) {
            var P = this.G;
            this.G = 3;
            this.publish("proxyStateChange", P, this.G)
        }
        g.gA.prototype.dispose.call(this)
    };
    g.R.G1 = function() {
        QOY(this);
        this.Y = null;
        this.Z.clear();
        iv(this, null);
        g.gA.prototype.G1.call(this)
    };
    g.R.Eg = function(P) {
        if ((P != this.G || P == 2) && this.G != 3 && P != 0) {
            var v = this.G;
            this.G = P;
            this.publish("proxyStateChange", v, P);
            if (P == 1)
                for (; !this.Z.isEmpty();) v = P = this.Z, v.W.length === 0 && (v.W = v.K, v.W.reverse(), v.K = []), P.W.pop().apply(this);
            else P == 3 && this.dispose()
        }
    };
    g.R.fRf = function(P, v) {
        this.publish(P, v)
    };
    g.R.Na1 = function(P) {
        if (!P) this.vN(null), iv(this, null);
        else if (this.K.receiver.volume) {
            P = this.K.receiver.volume;
            var v = Z3(this),
                l = Math.round(100 * P.level || 0);
            if (v.volume != l || v.muted != P.muted) eb("Cast volume update: " + P.level + (P.muted ? " muted" : "")), v.volume = l, v.muted = !!P.muted, HO(this, v)
        }
    };
    g.R.vN = function(P) {
        eb("Cast media: " + !!P);
        this.W && this.W.removeUpdateListener(this.S);
        if (this.W = P) this.W.addUpdateListener(this.S), y6A(this), this.publish("remotePlayerChange")
    };
    g.R.CQc = function(P) {
        P ? (y6A(this), this.publish("remotePlayerChange")) : this.vN(null)
    };
    g.R.OI = function() {
        E0(this, "sendDebugCommand", {
            debugCommand: "stats4nerds "
        })
    };
    g.R.SiJ = function() {
        var P = ls1();
        P && iv(this, P)
    };
    g.R.JB = function(P) {
        lv("CP", P)
    };
    g.D(s0, g.gA);
    g.R = s0.prototype;
    g.R.connect = function(P, v) {
        if (v) {
            var l = v.listId,
                e = v.videoId,
                h = v.videoIds,
                z = v.playerParams,
                m = v.clickTrackingParams,
                Q = v.index,
                t = {
                    videoId: e
                },
                y = v.currentTime,
                C = v.locationInfo;
            v = v.loopMode;
            y !== void 0 && (t.currentTime = y <= 5 ? 0 : y);
            z && (t.playerParams = z);
            C && (t.locationInfo = C);
            m && (t.clickTrackingParams = m);
            l && (t.listId = l);
            h && h.length > 0 && (t.videoIds = h.join(","));
            Q !== void 0 && (t.currentIndex = Q);
            this.wM && (t.loopMode = v || "LOOP_MODE_OFF");
            l && (this.W.listId = l);
            this.W.videoId = e;
            this.W.index = Q || 0;
            this.W.state = 3;
            GD(this.W,
                y);
            this.Z = "UNSUPPORTED";
            l = this.wM ? "setInitialState" : "setPlaylist";
            O0("Connecting with " + l + " and params: " + g.XQ(t));
            this.K.connect({
                method: l,
                params: g.XQ(t)
            }, P, Goy())
        } else O0("Connecting without params"), this.K.connect({}, P, Goy());
        kJG(this)
    };
    g.R.EX = function(P) {
        this.K.EX(P)
    };
    g.R.dispose = function() {
        this.s$() || (g.ZB("yt.mdx.remote.remoteClient_", null), this.publish("beforeDispose"), oN(this, 3));
        g.gA.prototype.dispose.call(this)
    };
    g.R.G1 = function() {
        wsj(this);
        Iso(this);
        $Iy(this);
        g.qc(this.S);
        this.S = NaN;
        g.qc(this.X);
        this.X = NaN;
        this.Y = null;
        g.xd(this.Wg);
        this.Wg.length = 0;
        this.K.dispose();
        g.gA.prototype.G1.call(this);
        this.Z = this.j = this.G = this.W = this.K = null
    };
    g.R.lO = function(P) {
        if (!this.G || this.G.length === 0) return !1;
        for (var v = g.N(this.G), l = v.next(); !l.done; l = v.next())
            if (!l.value.capabilities.has(P)) return !1;
        return !0
    };
    g.R.zv = function() {
        var P = 3;
        this.s$() || (P = 0, isNaN(this.nH()) ? this.K.W1() && isNaN(this.T) && (P = 1) : P = 2);
        return P
    };
    g.R.Nz = function(P) {
        O0("Disconnecting with " + P);
        g.ZB("yt.mdx.remote.remoteClient_", null);
        wsj(this);
        this.publish("beforeDisconnect", P);
        P == 1 && kE();
        this.K.disconnect(P);
        this.dispose()
    };
    g.R.Tv = function() {
        var P = this.W;
        this.Y && (P = this.W.clone(), BO(P, this.Y, P.index));
        return mIv(P)
    };
    g.R.IAJ = function(P) {
        var v = this,
            l = new Lp(P);
        l.videoId && l.videoId != this.W.videoId && (this.Y = l.videoId, g.qc(this.S), this.S = g.KG(function() {
            if (v.Y) {
                var h = v.Y;
                v.Y = null;
                v.W.videoId != h && rr(v, "getNowPlaying")
            }
        }, 5E3));
        var e = [];
        this.W.listId == l.listId && this.W.videoId == l.videoId && this.W.index == l.index || e.push("remoteQueueChange");
        this.W.playerState == l.playerState && this.W.volume == l.volume && this.W.muted == l.muted && Xy(this.W) == Xy(l) && g.XQ(this.W.trackData) == g.XQ(l.trackData) || e.push("remotePlayerChange");
        this.W.reset(P);
        g.f$(e, function(h) {
            this.publish(h)
        }, this)
    };
    g.R.qb = function() {
        var P = this.K.getDeviceId(),
            v = g.om(this.G, function(l) {
                return l.type == "REMOTE_CONTROL" && l.id != P
            });
        return v ? v.id : ""
    };
    g.R.nH = function() {
        return this.K.b9()
    };
    g.R.FK = function() {
        return this.Z || "UNSUPPORTED"
    };
    g.R.gj = function() {
        return this.j || ""
    };
    g.R.a_ = function() {
        !isNaN(this.nH()) && this.K.JK()
    };
    g.R.Vc3 = function(P, v) {
        rr(this, P, v);
        nzv(this)
    };
    g.R.zn = function() {
        var P = g.WM("SAPISID", "") || g.WM("__Secure-1PAPISID") || "",
            v = g.WM("__Secure-3PAPISID", "") || "";
        if (!P && !v) return "";
        P = g.D7(g.n1(P), 2);
        v = g.D7(g.n1(v), 2);
        return g.D7(g.n1("," + P + "," + v), 2)
    };
    s0.prototype.subscribe = s0.prototype.subscribe;
    s0.prototype.unsubscribeByKey = s0.prototype.IZ;
    s0.prototype.getProxyState = s0.prototype.zv;
    s0.prototype.disconnect = s0.prototype.Nz;
    s0.prototype.getPlayerContextData = s0.prototype.Tv;
    s0.prototype.setPlayerContextData = s0.prototype.IAJ;
    s0.prototype.getOtherConnectedRemoteId = s0.prototype.qb;
    s0.prototype.getReconnectTimeout = s0.prototype.nH;
    s0.prototype.getAutoplayMode = s0.prototype.FK;
    s0.prototype.getAutoplayVideoId = s0.prototype.gj;
    s0.prototype.reconnect = s0.prototype.a_;
    s0.prototype.sendMessage = s0.prototype.Vc3;
    s0.prototype.getXsrfToken = s0.prototype.zn;
    s0.prototype.isCapabilitySupportedOnConnectedDevices = s0.prototype.lO;
    g.D(pso, RN);
    g.R = pso.prototype;
    g.R.Yg = function(P) {
        return this.QP.$_gs(P)
    };
    g.R.contains = function(P) {
        return !!this.QP.$_c(P)
    };
    g.R.get = function(P) {
        return this.QP.$_g(P)
    };
    g.R.start = function() {
        this.QP.$_st()
    };
    g.R.add = function(P, v, l) {
        this.QP.$_a(P, v, l)
    };
    g.R.remove = function(P, v, l) {
        this.QP.$_r(P, v, l)
    };
    g.R.Xn = function(P, v, l, e) {
        this.QP.$_un(P, v, l, e)
    };
    g.R.G1 = function() {
        for (var P = this.W.length, v = 0; v < P; ++v) this.QP.$_ubk(this.W[v]);
        this.W.length = 0;
        this.QP = null;
        RN.prototype.G1.call(this)
    };
    g.R.kz = function() {
        this.publish("screenChange")
    };
    g.R.ys$ = function() {
        this.publish("onlineScreenChange")
    };
    fp.prototype.$_st = fp.prototype.start;
    fp.prototype.$_gspc = fp.prototype.LM;
    fp.prototype.$_gsppc = fp.prototype.EJ;
    fp.prototype.$_c = fp.prototype.contains;
    fp.prototype.$_g = fp.prototype.get;
    fp.prototype.$_a = fp.prototype.add;
    fp.prototype.$_un = fp.prototype.Xn;
    fp.prototype.$_r = fp.prototype.remove;
    fp.prototype.$_gs = fp.prototype.Yg;
    fp.prototype.$_gos = fp.prototype.k8;
    fp.prototype.$_s = fp.prototype.subscribe;
    fp.prototype.$_ubk = fp.prototype.IZ;
    var mR = null,
        tI = !1,
        Mm = null,
        TD = null,
        H9m = null,
        v3 = [];
    g.D(sOy, g.U);
    g.R = sOy.prototype;
    g.R.G1 = function() {
        g.U.prototype.G1.call(this);
        this.W.stop();
        this.K.stop();
        this.j.stop();
        var P = this.Zx;
        P.unsubscribe("proxyStateChange", this.nK, this);
        P.unsubscribe("remotePlayerChange", this.hC, this);
        P.unsubscribe("remoteQueueChange", this.kO, this);
        P.unsubscribe("previousNextChange", this.s7, this);
        P.unsubscribe("nowAutoplaying", this.aT, this);
        P.unsubscribe("autoplayDismissed", this.gm, this);
        this.Zx = this.module = null
    };
    g.R.Lw = function(P) {
        var v = g.bD.apply(1, arguments);
        if (this.Zx.G != 2)
            if (yk(this)) {
                if (!Z3(this.Zx).Zo() || P !== "control_seek") switch (P) {
                    case "control_toggle_play_pause":
                        Z3(this.Zx).isPlaying() ? this.Zx.pause() : this.Zx.play();
                        break;
                    case "control_play":
                        this.Zx.play();
                        break;
                    case "control_pause":
                        this.Zx.pause();
                        break;
                    case "control_seek":
                        this.T.nF(v[0], v[1]);
                        break;
                    case "control_subtitles_set_track":
                        Mld(this, v[0]);
                        break;
                    case "control_set_audio_track":
                        this.setAudioTrack(v[0])
                }
            } else switch (P) {
                case "control_toggle_play_pause":
                case "control_play":
                case "control_pause":
                    v =
                        this.J.getCurrentTime();
                    CN(this, v === 0 ? void 0 : v);
                    break;
                case "control_seek":
                    CN(this, v[0]);
                    break;
                case "control_subtitles_set_track":
                    Mld(this, v[0]);
                    break;
                case "control_set_audio_track":
                    this.setAudioTrack(v[0])
            }
    };
    g.R.l52 = function(P) {
        this.j.DJ(P)
    };
    g.R.xN0 = function(P) {
        this.Lw("control_subtitles_set_track", g.pU(P) ? null : P)
    };
    g.R.cJ = function() {
        var P = this.J.getOption("captions", "track");
        g.pU(P) || Mld(this, P)
    };
    g.R.sb = function(P) {
        this.module.sb(P, this.J.getVideoData().lengthSeconds)
    };
    g.R.wR6 = function() {
        g.pU(this.G) || TW3(this, this.G);
        this.Y = !1
    };
    g.R.nK = function(P, v) {
        this.K.stop();
        v === 2 && this.WJ()
    };
    g.R.hC = function() {
        if (yk(this)) {
            this.W.stop();
            var P = Z3(this.Zx);
            switch (P.playerState) {
                case 1080:
                case 1081:
                case 1084:
                case 1085:
                    this.module.Sd = 1;
                    break;
                case 1082:
                case 1083:
                    this.module.Sd = 0;
                    break;
                default:
                    this.module.Sd = -1
            }
            switch (P.playerState) {
                case 1081:
                case 1:
                    this.Y_(new g.mQ(8));
                    this.M3();
                    break;
                case 1085:
                case 3:
                    this.Y_(new g.mQ(9));
                    break;
                case 1083:
                case 0:
                    this.Y_(new g.mQ(2));
                    this.T.stop();
                    this.sb(this.J.getVideoData().lengthSeconds);
                    break;
                case 1084:
                    this.Y_(new g.mQ(4));
                    break;
                case 2:
                    this.Y_(new g.mQ(4));
                    this.sb(Xy(P));
                    break;
                case -1:
                    this.Y_(new g.mQ(64));
                    break;
                case -1E3:
                    this.Y_(new g.mQ(128, {
                        errorCode: "mdx.remoteerror",
                        errorMessage: "This video is not available for remote playback.",
                        Nu: 2
                    }))
            }
            P = Z3(this.Zx).trackData;
            var v = this.G;
            (P || v ? P && v && P.trackName == v.trackName && P.languageCode == v.languageCode && P.languageName == v.languageName && P.kind == v.kind : 1) || (this.G = P, TW3(this, P));
            P = Z3(this.Zx);
            P.volume === -1 || Math.round(this.J.getVolume()) === P.volume && this.J.isMuted() === P.muted || this.S.isActive() || this.Km()
        } else r6b(this)
    };
    g.R.s7 = function() {
        this.J.publish("mdxpreviousnextchange")
    };
    g.R.kO = function() {
        yk(this) || r6b(this)
    };
    g.R.aT = function(P) {
        isNaN(P) || this.J.publish("mdxnowautoplaying", P)
    };
    g.R.gm = function() {
        this.J.publish("mdxautoplaycanceled")
    };
    g.R.setAudioTrack = function(P) {
        yk(this) && this.Zx.setAudioTrack(this.J.getVideoData(1).videoId, P)
    };
    g.R.seekTo = function(P, v) {
        Z3(this.Zx).playerState === -1 ? CN(this, P) : v && this.Zx.seekTo(P)
    };
    g.R.Km = function() {
        var P = this;
        if (yk(this)) {
            var v = Z3(this.Zx);
            this.events.ph(this.X);
            v.muted ? this.J.mute() : this.J.unMute();
            this.J.setVolume(v.volume);
            this.X = this.events.C(this.J, "onVolumeChange", function(l) {
                O9Q(P, l)
            })
        }
    };
    g.R.M3 = function() {
        this.W.stop();
        if (!this.Zx.s$()) {
            var P = Z3(this.Zx);
            P.isPlaying() && this.Y_(new g.mQ(8));
            this.sb(Xy(P));
            this.W.start()
        }
    };
    g.R.WJ = function() {
        this.K.stop();
        this.W.stop();
        var P = this.Zx.b9();
        this.Zx.G == 2 && !isNaN(P) && this.K.start()
    };
    g.R.Y_ = function(P) {
        this.K.stop();
        var v = this.Z;
        if (!g.fM(v, P)) {
            var l = g.M(P, 2);
            l !== g.M(this.Z, 2) && this.J.MG(l);
            this.Z = P;
            dIY(this.module, v, P)
        }
    };
    g.D(fN, g.O);
    fN.prototype.uq = function() {
        this.W.show()
    };
    fN.prototype.zG = function() {
        this.W.hide()
    };
    fN.prototype.K = function() {
        $E("mdx-privacy-popup-cancel");
        this.zG()
    };
    fN.prototype.G = function() {
        $E("mdx-privacy-popup-confirm");
        this.zG()
    };
    g.D(g0, g.O);
    g0.prototype.onStateChange = function(P) {
        this.As(P.state)
    };
    g0.prototype.As = function(P) {
        if (this.api.getPresentingPlayerType() === 3) {
            var v = {
                RECEIVER_NAME: this.api.getOption("remote", "currentReceiver").name
            };
            P = g.M(P, 128) ? g.uc("Error on $RECEIVER_NAME", v) : P.isPlaying() || P.isPaused() ? g.uc("Playing on $RECEIVER_NAME", v) : g.uc("Connected to $RECEIVER_NAME", v);
            this.updateValue("statustext", P);
            this.W.show()
        } else this.W.hide()
    };
    g.D(kX, g.PK);
    kX.prototype.Y = function() {
        var P = this.J.getOption("remote", "receivers");
        P && P.length > 1 && !this.J.getOption("remote", "quickCast") ? (this.m2 = g.gL(P, this.W, this), this.Cw(g.LC(P, this.W)), P = this.J.getOption("remote", "currentReceiver"), P = this.W(P), this.options[P] && this.W9(P), this.enable(!0)) : this.enable(!1)
    };
    kX.prototype.W = function(P) {
        return P.key
    };
    kX.prototype.Do = function(P) {
        return P === "cast-selector-receiver" ? "Cast..." : this.m2[P].name
    };
    kX.prototype.BP = function(P) {
        g.PK.prototype.BP.call(this, P);
        this.J.setOption("remote", "currentReceiver", this.m2[P]);
        this.LI.zG()
    };
    g.D(Vlx, g.x0);
    g.R = Vlx.prototype;
    g.R.create = function() {
        var P = this.player.N(),
            v = g.UM(P);
        P = {
            device: "Desktop",
            app: "youtube-desktop",
            loadCastApiSetupScript: P.V("mdx_load_cast_api_bootstrap_script"),
            enableDialLoungeToken: P.V("enable_dial_short_lived_lounge_token"),
            enableCastLoungeToken: P.V("enable_cast_short_lived_lounge_token")
        };
        BWQ(v, P);
        this.subscriptions.push(g.Cy("yt-remote-before-disconnect", this.iI0, this));
        this.subscriptions.push(g.Cy("yt-remote-connection-change", this.Jkc, this));
        this.subscriptions.push(g.Cy("yt-remote-receiver-availability-change", this.wK,
            this));
        this.subscriptions.push(g.Cy("yt-remote-auto-connect", this.GP6, this));
        this.subscriptions.push(g.Cy("yt-remote-receiver-resumed", this.K_f, this));
        this.subscriptions.push(g.Cy("mdx-privacy-popup-confirm", this.A3W, this));
        this.subscriptions.push(g.Cy("mdx-privacy-popup-cancel", this.xv2, this));
        this.wK()
    };
    g.R.load = function() {
        this.player.cancelPlayback();
        g.x0.prototype.load.call(this);
        this.Dt = new sOy(this, this.player, this.Zx);
        var P = (P = WIy()) ? P.currentTime : 0;
        var v = asA() ? new U0(zm(), void 0) : null;
        P == 0 && v && (P = Xy(Z3(v)));
        P !== 0 && this.sb(P);
        dIY(this, this.Ak, this.Ak);
        this.player.uR(6)
    };
    g.R.unload = function() {
        this.player.publish("mdxautoplaycanceled");
        this.Jp = this.Zw;
        g.QQ(this.Dt, this.Zx);
        this.Zx = this.Dt = null;
        g.x0.prototype.unload.call(this);
        this.player.uR(5);
        w0(this)
    };
    g.R.G1 = function() {
        g.fy(this.subscriptions);
        g.x0.prototype.G1.call(this)
    };
    g.R.q6 = function(P) {
        var v = g.bD.apply(1, arguments);
        this.loaded && this.Dt.Lw.apply(this.Dt, [P].concat(g.u(v)))
    };
    g.R.getAdState = function() {
        return this.Sd
    };
    g.R.Up = function() {
        return this.Zx ? Z3(this.Zx).Up : !1
    };
    g.R.JI = function() {
        return this.Zx ? Z3(this.Zx).JI : !1
    };
    g.R.sb = function(P, v) {
        this.fA = P || 0;
        this.player.publish("progresssync", P, v);
        this.player.eN("onVideoProgress", P || 0)
    };
    g.R.getCurrentTime = function() {
        return this.fA
    };
    g.R.getProgressState = function() {
        var P = Z3(this.Zx),
            v = this.player.getVideoData();
        return {
            airingStart: 0,
            airingEnd: 0,
            allowSeeking: !P.Zo() && this.player.YM(),
            clipEnd: v.clipEnd,
            clipStart: v.clipStart,
            current: this.getCurrentTime(),
            displayedStart: -1,
            duration: P.getDuration(),
            ingestionTime: P.K ? P.G + Sb(P) : P.G,
            isAtLiveHead: (P.K ? P.W + Sb(P) : P.W) - this.getCurrentTime() <= 1,
            loaded: P.S,
            seekableEnd: P.K ? P.W + Sb(P) : P.W,
            seekableStart: P.Y > 0 ? P.Y + Sb(P) : P.Y,
            offset: 0,
            viewerLivestreamJoinMediaTime: 0
        }
    };
    g.R.nextVideo = function() {
        this.Zx && this.Zx.nextVideo()
    };
    g.R.ez = function() {
        this.Zx && this.Zx.ez()
    };
    g.R.iI0 = function(P) {
        P === 1 && (this.wO = this.Zx ? Z3(this.Zx) : null)
    };
    g.R.Jkc = function() {
        var P = asA() ? new U0(zm(), void 0) : null;
        if (P) {
            var v = this.Jp;
            this.loaded && this.unload();
            this.Zx = P;
            this.wO = null;
            v.key !== this.Zw.key && (this.Jp = v, this.load())
        } else g.Rm(this.Zx), this.Zx = null, this.loaded && (this.unload(), (P = this.wO) && P.videoId === this.player.getVideoData().videoId && this.player.cueVideoById(P.videoId, Xy(P)));
        this.player.publish("videodatachange", "newdata", this.player.getVideoData(), 3)
    };
    g.R.wK = function() {
        var P = [this.Zw],
            v = P.concat,
            l = i9Y();
        bv() && g.au("yt-remote-cast-available") && l.push({
            key: "cast-selector-receiver",
            name: "Cast..."
        });
        this.m2 = v.call(P, l);
        P = Z9y() || this.Zw;
        $X(this, P);
        this.player.eN("onMdxReceiversChange")
    };
    g.R.GP6 = function() {
        var P = Z9y();
        $X(this, P)
    };
    g.R.K_f = function() {
        this.Jp = Z9y()
    };
    g.R.A3W = function() {
        this.fS = !0;
        w0(this);
        tI = !1;
        mR && Qk(mR, 1);
        mR = null
    };
    g.R.xv2 = function() {
        this.fS = !1;
        w0(this);
        $X(this, this.Zw);
        this.Jp = this.Zw;
        tI = !1;
        mR = null;
        this.player.playVideo()
    };
    g.R.hQ = function(P, v) {
        switch (P) {
            case "casting":
                return this.loaded;
            case "receivers":
                return this.m2;
            case "currentReceiver":
                return v && (v.key === "cast-selector-receiver" ? eQQ() : $X(this, v)), this.loaded ? this.Jp : this.Zw;
            case "quickCast":
                return this.m2.length === 2 && this.m2[1].key === "cast-selector-receiver" ? (v && eQQ(), !0) : !1
        }
    };
    g.R.OI = function() {
        this.Zx.OI()
    };
    g.R.x9 = function() {
        return !1
    };
    g.R.getOptions = function() {
        return ["casting", "receivers", "currentReceiver", "quickCast"]
    };
    g.R.isLoggedIn = function() {
        var P, v;
        return ((P = g.la("PLAYER_CONFIG")) == null ? void 0 : (v = P.args) == null ? void 0 : v.authuser) !== void 0 ? !0 : !(!g.la("SESSION_INDEX") && !g.la("LOGGED_IN"))
    };
    g.br("remote", Vlx);
})(_yt_player);