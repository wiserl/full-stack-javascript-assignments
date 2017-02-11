export const greeting = "Hello World";
export const characterAt = greeting.charAt('4');
export const greetingArray = greeting.split("");
export const begins = (string, char) => { 
    return string.charAt(0) === char;
}
export const beginsInsensitive = (string, char) => { 
    return string.charAt('0').toLowerCase() === char.toLowerCase(); 
}


