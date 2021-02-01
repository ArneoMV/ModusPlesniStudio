$(document).ready(function() {
  // GALLERY AND PAGINATION

  // HOMEPAGE GALLERY 1 
  const galleryItems1 = document.querySelector(".gallery-items-1").children;
  const prev1 = document.getElementById("prev-1");
  const next1 = document.getElementById("next-1");
  const page1 = document.getElementById("page-num-1");

  // koliko slika se prikazuje
  const maxItem = 6;
  let index = 1;

  const pagination1 = Math.ceil(galleryItems1.length / maxItem);
  console.log(pagination1);
  prev1.addEventListener("click",function() {
    index--;
    check1();
    showImages1();
  })

  next1.addEventListener("click",function() {
    index++;
    check1();
    showImages1();  
  });

  function check1() {
    if ( index == pagination1) { next1.classList.add("disabled"); }
    else { next1.classList.remove("disabled");	 }
    if (index == 1) { prev1.classList.add("disabled"); }
    else { prev1.classList.remove("disabled");	 }
  };
  function showImages1() {
      for (let i = 0 ;i < galleryItems1.length; i++ ) {
        galleryItems1[i].classList.remove("show");
        galleryItems1[i].classList.add("hide");

        if ( i >= (index * maxItem) - maxItem && i < index * maxItem ) {
          // if i greater than and equal to (index*maxItem)-maxItem;
        // means  (1*8)-8=0 if index=2 then (2*8)-8=8
          galleryItems1[i].classList.remove("hide");
          galleryItems1[i].classList.add("show");
        }
        page1.innerHTML=index;
      }  
  }
  showImages1();
  check1();


// GALLERY Natjecanja
const galleryItems_Natjecanja = document.querySelector(".gallery__items__natjecanja").children;
const prev_Natjecanja = document.getElementById("prev__natjecanja");
const next_Natjecanja = document.getElementById("next__natjecanja");
const page_Natjecanja = document.getElementById("page__num__natjecanja");

const max_Item_Natjecanja = 3;
let index_Natjecanja = 1;

const paginationNatjecanja = Math.ceil(galleryItems_Natjecanja.length / max_Item_Natjecanja);
  console.log(paginationNatjecanja)
  prev_Natjecanja.addEventListener("click",function(){
    index_Natjecanja--;
    check_Natjecanja();
    showImages_Natjecanja();
  })
  next_Natjecanja.addEventListener("click",function(){
    index_Natjecanja++;
    check_Natjecanja();
    showImages_Natjecanja();  
  })
  function check_Natjecanja(){
    if ( index_Natjecanja == paginationNatjecanja) { next_Natjecanja.classList.add("disabled"); }
    else { next_Natjecanja.classList.remove("disabled");	 }
    if (index_Natjecanja == 1) { prev_Natjecanja.classList.add("disabled"); }
    else { prev_Natjecanja.classList.remove("disabled");	 }
  }
  function showImages_Natjecanja() {
      for (let i = 0 ;i < galleryItems_Natjecanja.length; i++ ) {
        galleryItems_Natjecanja[i].classList.remove("show");
        galleryItems_Natjecanja[i].classList.add("hide");

        if ( i >= (index_Natjecanja * max_Item_Natjecanja) - max_Item_Natjecanja && i < index_Natjecanja * max_Item_Natjecanja ) {
          // if i greater than and equal to (index*maxItem)-maxItem;
        // means  (1*8)-8=0 if index=2 then (2*8)-8=8
        galleryItems_Natjecanja[i].classList.remove("hide");
        galleryItems_Natjecanja[i].classList.add("show");
        }
        page_Natjecanja.innerHTML=index_Natjecanja;
      }  
  }
  showImages_Natjecanja();
  check_Natjecanja();




});