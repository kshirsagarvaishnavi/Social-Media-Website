// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector('#message-notification');
const messages = document.querySelector('.messages');
// to search messages 
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#search-messages');

//THEME CUSTOMIZATION
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

const colorPalette = document.querySelectorAll('.choose-color span');
const BG1= document.querySelector(".bg-1");
const BG2= document.querySelector(".bg-2");
const BG3= document.querySelector(".bg-3");

const themePalette = document.querySelectorAll('.choose-bg span ')

//SIDEBAR
// remove active class from all menu item after being clicked
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}
// to add active class and to show notification-popup and remove notification-count.
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none';
        } else {
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

//MESSAGES
//search chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();  //what you typed in search is converted to lowercase
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();  //your messages which are in h5 are converted to lowercase
        if (name.indexOf(val) != -1) {       // if both the variable are matching bcz not equal to is -1 
            chat.style.display = 'flex';
        }
        else {
            chat.style.display = 'none';
        }
    })
}
//search chat 
messageSearch.addEventListener('keyup', searchMessage);   //keyup is to show the searched aplhabet 

// highlight the message card when menu-item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 1700);
})

//  THEME CUSTOMIZATION

//opens theme modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//close theme modal
const closeThemeModal = (e) => {
    themeModal.style.display = 'none';
}

themeModal.addEventListener('click', closeThemeModal);

theme.addEventListener('click', openThemeModal);
//remove active class from font-size
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
//change the font size
fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        document.querySelector('html').style.fontSize = fontSize;

    })
})


// remove active class from color
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}


//change primary colors 
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;

        // remove active class from color
        changeActiveColorClass();
        if (color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})

themePalette.forEach(theme => {
    theme.addEventListener('click', () => {
        let themeChange;

        if (theme.classList.contains('bg-1')) {
            themeChange = 252;
        } else if (color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if (color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if (color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if (color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active');
        root.style.setProperty('--primary-color-hue', primaryHue)
    })
})

//new changes started
// remove active class from background

// const backgroundColor = document.querySelectorAll('.choose-bg span');

// const changeActiveBGClass = () => {
//     backgroundColor.forEach(backgroundPicker => {
//         backgroundPicker.classList.remove('active');
//     })
// }

// //change bg colors 
// backgroundColor.forEach(background => {
//     background.addEventListener('click', () => {
//         let lightColorLightness;
//         let whiteColorLightness;
//         let darkColorLightness;

//         // remove active class from color
//         changeActiveBGClass();
//         if (background.classList.contains('bg-1')) {
//             window.location.reload();
//         } else if (background.classList.contains('bg-2')) {
//             darkColorLightness = '95%';
//             whiteColorLightness = '20%';
//             lightColorLightness = '15%';
//         } else if (background.classList.contains('bg-3')) {
//             darkColorLightness = '95%';
//             whiteColorLightness = '10%';
//             lightColorLightness = '0%';
//         }
//         background.classList.add('active');
//         root.style.setProperty('--light-color-lightness', lightColorLightness);
//         root.style.setProperty('--white-color-lightness', whiteColorLightness);
//         root.style.setProperty('--dark-color-lightness', darkColorLightness);
//     })
// })
// new changes end

  


// theme BACKGROUND values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change background colors
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}


BG1.addEventListener('click', () => {
    
    // add active class
    BG1.classList.add('active');
    // remove active class from the others
    BG2.classList.remove('active');
    BG3 .classList.remove('active');
//remove changes from local storage
    window.location.reload();
    });

BG2.addEventListener('click', () => {
darkColorLightness = '95%';
whiteColorLightness ='20%';
lightColorLightness ='15%';
// add active class
BG2.classList.add('active');
// remove active class from the others
    BG1.classList.remove('active');
    BG3.classList.remove('active');
changeBG();
});

BG3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness ='10%';
    lightColorLightness ='0%';
    // add active class
    BG3.classList.add('active');
    // remove active class from the others
    BG1.classList.remove('active');
    BG2.classList.remove('active');
    changeBG();
    });