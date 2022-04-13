let book = {
    title: "The Hobbit ",
    author: "by J.R.R. Tolkien, ",
    pages: "295 pages, ",
    read: function () {
        return `not read yet`;
    },
};
console.log(book.title + book.author + book.pages + book.read());


//////////////////////////////////////////////////////////

let newAccount = {
    name: "Kostas Minaidis",
    balance: 100,
    withdrow: function (amount) {
        if (this.balance - amount >= 0) {
            this.balance = this.balance - amount;
            return this.name + " your new balance is " + this.balance;
        } else {
            return "go home poor " + this.name;
        }
    },
    deposit: function (amount) {
        this.balance = this.balance + amount;
        return this.name + " your new balance is " + this.balance;
    },
    getBalance: function () {
        return this.name + " your balance is " + this.balance;
    },
};