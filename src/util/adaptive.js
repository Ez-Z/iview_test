let adaptive = {};
(function(e, g) {
    let j = e.document;
    let a = j.documentElement;
    let k = e.devicePixelRatio;
    let i = 1;
    let b = 1;

    function h() {
        let p = /iphone/gi.test(e.navigator.appVersion);
        if (g.scaleType === 2 && p || g.scaleType === 3) { i = k; } e.devicePixelRatioValue = i;
        b = 1 / i;
        let m = j.querySelector('meta[name="viewport"]');
        let n = "initial-scale=" + b + ", maximum-scale=" + b + ", minimum-scale=" + b + ", user-scalable=no";
        if (i === 1) { n = "width=device-width, ".concat(n); }
        if (!p && i !== 1) { n = n.concat(", target-densitydpi=device-dpi"); }
        if (m) { m.setAttribute("content", n); } else {
            let o = j.createElement("meta");
            o.setAttribute("name", "viewport");
            o.setAttribute("content", n);
            if (a.firstElementChild) { a.firstElementChild.appendChild(o); } else {
                let q = j.createElement("div");
                q.appendChild(o);
                a.appendChild(q);
            }
        }
    }
    let f = 100;
    g.errDpr = 1;

    function d() {
        let m;
        if (g.maxWidth) { m = Math.min(a.getBoundingClientRect().width, g.maxWidth * i); } else { m = a.getBoundingClientRect().width; } f = 100 * m / g.desinWidth * (g.errDpr || 1);
        a.style.fontSize = f + "px";
        j.body && (j.body.style.fontSize = g.baseFont / 100 + "rem");
        g.setRemCallback && g.setRemCallback();
        g.newBase = f;
    }
    let c;
    g.desinWidth = 750;
    g.baseFont = 28;
    g.reflow = function() { a.clientWidth; };

    function l() {
        if (/android/ig.test(window.navigator.appVersion)) {
            let o = document.createElement("p");
            o.style.height = "1px";
            o.style.width = "2.5rem";
            o.style.visibility = "hidden";
            document.body.appendChild(o);
            let m = o.offsetWidth;
            let n = adaptive.newBase * 2.5;
            if (Math.abs(n / m - 1) > 0.05) {
                g.errDpr = n / m;
                d();
            }
            document.body.removeChild(o);
        }
    }
    g.init = function() {
        e.addEventListener("resize", function() {
            clearTimeout(c);
            c = setTimeout(d, 300);
        }, false);
        e.addEventListener("pageshow", function(m) {
            if (m.persisted) {
                clearTimeout(c);
                c = setTimeout(d, 300);
            }
        }, false);
        if (j.readyState === "complete") {
            j.body.style.fontSize = g.baseFont / 100 + "rem";
            l();
        } else {
            j.addEventListener("DOMContentLoaded", function(m) {
                j.body.style.fontSize = g.baseFont / 100 + "rem";
                l();
            }, false);
        }
        h();
        d();
        a.setAttribute("data-dpr", i);
    };
    g.remToPx = function(m) { return m * f; };
})(window, adaptive);

// 设计图宽度
adaptive.desinWidth = 750;
// body 字体大小 会将body字体大小设置为 baseFont / 100 + 'rem'  750的设计图一般设置为28,640的设计图一般设置为24
adaptive.baseFont = 24;
//最大宽度
adaptive.maxWidth = 750;
// 初始化
adaptive.init();

export default adaptive;
