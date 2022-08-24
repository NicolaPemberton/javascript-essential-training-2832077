class Book {
    constructor(title, author, pages, datePublished, inStock, rating) {
        this.title = title,
            this.author = author,
            this.pages = pages,
            this.datePublished = datePublished,
            this.inStock = inStock,
            this.rating = rating
    }
    stockStatus(toggleStockStatus) {
        this.inStock = toggleStockStatus
    }
    bookRating(newRataing) {
        this.rating = newRataing
    }
    bookAge() {
        let now = new Date();
        let published = new Date(this.datePublished);
        let timeSincePublished = now - published;
        let daysSincePublished = Math.floor(timeSincePublished / (1000 * 3600 * 24));
        return daysSincePublished
    }
}

export default Book