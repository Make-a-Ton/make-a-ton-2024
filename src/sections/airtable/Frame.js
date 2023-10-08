import {useEffect} from "react";

export const Frame= ({iframe_link})=> {

    useEffect(() => {

        function d(a, b) {
            for (var c = 0; c < a.length && !b.call(this, a[c]); c++) ;
        }

        function h(a) {
            d(document.querySelectorAll("iframe.airtable-embed.airtable-dynamic-height"), a);
        }

        function e(a) {
            var b = a.getBoundingClientRect();
            a.contentWindow.postMessage(
                {
                    key: "airtableEmbedViewportChanged",
                    embedRectInViewport: {
                        top: b.top,
                        right: b.right,
                        bottom: b.bottom,
                        left: b.left,
                    },
                    embedViewportSize: {
                        height: window.innerHeight,
                        width: window.innerWidth,
                    },
                },
                "*"
            );
        }

        function k() {
            d(document.querySelectorAll("iframe.airtable-embed"), e);
        }

        function f() {
            clearTimeout(g);
            g = setTimeout(k, 200);
        }

        if (!window._didAddAirtableGlobalEmbedListeners) {
            window._didAddAirtableGlobalEmbedListeners = true;
            var g;
            window.addEventListener("resize", f, false);
            window.addEventListener("scroll", f, false);
            window.addEventListener("message", function (a) {
                var b = a.data;
                b &&
                "airtableEmbedContentDidResize" === b.key &&
                h(function (c) {
                    if (a.source === c.contentWindow)
                        return (
                            c._airtableDidDisableScrollbar ||
                            ((c._airtableDidDisableScrollbar = true),
                                c.contentWindow.postMessage(
                                    {key: "airtableDisableScrollbar"},
                                    "*"
                                ),
                                e(c)),
                                (c.height = b.height),
                                true
                        );
                }, false);
            });
        }
        const embedBottomBarContainer = document.getElementById('embedBottomBarContainer');
        console.log(embedBottomBarContainer)
    }, []);


    return (
        <div style={{margin: 0, overflow: 'hidden', height: '100%'}}>
            <div style={{overflow: 'hidden'}}>
                <iframe className="airtable-embed airtable-dynamic-height"
                        src={iframe_link}
                        frameborder="0" onmousewheel="" width="100%" height="1010"
                        style={{background: "transparent"}}></iframe>
            </div>
        </div>
    );

}
