(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    const person = {
        firstName:  `Marc`,
        lastName: `Mata`,
    };

    console.log(person.firstName)
    console.log(person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // person.sayHello = () => {
    //     console.log(`Hello from ${person.firstName} ${person.lastName}`)
    // }

    person.sayHello = function(){
        return `Hello from ${person.firstName} ${person.lastName}`
    }

    person.sayHello();


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    const shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    console.log(shoppers)

    shoppers.forEach(function(shopper){
        let priceBeforeDiscount = shopper.amount
        let discount = shopper.amount * .12;
        let priceAfterDiscount = (shopper.amount - discount)
        if (shopper.amount >= 200){
            console.log(`${shopper.name}'s price before discount is ${formatAsUSCurrency(priceBeforeDiscount)}\n
         Your discount is ${formatAsUSCurrency(discount)} \n
         Your price after discount is ${formatAsUSCurrency(priceAfterDiscount)}`);
        } else {
            console.log(`${shopper.name} has no discount. \n
         Your total is ${formatAsUSCurrency(shopper.amount)}`);
        }
    });

    // shoppers.forEach(shopper => {
    //     const discount = shopper.amount > 200 ? shopper.amount * .12 : 0
    //     const total = shopper.amount - discount;
    //     console.log(`${formatAsUSCurrency(shopper.name)} -- total: ${formatAsUSCurrency(shopper.amount)}, discount: ${formatAsUSCurrency(discount)}, final total: ${formatAsUSCurrency(total)}`);
    // });


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    const books = [
        {
            title: `Salmon of doubt`,
            firstName: `Douglas`,
            lastName: ` Adams`
        },
        {
            title: `The Da Vinci Code`,
            firstName: `Dan`,
            lastName: ` Brown`
        },
        {
            title: `To Kill a Mockingbird`,
            firstName: `Harper`,
            lastName: ` Lee`
        },
        {
            title: `Hannibal`,
            firstName: `Thomas`,
            lastName: ` Harris`
        },
        {
            title: `The Lord of the Rings`,
            firstName: `J. R. R`,
            lastName: ` Tolkien`
        },
    ]
    console.log(books)
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(book, index){
        let bookTitle = book.title
        let authorsFullName = book.firstName + book.lastName
        console.log(`Book #${index + 1}`);
        console.log(`Title: ${bookTitle}`);
        console.log(`Author: ${authorsFullName}`);
    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook (title, authorFirstName, authorLastName){
        this.firstName = authorFirstName;
        this.lastName = authorLastName;

    }

   const newBooks = [];
   newBooks.push(new createBook(`All systems red`,`Martha`,` Well`));

    console.log(books)

})();