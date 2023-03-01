let contentJoke = [
  `A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`,
  `Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"`,
  `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
  `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
]

let noMoreJoke = `"That's all the jokes for today! Come back another day!"`
let createCookie = (name, value) => {
	document.cookie = name + "=" + escape(value);
}

let deleteCookie = (name) =>{
	createCookie(name,"",-1);
}

let getCookie = (name)=>{
	var cookies = document.cookie;
	var result = null;
	if(cookies.length > 0) {
		var arrCookies 	= cookies.split(";");
		var patt		= new RegExp(name);
		for(var i = 0; i < arrCookies.length; i++){
			if(patt.test(arrCookies[i])==true){
				result = unescape(arrCookies[i].slice(arrCookies[i].indexOf("=")+1));
				break;
			}
		}
	}
	return result ;
}

let funnyFunc = (check)=>{
  let currentJoke, category
  if(getCookie('trackingJoke') == null){
    currentJoke = 0
    category       = (check=='funny') ? check : 'notfunny'
    let arr     = [{index: currentJoke, category: category}]
    let jsonStr = JSON.stringify(arr)
    document.getElementById("jokeContent").innerText = contentJoke[1]
    createCookie('trackingJoke',jsonStr)
  } else{
    category    = (check=='funny') ? check : 'notfunny'
    let jsonStr = getCookie('tracking')
    let arr     = JSON.parse(jsonStr)
    let nextJoke = arr[arr.length-1].index + 1
    console.log("adasd" + nextJoke)
    let nextContent = contentJoke[nextJoke+1]
    let obj = {index: nextJoke, category: category}
    arr.push(obj)
    jsonStr = JSON.stringify(arr)
    createCookie('trackingJoke',jsonStr)
    if(!nextContent){
      document.getElementById("jokeContent").innerText = noMoreJoke
      document.getElementById("jokeButton").remove()
      return
    }
    document.getElementById("jokeContent").innerText = nextContent
  }
}


if(getCookie('trackingJoke') == null){
  let startJoke = 0
  document.getElementById("jokeContent").innerText = contentJoke[startJoke]
} else {
  let jsonStr = getCookie('tracking')
  let arr     = JSON.parse(jsonStr)
  let nextJoke = arr[arr.length-1].index + 1
   if(nextJoke >= contentJoke.length){
    document.getElementById("jokeContent").innerText = noMoreJoke
    document.getElementById("jokeButton").remove()
   } else{
    document.getElementById("jokeContent").innerText = contentJoke[nextJoke]
   }
}


console.log(getCookie('trackingJoke'))