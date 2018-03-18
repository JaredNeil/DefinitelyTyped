/// <reference path="../../../globals.d.ts"/>

declare namespace goog.editor.focus {
    /**
     * Change focus to the given input field and set cursor to end of current text.
     * @param {Element} inputElem Input DOM element.
     */
    function focusInputField(inputElem: Element): void;
}
