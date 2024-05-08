

//swiper междуу новостями
const swiper = new Swiper('#swiper-between-the-news', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});







// показывать при клике описание: 

const blockWithSlides = document.getElementsByClassName('brand-new-news__block-with-slides')[0]

blockWithSlides.addEventListener('click', (event)=>{
  if(event.target.closest('.slide-brand-new-news')){
     event.target.closest('.slide-brand-new-news').classList.toggle('active')
  }
})


//? burger menu
const body = document.querySelector('body')
const headerContainer = document.getElementsByClassName('header__container')[0]
const btnOpen = document.getElementsByClassName('menu-burger-open')[0]
const btnClose = document.getElementsByClassName('menu-burger-close')[0]
const headerMenu = document.getElementsByClassName('header__menu')[0]


console.log(headerContainer)

headerContainer.addEventListener('click', (event)=>{
   if(event.target.closest('.menu-burger-close') || event.target.closest('.menu-burger-open')){
      body.classList.toggle('active')
      btnOpen.classList.toggle('active')
      btnClose.classList.toggle('active')
      headerMenu.classList.toggle('active')
   }
})


// P.S. чтобы корректно работала навигация по сайту 
const listWithNavItems = document.getElementsByClassName('nav-header__list ')[0]


listWithNavItems.addEventListener('click', (event)=>{
   if (event.target.closest('.nav-header__item')){
      body.classList.remove('active')
      headerMenu.classList.remove('active')
      btnOpen.classList.remove('active')
      btnClose.classList.remove('active')
   }
})

//? burger menu END



//? show all
// const btnShowAll = document.getElementsByClassName('news__btn')[0]
// const newsCardContainer = document.getElementById('news-card-container')
// const heightOfTheNewsArticle = document.getElementsByClassName('card-news')[0].offsetHeight;
// console.log(`высота карточки: ${heightOfTheNewsArticle}`)
// console.log(newsCardContainer)

// newsCardContainer.style.maxHeight = `${heightOfTheNewsArticle + 6}px`
// btnShowAll.addEventListener('click', (event)=>{
   
   
//    // P.S. чтобы при возвращении назад перекидывало на начало блока с новостями
//    if(btnShowAll.classList.contains('active')){

      
//       btnShowAll.href = '#news-title';
//    }
//    else{
//       btnShowAll.href = '#';
//    }
//    // P.S. чтобы при возвращении назад перекидывало на начало блока с новостями END
//    btnShowAll.classList.toggle('active')
//    newsCardContainer.classList.toggle('active')
//    if(btnShowAll.classList.contains('active')){
//       btnShowAll.innerText = "Скрыть новости"
//       newsCardContainer.style.maxHeight = 'none'
//    } else{
//       btnShowAll.innerText = 'Посмотреть все новости'
//       newsCardContainer.style.maxHeight = `${heightOfTheNewsArticle + 6}px`
//    }

   
// })

//? show all end






