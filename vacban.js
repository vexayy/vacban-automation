// ==UserScript==
// @name         VACBAN.WTF Get Content
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Auto Get Content
// @author       vexayy
// @match        https://vacban.wtf/threads/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addComment() {
        const replyButton = document.querySelector('a.actionBar-action--reply');

        if (replyButton) {
            replyButton.click();

            setTimeout(() => {
                const commentField = document.querySelector('.fr-wrapper .fr-element');

                if (commentField) {
                    commentField.innerHTML = '';
                    commentField.innerHTML = '<p>Thanks for sharing this!</p>';

                    const submitButton = document.querySelector('button.button--primary.button--icon.button--icon--reply');

                    if (submitButton) {
                        submitButton.click();
                        console.log('Comment has been added!');
                    } else {
                        console.log('Submit button not found.');
                    }
                } else {
                    console.log('Comment text area not found.');
                }
            }, 1000);
        } else {
            console.log('Reply button not found.');
        }
    }

    function addLike() {
        const likeButton = document.querySelector('a.reaction[data-reaction-id="1"]');

        if (likeButton) {
            likeButton.click();
            console.log('Like has been added!');
        } else {
            console.log('Like button not found.');
        }
    }

    const button = document.createElement('button');
    button.innerText = 'Get Content';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.zIndex = 1000;
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#007bff';
    button.style.color = '#ffffff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    document.body.appendChild(button);

    button.addEventListener('click', () => {
        addComment();
        addLike();

        setTimeout(() => {
            location.reload();
            window.scrollTo(0, 0);
        }, 3000);
    });

})();
