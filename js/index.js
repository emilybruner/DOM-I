const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('img-src', siteContent["nav"]["img-src"])

//navigation


let navA = document.querySelectorAll('a');

navA[0].textContent = siteContent.nav["nav-item-1"];
navA[1].textContent = siteContent.nav["nav-item-2"];
navA[2].textContent = siteContent.nav["nav-item-3"];
navA[3].textContent = siteContent.nav["nav-item-4"];
navA[4].textContent = siteContent.nav["nav-item-5"];
navA[5].textContent = siteContent.nav["nav-item-6"];


//main heading

let mainHeading = document.querySelector('h1')
mainHeading.innerHTML = siteContent.cta['h1'].replace(/ /g, '<br>')

const ctaBtn = document.querySelector(".cta-text button");
ctaBtn.textContent = siteContent.cta["button"];

let mainImg = document.getElementById("cta-img");
mainImg.setAttribute('src', siteContent["cta"]["img-src"])

// main content

let middleImg = document.getElementById("middle-img")
middleImg.setAttribute("src", siteContent['main-content']["middle-img-src"])

const sectionHeaders = document.querySelectorAll("h4");
sectionHeaders[0].textContent = siteContent["main-content"]["features-h4"]
sectionHeaders[1].textContent = siteContent["main-content"]["about-h4"]
sectionHeaders[2].textContent = siteContent["main-content"]["services-h4"]
sectionHeaders[3].textContent = siteContent["main-content"]["product-h4"]
sectionHeaders[4].textContent = siteContent["main-content"]["vision-h4"]
sectionHeaders[5].textContent = siteContent["main-content"]["contact-h4"]

const sectionP = document.querySelectorAll("p")

sectionP[0].textContent = siteContent["main-content"]["features-content"];
sectionP[1].textContent = siteContent["main-content"]["about-content"];
sectionP[2].textContent = siteContent["main-content"]["services-content"];
sectionP[3].textContent = siteContent["main-content"]["product-content"];
sectionP[4].textContent = siteContent["main-content"]["vision-content"];
sectionP[5].textContent = siteContent["contact"]["address"];
sectionP[6].textContent = siteContent["contact"]["phone"];
sectionP[7].textContent = siteContent["contact"]["email"];
sectionP[8].textContent = siteContent["footer"]["copyright"];


// change color



const newContent =
  document.createElement("a");
newContent.textContent = "Careers";

const newContent2 =
  document.createElement("a");
newContent2.textContent = "Partners";

const parentElement =
  document.querySelector('nav');

parentElement.append(newContent)
parentElement.append(newContent2)


let nav = document.querySelectorAll("a");
nav.forEach(function (element) {
  element.style.color = "green";
})

let sampleButton = document.querySelector('.sampleButton');
sampleButton.addEventListener('click', (event) => {
  alert('You Clicked the Sample Button!')
})