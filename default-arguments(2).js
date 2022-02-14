module.exports= function makeImportant(input,exclamation=input.length){
    return input+ '!'.repeat(exclamation)
}