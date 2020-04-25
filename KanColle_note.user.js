// ==UserScript==
// @name         艦隊收藏記事本
// @namespace    https://greasyfork.org/zh-TW/users/461233-jack850628
// @version      0.1
// @description  艦隊收藏記事本
// @author       jack850628
// @match        http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==

(function() {
    'use strict';
    var main_ntg = document.querySelector('#main-ntg');
    var open_note = document.createElement('button');
    var open_note_css = document.createElement('style');
    var note_div = document.createElement('div');
    var note_div_css = document.createElement('style');
    var close_note = document.createElement('button');
    var close_note_css = document.createElement('style');
    var note_view = document.createElement('textarea');
    var note_view_css = document.createElement('style');

    open_note_css.innerHTML = `
        #open_note{
            position: absolute;
            top: 0px;
            right: 0px;
        }
    `;
    main_ntg.appendChild(open_note_css);

    note_div_css.innerHTML = `
        #note_div{
            position: absolute;
            top: 50%;
            left: 50%;
            width: 80%;
            height: 80%;
            background: aqua;
            transform: translateX(-50%) translateY(-50%);
            display: none;
        }
    `;
    main_ntg.appendChild(note_div_css);

    close_note_css.innerHTML = `
        #close_note{
            position: absolute;
            top: -20px;
            left: -30px;
            width: 30px;
            height: 30px;
        }
    `;
    main_ntg.appendChild(close_note_css);
    
    note_view_css.innerHTML = `
        #note_view{
            position: relative;
            margin: 0px;
            width: 100%;
            height: 100%;
            font-size: 3em;
        }
    `;
    main_ntg.appendChild(note_view_css);


    note_div.setAttribute('id', 'note_div');

    close_note.innerText = 'X';
    close_note.setAttribute('id', 'close_note');
    close_note.onclick = ()=>{
        GM_setValue('KanColle_note', note_view.value);
        note_div.style.display = 'none';
    };
    note_div.appendChild(close_note);
    
    note_view.setAttribute('id', 'note_view');
    if(GM_getValue('KanColle_note')){
        note_view.value = GM_getValue('KanColle_note');
    }
    note_div.appendChild(note_view);

    main_ntg.append(note_div);

    open_note.innerText = '記事本';
    open_note.setAttribute('id', 'open_note');
    open_note.onclick = ()=>{
        note_div.style.display = 'block';
    };
    main_ntg.appendChild(open_note);
})();