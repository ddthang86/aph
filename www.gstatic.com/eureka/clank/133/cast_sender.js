(function() {
    'use strict';
    var f, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        g = typeof Object.defineProperties == "function" ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ba = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("Cannot find global object");
        },
        ca = ba(this),
        da = function(a, b) {
            if (b) a: {
                var c = ca;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && b != null && g(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    da("Symbol", function(a) {
        if (a) return a;
        var b = function(h, k) {
            this.g = h;
            g(this, "description", {
                configurable: !0,
                writable: !0,
                value: k
            })
        };
        b.prototype.toString = function() {
            return this.g
        };
        var c = "jscomp_symbol_" + (Math.random() * 1E9 >>> 0) + "_",
            d = 0,
            e = function(h) {
                if (this instanceof e) throw new TypeError("Symbol is not a constructor");
                return new b(c + (h || "") + "_" + d++, h)
            };
        return e
    });
    da("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ca[b[c]];
            typeof d === "function" && typeof d.prototype[a] != "function" && g(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        fa = typeof Object.create == "function" ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        l;
    if (typeof Object.setPrototypeOf == "function") l = Object.setPrototypeOf;
    else {
        var n;
        a: {
            var ha = {
                    a: !0
                },
                ia = {};
            try {
                ia.__proto__ = ha;
                n = ia.a;
                break a
            } catch (a) {}
            n = !1
        }
        l = n ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ja = l,
        p = function(a, b) {
            a.prototype = fa(b.prototype);
            a.prototype.constructor = a;
            if (ja) ja(a, b);
            else
                for (var c in b)
                    if (c != "prototype")
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.oc = b.prototype
        },
        ka = function(a) {
            var b = typeof Symbol != "undefined" && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if (typeof a.length == "number") return {
                next: aa(a)
            };
            throw Error(String(a) + " is not an iterable or ArrayLike");
        };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var r = this || self,
        t = function(a) {
            var b = typeof a;
            b = b != "object" ? b : a ? Array.isArray(a) ? "array" : b : "null";
            return b == "array" || b == "object" && typeof a.length == "number"
        },
        u = "closure_uid_" + (Math.random() * 1E9 >>> 0),
        la = 0,
        ma = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        na = function(a, b, c) {
            if (!a) throw Error();
            if (arguments.length > 2) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var e = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(e, d);
                    return a.apply(b, e)
                }
            }
            return function() {
                return a.apply(b,
                    arguments)
            }
        },
        w = function(a, b, c) {
            w = Function.prototype.bind && Function.prototype.bind.toString().indexOf("native code") != -1 ? ma : na;
            return w.apply(null, arguments)
        },
        x = function(a, b) {
            a = a.split(".");
            var c = r;
            a[0] in c || typeof c.execScript == "undefined" || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift());) a.length || b === void 0 ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
        };
    var chrome = chrome || window.chrome || {};
    chrome.cast = chrome.cast || {};
    chrome.cast.media = chrome.cast.media || {};
    chrome.cast.ReceiverActionListener = {};
    chrome.cast.VERSION = [1, 2];
    x("chrome.cast.VERSION", chrome.cast.VERSION);
    chrome.cast.nc = !0;
    x("chrome.cast.usingPresentationApi", chrome.cast.nc);
    chrome.cast.Na = function(a, b) {
        this.credentials = a;
        this.credentialsType = b === void 0 ? "web" : b
    };
    x("chrome.cast.CredentialsData", chrome.cast.Na);
    chrome.cast.Error = function(a, b, c) {
        this.code = a;
        this.description = b || null;
        this.details = c || null
    };
    x("chrome.cast.Error", chrome.cast.Error);
    chrome.cast.mb = function(a) {
        this.platform = a;
        this.packageId = this.url = null
    };
    x("chrome.cast.SenderApplication", chrome.cast.mb);
    chrome.cast.Image = function(a) {
        this.url = a;
        this.width = this.height = null
    };
    x("chrome.cast.Image", chrome.cast.Image);
    chrome.cast.Volume = function(a, b) {
        this.level = a === void 0 ? null : a;
        this.muted = b === void 0 ? null : b
    };
    x("chrome.cast.Volume", chrome.cast.Volume);
    chrome.cast.ga = {
        CUSTOM_CONTROLLER_SCOPED: "custom_controller_scoped",
        TAB_AND_ORIGIN_SCOPED: "tab_and_origin_scoped",
        ORIGIN_SCOPED: "origin_scoped",
        PAGE_SCOPED: "page_scoped"
    };
    x("chrome.cast.AutoJoinPolicy", chrome.cast.ga);
    chrome.cast.ia = {
        CREATE_SESSION: "create_session",
        CAST_THIS_TAB: "cast_this_tab"
    };
    x("chrome.cast.DefaultActionPolicy", chrome.cast.ia);
    chrome.cast.Ma = {
        VIDEO_OUT: "video_out",
        AUDIO_OUT: "audio_out",
        VIDEO_IN: "video_in",
        AUDIO_IN: "audio_in",
        MULTIZONE_GROUP: "multizone_group"
    };
    x("chrome.cast.Capability", chrome.cast.Ma);
    chrome.cast.v = {
        CANCEL: "cancel",
        TIMEOUT: "timeout",
        API_NOT_INITIALIZED: "api_not_initialized",
        INVALID_PARAMETER: "invalid_parameter",
        EXTENSION_NOT_COMPATIBLE: "extension_not_compatible",
        EXTENSION_MISSING: "extension_missing",
        RECEIVER_UNAVAILABLE: "receiver_unavailable",
        SESSION_ERROR: "session_error",
        CHANNEL_ERROR: "channel_error",
        LOAD_MEDIA_FAILED: "load_media_failed"
    };
    x("chrome.cast.ErrorCode", chrome.cast.v);
    chrome.cast.M = {
        AVAILABLE: "available",
        UNAVAILABLE: "unavailable"
    };
    x("chrome.cast.ReceiverAvailability", chrome.cast.M);
    chrome.cast.nb = {
        CHROME: "chrome",
        IOS: "ios",
        ANDROID: "android"
    };
    x("chrome.cast.SenderPlatform", chrome.cast.nb);
    chrome.cast.wa = {
        CAST: "cast",
        DIAL: "dial",
        HANGOUT: "hangout",
        CUSTOM: "custom"
    };
    x("chrome.cast.ReceiverType", chrome.cast.wa);
    chrome.cast.Pa = {
        RUNNING: "running",
        STOPPED: "stopped",
        ERROR: "error"
    };
    x("chrome.cast.DialAppState", chrome.cast.Pa);
    chrome.cast.ib = {
        CAST: "cast",
        STOP: "stop"
    };
    x("chrome.cast.ReceiverAction", chrome.cast.ib);
    chrome.cast.J = {
        CONNECTED: "connected",
        DISCONNECTED: "disconnected",
        STOPPED: "stopped"
    };
    x("chrome.cast.SessionStatus", chrome.cast.J);
    chrome.cast.Bb = {
        ATTENUATION: "attenuation",
        FIXED: "fixed",
        MASTER: "master"
    };
    x("chrome.cast.VolumeControlType", chrome.cast.Bb);
    var oa = /&/g,
        pa = /</g,
        qa = />/g,
        ra = /"/g,
        sa = /'/g,
        ta = /\x00/g,
        ua = /[\x00&<>"']/;
    /*

     Copyright Google LLC
     SPDX-License-Identifier: Apache-2.0
    */
    var va = {};

    function wa() {
        if (va !== va) throw Error("Bad secret");
    };
    var xa = globalThis.trustedTypes,
        y;

    function ya() {
        var a = null;
        if (!xa) return a;
        try {
            var b = function(c) {
                return c
            };
            a = xa.createPolicy("goog#html", {
                createHTML: b,
                createScript: b,
                createScriptURL: b
            })
        } catch (c) {
            throw c;
        }
        return a
    };
    var z = function(a) {
        wa();
        this.g = a
    };
    z.prototype.toString = function() {
        return this.g
    };
    new z("about:blank");
    new z("about:invalid#zClosurez");
    var za = [],
        Aa = function(a) {
            console.warn("A URL with content '" + a + "' was sanitized away.")
        };
    za.indexOf(Aa) === -1 && za.push(Aa);
    var A = function(a) {
        wa();
        this.g = a
    };
    A.prototype.toString = function() {
        return this.g + ""
    };
    var Ba = Array.prototype.forEach ? function(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    } : function(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    };

    function Ca(a, b) {
        for (var c = a.length, d = typeof a === "string" ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return e;
        return -1
    };
    var Da = Object.freeze || function(a) {
        return a
    };
    var Fa = function(a) {
            var b = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"'
            };
            var c = r.document.createElement("div");
            return a.replace(Ea, function(d, e) {
                var h = b[d];
                if (h) return h;
                e.charAt(0) == "#" && (e = Number("0" + e.slice(1)), isNaN(e) || (h = String.fromCharCode(e)));
                if (!h) {
                    h = d + " ";
                    y === void 0 && (y = ya());
                    e = y;
                    h = new A(e ? e.createHTML(h) : h);
                    if (c.nodeType === 1 && (e = c.tagName, /^(script|style)$/i.test(e))) throw d = e.toLowerCase() === "script" ? "Use setScriptTextContent with a SafeScript." : "Use setStyleTextContent with a SafeStyleSheet.",
                        Error(d);
                    if (h instanceof A) h = h.g;
                    else throw Error("Unexpected type when unwrapping SafeHtml");
                    c.innerHTML = h;
                    h = c.firstChild.nodeValue.slice(0, -1)
                }
                return b[d] = h
            })
        },
        Ga = function(a) {
            return a.replace(/&([^;]+);/g, function(b, c) {
                switch (c) {
                    case "amp":
                        return "&";
                    case "lt":
                        return "<";
                    case "gt":
                        return ">";
                    case "quot":
                        return '"';
                    default:
                        return c.charAt(0) != "#" || (c = Number("0" + c.slice(1)), isNaN(c)) ? b : String.fromCharCode(c)
                }
            })
        },
        Ea = /&([^;\s<&]+);?/g;
    chrome.cast.Ha = function(a, b, c, d, e) {
        this.sessionRequest = a;
        this.sessionListener = b;
        this.receiverListener = c;
        this.autoJoinPolicy = d || chrome.cast.ga.TAB_AND_ORIGIN_SCOPED;
        this.defaultActionPolicy = e || chrome.cast.ia.CREATE_SESSION;
        this.customDialLaunchCallback = null;
        this.invisibleSender = !1;
        this.additionalSessionRequests = []
    };
    x("chrome.cast.ApiConfig", chrome.cast.Ha);
    chrome.cast.Sa = function(a, b) {
        this.appName = a;
        this.launchParameter = b || null
    };
    x("chrome.cast.DialRequest", chrome.cast.Sa);
    chrome.cast.Qa = function(a, b, c) {
        this.receiver = a;
        this.appState = b;
        this.extraData = c || null
    };
    x("chrome.cast.DialLaunchData", chrome.cast.Qa);
    chrome.cast.Ra = function(a, b) {
        this.doLaunch = a;
        this.launchParameter = b || null
    };
    x("chrome.cast.DialLaunchResponse", chrome.cast.Ra);
    chrome.cast.ob = function(a, b, c, d, e) {
        c = c === void 0 ? chrome.cast.timeout.requestSession : c;
        this.appId = a;
        this.capabilities = Array.isArray(b) ? b : [];
        this.requestSessionTimeout = c;
        this.dialRequest = this.language = null;
        this.androidReceiverCompatible = d === void 0 ? !1 : d;
        this.credentialsData = e === void 0 ? null : e
    };
    x("chrome.cast.SessionRequest", chrome.cast.ob);
    chrome.cast.hb = function(a, b, c, d) {
        this.label = a;
        a = b;
        ua.test(a) && (a.indexOf("&") != -1 && (a = a.replace(oa, "&amp;")), a.indexOf("<") != -1 && (a = a.replace(pa, "&lt;")), a.indexOf(">") != -1 && (a = a.replace(qa, "&gt;")), a.indexOf('"') != -1 && (a = a.replace(ra, "&quot;")), a.indexOf("'") != -1 && (a = a.replace(sa, "&#39;")), a.indexOf("\x00") != -1 && (a = a.replace(ta, "&#0;")));
        this.friendlyName = a;
        this.capabilities = c || [];
        this.volume = d || null;
        this.receiverType = chrome.cast.wa.CAST;
        this.displayStatus = this.isActiveInput = null
    };
    x("chrome.cast.Receiver", chrome.cast.hb);
    chrome.cast.jb = function(a, b) {
        this.statusText = a;
        this.appImages = b;
        this.showStop = null
    };
    x("chrome.cast.ReceiverDisplayStatus", chrome.cast.jb);
    chrome.cast.za = function() {
        this.requestSession = 6E4;
        this.getDialAppInfo = this.sendCustomMessage = this.setReceiverVolume = this.stopSession = this.leaveSession = 3E3
    };
    x("chrome.cast.Timeout", chrome.cast.za);
    chrome.cast.timeout = new chrome.cast.za;
    x("chrome.cast.timeout", chrome.cast.timeout);
    chrome.cast.Ga = "auto-join";
    chrome.cast.bb = "cast-session_";
    chrome.cast.media.Ua = {
        SDR: "sdr",
        HDR: "hdr",
        DV: "dv"
    };
    x("chrome.cast.media.HdrType", chrome.cast.media.Ua);
    chrome.cast.media.Va = {
        AAC: "aac",
        AC3: "ac3",
        MP3: "mp3",
        TS: "ts",
        TS_AAC: "ts_aac",
        E_AC3: "e_ac3",
        FMP4: "fmp4"
    };
    x("chrome.cast.media.HlsSegmentFormat", chrome.cast.media.Va);
    chrome.cast.media.Wa = {
        MPEG2_TS: "mpeg2_ts",
        FMP4: "fmp4"
    };
    x("chrome.cast.media.HlsVideoSegmentFormat", chrome.cast.media.Wa);
    chrome.cast.media.Za = {
        PAUSE: "pause",
        SEEK: "seek",
        STREAM_VOLUME: "stream_volume",
        STREAM_MUTE: "stream_mute"
    };
    x("chrome.cast.media.MediaCommand", chrome.cast.media.Za);
    chrome.cast.media.fb = {
        ALBUM: "ALBUM",
        PLAYLIST: "PLAYLIST",
        AUDIOBOOK: "AUDIOBOOK",
        RADIO_STATION: "RADIO_STATION",
        PODCAST_SERIES: "PODCAST_SERIES",
        TV_SERIES: "TV_SERIES",
        VIDEO_PLAYLIST: "VIDEO_PLAYLIST",
        LIVE_TV: "LIVE_TV",
        MOVIE: "MOVIE"
    };
    x("chrome.cast.media.QueueType", chrome.cast.media.fb);
    chrome.cast.media.T = {
        GENERIC_CONTAINER: 0,
        AUDIOBOOK_CONTAINER: 1
    };
    x("chrome.cast.media.ContainerType", chrome.cast.media.T);
    chrome.cast.media.D = {
        GENERIC: 0,
        MOVIE: 1,
        TV_SHOW: 2,
        MUSIC_TRACK: 3,
        PHOTO: 4,
        AUDIOBOOK_CHAPTER: 5
    };
    x("chrome.cast.media.MetadataType", chrome.cast.media.D);
    chrome.cast.media.A = {
        IDLE: "IDLE",
        PLAYING: "PLAYING",
        PAUSED: "PAUSED",
        BUFFERING: "BUFFERING"
    };
    x("chrome.cast.media.PlayerState", chrome.cast.media.A);
    chrome.cast.media.U = {
        OFF: "REPEAT_OFF",
        ALL: "REPEAT_ALL",
        SINGLE: "REPEAT_SINGLE",
        ALL_AND_SHUFFLE: "REPEAT_ALL_AND_SHUFFLE"
    };
    x("chrome.cast.media.RepeatMode", chrome.cast.media.U);
    chrome.cast.media.kb = {
        PLAYBACK_START: "PLAYBACK_START",
        PLAYBACK_PAUSE: "PLAYBACK_PAUSE"
    };
    x("chrome.cast.media.ResumeState", chrome.cast.media.kb);
    chrome.cast.media.ya = {
        BUFFERED: "BUFFERED",
        LIVE: "LIVE",
        OTHER: "OTHER"
    };
    x("chrome.cast.media.StreamType", chrome.cast.media.ya);
    chrome.cast.media.Xa = {
        CANCELLED: "CANCELLED",
        INTERRUPTED: "INTERRUPTED",
        FINISHED: "FINISHED",
        ERROR: "ERROR"
    };
    x("chrome.cast.media.IdleReason", chrome.cast.media.Xa);
    chrome.cast.media.wb = {
        TEXT: "TEXT",
        AUDIO: "AUDIO",
        VIDEO: "VIDEO"
    };
    x("chrome.cast.media.TrackType", chrome.cast.media.wb);
    chrome.cast.media.tb = {
        SUBTITLES: "SUBTITLES",
        CAPTIONS: "CAPTIONS",
        DESCRIPTIONS: "DESCRIPTIONS",
        CHAPTERS: "CHAPTERS",
        METADATA: "METADATA"
    };
    x("chrome.cast.media.TextTrackType", chrome.cast.media.tb);
    chrome.cast.media.pb = {
        NONE: "NONE",
        OUTLINE: "OUTLINE",
        DROP_SHADOW: "DROP_SHADOW",
        RAISED: "RAISED",
        DEPRESSED: "DEPRESSED"
    };
    x("chrome.cast.media.TextTrackEdgeType", chrome.cast.media.pb);
    chrome.cast.media.ub = {
        NONE: "NONE",
        NORMAL: "NORMAL",
        ROUNDED_CORNERS: "ROUNDED_CORNERS"
    };
    x("chrome.cast.media.TextTrackWindowType", chrome.cast.media.ub);
    chrome.cast.media.qb = {
        SANS_SERIF: "SANS_SERIF",
        MONOSPACED_SANS_SERIF: "MONOSPACED_SANS_SERIF",
        SERIF: "SERIF",
        MONOSPACED_SERIF: "MONOSPACED_SERIF",
        CASUAL: "CASUAL",
        CURSIVE: "CURSIVE",
        SMALL_CAPITALS: "SMALL_CAPITALS"
    };
    x("chrome.cast.media.TextTrackFontGenericFamily", chrome.cast.media.qb);
    chrome.cast.media.rb = {
        NORMAL: "NORMAL",
        BOLD: "BOLD",
        BOLD_ITALIC: "BOLD_ITALIC",
        ITALIC: "ITALIC"
    };
    x("chrome.cast.media.TextTrackFontStyle", chrome.cast.media.rb);
    chrome.cast.media.xb = {
        LIKE: "LIKE",
        DISLIKE: "DISLIKE",
        FOLLOW: "FOLLOW",
        UNFOLLOW: "UNFOLLOW"
    };
    x("chrome.cast.media.UserAction", chrome.cast.media.xb);
    chrome.cast.media.ka = function() {
        this.customData = null
    };
    x("chrome.cast.media.GetStatusRequest", chrome.cast.media.ka);
    chrome.cast.media.oa = function() {
        this.customData = null
    };
    x("chrome.cast.media.PauseRequest", chrome.cast.media.oa);
    chrome.cast.media.qa = function() {
        this.customData = null
    };
    x("chrome.cast.media.PlayRequest", chrome.cast.media.qa);
    chrome.cast.media.lb = function() {
        this.customData = this.resumeState = this.currentTime = null
    };
    x("chrome.cast.media.SeekRequest", chrome.cast.media.lb);
    chrome.cast.media.xa = function() {
        this.customData = null
    };
    x("chrome.cast.media.StopRequest", chrome.cast.media.xa);
    chrome.cast.media.Cb = function(a) {
        this.volume = a;
        this.customData = null
    };
    x("chrome.cast.media.VolumeRequest", chrome.cast.media.Cb);
    chrome.cast.media.Ya = function(a) {
        this.type = "LOAD";
        this.requestId = 0;
        this.sessionId = null;
        this.media = a;
        this.activeTrackIds = null;
        this.autoplay = !0;
        this.atvCredentialsType = this.atvCredentials = this.credentialsType = this.credentials = void 0;
        this.customData = this.currentTime = null;
        this.queueData = this.playbackRate = void 0
    };
    x("chrome.cast.media.LoadRequest", chrome.cast.media.Ya);
    chrome.cast.media.Ta = function(a, b) {
        this.requestId = 0;
        this.activeTrackIds = a || null;
        this.textTrackStyle = b || null
    };
    x("chrome.cast.media.EditTracksInfoRequest", chrome.cast.media.Ta);
    chrome.cast.media.S = function(a) {
        this.containerType = a = a === void 0 ? chrome.cast.media.T.GENERIC_CONTAINER : a;
        this.containerDuration = this.containerImages = this.sections = this.title = void 0
    };
    x("chrome.cast.media.ContainerMetadata", chrome.cast.media.S);
    chrome.cast.media.MediaMetadata = function(a) {
        this.metadataType = this.type = a;
        this.queueItemId = this.sectionStartTimeInContainer = this.sectionStartAbsoluteTime = this.sectionStartTimeInMedia = this.sectionDuration = void 0
    };
    x("chrome.cast.media.MediaMetadata", chrome.cast.media.MediaMetadata);
    chrome.cast.media.ja = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.D.GENERIC);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.title = void 0
    };
    p(chrome.cast.media.ja, chrome.cast.media.MediaMetadata);
    x("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.ja);
    chrome.cast.media.ma = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.D.MOVIE);
        this.releaseDate = this.releaseYear = this.images = this.subtitle = this.studio = this.title = void 0
    };
    p(chrome.cast.media.ma, chrome.cast.media.MediaMetadata);
    x("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.ma);
    chrome.cast.media.Aa = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.D.TV_SHOW);
        this.originalAirdate = this.releaseYear = this.images = this.episode = this.episodeNumber = this.season = this.seasonNumber = this.episodeTitle = this.title = this.seriesTitle = void 0
    };
    p(chrome.cast.media.Aa, chrome.cast.media.MediaMetadata);
    x("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.Aa);
    chrome.cast.media.na = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.D.MUSIC_TRACK);
        this.releaseDate = this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.composer = this.artist = this.albumArtist = this.title = this.albumName = void 0
    };
    p(chrome.cast.media.na, chrome.cast.media.MediaMetadata);
    x("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.na);
    chrome.cast.media.pa = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.D.PHOTO);
        this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = void 0
    };
    p(chrome.cast.media.pa, chrome.cast.media.MediaMetadata);
    x("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.pa);
    chrome.cast.media.fa = function() {
        chrome.cast.media.S.call(this, chrome.cast.media.T.AUDIOBOOK_CONTAINER);
        this.releaseDate = this.publisher = this.narrators = this.authors = void 0
    };
    p(chrome.cast.media.fa, chrome.cast.media.S);
    x("chrome.cast.media.AudiobookContainerMetadata", chrome.cast.media.fa);
    chrome.cast.media.ea = function() {
        chrome.cast.media.MediaMetadata.call(this, chrome.cast.media.D.AUDIOBOOK_CHAPTER);
        this.images = this.subtitle = this.bookTitle = this.chapterNumber = this.title = this.chapterTitle = void 0
    };
    p(chrome.cast.media.ea, chrome.cast.media.MediaMetadata);
    x("chrome.cast.media.AudiobookChapterMediaMetadata", chrome.cast.media.ea);
    chrome.cast.media.ab = function(a, b) {
        this.contentId = a;
        this.contentUrl = void 0;
        this.streamType = chrome.cast.media.ya.BUFFERED;
        this.contentType = b === void 0 ? "" : b;
        this.metadata = null;
        this.atvEntity = this.entity = void 0;
        this.duration = null;
        this.startAbsoluteTime = void 0;
        this.customData = this.textTrackStyle = this.tracks = null;
        this.userActionStates = this.hlsVideoSegmentFormat = this.hlsSegmentFormat = this.vmapAdsRequest = this.breakClips = this.breaks = void 0
    };
    x("chrome.cast.media.MediaInfo", chrome.cast.media.ab);
    chrome.cast.media.sa = function(a) {
        this.itemId = null;
        this.media = a;
        this.autoplay = !0;
        this.startTime = 0;
        this.playbackDuration = null;
        this.preloadTime = 0;
        this.customData = this.activeTrackIds = null
    };
    x("chrome.cast.media.QueueItem", chrome.cast.media.sa);
    chrome.cast.media.Oa = "CC1AD845";
    x("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.Oa);
    chrome.cast.media.timeout = {};
    chrome.cast.media.timeout.load = 0;
    x("chrome.cast.media.timeout.load", chrome.cast.media.timeout.load);
    chrome.cast.media.timeout.O = 0;
    x("chrome.cast.media.timeout.getStatus", chrome.cast.media.timeout.O);
    chrome.cast.media.timeout.play = 0;
    x("chrome.cast.media.timeout.play", chrome.cast.media.timeout.play);
    chrome.cast.media.timeout.pause = 0;
    x("chrome.cast.media.timeout.pause", chrome.cast.media.timeout.pause);
    chrome.cast.media.timeout.seek = 0;
    x("chrome.cast.media.timeout.seek", chrome.cast.media.timeout.seek);
    chrome.cast.media.timeout.stop = 0;
    x("chrome.cast.media.timeout.stop", chrome.cast.media.timeout.stop);
    chrome.cast.media.timeout.P = 0;
    x("chrome.cast.media.timeout.setVolume", chrome.cast.media.timeout.P);
    chrome.cast.media.timeout.N = 0;
    x("chrome.cast.media.timeout.editTracksInfo", chrome.cast.media.timeout.N);
    chrome.cast.media.timeout.u = 0;
    x("chrome.cast.media.timeout.queue", chrome.cast.media.timeout.u);
    chrome.cast.media.vb = function(a, b) {
        this.trackId = a;
        this.trackContentType = this.trackContentId = null;
        this.type = b;
        this.customData = this.subtype = this.language = this.name = null
    };
    x("chrome.cast.media.Track", chrome.cast.media.vb);
    chrome.cast.media.sb = function() {
        this.customData = this.fontStyle = this.fontGenericFamily = this.fontFamily = this.fontScale = this.windowRoundedCornerRadius = this.windowColor = this.windowType = this.edgeColor = this.edgeType = this.backgroundColor = this.foregroundColor = null
    };
    x("chrome.cast.media.TextTrackStyle", chrome.cast.media.sb);
    chrome.cast.media.eb = function(a) {
        this.type = "QUEUE_LOAD";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.startIndex = 0;
        this.repeatMode = chrome.cast.media.U.OFF;
        this.customData = null
    };
    x("chrome.cast.media.QueueLoadRequest", chrome.cast.media.eb);
    chrome.cast.media.ra = function(a) {
        this.type = "QUEUE_INSERT";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.customData = this.insertBefore = null
    };
    x("chrome.cast.media.QueueInsertItemsRequest", chrome.cast.media.ra);
    chrome.cast.media.gb = function(a) {
        this.type = "QUEUE_UPDATE";
        this.sessionId = this.requestId = null;
        this.items = a;
        this.customData = null
    };
    x("chrome.cast.media.QueueUpdateItemsRequest", chrome.cast.media.gb);
    chrome.cast.media.L = function() {
        this.type = "QUEUE_UPDATE";
        this.customData = this.jump = this.currentItemId = this.sessionId = this.requestId = null
    };
    x("chrome.cast.media.QueueJumpRequest", chrome.cast.media.L);
    chrome.cast.media.va = function() {
        this.type = "QUEUE_UPDATE";
        this.customData = this.repeatMode = this.sessionId = this.requestId = null
    };
    x("chrome.cast.media.QueueSetPropertiesRequest", chrome.cast.media.va);
    chrome.cast.media.ta = function(a) {
        this.type = "QUEUE_REMOVE";
        this.sessionId = this.requestId = null;
        this.itemIds = a;
        this.customData = null
    };
    x("chrome.cast.media.QueueRemoveItemsRequest", chrome.cast.media.ta);
    chrome.cast.media.ua = function(a) {
        this.type = "QUEUE_REORDER";
        this.sessionId = this.requestId = null;
        this.itemIds = a;
        this.customData = this.insertBefore = null
    };
    x("chrome.cast.media.QueueReorderItemsRequest", chrome.cast.media.ua);
    chrome.cast.media.Ia = function(a, b, c) {
        this.id = a;
        this.breakClipIds = b;
        this.position = c;
        this.duration = void 0;
        this.isWatched = !1;
        this.isEmbedded = void 0
    };
    x("chrome.cast.media.Break", chrome.cast.media.Ia);
    chrome.cast.media.Ja = function(a) {
        this.id = a;
        this.vastAdsRequest = this.customData = this.hlsSegmentFormat = this.clickThroughUrl = this.posterUrl = this.whenSkippable = this.duration = this.title = this.contentType = this.contentUrl = this.contentId = void 0
    };
    x("chrome.cast.media.BreakClip", chrome.cast.media.Ja);
    chrome.cast.media.zb = function() {
        this.adsResponse = this.adTagUrl = void 0
    };
    x("chrome.cast.media.VastAdsRequest", chrome.cast.media.zb);
    chrome.cast.media.Ka = function() {
        this.whenSkippable = this.breakClipId = this.breakId = this.currentBreakClipTime = this.currentBreakTime = void 0
    };
    x("chrome.cast.media.BreakStatus", chrome.cast.media.Ka);
    chrome.cast.media.la = function(a, b, c, d) {
        this.start = a;
        this.end = b;
        this.isMovingWindow = c;
        this.isLiveDone = d
    };
    x("chrome.cast.media.LiveSeekableRange", chrome.cast.media.la);
    chrome.cast.media.cb = function(a, b, c, d, e, h, k) {
        this.id = a;
        this.queueType = this.entity = void 0;
        this.name = b;
        this.description = c;
        this.repeatMode = d;
        this.shuffle = !1;
        this.items = e;
        this.startIndex = h;
        this.startTime = k;
        this.containerMetadata = void 0
    };
    x("chrome.cast.media.QueueData", chrome.cast.media.cb);
    chrome.cast.media.yb = function(a) {
        this.userAction = a;
        this.customData = void 0
    };
    x("chrome.cast.media.UserActionState", chrome.cast.media.yb);
    chrome.cast.media.Ab = function(a, b, c) {
        this.width = a;
        this.height = b;
        this.hdrType = c
    };
    x("chrome.cast.media.VideoInformation", chrome.cast.media.Ab);
    var B = null;
    chrome.cast.media.h = function(a, b) {
        this.sessionId = a;
        this.mediaSessionId = b;
        this.media = null;
        this.videoInfo = this.queueData = void 0;
        this.playbackRate = 1;
        this.playerState = chrome.cast.media.A.IDLE;
        this.currentTime = 0;
        this.g = -1;
        this.supportedMediaCommands = [];
        this.volume = new chrome.cast.Volume;
        this.items = this.preloadedItemId = this.loadingItemId = this.currentItemId = this.customData = this.activeTrackIds = this.idleReason = null;
        this.repeatMode = chrome.cast.media.U.OFF;
        this.breakStatus = void 0;
        this.l = !1;
        this.i = [];
        this.liveSeekableRange =
            void 0
    };
    f = chrome.cast.media.h.prototype;
    f.O = function(a, b, c) {
        a || (a = new chrome.cast.media.ka);
        B.m(this, "MEDIA_GET_STATUS", a, b, c, chrome.cast.media.timeout.O)
    };
    f.play = function(a, b, c) {
        var d = B;
        a || (a = new chrome.cast.media.qa);
        d.m(this, "PLAY", a, b, c, chrome.cast.media.timeout.play)
    };
    f.pause = function(a, b, c) {
        var d = B;
        a || (a = new chrome.cast.media.oa);
        d.m(this, "PAUSE", a, b, c, chrome.cast.media.timeout.pause)
    };
    f.seek = function(a, b, c) {
        B.m(this, "SEEK", a, b, c, chrome.cast.media.timeout.seek)
    };
    f.stop = function(a, b, c) {
        a || (a = new chrome.cast.media.xa);
        B.m(this, "STOP_MEDIA", a, b, c, chrome.cast.media.timeout.stop)
    };
    f.P = function(a, b, c) {
        B.m(this, "MEDIA_SET_VOLUME", a, b, c, chrome.cast.media.timeout.P)
    };
    f.N = function(a, b, c) {
        B.m(this, "EDIT_TRACKS_INFO", a, b, c, chrome.cast.media.timeout.N)
    };
    f.Rb = function(a, b, c) {
        B.m(this, "QUEUE_INSERT", a, b, c, chrome.cast.media.timeout.u)
    };
    f.Qb = function(a, b, c) {
        B.m(this, "QUEUE_INSERT", new chrome.cast.media.ra([a]), b, c, chrome.cast.media.timeout.u)
    };
    f.bc = function(a, b, c) {
        B.m(this, "QUEUE_UPDATE", a, b, c, chrome.cast.media.timeout.u)
    };
    f.Wb = function(a, b) {
        var c = new chrome.cast.media.L;
        c.jump = -1;
        B.m(this, "QUEUE_UPDATE", c, a, b, chrome.cast.media.timeout.u)
    };
    f.Vb = function(a, b) {
        var c = new chrome.cast.media.L;
        c.jump = 1;
        B.m(this, "QUEUE_UPDATE", c, a, b, chrome.cast.media.timeout.u)
    };
    f.Sb = function(a, b, c) {
        if (!(C(this, a) < 0)) {
            var d = new chrome.cast.media.L;
            d.currentItemId = a;
            B.m(this, "QUEUE_UPDATE", d, b, c, chrome.cast.media.timeout.u)
        }
    };
    f.ac = function(a, b, c) {
        var d = new chrome.cast.media.va;
        d.repeatMode = a;
        B.m(this, "QUEUE_UPDATE", d, b, c, chrome.cast.media.timeout.u)
    };
    f.Yb = function(a, b, c) {
        B.m(this, "QUEUE_REMOVE", a, b, c, chrome.cast.media.timeout.u)
    };
    f.Xb = function(a, b, c) {
        C(this, a) < 0 || B.m(this, "QUEUE_REMOVE", new chrome.cast.media.ta([a]), b, c, chrome.cast.media.timeout.u)
    };
    f.Zb = function(a, b, c) {
        B.m(this, "QUEUE_REORDER", a, b, c, chrome.cast.media.timeout.u)
    };
    f.Ub = function(a, b, c, d) {
        var e = C(this, a);
        if (!(e < 0))
            if (b < 0) d && d(new chrome.cast.Error(chrome.cast.v.INVALID_PARAMETER));
            else if (e == b) c && c();
        else {
            var h = null;
            b = b > e ? b + 1 : b;
            b < this.items.length && (h = this.items[b]);
            a = new chrome.cast.media.ua([a]);
            a.insertBefore = h ? h.itemId : null;
            B.m(this, "QUEUE_REORDER", a, c, d, chrome.cast.media.timeout.u)
        }
    };
    f.mc = function(a) {
        return this.supportedMediaCommands.indexOf(a) > -1
    };
    f.Lb = function() {
        if (this.playerState == chrome.cast.media.A.PLAYING && this.g >= 0) {
            var a = this.currentTime + (Date.now() - this.g) / 1E3 * this.playbackRate;
            this.media && this.media.duration != null && a > this.media.duration && this.media.duration != -1 && (a = this.media.duration);
            a < 0 && (a = 0);
            return a
        }
        return this.currentTime
    };
    f.Jb = function() {
        if (this.breakStatus && this.breakStatus.currentBreakTime !== void 0) return this.playerState == chrome.cast.media.A.PLAYING && this.g >= 0 ? this.breakStatus.currentBreakTime + (Date.now() - this.g) / 1E3 : this.breakStatus.currentBreakTime
    };
    f.Ib = function() {
        if (this.breakStatus && this.breakStatus.currentBreakClipTime !== void 0) return this.playerState == chrome.cast.media.A.PLAYING && this.g >= 0 ? this.breakStatus.currentBreakClipTime + (Date.now() - this.g) / 1E3 : this.breakStatus.currentBreakClipTime
    };
    f.Kb = function() {
        if (this.liveSeekableRange && this.liveSeekableRange.start !== void 0 && this.liveSeekableRange.end !== void 0) {
            if (this.playerState == chrome.cast.media.A.PLAYING && this.g >= 0) {
                var a = (Date.now() - this.g) / 1E3,
                    b = new chrome.cast.media.la;
                b.isMovingWindow = this.liveSeekableRange.isMovingWindow;
                b.isLiveDone = this.liveSeekableRange.isLiveDone;
                b.start = b.isMovingWindow ? this.liveSeekableRange.start + a : this.liveSeekableRange.start;
                b.end = b.isLiveDone ? this.liveSeekableRange.end : this.liveSeekableRange.end + a;
                return b
            }
            return this.liveSeekableRange
        }
    };
    f.X = function(a) {
        B.Eb(this, a)
    };
    f.aa = function(a) {
        B.dc(this, a)
    };
    var C = function(a, b) {
        return Ca(a.items, function(c) {
            return c.itemId == b
        })
    };
    x("chrome.cast.media.Media", chrome.cast.media.h);
    chrome.cast.media.h.prototype.removeUpdateListener = chrome.cast.media.h.prototype.aa;
    chrome.cast.media.h.prototype.addUpdateListener = chrome.cast.media.h.prototype.X;
    chrome.cast.media.h.prototype.getEstimatedLiveSeekableRange = chrome.cast.media.h.prototype.Kb;
    chrome.cast.media.h.prototype.getEstimatedBreakClipTime = chrome.cast.media.h.prototype.Ib;
    chrome.cast.media.h.prototype.getEstimatedBreakTime = chrome.cast.media.h.prototype.Jb;
    chrome.cast.media.h.prototype.getEstimatedTime = chrome.cast.media.h.prototype.Lb;
    chrome.cast.media.h.prototype.supportsCommand = chrome.cast.media.h.prototype.mc;
    chrome.cast.media.h.prototype.queueMoveItemToNewIndex = chrome.cast.media.h.prototype.Ub;
    chrome.cast.media.h.prototype.queueReorderItems = chrome.cast.media.h.prototype.Zb;
    chrome.cast.media.h.prototype.queueRemoveItem = chrome.cast.media.h.prototype.Xb;
    chrome.cast.media.h.prototype.queueRemoveItems = chrome.cast.media.h.prototype.Yb;
    chrome.cast.media.h.prototype.queueSetRepeatMode = chrome.cast.media.h.prototype.ac;
    chrome.cast.media.h.prototype.queueJumpToItem = chrome.cast.media.h.prototype.Sb;
    chrome.cast.media.h.prototype.queueNext = chrome.cast.media.h.prototype.Vb;
    chrome.cast.media.h.prototype.queuePrev = chrome.cast.media.h.prototype.Wb;
    chrome.cast.media.h.prototype.queueUpdateItems = chrome.cast.media.h.prototype.bc;
    chrome.cast.media.h.prototype.queueAppendItem = chrome.cast.media.h.prototype.Qb;
    chrome.cast.media.h.prototype.queueInsertItems = chrome.cast.media.h.prototype.Rb;
    chrome.cast.media.h.prototype.editTracksInfo = chrome.cast.media.h.prototype.N;
    chrome.cast.media.h.prototype.setVolume = chrome.cast.media.h.prototype.P;
    chrome.cast.media.h.prototype.stop = chrome.cast.media.h.prototype.stop;
    chrome.cast.media.h.prototype.seek = chrome.cast.media.h.prototype.seek;
    chrome.cast.media.h.prototype.pause = chrome.cast.media.h.prototype.pause;
    chrome.cast.media.h.prototype.play = chrome.cast.media.h.prototype.play;
    chrome.cast.media.h.prototype.getStatus = chrome.cast.media.h.prototype.O;
    var Ha = function(a, b, c) {
        this.sessionId = a;
        this.namespaceName = b;
        this.message = c
    };
    var Ia = function(a, b) {
        this.type = "SET_VOLUME";
        this.requestId = 0;
        this.volume = a;
        this.expectedVolume = b || null
    };
    var Ja = function(a) {
        this.type = "STOP";
        this.requestId = 0;
        this.sessionId = a || null
    };
    chrome.cast.j = function(a, b, c, d, e) {
        this.sessionId = a;
        this.appId = b;
        this.displayName = c;
        this.statusText = null;
        this.appImages = d;
        this.receiver = e;
        this.senderApps = [];
        this.namespaces = [];
        this.media = [];
        this.status = chrome.cast.J.CONNECTED;
        this.transportId = ""
    };
    f = chrome.cast.j.prototype;
    f.lc = function(a, b, c) {
        var d = B;
        a = new Ia(new chrome.cast.Volume(a, null), this.receiver.volume);
        d.setReceiverVolume(this.sessionId, a, b, c)
    };
    f.kc = function(a, b, c) {
        a = new Ia(new chrome.cast.Volume(null, a), this.receiver.volume);
        B.setReceiverVolume(this.sessionId, a, b, c)
    };
    f.getDialAppInfo = function(a, b) {
        B.getDialAppInfo(a, b)
    };
    f.Mb = function(a, b) {
        B.leaveSession(this.sessionId, a, b)
    };
    f.stop = function(a, b) {
        B.Ca(new Ja(this.sessionId), a, b, chrome.cast.timeout.stopSession)
    };
    f.sendMessage = function(a, b, c, d) {
        B.hc(new Ha(this.sessionId, a, b), c, d)
    };
    f.X = function(a) {
        B.Gb(this.sessionId, a)
    };
    f.aa = function(a) {
        B.fc(this.sessionId, a)
    };
    f.Fb = function(a, b) {
        B.Db(this.sessionId, a, b)
    };
    f.V = function(a) {
        B.V(this.sessionId, a)
    };
    f.Y = function(a) {
        B.Y(this.sessionId, a)
    };
    f.ec = function(a, b) {
        B.cc(this.sessionId, a, b)
    };
    f.Nb = function(a, b, c) {
        a.sessionId = this.sessionId;
        B.Da(a, "LOAD", b, c)
    };
    f.Tb = function(a, b, c) {
        a.sessionId = this.sessionId;
        B.Da(a, "QUEUE_LOAD", b, c)
    };
    x("chrome.cast.Session", chrome.cast.j);
    chrome.cast.j.prototype.queueLoad = chrome.cast.j.prototype.Tb;
    chrome.cast.j.prototype.loadMedia = chrome.cast.j.prototype.Nb;
    chrome.cast.j.prototype.removeMessageListener = chrome.cast.j.prototype.ec;
    chrome.cast.j.prototype.removeMediaListener = chrome.cast.j.prototype.Y;
    chrome.cast.j.prototype.addMediaListener = chrome.cast.j.prototype.V;
    chrome.cast.j.prototype.addMessageListener = chrome.cast.j.prototype.Fb;
    chrome.cast.j.prototype.removeUpdateListener = chrome.cast.j.prototype.aa;
    chrome.cast.j.prototype.addUpdateListener = chrome.cast.j.prototype.X;
    chrome.cast.j.prototype.sendMessage = chrome.cast.j.prototype.sendMessage;
    chrome.cast.j.prototype.stop = chrome.cast.j.prototype.stop;
    chrome.cast.j.prototype.leave = chrome.cast.j.prototype.Mb;
    chrome.cast.j.prototype.getDialAppInfo = chrome.cast.j.prototype.getDialAppInfo;
    chrome.cast.j.prototype.setReceiverMuted = chrome.cast.j.prototype.kc;
    chrome.cast.j.prototype.setReceiverVolumeLevel = chrome.cast.j.prototype.lc;
    var Ka = function(a, b) {
        this.g = a[r.Symbol.iterator]();
        this.i = b
    };
    Ka.prototype[Symbol.iterator] = function() {
        return this
    };
    Ka.prototype.next = function() {
        var a = this.g.next();
        return {
            value: a.done ? void 0 : this.i.call(void 0, a.value),
            done: a.done
        }
    };
    var La = function(a, b) {
        return new Ka(a, b)
    };
    var D = function() {};
    D.prototype.next = function() {
        return Ma
    };
    var Ma = Da({
        done: !0,
        value: void 0
    });
    D.prototype.o = function() {
        return this
    };
    var Na = function(a) {
            if (a instanceof D) return a;
            if (typeof a.o == "function") return a.o(!1);
            if (t(a)) {
                var b = 0,
                    c = new D;
                c.next = function() {
                    for (;;) {
                        if (b >= a.length) return Ma;
                        if (b in a) return {
                            value: a[b++],
                            done: !1
                        };
                        b++
                    }
                };
                return c
            }
            throw Error("Not implemented");
        },
        E = function(a, b) {
            if (t(a)) Ba(a, b);
            else
                for (a = Na(a);;) {
                    var c = a.next();
                    if (c.done) break;
                    b.call(void 0, c.value, void 0, a)
                }
        };
    var Oa = function(a) {
            if (a instanceof F || a instanceof G || a instanceof H) return a;
            if (typeof a.next == "function") return new F(function() {
                return a
            });
            if (typeof a[Symbol.iterator] == "function") return new F(function() {
                return a[Symbol.iterator]()
            });
            if (typeof a.o == "function") return new F(function() {
                return a.o()
            });
            throw Error("Not an iterator or iterable.");
        },
        F = function(a) {
            this.g = a
        };
    F.prototype.o = function() {
        return new G(this.g())
    };
    F.prototype[Symbol.iterator] = function() {
        return new H(this.g())
    };
    F.prototype.i = function() {
        return new H(this.g())
    };
    var G = function(a) {
        this.g = a
    };
    p(G, D);
    G.prototype.next = function() {
        return this.g.next()
    };
    G.prototype[Symbol.iterator] = function() {
        return new H(this.g)
    };
    G.prototype.i = function() {
        return new H(this.g)
    };
    var H = function(a) {
        F.call(this, function() {
            return a
        });
        this.l = a
    };
    p(H, F);
    H.prototype.next = function() {
        return this.l.next()
    };
    var I = function(a, b) {
        this.i = {};
        this.g = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (c > 1) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof I)
                for (c = Pa(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    };
    I.prototype.K = function() {
        J(this);
        for (var a = [], b = 0; b < this.g.length; b++) a.push(this.i[this.g[b]]);
        return a
    };
    var Pa = function(a) {
        J(a);
        return a.g.concat()
    };
    I.prototype.has = function(a) {
        return K(this.i, a)
    };
    I.prototype.clear = function() {
        this.i = {};
        this.l = this.size = this.g.length = 0
    };
    I.prototype.remove = function(a) {
        return this.delete(a)
    };
    I.prototype.delete = function(a) {
        return K(this.i, a) ? (delete this.i[a], --this.size, this.l++, this.g.length > 2 * this.size && J(this), !0) : !1
    };
    var J = function(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                K(a.i, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            b = {};
            for (d = c = 0; c < a.g.length;) {
                var e = a.g[c];
                K(b, e) || (a.g[d++] = e, b[e] = 1);
                c++
            }
            a.g.length = d
        }
    };
    f = I.prototype;
    f.get = function(a, b) {
        return K(this.i, a) ? this.i[a] : b
    };
    f.set = function(a, b) {
        K(this.i, a) || (this.size += 1, this.g.push(a), this.l++);
        this.i[a] = b
    };
    f.forEach = function(a, b) {
        for (var c = Pa(this), d = 0; d < c.length; d++) {
            var e = c[d],
                h = this.get(e);
            a.call(b, h, e, this)
        }
    };
    f.keys = function() {
        return Oa(this.o(!0)).i()
    };
    f.values = function() {
        return Oa(this.o(!1)).i()
    };
    f.entries = function() {
        var a = this;
        return La(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    f.o = function(a) {
        J(this);
        var b = 0,
            c = this.l,
            d = this,
            e = new D;
        e.next = function() {
            if (c != d.l) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) return Ma;
            var h = d.g[b++];
            return {
                value: a ? h : d.i[h],
                done: !1
            }
        };
        return e
    };
    var K = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var Qa = function(a, b) {
        this.requestId = a;
        this.s = b;
        this.Fa = null
    };
    Qa.prototype.i = function() {};
    var Ra = function() {
            this.g = new I
        },
        Sa = function(a, b) {
            a.g.set(b.requestId, b);
            b.Fa = setTimeout(function() {
                a.g.delete(b.requestId);
                b.i()
            }, b.s)
        },
        Ta = function(a, b) {
            var c = a.g.get(b);
            if (!c) return null;
            clearTimeout(c.Fa);
            a.g.delete(b);
            return c
        };
    var L = function(a, b, c, d) {
        Qa.call(this, a, d || 6E5);
        this.l = b;
        this.g = c
    };
    p(L, Qa);
    L.prototype.i = function() {
        this.g(new chrome.cast.Error(chrome.cast.v.TIMEOUT))
    };
    var M = function(a, b, c, d) {
        this.type = a;
        this.message = b;
        this.sequenceNumber = c !== void 0 ? c : -1;
        this.timeoutMillis = d || 0;
        this.clientId = ""
    };
    var N = function(a) {
            this.l = a;
            this.i = String(Date.now()) + String(Math.floor(Math.random() * 1E5));
            this.g = null
        },
        Ua = function(a, b) {
            if (!a.g) return "No active session";
            b.clientId = a.i;
            b = JSON.stringify(b);
            if (b.length > 32768) return "Message length over limit";
            a.g.send(b);
            return null
        };
    N.prototype.connect = function(a) {
        this.g = a;
        this.g.onmessage = w(this.s, this);
        Ua(this, new M("client_connect", this.i))
    };
    N.prototype.disconnect = function() {
        this.g.close();
        this.g = null
    };
    N.prototype.s = function(a) {
        a = JSON.parse(a.data);
        if (a.clientId == this.i) this.l.onMessage(a)
    };
    var Va = function(a, b, c) {
            this.l = a;
            this.i = b;
            this.g = c
        },
        Wa = function(a) {
            var b = "cast-dial:" + a.l,
                c = new URLSearchParams;
            a.i && c.set("dialPostData", a.i);
            a.g && c.set("clientId", a.g);
            (a = c.toString()) && (b += "?" + a);
            return b
        };
    var Xa = function(a, b, c, d, e, h, k, m, q, v) {
            this.G = a;
            this.g = b || null;
            this.l = c || null;
            this.B = d || null;
            this.C = e !== void 0 ? e : null;
            this.i = h || null;
            this.F = k || null;
            this.H = m || !1;
            this.I = q ? ["WEB", "ANDROID_TV"] : ["WEB"];
            this.s = v || null
        },
        Ya = function(a) {
            var b = a.G.map(function(c) {
                var d = "cast:" + c.appId,
                    e = new URLSearchParams;
                c.capabilities && c.capabilities.length > 0 && e.set("capabilities", c.capabilities.join(","));
                a.g && e.set("clientId", a.g);
                a.l && e.set("autoJoinPolicy", a.l);
                a.B && e.set("defaultActionPolicy", a.B);
                a.C != null && e.set("launchTimeout",
                    String(a.C));
                a.H && e.set("invisibleSender", "true");
                e.set("supportedAppTypes", a.I.join(","));
                c = e.set;
                var h = JSON,
                    k = h.stringify,
                    m = {
                        launchCheckerParams: {}
                    };
                a.s && (m.launchCheckerParams.credentialsData = a.s);
                c.call(e, "appParams", k.call(h, m));
                return d + "?" + e.toString()
            });
            a.i && b.push(Wa(new Va(a.i, a.F, a.g)));
            return b
        };
    var Za = function() {
            this.g = {};
            this.i = {}
        },
        $a = function(a, b, c) {
            var d = a.g[b];
            return d ? (d.status = c, d.media.forEach(function(e) {
                delete a.i[e.sessionId + "#" + e.mediaSessionId]
            }), delete a.g[b], !0) : !1
        },
        bb = function(a, b) {
            var c = a.g[b.sessionId];
            if (c) return c.statusText = b.statusText, c.namespaces = b.namespaces || [], c.receiver.volume = b.receiver.volume, c;
            c = new chrome.cast.j(b.sessionId, b.appId, b.displayName, b.appImages, b.receiver);
            for (var d in b) d == "media" ? c.media = b.media.map(function(e) {
                    e = ab(a, e);
                    e.s = !1;
                    e.l = !0;
                    return e
                }) :
                b.hasOwnProperty(d) && (c[d] = b[d]);
            return a.g[b.sessionId] = c
        },
        ab = function(a, b) {
            var c = b.sessionId + "#" + b.mediaSessionId,
                d = a.i[c];
            d || (d = new chrome.cast.media.h(b.sessionId, b.mediaSessionId), a.i[c] = d, (a = a.g[b.sessionId]) && a.media.push(d));
            a = d;
            a.currentItemId = null;
            a.loadingItemId = null;
            a.preloadedItemId = null;
            for (var e in b) e != "items" && b.hasOwnProperty(e) && (e == "volume" ? (a.volume.level = b.volume.level, a.volume.muted = b.volume.muted) : a[e] = b[e]);
            e = ka(["idleReason", "extendedStatus", "breakStatus"]);
            for (c = e.next(); !c.done; c =
                e.next()) c = c.value, b.hasOwnProperty(c) || (a[c] = null);
            "currentTime" in b && (a.g = Date.now());
            if (a.playerState == chrome.cast.media.A.IDLE && a.loadingItemId == null) a.currentItemId = null, a.loadingItemId = null, a.preloadedItemId = null, a.items = null;
            else if (b.hasOwnProperty("items") && b.items) {
                e = [];
                var h = a.items;
                c = {};
                if (h)
                    for (var k = 0; k < h.length; k++) c[h[k].itemId] = k;
                b = ka(b.items);
                for (h = b.next(); !h.done; h = b.next()) {
                    h = h.value;
                    if (!h.media) {
                        k = h.itemId;
                        var m = a.items ? a.items[c[k]] : null;
                        m && m.media ? h.media = m.media : k == a.currentItemId &&
                            a.media && (h.media = a.media)
                    }
                    k = e;
                    m = k.push;
                    var q = void 0,
                        v = new chrome.cast.media.sa(h.media);
                    for (q in h) h.hasOwnProperty(q) && (v[q] = h[q]);
                    m.call(k, v)
                }
                a.items = e
            }
            return d
        },
        cb = function(a, b) {
            delete a.i[b.sessionId + "#" + b.mediaSessionId];
            if (a = a.g[b.sessionId]) b = a.media.indexOf(b), b != -1 && a.media.splice(b, 1)
        };
    var db, O;
    a: {
        for (var eb = ["CLOSURE_FLAGS"], P = r, fb = 0; fb < eb.length; fb++)
            if (P = P[eb[fb]], P == null) {
                O = null;
                break a
            }
        O = P
    }
    var gb = O && O[610401301];
    db = gb != null ? gb : !1;

    function hb() {
        var a = r.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Q, ib = r.navigator;
    Q = ib ? ib.userAgentData || null : null;

    function jb(a) {
        return db ? Q ? Q.brands.some(function(b) {
            return (b = b.brand) && b.indexOf(a) != -1
        }) : !1 : !1
    }

    function R(a) {
        return hb().indexOf(a) != -1
    };

    function S() {
        return db ? !!Q && Q.brands.length > 0 : !1
    }

    function kb() {
        return S() ? jb("Chromium") : (R("Chrome") || R("CriOS")) && !(S() ? 0 : R("Edge")) || R("Silk")
    };
    var lb = R("Gecko") && !(hb().toLowerCase().indexOf("webkit") != -1 && !R("Edge")) && !(R("Trident") || R("MSIE")) && !R("Edge"),
        mb = hb().toLowerCase().indexOf("webkit") != -1 && !R("Edge");
    !R("Android") || kb();
    kb();
    R("Safari") && (kb() || (S() ? 0 : R("Coast")) || (S() ? 0 : R("Opera")) || (S() ? 0 : R("Edge")) || (S() ? jb("Microsoft Edge") : R("Edg/")) || S() && jb("Opera"));
    var nb = {},
        T = null,
        ob = lb || mb || typeof r.btoa == "function",
        pb = function(a) {
            if (ob) var b = r.btoa(a);
            else {
                b = [];
                for (var c = 0, d = 0; d < a.length; d++) {
                    var e = a.charCodeAt(d);
                    if (e > 255) throw Error("go/unicode-to-byte-error");
                    b[c++] = e
                }
                a = void 0;
                a === void 0 && (a = 0);
                if (!T)
                    for (T = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; e < 5; e++) {
                        var h = c.concat(d[e].split(""));
                        nb[e] = h;
                        for (var k = 0; k < h.length; k++) {
                            var m = h[k];
                            T[m] === void 0 && (T[m] = k)
                        }
                    }
                a = nb[a];
                c = Array(Math.floor(b.length /
                    3));
                d = a[64] || "";
                for (e = h = 0; h < b.length - 2; h += 3) {
                    var q = b[h],
                        v = b[h + 1];
                    m = b[h + 2];
                    k = a[q >> 2];
                    q = a[(q & 3) << 4 | v >> 4];
                    v = a[(v & 15) << 2 | m >> 6];
                    m = a[m & 63];
                    c[e++] = "" + k + q + v + m
                }
                k = 0;
                m = d;
                switch (b.length - h) {
                    case 2:
                        k = b[h + 1], m = a[(k & 15) << 2] || d;
                    case 1:
                        b = b[h], c[e] = "" + a[b >> 2] + a[(b & 3) << 4 | k >> 4] + m + d
                }
                b = c.join("")
            }
            return b
        };
    var qb = function(a) {
        if (a.K && typeof a.K == "function") return a.K();
        if (typeof Map !== "undefined" && a instanceof Map || typeof Set !== "undefined" && a instanceof Set) return Array.from(a.values());
        if (typeof a === "string") return a.split("");
        if (t(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
            return b
        }
        b = [];
        c = 0;
        for (d in a) b[c++] = a[d];
        return b
    };
    var U = function() {
            this.g = new I;
            this.size = 0
        },
        V = function(a) {
            var b = typeof a;
            return b == "object" && a || b == "function" ? "o" + (Object.prototype.hasOwnProperty.call(a, u) && a[u] || (a[u] = ++la)) : b.slice(0, 1) + a
        };
    f = U.prototype;
    f.add = function(a) {
        this.g.set(V(a), a);
        this.size = this.g.size
    };
    f.removeAll = function(a) {
        a = qb(a);
        for (var b = a.length, c = 0; c < b; c++) this.remove(a[c]);
        this.size = this.g.size
    };
    f.delete = function(a) {
        a = this.g.remove(V(a));
        this.size = this.g.size;
        return a
    };
    f.remove = function(a) {
        return this.delete(a)
    };
    f.clear = function() {
        this.g.clear();
        this.size = 0
    };
    f.has = function(a) {
        var b = this.g;
        a = V(a);
        return b.has(a)
    };
    f.contains = function(a) {
        var b = this.g;
        a = V(a);
        return b.has(a)
    };
    f.K = function() {
        return this.g.K()
    };
    f.values = function() {
        return this.g.values()
    };
    f.o = function() {
        return this.g.o(!1)
    };
    U.prototype[Symbol.iterator] = function() {
        return this.values()
    };
    var W = function() {
            this.B = new N(this);
            this.g = null;
            this.I = new Za;
            this.i = 0;
            this.R = new Ra;
            this.C = new I;
            this.s = new I;
            this.G = new I;
            this.H = [];
            this.La = this.Hb.bind(this);
            this.ha = this.F = this.l = null
        },
        rb = function(a) {
            var b = new chrome.cast.Error(chrome.cast.v.INVALID_PARAMETER, "Already requesting session");
            a && a(b)
        },
        X = function(a, b, c, d) {
            c && Sa(a.R, c);
            d !== void 0 ? b.sequenceNumber = d : (b.sequenceNumber = a.i, a.i = (a.i + 1) % 9007199254740992);
            d = Ua(a.B, b);
            c && d && (a = Ta(a.R, b.sequenceNumber)) && (a = a.g, d = new chrome.cast.Error(chrome.cast.v.INVALID_PARAMETER,
                d), a && a(d))
        };
    W.prototype.initialize = function(a, b) {
        var c = this;
        B = this;
        this.g = a;
        a.invisibleSender || (a = new PresentationRequest(sb(this)), a.getAvailability().then(function(d) {
            d.onchange = function() {
                c.g.receiverListener(d.value ? chrome.cast.M.AVAILABLE : chrome.cast.M.UNAVAILABLE)
            };
            d.onchange()
        }, function() {
            c.g.receiverListener(chrome.cast.M.AVAILABLE)
        }), a.onconnectionavailable = function(d) {
            Y(c, d.connection)
        }, this.ha = (r.navigator || null).presentation.defaultRequest = a, a.reconnect(chrome.cast.Ga).then(function(d) {
            Y(c, d)
        }, function() {}));
        b && b(void 0)
    };
    W.prototype.ca = function(a) {
        a.navigator.presentation.defaultRequest = this.ha
    };
    var Y = function(a, b, c) {
        c = c === void 0 ? null : c;
        b.onclose = function(d) {
            a.l = null;
            switch (d.reason) {
                case "closed":
                    tb(a, chrome.cast.J.DISCONNECTED);
                    break;
                case "error":
                    if (c) {
                        d = c;
                        var e = new chrome.cast.Error(chrome.cast.v.SESSION_ERROR);
                        d && d(e)
                    }
            }
        };
        b.onterminate = function() {
            tb(a, chrome.cast.J.STOPPED)
        };
        b.state == "connected" ? a.B.connect(b) : b.onconnect = function() {
            a.B.connect(b)
        }
    };
    W.prototype.requestSession = function(a, b, c) {
        var d = this;
        this.l ? rb(b) : (c = sb(this, c), this.l = a, (new PresentationRequest(c)).start().then(function(e) {
            Y(d, e, b)
        }).catch(function(e) {
            d.l = null;
            e = new chrome.cast.Error(e.name == "AbortError" || e.name == "NotAllowedError" ? chrome.cast.v.CANCEL : chrome.cast.v.SESSION_ERROR);
            b && b(e)
        }))
    };
    var sb = function(a, b) {
        var c = null,
            d = null;
        b = b || a.g.sessionRequest;
        var e = b.dialRequest;
        e && (c = e.appName, (d = e.launchParameter) && !d.match(ub) && (d = pb(d)));
        var h = [];
        h.push({
            appId: b.appId,
            capabilities: b.capabilities
        });
        b || Ba(a.g.additionalSessionRequests, function(k) {
            h.push({
                appId: k.appId,
                capabilities: k.capabilities
            })
        });
        return Ya(new Xa(h, a.B.i, a.g.autoJoinPolicy, a.g.defaultActionPolicy, b.requestSessionTimeout, c, d, a.g.invisibleSender, b.androidReceiverCompatible, b.credentialsData))
    };
    W.prototype.Da = function(a, b, c, d) {
        vb(this, null, b, a, function(e) {
            e.l = !0;
            c && c(e)
        }, function(e) {
            d(e)
        }, chrome.cast.media.timeout.load)
    };
    W.prototype.m = function(a, b, c, d, e, h) {
        var k = this;
        vb(this, a, b, c, function(m) {
            k.Ba(m);
            d && d(void 0)
        }, e, h)
    };
    var vb = function(a, b, c, d, e, h, k) {
        d.type = c;
        b != null && (d.mediaSessionId = b.mediaSessionId, d.sessionId = b.sessionId);
        a.Ca(d, function(m) {
            m.status && m.status.length == 1 ? e && e(m.status[0]) : (m = new chrome.cast.Error(chrome.cast.v.SESSION_ERROR), h && h(m))
        }, h, k)
    };
    f = W.prototype;
    f.setReceiverVolume = function(a, b, c, d) {
        b.sessionId = a;
        X(this, new M("v2_message", b, void 0, chrome.cast.timeout.setReceiverVolume), new L(this.i, c, d, chrome.cast.timeout.sendCustomMessage))
    };
    f.getDialAppInfo = function(a, b) {
        X(this, new M("dial_app_info", void 0, void 0, chrome.cast.timeout.getDialAppInfo), new L(this.i, a, b, chrome.cast.timeout.sendCustomMessage))
    };
    f.ba = function(a) {
        var b = this;
        (new PresentationRequest(sb(this))).reconnect(chrome.cast.bb + a).then(function(c) {
            Y(b, c)
        }, function() {})
    };
    f.leaveSession = function(a, b, c) {
        X(this, new M("leave_session", a, void 0, chrome.cast.timeout.leaveSession), new L(this.i, b, c, chrome.cast.timeout.leaveSession))
    };
    f.hc = function(a, b, c) {
        X(this, new M("app_message", a, void 0, chrome.cast.timeout.sendCustomMessage), new L(this.i, b, c, chrome.cast.timeout.sendCustomMessage))
    };
    f.Ca = function(a, b, c, d) {
        X(this, new M("v2_message", a, void 0, d), new L(this.i, b, c, d))
    };
    var wb = function(a, b, c) {
        var d = a.get(b);
        d || (d = new U, a.set(b, d));
        d.add(c)
    };
    f = W.prototype;
    f.Gb = function(a, b) {
        wb(this.C, a, b)
    };
    f.fc = function(a, b) {
        (a = this.C.get(a)) && a.remove(b)
    };
    f.W = function(a) {
        this.H.push(a)
    };
    f.Z = function(a) {
        a = this.H.indexOf(a);
        a >= 0 && this.H.splice(a, 1)
    };
    f.Db = function(a, b, c) {
        var d = this.s.get(a);
        d || (d = new I, this.s.set(a, d));
        a = d.get(b);
        a || (a = new U, d.set(b, a));
        a.add(c)
    };
    f.cc = function(a, b, c) {
        (a = this.s.get(a)) && (b = a.get(b)) && b.remove(c)
    };
    f.V = function(a, b) {
        wb(this.G, a, b)
    };
    f.Y = function(a, b) {
        (a = this.G.get(a)) && a.remove(b)
    };
    f.Eb = function(a, b) {
        a.i.indexOf(b) == -1 && a.i.push(b)
    };
    f.dc = function(a, b) {
        b = a.i.indexOf(b);
        b != -1 && a.i.splice(b, 1)
    };
    f.Ba = function(a) {
        if (a.l) {
            var b = a.playerState != chrome.cast.media.A.IDLE || a.loadingItemId != null;
            a.i.forEach(function(d) {
                d(b)
            });
            b || cb(this.I, a)
        } else {
            a.l = !0;
            var c = this.G.get(a.sessionId);
            c && E(c.o(), function(d) {
                d(a)
            })
        }
    };
    f.Hb = function(a) {
        return ab(this.I, a)
    };
    var tb = function(a, b) {
        if (a.F) {
            var c = a.F;
            a.F = null;
            a.B.disconnect();
            var d = b != chrome.cast.J.STOPPED;
            $a(a.I, c, b) && (a.s.delete(c), a.G.delete(c), b = a.C.get(c)) && (a.C.delete(c), E(b.o(), function(e) {
                e(d)
            }))
        }
    };
    W.prototype.onMessage = function(a) {
        switch (a.type) {
            case "new_session":
            case "update_session":
                a.message = bb(this.I, a.message);
                break;
            case "v2_message":
                var b = a.message;
                b && b.type == "MEDIA_STATUS" && b.status && (b.status = b.status.map(this.La))
        }
        if (b = Ta(this.R, a.sequenceNumber)) a.type == "error" ? (b = b.g) && b(a.message) : (b = b.l) && b(a.message);
        if (b = a.message) switch (a.type) {
            case "receiver_action":
                xb(this, b);
                break;
            case "new_session":
                this.F = b.sessionId;
                this.l ? (this.l(b), this.l = null) : this.g && this.g.sessionListener(b);
                break;
            case "update_session":
                yb(this, b);
                break;
            case "app_message":
                zb(this, b);
                break;
            case "v2_message":
                b.type == "MEDIA_STATUS" && b.status.forEach(this.Ba.bind(this));
                break;
            case "custom_dial_launch":
                Ab(this, a.sequenceNumber, b)
        }
    };
    var yb = function(a, b) {
            (a = a.C.get(b.sessionId)) && E(a.o(), function(c) {
                c(!0)
            })
        },
        xb = function(a, b) {
            a.H.forEach(function(c) {
                c(b.receiver, b.action)
            })
        },
        zb = function(a, b) {
            (a = a.s.get(b.sessionId)) && (a = a.get(b.namespaceName)) && E(a.o(), function(c) {
                c(b.namespaceName, b.message)
            })
        },
        Bb = function(a, b, c) {
            X(a, new M("custom_dial_launch", c, void 0, chrome.cast.timeout.sendCustomMessage), null, b)
        },
        Ab = function(a, b, c) {
            a.g.customDialLaunchCallback ? a.g.customDialLaunchCallback(c).then(function(d) {
                    Bb(a, b, d)
                }, function() {
                    Bb(a, b)
                }) :
                Bb(a, b)
        },
        ub = RegExp("^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$"),
        Z = new W;
    chrome.cast.initialize = function(a, b, c) {
        Z.initialize(a, b, c)
    };
    x("chrome.cast.initialize", chrome.cast.initialize);
    chrome.cast.ca = function(a) {
        Z.ca(a)
    };
    x("chrome.cast.setPageContext", chrome.cast.ca);
    chrome.cast.requestSession = function(a, b, c) {
        Z.requestSession(a, b, c)
    };
    x("chrome.cast.requestSession", chrome.cast.requestSession);
    chrome.cast.Pb = function() {};
    x("chrome.cast.precache", chrome.cast.Pb);
    chrome.cast.ba = function(a) {
        Z.ba(a)
    };
    x("chrome.cast.requestSessionById", chrome.cast.ba);
    chrome.cast.W = function(a) {
        Z.W(a)
    };
    x("chrome.cast.addReceiverActionListener", chrome.cast.W);
    chrome.cast.Z = function(a) {
        Z.Z(a)
    };
    x("chrome.cast.removeReceiverActionListener", chrome.cast.Z);
    chrome.cast.Ob = function() {};
    x("chrome.cast.logMessage", chrome.cast.Ob);
    chrome.cast.ic = function(a, b) {
        b()
    };
    x("chrome.cast.setCustomReceivers", chrome.cast.ic);
    chrome.cast.jc = function(a, b) {
        b()
    };
    x("chrome.cast.setReceiverDisplayStatus", chrome.cast.jc);
    chrome.cast.unescape = function(a) {
        return a.indexOf("&") != -1 ? "document" in r ? Fa(a) : Ga(a) : a
    };
    x("chrome.cast.unescape", chrome.cast.unescape);
    chrome.cast.isAvailable = !1;
    x("chrome.cast.isAvailable", chrome.cast.isAvailable);
    chrome.cast.Ea = !1;
    chrome.cast.da = function() {
        if (!chrome.cast.Ea) {
            chrome.cast.Ea = !0;
            chrome.cast.isAvailable = !0;
            var a = window.__onGCastApiAvailable;
            a && typeof a == "function" && a(!0)
        }
    };
    document.readyState == "complete" ? chrome.cast.da() : (window.addEventListener("load", chrome.cast.da, !1), window.addEventListener("DOMContentLoaded", chrome.cast.da, !1));
}).call(this);