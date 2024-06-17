import{S as p,i as d}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function m(e){const s="https://pixabay.com/api/",r="",a=new URLSearchParams({key:"44424837-77c152bfba29e6a878f792266",q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}),t=`${s}${r}?${a}`;return fetch(t).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()}).catch(o=>console.log("Error fetching photos:",o))}function h(e){return e.map(f).join("")}function f(e){return`<li class="gallery-item">
  <a href="${e.largeImageURL}" class="gallery-item-link"
    ><img
      class="gallery-item-img"
      src="${e.webformatURL}"
      alt="${e.tags}"
     /></a>
  <ul class="photo-info-list">
    <li class="photo-info-item">
      <p class="photo-data-name">Likes</p>
      <p class="photo-data">${e.likes}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Views</p>
      <p class="photo-data">${e.views}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Comments</p>
      <p class="photo-data">${e.comments}</p>
    </li>
    <li class="photo-info-item">
      <p class="photo-data-name">Downloads</p>
      <p class="photo-data">${e.downloads}</p>
    </li>
  </ul>
</li>`}const g="/goit-js-hw-11/assets/alert-icon-40fa32d5.svg",u=document.querySelector(".search-form"),n=document.querySelector(".gallery"),l=document.querySelector(".loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:200});u.addEventListener("submit",L);function L(e){e.preventDefault();const s=e.target.elements.searchField.value.trim();if(s===""){n.innerHTML="",c("You forgot enter data for search","#ffa000");return}l.classList.remove("visually-hidden"),m(s).then(r=>{if(r.hits.length===0)n.innerHTML="",c("Sorry, there are no images matching your search query. Please try again!","#EF4040");else{const a=h(r.hits);n.innerHTML=a,y.refresh()}l.classList.add("visually-hidden")}).catch(r=>{c("An error occurred while fetching photos. Please try again later.","#EF4040"),l.classList.add("visually-hidden")}),u.reset()}function c(e,s){d.show({message:e,position:"topRight",backgroundColor:s,iconUrl:g,messageColor:"#828387",theme:"dark",maxWidth:"350px"})}
//# sourceMappingURL=commonHelpers.js.map
