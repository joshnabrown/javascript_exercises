const headingGenerator = (title, headingType) => {
    return `<h${headingType}>${title}</h${headingType}>`
}

console.log(headingGenerator("How ya doing?", 1))
console.log(headingGenerator("This is using heading 3", 3))
console.log(headingGenerator("Hello!", 2))