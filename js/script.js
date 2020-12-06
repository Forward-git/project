"use strict";
let num = 5;
console.log(`Test-${num}`);

console.log(!!'1');



function fallActivities(activity) {
    for (var i = 0; i < activity.length; i++) {
      var name = activity[i]
    }
    console.log(i) // 5
    console.log(name) // Jack O Lantern
  }
  let activity = ['hiking', 'Halloween', 'Pumpkin Patch', 'Read Snoopy Fall Comics', 'Jack O Lantern'];
  fallActivities(activity);

let a = 5,
    b = a;
 b = b + 5;   
 console.log(b);

 const obj = {
     a: 5,
     b: 1
 };

 const copy = obj; //так мы передали не значение, а ссылку на объект, поэтому будет атрагиваться изначальный объект
copy.a = 10;
 console.log(copy);
 console.log(obj);

 const obj2 = {
    a: 5,
    b: 1
};

//const copy2 = Object.assign({},obj2); //так мы передали не значение, а ссылку на объект, поэтому будет атрагиваться изначальный объект\
const copy2 = {...obj2}
copy2.a = 10;
console.log(copy2);
console.log(obj2);

const oldArray = ['a','b','c'];
const newArray = oldArray.slice();
newArray[1] = 'q';
console.log(oldArray);
console.log(newArray);

const objFull = {
    a: 5,
    b: 1,
    c: {
        x:1,
        y:2
    }
};
const objNew = JSON.parse(JSON.stringify(objFull));
objNew.c.x = 10;
console.log(objNew);
console.log(objFull);

for (var i = 0; i < 10; i++ )
{
    console.log(i); 
}
console.log(i); 

class Newclass {
    constructor (a,b) {
        this.a = a;
        this.b = b;
    }
    newSum() {
        return this.a + this.b;
    }
}

const summ = new Newclass(12,3);
console.log(summ.newSum());

let sum = (a, b) => {  // фигурная скобка, открывающая тело многострочной функции
    let result = a + b;
    return result; // при фигурных скобках для возврата значения нужно явно вызвать return
  };
  
  console.log( sum(1, 2) ); // 3

  let sum2 = (a,b) => a + b;
  console.log( sum2(3, 2) ); // 5

  let fullname = (name,surname) => `Меня зовут ${surname} ${name}`;
  console.log( fullname("Алексей", "Сапронов") ); 

  let fio = (name,surname,otch) => {
     let result = `Меня зовут ${surname} ` + name + otch; 
     return result;
  }
  console.log( fio("Алексей", "Сапронов",'Владимирович') ); 


  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение.")}
    );


  let ask = (question, yes, no) => confirm(question) ? yes() : no();


  let fun = (a, b, c) => {confirm(a) ? b() : c()}

fun(
"Вы согласны?",
() => { alert("Вы согласились."); },
() => { alert("Вы отменили выполнение.")}
);


function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
    }
    
    function deletePhoto() {
    //код для удаления фото
    }
    
    ask (
    'Удалить фото?',
    () => {deletePhoto(); alert('Фото удалено');},
    () => alert('Удаление отменено')
    );


setTimeout (()=> { console.log('time')}, 0);
console.log('2');
console.log('3');

function Say(event,callback) {
    console.log(event);
    callback();
}

Say ('Privet', () => console.log('Medved'));

console.log("Запрос данных");
const p = new Promise (function(resolve, reject) {

    setTimeout (()=> { 
        console.log("Подготовка данных....");
        const person = {
            name:'Alex',
            age: 36
        };
        const person2 = {
            name:'Vova',
            age: 32
        };
        resolve([person, person2]);
      

    }, 1000);
});

p.then ( data => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=> { 
            data[0].sell = 5000;
            data[1].sell = 3000;
            if (data[0].sell == 5000)
            resolve(data);
            else
            reject(data);
        });
    });
}).then ( newdata => {
    newdata[0].new = 11;
    return newdata;
}).then( data => {
     console.log("Данные получены",data[0]);
    console.log("Данные2 получены",data[1]);
}).catch(data => {
    console.error("Ошибка!!!",data);
}).finally(()=>{
    console.log("Итого");
});

const test = time => {
    return new Promise (resolve=> {
        setTimeout (()=>resolve(), time);
    });
};
//test (1000).then(()=> console.log('1000 ms'));
/* Promise.all([test(2000), test(3000)])
.then(()=>{
    console.log('All');
}); */
Promise.race([test(1000), test(5000)])
.then(()=>{
    console.log('race');
}); 