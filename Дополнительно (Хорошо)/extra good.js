// given
const messages = [
    "backspace",
    "enter",
    "shift",
    "control",
    "delete",
    "space",
    "subtract"
]
messages.getKey = () => {
    let key = new Date().toLocaleTimeString(), x = 0
    while ( log [ `${key}[${x}]` ] ) { x++ }
    return `${key}[${x}]`
}

const log = {}

const sendMessage = message => new Promise (
    resolve => setTimeout (
        () => resolve ( message ),
        Math.random () * 7000
    )
)
/*Задача: напилить код, который вызывает функцию sendMessage для каждого
 элемента массива messages и логирует полученные сообщения в объекте log
 следующим образом:
log
{
    22:25:57: "backspace"
    22:25:58: "shift"
    22:25:59: "subtract"
    22:25:59[2]: "enter"
    22:25:59[3]: "delete"
    22:26:01: "control"
    22:26:01[2]: "space"
}
*/
for (const x in messages){                              // запускаем цикл перебора элементов масива
    //console.log (messages[x])                         // выводим элемент в консоль
    sendMessage (messages[x]).then                      
        (
            
            data => (typeof data == "string") ?         // проверяем относится полученное сообщение строкой
                console.log ( data ): null,             // и выведет в консоль полученное сообщение : ничего не делаем
            log[messages.getKey()] = messages[x]
            
        )
}
console.log (log)
