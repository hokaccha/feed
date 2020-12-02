import { Author, Extension, ExtraItem, FeedOptions, Item } from "./typings";
export declare class Feed {
    options: FeedOptions;
    items: Item[];
    categories: string[];
    contributors: Author[];
    extensions: Extension[];
    extra: {
        [key: string]: ExtraItem;
    };
    constructor(options: FeedOptions);
    addItem: (item: Item) => number;
    addCategory: (category: string) => number;
    addContributor: (contributor: Author) => number;
    addExtension: (extension: Extension) => number;
    addExtra: (key: string, value: ExtraItem) => ExtraItem;
    atom1: () => string;
    rss2: () => string;
    json1: () => string;
}
