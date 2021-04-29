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
messages.getKey = () => new Date().toLocaleTimeString()

const log = {}

const sendMessage = message => new Promise (
    resolve => setTimeout (
        () => resolve ( message ),
        Math.random () * 7000
    )
)
/*Нужно напилить код рекурсивной функции recursive, которая вызывает sendMessage поочередно с каждым элементом массива messages, но только после того, как предыдущий месседж будет залогирован в объекте log

var sendAll = () => {
    var index = 0
    function recursive () {
        ...
    }
    recursive ()
}

sendAll()
*/
/*
for (const x in messages){                              // запускаем цикл перебора элементов масива
    //console.log (`${[x]} - й элемент массива messages "${messages[x]}"` )                         // выводим элемент в консоль
    sendMessage (messages[x]).then
        (
            data => (typeof data === "string") ?         // проверяем относится полученное сообщение строкой
                log[messages.getKey()] = data : null,    // заносим полученное сообщение в свойство (генерирует messages.getKey()) объекта log  : ничего не делаем
        )
}
console.log (log)
*/
const sendAll = () => {
    var index = 0
    function recursive () {
        sendMessage (messages.shift()).then              //   запускаем sendMessage передав в качестве параметра первый элемент массива и удалив этот элимент из массива
        (
            function resolve ( data ) {
                console.log ( `${messages.getKey()} функцией ${arguments.callee.name}: началто  добавление элемента ${data} в log` )
                !log[messages.getKey()] ?  
                    typeof data === "string" ?                  // проверяем относится полученное сообщение строкой
                        log[messages.getKey()] = data : null    // заносим полученное сообщение в свойство (генерирует messages.getKey()) объекта log  : ничего не делаем
                : setTimeout (log[messages.getKey()] = data , 1000)
                    console.log ( `${messages.getKey()} функцией ${arguments.callee.name} завершено добавление элемена ${data} в  log` )
            },
            console.log (messages.lenght == 1 ?  `сушите весла, сэр` : `${messages.getKey()} Осталось обработать из массива следующие значения ${messages}`)            
        )
        typeof messages[0] ==="function" || messages.length == 0  ? null : recursive ()

    }
    recursive ()
}
sendAll()