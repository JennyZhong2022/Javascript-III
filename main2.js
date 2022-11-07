console.log('hello world');

const app = document.getElementById('app')   //  step 1获取id是app的容器。。 创建一个app
// document.getElementsByClassName()    // same as above

const div = document.createElement('div')  // new style step 2

div.textContent = 'app2'  // new styple step 3


// app.innerHTML = `
// <div>app1</div>   
// `  // old style step 2 , not secure, not recommended to use 

app.appendChild(div)  // step 4 创建一个新的段落元素 <div>


const p = document.createElement("p");
p.textContent = 'okok'
document.body.appendChild(p);  // 创建一个新的段落元素 <p>，然后添加到 <body> 的最尾部


const app2 = document.querySelector('#app')
const div2 = document.createElement('div')
div2.textContent = 'app3'
app2.appendChild(div2)

const app3 = document.querySelector('#app') //创建一个app3:从文件里获取id是app的容器 
const div3 = document.createElement('div')  // 创建一个div3:文件里创建一个容器div
div3.textContent = 'happy' // div3里的内容是happy
app3.appendChild(div3) //在id是app的容器里附加上div3 


const input = document.querySelector('input')  // 选择第一个input
input.value = '10'

const input2 = document.querySelector('#app > input') // 选择#app下面的直系第一个孩子
input2.value = '30'


function add(a, b) {
  return a + b
}  // 加法， a+b
input.value = add(1, 2)  //  a=1, b=2

//=============================================================


const input3 = document.createElement('input')
const input4 = document.createElement('input')
const button = document.createElement('button')
const br = document.createElement('br')
const span = document.createElement('span')
button.textContent = ' Add'
span.textContent = '0'

app.appendChild(input3)
app.appendChild(input4)
app.appendChild(button)
app.appendChild(br)
app.appendChild(span)



function newAdd() {  // 建立newAdd的函数， 
  console.log("New Add");  // 有没有这个都可以出结果
  let a = +input3.value
  let b = +input4.value  // 赋值iput3,4给a,b. 前面加+ 确保或转换成number
  if (isNumber(a) && isNumber(b)) {  // 写这个前，先把isNumber函数功能建立， 看下面。
    const sum = a + b    // 如果a是数字，b是数字，赋值a+b给sum
    span.textContent = sum  // span里的内容就是sum
  } else {
    // span.textContent="input error"  // 不然span里的内容是input error 

    span.textContent = '' // 上面有写span的内容是0， 这里用‘’空格把0盖住， 其实也可以把上面的赋值0去掉就不影响了
    if (!isNumber(a)) {
      span.textContent += 'a ' // 如果a不是数字， ！就是不等于号， span的内容前面加上a
    }
    if (!isNumber(b)) {
      span.textContent += 'b '  // 如果b不是数字， ！就是不等于号， span的内容前面加上b
    }
    span.textContent += 'input error'  // 上面的情况后，span的内容里后面再加上input error.   网页里会显示 a input error ， b input error 或者 a b input error.
  }
}

function isNumber(num) {
  // if(+num===num){
  //   return true}
  //   else {
  //     return false
  //   }
  return +num === num
} // 建立isNumber的函数， num加上+后绝对等于数字那就是num是数字


const isNumber2 = (num) => {  // 箭头函数
  return +num === num
}  // same as above! 功能一样

button.addEventListener('click', () => newAdd())  //在button里来注册一个事件监听器addEventListener。 里面加入click的功能，click button后遵循后面的箭头函数， newAdd往上看

//=============================================================

let num = 0
num = num + 1
num += 1 // same as above
num++  //same as above, 现在常用这个
num += 2 // 加2

num++ // 先使用后加
++num // 先加再使用 

for (let num = 0; num <= 10; num++) {  // for循环， (;;) 里面用分号。 num <= 10是条件，循环到num小于等于10. num++ 就是每次循环加一次
  const input = document.createElement('input')
  app.appendChild(input)  // 会出现总共11个imput
}

const list = ['name', 'age', 'email', 'address', 'profile']


console.time('1')  // 和后面的console.timeEnd 一起使用， 计算计算循环的时间
for (let i = 0; i < 5; i++) {
  console.log(i, list[i]);   // output 是 0 'name',1 'age',2 'email',3 'address',4 'profile'
  if (list[i] === 'email') {
    break
  }  // 给出条件，到‘email’那就停止了，output 是 0 'name',1 'age',2 'email'
}
console.timeEnd('1')


console.time('2')  // forEach的时间也很快
list.forEach(element => {
  console.log(element);
})   // 可以列出list里的element, 比上面简单，是因为不用数length， 或者把什么的i<5改成i<list.length。 forEach的循环是不可以停止的，一直进行下去的，没有if和break, 和for循环不一样
console.timeEnd('2')


console.time('3')
list.forEach((element, index) => { // forEach里面的规定就是内容element在前，然后index 
  console.log(index, element);  // clg里的顺序可以随意
})
console.timeEnd('3')

//=============================================================

class User {    // class格式，后面没有=，没有（）， 第一个字母要大写
  name = ''
  age = 9
  money= 0


  login = () => {  //这个推荐写箭头函数
    console.log(this.name, 'login');  
  }

  saveMoney = (num) => {
    this.money += num   // this.money 就是指class里面的那个money, +=累计加上，后面的num指括号里函数num，并对应下面的括号里函数（数字）
    console.log(`${this.name} money is ${this.money}`);
  }

  checkMoney =()=>{  //建立函数，检查钱数
    console.log(`${this.name} Money is ${this.money}`);  
  }

  constructor(name) {  //初始化？ 只能是普通函数，不是箭头函数，固定写法
    this.name = name  // this.name 就是指class里面的那个name， 后面的name指括号里函数name，并对应下面的括号里函数（‘xiaoxiao'）
  }
}

const xiaoxiao = new User('xiaoxiao') // 创造一个xiaoxiao: new User('')
console.log(xiaoxiao);

const xiao = new User('xiao') // 创造一个xiao: new User(''), 不会覆盖上面的命令，写class的一个好处就是，各个命令都可以分类,块展示
console.log(xiao);

xiaoxiao.login() // output 是 xiaoxiao login , 对应login哪个箭头函数
xiaoxiao.saveMoney(200) // output is 200
xiaoxiao.saveMoney(399) // output is 599, 前面的200+现在的399

xiaoxiao.checkMoney()  // 检查钱 ， output is 599
xiao.checkMoney()  // output is 0


//=============================================================
