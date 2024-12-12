declare global {
  interface LineUp {
    page_id: number;
    version: string;
    personalized: boolean;
    next_update: Date | string ;
    clusters: Cluster[];
  }

  interface Cluster {
    title: string;
    cells: Cell[];
    more: More | null;
    type: Type;
    subtype: string;
  }

  interface Cell {
    id: string;
    title: null | string;
    images: string;
    mini_images: null | string;
    trailer: null | string;
    mirada_type: MiradaType;
    schedule: Schedule | null;
    interaction: Interaction;
  }

  interface Interaction {
    url: null | string;
    play_url: null | string;
    play_id: null | string;
    external_url: null;
    content_id: string;
    next_action: NextAction;
    content_type: ContentType;
    start: Date | string  | null;
    end: Date | string  | null;
  }

  enum ContentType {
    Catchup = "catchup",
    Empty = "",
    Episode = "episode",
    Live = "live",
    Movie = "movie",
    Page = "page",
    Series = "series",
  }

  enum NextAction {
    Detail = "detail",
    Empty = "",
    Page = "page",
    Player = "player",
  }

  enum MiradaType {
    Banner = "BANNER",
    Cell = "CELL",
  }

  interface Schedule {
    play_at: Date | string ;
    end_at: Date | string ;
  }

  interface More {
    id: number;
    title: string;
    url: string;
  }

  enum Type {
    Bannerstrip = "BANNERSTRIP",
    Strip = "STRIP",
    Template = "TEMPLATE",
  }
}

export {};
