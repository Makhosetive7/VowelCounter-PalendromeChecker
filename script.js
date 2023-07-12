const VowelCountAndCheckPalendrome = () => {
    const textarea = document.getElementById("textarea").value
    const countVowels = Vowels(textarea)
    const checkPalendrome = Palendrome(textarea)
    const results = document.getElementById("results")

    results.innerHTML = "Number of Vowels: " + countVowels + "<br> isPalindrome: " + checkPalendrome;
}

const Palendrome = (string)=> {
    const reversedstring = string.split("").reverse().join("")
    return string.toLowerCase() === reversedstring.toLowerCase()
}

const Vowels = (string) => {
    let vowelscount=0;
    let vowelsArray = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"]

    for (const char of string.toLowerCase()) {
        if (vowelsArray.includes(char)) {
            return vowelscount++
        }
    }
    return vowelscount
}