export class AutoIdMap<T> {
    private nextId_ = 0;
    private readonly idToItem_: Map<number, T> = new Map<number, T>();
    private readonly itemToId_: Map<T, number> = new Map<T, number>();

    public add(item: T) {
        const cardId = this.nextId_++;
        this.idToItem_.set(cardId, item);
        this.itemToId_.set(item, cardId);
    }

    public get(itemId: number) {
        const item = this.idToItem_.get(itemId);
        if (!item)
            throw new Error(`Card with id ${itemId} not found.`);
        return item;
    }

    public getId(item: T) {
        const itemId = this.itemToId_.get(item);
        if (typeof itemId !== "number")
            throw new Error(`Failed to find id for item.`);
        return itemId;
    }
}
