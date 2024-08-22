/**
 * Exclusion options for validating and creating strings based on character sets.
 */
export enum Exclusion {
    /**
     * No strings excluded.
     */
    None,

    /**
     * Strings that start with zero ('0') excluded.
     */
    FirstZero,

    /**
     * Strings that are all-numeric (e.g., "123456") excluded.
     */
    AllNumeric
}

/**
 * An example of a {@link Generator} function.
 */
export function * doSomething(): Generator<number> {
    for (let i = 0; i < 10; i++) {
        yield i;
    }
}
