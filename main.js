myButton.addEventListener('click', (e)=>{
    let request = new XMLHttpRequest()
    request.open('GET','http://jack.com:8002/xxx')
    request.send()
    request.onreadystatechange = ()=>{
        // 一旦状态发生改变，这个函数的代码段的位置可以在任何位置
        if(request.readyState === 4){
            console.log('请求响应都完毕了')
            console.log(request.status)
            if(request.status >= 200 && request.status<=300){
                console.log('说明请求成功')
                console.log(typeof request.responseText)
                console.log(request.responseText)
                let string = request.responseText
                // 把符合JSON语法的字符串转换为JS对应的值
                let obj = window.JSON.parse(string)
                // JSON,parse是浏览器提供的
                // document.getElementById是浏览器提供的
                console.log(typeof obj)
                console.log(obj)
                console.log('obj.node')
                console.log(obj.node)
                console.log('obj.node.from')
                console.log(obj.node.from)
                
            }else if(request.status >= 400){
                console.log('说明请求失败')
            }
        }
    }
})