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

const newAccount = new Account("Kostas Minaidis");
// New account created for: Kostas Minaidis
// IBAN: GR00010003

newAccount.getBalance()     // 0
newAccount.deposit(100)
newAccount.getBalance()     // 100
newAccount.withdraw(50)
newAccount.getBalance()     // 50

newAccount.withdraw(500)   // Error 'Insufficient balance!'
newAccount.withdraw("50")  // Error 'Invalid amount'
newAccount.withdraw(-150)  // Error 'Invalid amount'
/////////////////////////////////////////////////////////////////