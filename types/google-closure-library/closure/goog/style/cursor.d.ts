/// <reference path="../../../globals.d.ts"/>

declare namespace goog.style.cursor {
    /**
     * The file name for the open-hand (draggable) cursor.
     * @type {string}
     */
    let OPENHAND_FILE: string;

    /**
     * The file name for the close-hand (dragging) cursor.
     * @type {string}
     */
    let CLOSEDHAND_FILE: string;

    /**
     * Create the style for the draggable cursor based on browser and OS.
     * The value can be extended to be '!important' if needed.
     *
     * @param {string} absoluteDotCurFilePath The absolute base path of
     *     'openhand.cur' file to be used if the browser supports it.
     * @param {boolean=} opt_obsolete Just for compiler backward compatibility.
     * @return {string} The "draggable" mouse cursor style value.
     */
    function getDraggableCursorStyle(absoluteDotCurFilePath: string, opt_obsolete?: boolean): string;

    /**
     * Create the style for the dragging cursor based on browser and OS.
     * The value can be extended to be '!important' if needed.
     *
     * @param {string} absoluteDotCurFilePath The absolute base path of
     *     'closedhand.cur' file to be used if the browser supports it.
     * @param {boolean=} opt_obsolete Just for compiler backward compatibility.
     * @return {string} The "dragging" mouse cursor style value.
     */
    function getDraggingCursorStyle(absoluteDotCurFilePath: string, opt_obsolete?: boolean): string;
}
