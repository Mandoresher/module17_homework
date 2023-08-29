export function repeatWord(word, count) {
    let result = ""
    if (count < 0 || typeof count !== "number") {
        return "Данные неверны"
    }
    if (count === 0) {
        return "Пустота"
    }
    if (count > 10000) {
        return "Слишком много!"
    }
    while (count !== 1) {
        result += `${word}, `
        count -= 1
    }
    result += word
    return result
}