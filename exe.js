function checkPalindrome(inputString) {
    const string = inputString.split('').reverse().join('');
    return string === inputString;
    }

    console.log(checkPalindrome('ana'));