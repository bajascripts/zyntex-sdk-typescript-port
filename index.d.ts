// types/zyntex.d.ts
interface ZyntexConfig {}

interface Invocation {
    id: string;
    event_id: string;
    data: unknown;
    to: string;
    sender: string;
    from_server: string
    invoked_at: number;
    to_server: string;
    game_id: string;
    invoked_by: string;
}
interface ZyntexEvent {
    Connect(callback: (invocation: Invocation)=>void): void
}
interface Zyntex {
    /*
    	@method Zyntex:init
	@description The main entry point to start the Zyntex client. This function initializes all core processes:
	it registers the server with the Zyntex backend, starts the status update and polling loops,
	sets up event listeners, and connects player tracking signals.

	@param self Zyntex
	@param config TYPES.Config -- A configuration table that controls client behavior (e.g., `debug`, `simulate`).
     */
    init(config: ZyntexConfig): void;

    /*
	@method Event:Connect
	@description Establishes a listener for this specific event. The provided callback function
	will be executed whenever an invocation for this event is received from the Zyntex backend (e.g., sent from the dashboard).

	@param self Event -- The event object to listen to.
	@param listener (({[string]: any}, Invocation) -> nil) -- The callback function to execute.
		- The first argument passed to the listener is a simplified data table: `{["key"] = value}`.
		- The second argument is the full, raw Invocation object.

	@example
	local broadcastEvent = Zyntex:GetEvent("BroadcastMessage")
	broadcastEvent:Connect(function(data, invocation)
		print(`Received broadcast from user {invocation.invokedBy}: {data.Message}`)
	end)
     */
    GetEvent(name: string): ZyntexEvent;
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