let controller;
let slideScene;
let pageScene;
let detailScene
const mouse = document.querySelector('.cursor');
const mouseTxt = mouse.querySelector('span');
const burger = document.querySelector('.burger');
const navBar = document.querySelector('.nav-bar');
const home = document.querySelector('#logo');

// Slides that occur throughout the page. Primarily from left to right concerning images and text.
function animateSlides() {
    //Init Controller
    controller = new ScrollMagic.Controller();
    //Selct some things
    const sliders = document.querySelectorAll('.slide')
    const nav = document.querySelector('.nav-header');
    // Loop over each slide
    sliders.forEach((slide, index, slides) =>{
        const revealImg = slide.querySelector('.reveal-img');
        const img = slide.querySelector('img');
        const revealText = slide.querySelector('.reveal-text');
        // GSAP
        // gsap.to(revealImg, 1, { x: "100%"});  This was the problem that left the images on the page when it first loaded up. It essential revealed the img before the scroll could take place.
        const slideTl = gsap.timeline({defaults: {duration: 1, ease: 'power2.inOut'}});
        
        slideTl.fromTo(revealImg, {x: '0%'}, {x: '100%'});
        slideTl.fromTo(img, {scale: 2}, {scale: 1}, '-=1');
        // after the two objects, the -=1 makes the animation occur 1 second sooner for a simultaneous effect.
        slideTl.fromTo(revealText, {x: '0%'}, {x:'100%'}, '-=0.75');
        slideScene = new ScrollMagic.Scene({
            triggerElement: slide,
            triggerHook: 0.25,
            reverse: false
            // reverse: false allows the page to leave the revealed information in place.
        })
        .setTween(slideTl)
        // .addIndicators({
        //     colorStart: "white",
        //     colorTrigger: "white",
        //     name: "slide"
        // })
        .addTo(controller);
        // New Animation
        const pageTl = gsap.timeline();
        let nextSlide = slides.length - 1 === index ? 'end' : slides[index + 1]
        pageTl.fromTo(nextSlide, {y: '0%'}, {y: '50%'});
        pageTl.fromTo(slide, {opacity: 1, scale: 1}, {opacity: 0, scale: 0.5});
        pageTl.fromTo(nextSlide, {y: '50%'}, {y: '0%'}, '-=0.5');
        
        // Create New Scene
        pageScene = new ScrollMagic.Scene({
            triggerElement: slide,
            duration: '100%',
            triggerHook: 0
        })
        // .addIndicators ({
        //     colorStart: "white",
        //     colorTrigger: "white",
        //     name: "page",
        //     indent: 200
        // })
        .setPin(slide, {pushFollowers: false})
        // pin has the image stay in spot that it was scrolled to and then fade to the back of the page.
        .setTween(pageTl)
        .addTo(controller);
    });

}

// const mouse = document.querySelector('.cursor');
// const mouseTxt = mouse.querySelector('span');
// const burger = document.querySelector('.burger');

function cursor(e){
    mouse.style.top = e.pageY + 'px';
    mouse.style.left = e.pageX + 'px';
}
function activeCursor(e){
    const item = e.target;
    // active means you are letting the active target or click occur.
    if(item.id === 'logo' || item.classList.contains('burger')){
        mouse.classList.add('nav-active');
    } else {
        mouse.classList.remove('nav-active');
    }
    if(item.classList.contains('explore')) {
        mouse.classList.add('explore-active');
        gsap.to('.title-swipe',1,{y:'0%'});
        mouseTxt.innerText = 'Tap';
    } else {
        mouse.classList.remove('explore-active');
        mouseTxt.innerText = '';
        gsap.to('.title-swipe',1,{y:'100%'});
    }
}

function navToggle(e){
    if(!e.target.classList.contains('active')){
        e.target.classList.add('active');
        gsap.to('.line1', 0.5, {rotate: '45', y:5, background: "black" });
        gsap.to('.line2', 0.5, {rotate: '-45', y:-5, background: "black" });
        gsap.to('#logo', 1, { color: 'black' });
        gsap.to('.nav-bar', 1, { clipPath: "circle(2500px at 100% -10%)" });
        document.body.classList.add('hide');
    } else {
        e.target.classList.remove('active');
        gsap.to('.line1', 0.5, {rotate: '0', y:0, background: "white" });
        gsap.to('.line2', 0.5, {rotate: '0', y:0, background: "white" });
        gsap.to('#logo', 1, { color: 'white' });
        gsap.to('.nav-bar', 1, { clipPath: 'circle(50px at 100% -10%)' });
        document.body.classList.remove('hide');
        // always check your parenthesis
    }
}

function removeToggle(){
    if(navBar.classList.contains('active')){
        navBar.classList.remove('active');
    }
}

// Barba Page Transitions
barba.init({
    views: [
        {
            namespace: 'home',
            beforeEnter(){
                animateSlides();
                // was originally at the bottom of file, but we moved it here to ensure that the animations only run when the site is initially accessed.
                logo.href = './index.html';
                // changes html link to avoid bug from page transition.
            },
            beforeLeave(){
                slideScene.destroy();
                pageScene.destroy();
                controller.destroy();
                // ensures that Scroll Magic does not transfer to the next page... fashion, hike, ect.
            }
        },
        {
            namespace: 'informational',
            beforeEnter(){
                logo.href = '../index.html';
                // dynamically update to avoid bug in link.
                detailAnimation();
        },
        beforeLeave(){
            controller.destroy();
            detailScene.destroy();
        }
    }
],

    transitions: [
        {
            leave({current,next}){
                let done = this.async();
                // an animation
                const tl = gsap.timeline({defaults: {ease: "power2.inOut"}});
                tl.fromTo(current.container,1,{opacity:1}, {opacity:0}
                );
                tl.fromTo('.swipe', 0.75, {x:'-100%'}, {x: '0%', onComplete:done}, '-=0.5'
                );
                // this covers the page with the initial swipe when leaving.
            },
            enter({current,next}){
                // always compare brackets from the leave and enter to ensure you don't get stuck on the current webpage because the function can't execute.
                let done = this.async();
                // scroll to the top
                window.scrollTo(0,0);
                // an animation
                const tl = gsap.timeline({defaults: {ease: "power2.inOut"}});
                tl.fromTo('.swipe', 1, {x:'0%'},
                
                {x: '100%', stagger: 0.25, onComplete:done}
                );
                // this introduces the new page by producing the addiitonal two swipes.
                tl.fromTo(next.container, 1, {opacity:0},{opacity:1}
                    );
                    tl.fromTo('.nav-header',1,{y:'-100'}, {y:'0', ease: "power2.inOut"}, '-=1.5'
                    );
                },
            }
        ]
    })
    
function detailAnimation(){
    controller = new ScrollMagic.Controller();
    const slides = document.querySelectorAll('.detail-slide');
    slides.forEach((slide,index,slides) => {
        const slideTl = gsap.timeline({defaults: {duration:1}})
        let nextSlide = slides.length - 1 === index ? 'end' : slides[index + 1]
        const nextImg = nextSlide.querySelector('img');
        // const nextText = nextSlide.querySelector('h1');
        // const nextText2 = nextSlide.querySelector('p');
        slideTl.fromTo(slide, {opacity:1}, {opacity:0});
        slideTl.fromTo(nextSlide, {opacity:0}, {opacity:1}, '-=1');
        slideTl.fromTo(nextImg, {x:'50%', y:'50%'}, {x:'0%', y:'0%'});
        // slideTl.fromTo(nextText, {x:'-50%'}, {x:'0%'});
        // slideTl.fromTo(nextText2, {y:'50%'}, {y:'0%'});
        // scene
        detailScene = new ScrollMagic.Scene({
            triggerElement: slide,
            trigger: slide,
            duration: '100%',
            triggerHook: 0
        }).setPin(slide, {pushFollowers:false})
        .setTween(slideTl)
        .addTo(controller);
    });
}

// EventListeners

home.addEventListener('click', removeToggle)
burger.addEventListener('click', navToggle)
window.addEventListener('mousemove', cursor);
window.addEventListener('mouseover', activeCursor);


