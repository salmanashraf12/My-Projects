//sidebar
const menuItems=document.querySelectorAll('.menu-item');

const messageNotification=document.querySelector('#message-notifications');
const messages=document.querySelector('.messages');
const message=messages.querySelectorAll('.message');
const messageSearch=document.querySelector('#message-search');

const theme=document.querySelector('#theme');
const themeModel=document.querySelector('.customize-theme');

const fontSizes=document.querySelectorAll('.choose-size span');

var root=document.querySelector(':root');
const colorPalette=document.querySelectorAll('.choose-color span');


const Bg1=document.querySelector('.bg-1');
const Bg2=document.querySelector('.bg-2');
const Bg3=document.querySelector('.bg-3');


//remove active when not clicked

const changeActiveItem=()=>{
menuItems.forEach(item=> {
    item.classList.remove('active');
})
}
//set active when clicked

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
    if(item.id== 'notifications'){
        document.querySelector('.notifications-popup').style.display='block';
        document.querySelector('.notifications-count').style.display='none';
    }
    else{
        document.querySelector('.notifications-popup').style.display='none';
    }
    })
})
//for search messages or chat

const searchMessage=()=>{
    const val =messageSearch.value.toLowerCase();

    message.forEach(chat=>{
    
        const name = chat.querySelector('h5') ? chat.querySelector('h5').textContent.toLowerCase() : '';
        if(name.indexOf(val)!=-1){
            chat.style.display='flex';
        }
        else{
            chat.style.display='none';
        }
    
    })
    
    }




messageSearch.addEventListener('keyup',searchMessage);

// give shadow to messages box when click

messageNotification.addEventListener('click',()=>{


    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notifications-count').style.display='none';
setTimeout(()=>{

messages.style.boxShadow='none';

},2000)
})


// Theme Customization
// open theme menu
const openthemeModal=()=>{
themeModel.style.display='grid';

}

//close theme menu

const closeThemeModel=(e)=>{
if(e.target.classList.contains('customize-theme')){

    themeModel.style.display='none';
}

}


themeModel.addEventListener('click',closeThemeModel);
theme.addEventListener('click',openthemeModal);


//font sizes

//Remove active class from spans to selected span
const removeSizeSelector=()=>{
    fontSizes.forEach(size=>{
        size.classList.remove('active');
    })
    
    }


fontSizes.forEach(size=>{
size.addEventListener('click',()=>{
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');

    if(size.classList.contains('font-size-1')){

        fontSize='10px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
        fontSize='13px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize='16px';
            root.style.setProperty('----sticky-top-left','2rem');
        root.style.setProperty('----sticky-top-right','-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize='19px';
            root.style.setProperty('----sticky-top-left','-5rem');
            root.style.setProperty('----sticky-top-right','-25rem');}
            else if(size.classList.contains('font-size-5')){
                fontSize='22px';
                root.style.setProperty('----sticky-top-left','-12rem');
                root.style.setProperty('----sticky-top-right','-35rem');}
        
                document.querySelector('html').style.fontSize=fontSize;
})
})
//change primary colours

const removecolorSelector=()=>{
    colorPalette.forEach(size=>{
        size.classList.remove('active');
    })
    
    }

colorPalette.forEach(color=>{


color.addEventListener('click',()=>{
    removecolorSelector();
let primaryHue;
color.classList.toggle('active');

if(color.classList.contains('color-1')){
    primaryHue=252;
}
else if(color.classList.contains('color-2')){
    primaryHue=52;

}
else if(color.classList.contains('color-3')){
    primaryHue=352;

}
else if(color.classList.contains('color-4')){
    primaryHue=152;

}
else if(color.classList.contains('color-5')){
    primaryHue=202;

}
root.style.setProperty('--primary-color-hue',primaryHue);
})

})




//background selection
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG=()=>{

root.style.setProperty('--dark-color-lightness',darkColorLightness);
root.style.setProperty('--light-color-lightness',lightColorLightness);
root.style.setProperty('--white-color-lightness',whiteColorLightness);
}

Bg2.addEventListener('click',()=>{
     lightColorLightness='15%';
     whiteColorLightness='20%';
     darkColorLightness='95%';

     Bg2.classList.add('active');
     Bg1.classList.remove('active');
     Bg3.classList.remove('active');
changeBG();

})
Bg3.addEventListener('click',()=>{
    lightColorLightness='0%';
    whiteColorLightness='10%';
    darkColorLightness='95%';

    Bg3.classList.add('active');
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
changeBG();

})
Bg1.addEventListener('click',()=>{
 

    Bg1.classList.add('active');
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
window.location.reload();

})
