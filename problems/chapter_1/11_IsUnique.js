//implement an alogorithm to determine if a string has all unique characters

export default function IsUnique(arr) {
    arr = arr.sort((a,b) => b - a)
    for(let i = 1;i < arr.length;i++) {
        if(arr[i] === arr[i - 1]) {
            return false
        }
    }
    return true
}