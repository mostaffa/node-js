// Display the Arguments which passed to the programm 
// If you didnt pass any argument
console.log(process.argv);// => [ 'C:\\Program Files\\nodejs\\node.exe','C:\\DCI\\node-js\\Intro\\Node-js-args\\app.js' ]

// lets try to pass an argument "arg"
console.log(process.argv);// => [ 'C:\\Program Files\\nodejs\\node.exe',
//                                'C:\\DCI\\node-js\\Intro\\Node-js-args\\app.js',
//                                'arg' ]

// it display an array of strings, the first two args are frome the System, the others from the user
// to show all args you can use forEach because process.argv is an array
process.argv.forEach(arg=>{
    console.log(arg);
})
