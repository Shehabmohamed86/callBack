const btn = document.querySelector('button')
 

 const moveX = (element,amount,deley,callback) =>{
  const bodyboundary = document.body.clientWidth;
  const elRight = element.getBoundingClientRect().right;
  const currLeft = element.getBoundingClientRect().left;
  if (elRight + amount > bodyboundary){
    console.log('stop i can not go!!!')
  
  }else{
  setTimeout(() =>{
    element.style.transform = `translateX(${currLeft + amount}px)`
    if (callback) callback()
  },deley)
 } }

 moveX(btn,100,2000,()=>{
  moveX(btn,100,2000,()=>{
  moveX(btn,1220,2000)
  });
 });