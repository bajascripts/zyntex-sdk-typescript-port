// types/zyntex.d.ts

interface ZyntexConfig {}

interface Invocation {
    id: string;
    event_id: string;
    data: unknown;
    to: string;
    sender: string;
    from_server: string;
    invoked_at: number;
    to_server: string;
    game_id: string;
    invoked_by: string;
}

interface ZyntexEvent {
    Connect(callback: (invocation: Invocation) => void): void;
}

export interface Zyntex {
    init(config: ZyntexConfig): void;
    GetEvent(name: string): ZyntexEvent;
}

export interface ZyntexModule {
    (gameToken: string): Zyntex;
    readonly version: string;
    readonly isZyntex: true;
}

declare const ZyntexModule: ZyntexModule;

export default ZyntexModule;
