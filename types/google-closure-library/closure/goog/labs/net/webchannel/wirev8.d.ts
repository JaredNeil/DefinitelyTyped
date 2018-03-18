/// <reference path="../../../../../globals.d.ts"/>

declare namespace goog.labs.net.webChannel {
    /**
     * The v8 codec class.
     *
     * @struct
     */
    class WireV8 extends __WireV8 {}
    abstract class __WireV8 {
        /**
         */
        constructor();

        /**
         * Parser for a response payload. The parser should return an array.
         * @private {!goog.string.Parser}
         */
        private parser_: any /*missing*/;
    }
}
