// types/zyntex.d.ts
interface ZyntexConfig {}
interface Zyntex {
    init(config: ZyntexConfig): void;
    // Add other Zyntex instance methods here
}

interface ZyntexModule {
    /**
     * Creates a new Zyntex instance using the provided game token.
     */
    (gameToken: string): Zyntex;

    /**
     * The current version string of the Zyntex module.
     */
    readonly version: string;

    /**
     * Used by the upgrader plugin to detect Zyntex.
     */
    readonly isZyntex: true;
}

declare const ZyntexModule: ZyntexModule;
export default ZyntexModule;