
    /* function sum(...args) {
        var result = 0;
        args.forEach(function (value) {
            result += value;
        });

        return result;
    }

    //sum(1, 2, 3);
    console.log(sum(1,2,3)) */



module.exports=function average(...args)
{
    let sum=0
    args.forEach(function(value){
        sum=sum+value
    })
    return sum/args.length;
}




