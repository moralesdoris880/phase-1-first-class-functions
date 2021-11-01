function receivesAFunction(cb){
    return cb();
}
function returnsANamedFunction(){
    return function cb (){};
}
function returnsAnAnonymousFunction(){
    return function (){
        return 'im anonymous'
    };
}