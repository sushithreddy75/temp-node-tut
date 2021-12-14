const {readFile,writeFile}=require('fs');
console.log('started');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(result);
    const first=result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err)
        {
            console.log(err);
            return;
        }
        console.log(result);
        const second=result;
        writeFile(
            './content/result-async.txt',
            `result ${first},${second}`,
            (err,result)=>{
                if(err)
                return;
                console.log('done with the task');
            }
        );
    })
})
console.log('starting the nextone');
