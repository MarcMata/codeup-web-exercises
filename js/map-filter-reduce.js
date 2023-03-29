const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// Create a file named map-filter-reduce.js in your js directory and copy the users data below into it.
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const threeLanguages= users.filter(user => user.languages.length >= 3)
console.log(threeLanguages)
// Use .map to create an array of strings where each element is a user's email address
const usersEmail = users.map(user => user.email)
console.log(usersEmail)
usersEmail.forEach(email => console.log(email));
// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
const totalYears = users.reduce((total, years)=> total + years.yearsOfExperience, 0);

console.log(`The total years of all developers is ${totalYears}`)
console.log(`The average of years of all developers is ${totalYears/users.length}`)
// Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((longestEmail, person) => longestEmail.length < person.email.length ? person.email : longestEmail, "")
console.log(longestEmail)
// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
const usersNames = users.reduce((acc, people, index) => index+1 === users.length ? `${acc} ${people.name}.` : `${acc} ${people.name},`, "Your instructors are:");
console.log(usersNames)

let uniqueLanaguages= users.reduce((acc, user) => {
    user.languages.forEach(function(language){
        if(!acc.includes(language)){
            acc.push(language);
        }
    });
    return acc;
}, []);
console.log(uniqueLanaguages)