"use strict";
(self.webpackChunkrne_website = self.webpackChunkrne_website || []).push([
  [34583],
  {
    80995: (e, t, a) => {
      a.d(t, { c: () => n });
      var l = a(96540);
      function n(e) {
        var t = e.color,
          a = void 0 === t ? "#e2e2e2" : t,
          n = e.alpha,
          r = void 0 === n ? 0.3 : n,
          c = e.overlayColor,
          o = void 0 === c ? a + 100 * r : c,
          i = e.icon,
          m = e.size,
          s = e.padding,
          d = void 0 === s ? "6px" : s,
          u = e.style;
        return l.createElement(
          "div",
          {
            className: "inline-flex-center",
            style: Object.assign(
              { backgroundColor: o, borderRadius: "6px", padding: d },
              u,
            ),
          },
          l.createElement(i, { fill: a, fontSize: m }),
        );
      }
    },
    7824: (e, t, a) => {
      a.d(t, { X: () => i });
      var l = a(58168),
        n = a(98587),
        r = a(96540),
        c = a(80995),
        o = [
          "size",
          "header",
          "subheader",
          "primary",
          "color",
          "icon",
          "noMargin",
        ];
      function i(e) {
        var t = e.size,
          a = void 0 === t ? "1.5rem" : t,
          i = e.header,
          m = e.subheader,
          s = e.primary,
          d = e.color,
          u = e.icon,
          g = e.noMargin,
          E = (0, n.A)(e, o);
        return r.createElement(
          "div",
          { className: "container " + (g ? "" : "margin-vert--lg") },
          r.createElement(
            "div",
            { className: "row" },
            r.createElement(
              "div",
              null,
              u &&
                r.createElement(
                  c.c,
                  (0, l.A)(
                    {
                      icon: u,
                      color: d,
                      padding: 8,
                      size: a,
                      style: { marginRight: 12 },
                    },
                    E,
                  ),
                ),
            ),
            r.createElement(
              "div",
              null,
              r.createElement(
                "h1",
                {
                  className: s && "gradient clip-text",
                  style: { lineHeight: 0.8, margin: "4px 0px", color: d },
                },
                i,
              ),
              m && r.createElement("small", null, m),
            ),
          ),
        );
      }
    },
    58925: (e, t, a) => {
      a.r(t), a.d(t, { default: () => b });
      var l = a(96540),
        n = a(28653),
        r = a(44586),
        c = a(75489),
        o = a(86025),
        i = a(59644),
        m = a(13669);
      const s = function () {
        (0, r.A)().siteConfig;
        return l.createElement(
          "section",
          null,
          l.createElement(
            "header",
            { className: "hero" },
            l.createElement(
              "div",
              { className: "container  padding-vert--xl" },
              l.createElement(
                "div",
                {
                  className: "row padding-vert--md",
                  style: { alignItems: "center" },
                },
                l.createElement(
                  "div",
                  { className: "col col--3 col--offset-1" },
                  l.createElement("img", {
                    className: "rne-hero-logo",
                    src: "/img/website/logo.png",
                  }),
                ),
                l.createElement(
                  "div",
                  { className: "col col--6 col--offset-1" },
                  l.createElement(
                    "h1",
                    { className: "hero__title" },
                    "Salon App ",
                    l.createElement("br", null),
                    l.createElement(
                      "span",
                      { className: "gradient clip-text" },
                      "Documentation",
                    ),
                    " SDK toolkit",
                  ),
                  l.createElement(
                    "h3",
                    { className: "" },
                    "Raise Your Glass to Adventure: Discover, Connect, and Celebrate at the Best Local Saloons!",
                  ),
                  l.createElement(
                    "div",
                    null,
                    l.createElement(
                      c.A,
                      {
                        className:
                          "button button--primary margin-vert--sm margin-right--md ",
                        style: { color: "white" },
                        to: (0, o.A)("/docs"),
                      },
                      "Get Started",
                    ),
                  ),
                  l.createElement(
                    "div",
                    { className: "ball", style: { left: 80, top: "20%" } },
                    l.createElement(m.GWR, null),
                  ),
                  l.createElement(
                    "div",
                    { className: "ball", style: { bottom: 200, right: "5%" } },
                    l.createElement(i.nS4, null),
                  ),
                  l.createElement(
                    "div",
                    { className: "ball", style: { left: 20, top: "70%" } },
                    l.createElement(i.sxJ, null),
                  ),
                  l.createElement(
                    "div",
                    { className: "ball", style: { right: "40%", bottom: 90 } },
                    l.createElement(i.XKB, null),
                  ),
                  l.createElement(
                    "div",
                    { className: "ball", style: { left: "40%", top: 180 } },
                    l.createElement(m.MOS, null),
                  ),
                  l.createElement(
                    "div",
                    { className: "ball", style: { right: 270, top: 140 } },
                    l.createElement(i.tbN, null),
                  ),
                ),
              ),
            ),
          ),
          l.createElement(
            "svg",
            {
              className: "hero-wave",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 1440 220",
            },
            l.createElement("path", {
              "fill-opacity": "1",
              d: "M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,90.7C672,64,768,32,864,32C960,32,1056,64,1152,69.3C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
            }),
          ),
        );
      };
      var d = a(80995),
        u = [
          {
            title: "Cross-Platform",
            description:
              "Consistent design across android, iOS, and web. 30+ components designed to save development time.",
            img: i.VOz,
            color: "#894cff",
          },
          {
            title: "Easy to use",
            description:
              "Built completely in TypeScript. Starting your react native app has never been easier. Supports Expo too! ",
            img: i.luQ,
            color: "#ff5381",
          },
          {
            title: "Customizable",
            description:
              "Easily style any of our components just the way you want.",
            img: i.Yvo,
            color: "#00b85c",
          },
          {
            title: "Community-Driven",
            description:
              "100% built by the community. We're here because we love open source.",
            img: i.rmZ,
            color: "#328aff",
          },
        ];
      const g = function () {
        return l.createElement(
          "section",
          { className: "", id: "why" },
          l.createElement(
            "div",
            { className: "container text--center" },
            l.createElement(
              "h1",
              { className: "hero__title gradient clip-text" },
              "Why Salon App Documentation?",
            ),
          ),
          l.createElement(
            "div",
            { className: "container" },
            l.createElement(
              "div",
              { className: "row is-multiline" },
              u.map(function (e, t) {
                var a = e.title,
                  n = e.description,
                  r = e.img,
                  o = e.color;
                return l.createElement(
                  "div",
                  { className: "col col--3", key: t },
                  l.createElement(
                    c.A,
                    { className: "card shadow--md", style: { height: "100%" } },
                    l.createElement(
                      "div",
                      { className: "card__body" },
                      l.createElement(
                        "h4",
                        { className: "gradient clip-text inline-flex-center" },
                        l.createElement(d.c, {
                          icon: r,
                          color: o,
                          style: { marginRight: 8 },
                        }),
                        a,
                      ),
                      l.createElement(
                        "p",
                        {
                          className: "p--desc",
                          style: { lineHeight: 1.4, fontSize: "0.8rem" },
                        },
                        n,
                      ),
                    ),
                  ),
                );
              }),
            ),
          ),
        );
      };
      var E = a(21619);
      const p = function () {
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            "section",
            { className: "margin-vert--xl" },
            l.createElement(
              "div",
              { className: "container " },
              l.createElement(
                "div",
                { className: "row", style: { alignItems: "center" } },
                l.createElement(
                  "div",
                  { className: "col col--5 text--center" },
                  l.createElement(
                    "h6",
                    { className: "hero__title gradient clip-text" },
                    "How to get started?",
                  ),
                ),
                l.createElement(
                  "div",
                  { className: "col col--7 " },
                  l.createElement(
                    "p",
                    null,
                    l.createElement(
                      "b",
                      null,
                      "1. Before Installing make sure your you had a npmrc private token",
                    ),
                    l.createElement(
                      "p",
                      { className: "margin-vert--md margin-horiz--md" },
                      l.createElement(
                        E.A,
                        { language: "tsx" },
                        "\n@umar-epacken:registry=https://npm.pkg.github.com\n//npm.pkg.github.com/:_authToken=NPM_TOKEN\n\n# This is how to login in the cli to publish a pacakge via github\n# npm login --scope=@umar-epacken  --registry=https://npm.pkg.github.com\n\n",
                      ),
                    ),
                    l.createElement(
                      "b",
                      null,
                      "2. Install the @umar-epacken/salon-data package from the NPM and YARN",
                    ),
                    l.createElement(
                      "p",
                      { className: "margin-vert--md margin-horiz--md" },
                      l.createElement(
                        E.A,
                        { language: "bash" },
                        "npm install @umar-epacken/salon-data",
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      };
      const h = function () {
        return l.createElement("section", { id: "expo" });
      };
      var v = a(7824);
      const y = function () {
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(
            "section",
            { className: "margin-vert--xl", id: "community" },
            l.createElement(
              "div",
              { className: "container" },
              l.createElement(v.X, {
                color: "#00A98F",
                header: "Community",
                subheader:
                  "We are a community of developers who love React Native.",
                icon: i.SE6,
              }),
            ),
            l.createElement(
              "div",
              { className: "container" },
              l.createElement(
                "div",
                { className: "row margin-horiz--lg is-multiline" },
                l.createElement(
                  "div",
                  { className: "col col--4" },
                  l.createElement(
                    c.A,
                    {
                      style: {
                        height: "100%",
                        backgroundColor: "#1DA1F2",
                        color: "white",
                      },
                      className: "card shadow--md",
                    },
                    l.createElement(
                      "div",
                      { className: "card__body padding--lg" },
                      l.createElement(
                        "h3",
                        { className: "margin-bottom--sm " },
                        l.createElement(m.s1J, { fill: "#fff" }),
                      ),
                      l.createElement("h4", null, "Stay up to date "),
                      l.createElement(
                        "b",
                        null,
                        "Follow us on Twitter to get the latest updates.",
                      ),
                    ),
                  ),
                ),
                l.createElement(
                  "div",
                  { className: "col col--4" },
                  l.createElement(
                    c.A,
                    {
                      style: { backgroundColor: "#5865F2", color: "white" },
                      className: "card shadow--md",
                    },
                    l.createElement(
                      "div",
                      { className: "card__body padding--lg" },
                      l.createElement(
                        "h3",
                        { className: "margin-bottom--sm " },
                        l.createElement(m.Nxe, { fill: "#fff" }),
                      ),
                      l.createElement("h4", null, "Talk to us"),
                      l.createElement(
                        "b",
                        null,
                        "Have any other question? or like to say Hi! to the RNE community,",
                      ),
                    ),
                  ),
                ),
                l.createElement(
                  "div",
                  { className: "col col--4" },
                  l.createElement(
                    c.A,
                    {
                      style: { backgroundColor: "#F58025", color: "white" },
                      className: "card shadow--md",
                    },
                    l.createElement(
                      "div",
                      { className: "card__body padding--lg" },
                      l.createElement(
                        "h3",
                        { className: "margin-bottom--sm " },
                        l.createElement(m.jJS, { fill: "#fff" }),
                      ),
                      l.createElement("h4", null, "Any question?"),
                      l.createElement(
                        "b",
                        null,
                        "Have any other question? or like to say Hi! to the RNE community,",
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        );
      };
      var N = function () {
          return l.createElement(l.Fragment, null);
        },
        f = function () {
          return l.createElement("section", {
            id: "sponsor",
            className: "container",
          });
        };
      const b = function () {
        (0, r.A)().siteConfig;
        return l.createElement(
          n.A,
          null,
          l.createElement(s, null),
          l.createElement(g, null),
          l.createElement(p, null),
          l.createElement(h, null),
          l.createElement(N, null),
          l.createElement(f, null),
          l.createElement(y, null),
        );
      };
    },
    4588: (e, t, a) => {
      a.d(t, { A: () => y });
      var l = a(98587),
        n = a(58168),
        r = a(96540),
        c = a(95404),
        o = a(20053),
        i = (a(21312), a(44586)),
        m = a(78478),
        s = a(26058);
      const d = {
        playgroundContainer: "playgroundContainer_TGbA",
        playgroundHeader: "playgroundHeader_qwyd",
        playgroundEditor: "playgroundEditor_PvJ1",
        playgroundPreview: "playgroundPreview_bb8I",
        toggleContainer: "toggleContainer_ZZiH",
        toggleIcon: "toggleIcon_OnrQ",
        showCode: "showCode_O0Od",
      };
      var u = a(92303),
        g = a(59644),
        E = ["children", "transformCode"];
      function p() {
        return r.createElement("div", null, "Loading...");
      }
      function h(e) {
        var t = (0, u.A)(),
          a = (0, r.useContext)(c.MY),
          l = a.code,
          o = a.language,
          i = a.theme,
          m = a.disabled,
          s = a.onChange;
        return r.createElement(
          c.w,
          (0, n.A)(
            {
              key: String(t),
              code: l,
              language: o,
              theme: i,
              disabled: m,
              onChange: s,
            },
            e,
            { className: d.playgroundEditor },
          ),
        );
      }
      function v(e) {
        var t = e.showCode,
          a = e.preImports,
          l = void 0 === a ? "" : a,
          n = (e.wrapper, r.useState(t)),
          i = n[0],
          s = n[1],
          u = function () {
            s(function (e) {
              return !e;
            });
          };
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            "div",
            { className: d.playgroundPreview },
            r.createElement(
              m.A,
              { fallback: r.createElement(p, null) },
              function () {
                return r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(c.pA, null),
                  r.createElement(c.p1, null),
                  r.createElement(
                    "div",
                    { className: d.toggleContainer },
                    r.createElement(
                      "div",
                      { className: (0, o.A)(d.toggleIcon), onClick: u },
                      r.createElement(g.luQ, null),
                      r.createElement(
                        "span",
                        { className: d.showCode },
                        i ? "Hide" : "Show",
                        " Code",
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
          i && r.createElement(h, { preImports: l, showCode: i }),
        );
      }
      function y(e) {
        var t = e.children,
          a = (e.transformCode, (0, l.A)(e, E)),
          o =
            ((0, i.A)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,
            (0, s.A)());
        return r.createElement(
          "div",
          { className: d.playgroundContainer },
          r.createElement(
            c.Q,
            (0, n.A)({ code: t.replace(/\n$/, ""), theme: o }, a),
            r.createElement(v, { showCode: a.showCode }),
          ),
        );
      }
    },
    51433: (e, t, a) => {
      a.d(t, { A: () => i });
      var l = a(96540),
        n = a(36480),
        r = a(58040),
        c = a(45550),
        o = a(91147);
      const i = Object.assign({ React: l, LinearGradient: o.A }, n, r, c, l);
    },
  },
]);
