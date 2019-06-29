window.addEventListener('DOMContentLoaded', function() {

'use strict';

let tab = document.querySelectorAll('.info-header-tab'),
    tabParent = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

    function hide(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hide(1);

    function show(a) {
        if (tabContent[a].classList.contains('hide')) {
        tabContent[a].classList.remove('hide');
        tabContent[a].classList.add('show');
        }
    }

    tabParent.addEventListener('click', function(event) {
         
         if (event.target && event.target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if (event.target == tab[i]) {
                    hide(0);
                    show(i);
                }

            }
         } 

    });












});