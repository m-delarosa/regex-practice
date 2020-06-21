// console.log(/yes/.test("yes")) //true
// console.log(/yes/.test("sey")) //false

// console.log(/yyes/.test("yes")) //false
// console.log(/yyes/.test("yesy")) //false
// console.log(/yyes/.test("Yyes")) //false

const string = "0es"

const regex = /[a-z A-Z 0-9]es/

const doesThisMatch = regex.test(string)

console.log(doesThisMatch)

const regex_test_text = "If you are a programmer, your software will run faster since even a simple regex engine applying the above regex once will outperform a state of the art plain text search algorithm searching through the data five times. Regular expressions also reduce development time. With a regex engine, it takes only one line (e.g. in Perl, PHP, Python, Ruby, Java, or .NET) or a couple of lines (e.g. in C using PCRE) of code to, say, check if the user’s input looks like a valid email address."



