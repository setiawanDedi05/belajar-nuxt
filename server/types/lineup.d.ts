export interface LineUp {
    page_id:      number;
    version:      string;
    personalized: boolean;
    next_update:  Date;
    clusters:     Cluster[];
}

export interface Cluster {
    title:   string;
    cells:   Cell[];
    more:    More | null;
    type:    Type;
    subtype: string;
}

export interface Cell {
    id:          string;
    title:       null | string;
    images:      string;
    mini_images: null | string;
    trailer:     null | string;
    mirada_type: MiradaType;
    schedule:    Schedule | null;
    interaction: Interaction;
}

export interface Interaction {
    url:          null | string;
    play_url:     null | string;
    play_id:      null | string;
    external_url: null;
    content_id:   string;
    next_action:  NextAction;
    content_type: ContentType;
    start:        Date | null;
    end:          Date | null;
}

export enum ContentType {
    Catchup = "catchup",
    Empty = "",
    Episode = "episode",
    Live = "live",
    Movie = "movie",
    Page = "page",
    Series = "series",
}

export enum NextAction {
    Detail = "detail",
    Empty = "",
    Page = "page",
    Player = "player",
}

export enum MiradaType {
    Banner = "BANNER",
    Cell = "CELL",
}

export interface Schedule {
    play_at: Date;
    end_at:  Date;
}

export interface More {
    id:    number;
    title: string;
    url:   string;
}

export enum Type {
    Bannerstrip = "BANNERSTRIP",
    Strip = "STRIP",
    Template = "TEMPLATE",
}