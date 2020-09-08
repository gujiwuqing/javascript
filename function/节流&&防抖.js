function debounce(func,wait,immediate) {
    var timer
    return  function() {
        var context = this
        var args = arguments
        if (timer) clearTimeout(timer)
        if (immediate){
            var callNow = !timer;
            console.log(callNow);
            //如果已经执行过，不再执行
            timer = setTimeout(function () {
                timer = null
            },wait)
            console.log(timer);
            if (callNow)  result =func.apply(context,args)
        }else {
            timer = setTimeout(function(){
                func.apply(context,args)
            },wait)
        }
    }

}