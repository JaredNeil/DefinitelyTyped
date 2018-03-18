/// <reference path="../../../globals.d.ts"/>
/// <reference path="./message.d.ts"/>
/// <reference path="./test.pb.d.ts"/>

declare namespace someprotopackage {
    /**
     * Message TestPackageTypes.
     * @extends {goog.proto2.Message}
     * @final
     */
    class TestPackageTypes extends __TestPackageTypes {}
    abstract class __TestPackageTypes extends goog.proto2.__Message {
        /**
         */
        constructor();

        /**
         * Gets the value of the optional_int32 field.
         * @return {?number} The value.
         */
        getOptionalInt32(): number|null;

        /**
         * Gets the value of the optional_int32 field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalInt32OrDefault(): number;

        /**
         * Sets the value of the optional_int32 field.
         * @param {number} value The value.
         */
        setOptionalInt32(value: number): void;

        /**
         * @return {boolean} Whether the optional_int32 field has a value.
         */
        hasOptionalInt32(): boolean;

        /**
         * @return {number} The number of values in the optional_int32 field.
         */
        optionalInt32Count(): number;

        /**
         * Clears the values in the optional_int32 field.
         */
        clearOptionalInt32(): void;

        /**
         * Gets the value of the other_all field.
         * @return {?proto2.TestAllTypes} The value.
         */
        getOtherAll(): proto2.TestAllTypes|null;

        /**
         * Gets the value of the other_all field or the default value if not set.
         * @return {!proto2.TestAllTypes} The value.
         */
        getOtherAllOrDefault(): proto2.TestAllTypes;

        /**
         * Sets the value of the other_all field.
         * @param {!proto2.TestAllTypes} value The value.
         */
        setOtherAll(value: proto2.TestAllTypes): void;

        /**
         * @return {boolean} Whether the other_all field has a value.
         */
        hasOtherAll(): boolean;

        /**
         * @return {number} The number of values in the other_all field.
         */
        otherAllCount(): number;

        /**
         * Clears the values in the other_all field.
         */
        clearOtherAll(): void;
    }
}

declare namespace someprotopackage.TestPackageTypes {
    /** @nocollapse */
    let getDescriptor: any /*missing*/;
}
