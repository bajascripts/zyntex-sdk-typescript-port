// types/telemetry.d.ts


export type LabelSet = Record<string, string>;

export interface MetricOpts {
    /**
     * Optional human-readable description
     */
    description?: string;

    /**
     * Labels, used for filtering metrics on the dashboard
     */
    labels?: string[];

    /**
     * Only for Histogram
     */
    buckets?: number[];
}

export interface CounterMetric {
    inc(delta?: number, labels?: LabelSet): void;
}

export interface GaugeMetric {
    set(value: number, labels?: LabelSet): void;
    inc(delta?: number, labels?: LabelSet): void;
    dec(delta?: number, labels?: LabelSet): void;
}

export interface HistogramMetric {
    observe(value: number, labels?: LabelSet): void;
}

export interface SummaryMetric {
    observe(value: number, labels?: LabelSet): void;
}

export interface Telemetry {
    flush(): void;

    Counter(name: string, opts?: MetricOpts): CounterMetric;
    Gauge(name: string, opts?: MetricOpts): GaugeMetric;
    Histogram(name: string, opts?: MetricOpts): HistogramMetric;
    Summary(name: string, opts?: MetricOpts): SummaryMetric;
}

