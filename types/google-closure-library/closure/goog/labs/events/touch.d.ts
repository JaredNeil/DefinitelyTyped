/// <reference path="../../../../globals.d.ts"/>

declare namespace goog.labs.events.touch {
    /**
     * Description the geometry and target of an event.
     *
     * @typedef {{
     *   clientX: number,
     *   clientY: number,
     *   screenX: number,
     *   screenY: number,
     *   target: EventTarget
     * }}
     */
    interface TouchData {
        clientX: number;
        clientY: number;
        screenX: number;
        screenY: number;
        target: EventTarget;
    }

    /**
     * Takes a mouse or touch event and returns the relevant geometry and target
     * data.
     * @param {!Event} e A mouse or touch event.
     * @return {!goog.labs.events.touch.TouchData}
     */
    function getTouchData(e: Event): goog.labs.events.touch.TouchData;
}
