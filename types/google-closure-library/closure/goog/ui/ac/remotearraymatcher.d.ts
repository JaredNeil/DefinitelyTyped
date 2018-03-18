/// <reference path="../../../../globals.d.ts"/>
/// <reference path="../../disposable/disposable.d.ts"/>
/// <reference path="../../net/xmlhttpfactory.d.ts"/>
/// <reference path="../../net/xhrio.d.ts"/>
/// <reference path="../../structs/map.d.ts"/>
/// <reference path="../../events/events.d.ts"/>
/// <reference path="../../events/event.d.ts"/>

declare namespace goog.ui.ac {
    /**
     * An array matcher that requests matches via ajax.
     * @extends {goog.Disposable}
     */
    class RemoteArrayMatcher extends __RemoteArrayMatcher {}
    abstract class __RemoteArrayMatcher extends goog.__Disposable {
        /**
         * @param {string} url The Uri which generates the auto complete matches.  The
         *     search term is passed to the server as the 'token' query param.
         * @param {boolean=} opt_noSimilar If true, request that the server does not do
         *     similarity matches for the input token against the dictionary.
         *     The value is sent to the server as the 'use_similar' query param which is
         *     either "1" (opt_noSimilar==false) or "0" (opt_noSimilar==true).
         * @param {goog.net.XmlHttpFactory=} opt_xmlHttpFactory Specify the
         *     XmlHttpFactory used to retrieve the matches.
         */
        constructor(url: string, opt_noSimilar?: boolean, opt_xmlHttpFactory?: goog.net.XmlHttpFactory);

        /**
         * The base URL for the ajax call.  The token and max_matches are added as
         * query params.
         * @type {string}
         * @private
         */
        private url_: string;

        /**
         * Whether similar matches should be found as well.  This is sent as a hint
         * to the server only.
         * @type {boolean}
         * @private
         */
        private useSimilar_: boolean;

        /**
         * The XhrIo object used for making remote requests.  When a new request
         * is made, the current one is aborted and the new one sent.
         * @type {goog.net.XhrIo}
         * @private
         */
        private xhr_: goog.net.XhrIo;

        /**
         * The HTTP send method (GET, POST) to use when making the ajax call.
         * @type {string}
         * @private
         */
        private method_: string;

        /**
         * Data to submit during a POST.
         * @type {string|undefined}
         * @private
         */
        private content_: string|undefined;

        /**
         * Headers to send with every HTTP request.
         * @type {Object|goog.structs.Map}
         * @private
         */
        private headers_: Object|goog.structs.Map<any, any>;

        /**
         * Key to the listener on XHR. Used to clear previous listeners.
         * @type {goog.events.Key}
         * @private
         */
        private lastListenerKey_: goog.events.Key;

        /**
         * Set the send method ("GET", "POST").
         * @param {string} method The send method; default: GET.
         */
        setMethod(method: string): void;

        /**
         * Set the post data.
         * @param {string} content Post data.
         */
        setContent(content: string): void;

        /**
         * Set the HTTP headers.
         * @param {Object|goog.structs.Map} headers Map of headers to add to the
         *     request.
         */
        setHeaders(headers: Object|goog.structs.Map<any, any>): void;

        /**
         * Set the timeout interval.
         * @param {number} interval Number of milliseconds after which an
         *     incomplete request will be aborted; 0 means no timeout is set.
         */
        setTimeoutInterval(interval: number): void;

        /**
         * Builds a complete GET-style URL, given the base URI and autocomplete related
         * parameter values.
         * <b>Override this to build any customized lookup URLs.</b>
         * <b>Can be used to change request method and any post content as well.</b>
         * @param {string} uri The base URI of the request target.
         * @param {string} token Current token in autocomplete.
         * @param {number} maxMatches Maximum number of matches required.
         * @param {boolean} useSimilar A hint to the server.
         * @param {string=} opt_fullString Complete text in the input element.
         * @return {?string} The complete url. Return null if no request should be sent.
         * @protected
         */
        protected buildUrl(
            uri: string, token: string, maxMatches: number, useSimilar: boolean, opt_fullString?: string
        ): string|null;

        /**
         * Returns whether the suggestions should be updated?
         * <b>Override this to prevent updates eg - when token is empty.</b>
         * @param {string} uri The base URI of the request target.
         * @param {string} token Current token in autocomplete.
         * @param {number} maxMatches Maximum number of matches required.
         * @param {boolean} useSimilar A hint to the server.
         * @param {string=} opt_fullString Complete text in the input element.
         * @return {boolean} Whether new matches be requested.
         * @protected
         */
        protected shouldRequestMatches(
            uri: string, token: string, maxMatches: number, useSimilar: boolean, opt_fullString?: string
        ): boolean;

        /**
         * Parses and retrieves the array of suggestions from XHR response.
         * <b>Override this if the response is not a simple JSON array.</b>
         * @param {string} responseText The XHR response text.
         * @return {Array<string>} The array of suggestions.
         * @protected
         */
        protected parseResponseText(responseText: string): string[];

        /**
         * Handles the XHR response.
         * @param {string} token The XHR autocomplete token.
         * @param {Function} matchHandler The AutoComplete match handler.
         * @param {goog.events.Event} event The XHR success event.
         */
        xhrCallback(token: string, matchHandler: Function, event: goog.events.Event): void;

        /**
         * Retrieve a set of matching rows from the server via ajax.
         * @param {string} token The text that should be matched; passed to the server
         *     as the 'token' query param.
         * @param {number} maxMatches The maximum number of matches requested from the
         *     server; passed as the 'max_matches' query param.  The server is
         *     responsible for limiting the number of matches that are returned.
         * @param {Function} matchHandler Callback to execute on the result after
         *     matching.
         * @param {string=} opt_fullString The full string from the input box.
         */
        requestMatchingRows(token: string, maxMatches: number, matchHandler: Function, opt_fullString?: string): void;
    }
}
