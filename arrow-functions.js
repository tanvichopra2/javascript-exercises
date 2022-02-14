
var inputs = process.argv.slice(2);
     const result = inputs.map(a => a[0])
                     .reduce((tillNow, a)=> tillNow+a,'');
                         console.log(`[${inputs}] becomes "${result}"`);