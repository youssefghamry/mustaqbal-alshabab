// إنشاء عنصر div
const divElement = document.createElement('div');
divElement.setAttribute('class', 'header-nav container');

// إنشاء عنصر a للشعار
const logoLink = document.createElement('a');
logoLink.setAttribute('href', '../../../../index.html');
logoLink.setAttribute('class', 'smalllogo');

const logoImage = document.createElement('img');
logoImage.setAttribute('src', '../../../../files/assets/imgs/logo.svg');
logoImage.setAttribute('alt', 'شركة مستقبل الشباب  للاستشارات الأكاديمية والترجمة');

// إضافة الصورة إلى عنصر الرابط
logoLink.appendChild(logoImage);

// إضافة عنصر الرابط إلى عنصر div
divElement.appendChild(logoLink);

// إنشاء زر القائمة المنسدلة
const navBtnToggler = document.createElement('a');
navBtnToggler.setAttribute('class', 'btn nav-btn-toggler');

const navBtnIcon = document.createElement('i');
navBtnIcon.setAttribute('class', 'fa fa-bars');

// إضافة الرمز إلى زر القائمة المنسدلة
navBtnToggler.appendChild(navBtnIcon);

// إضافة زر القائمة المنسدلة إلى عنصر div
divElement.appendChild(navBtnToggler);

// إضافة زر إطلب خدمة الصغير إلى عنصر div
const orderBtnSmall = document.createElement('a');
orderBtnSmall.setAttribute('class', 'btn order-btn-small');
orderBtnSmall.setAttribute('href', '../../../../ask-for-a-service.html');

const orderBtnIcon = document.createElement('i');
orderBtnIcon.setAttribute('class', 'fa fa-file-text-o');

orderBtnSmall.appendChild(orderBtnIcon);
orderBtnSmall.appendChild(document.createTextNode(' إطلب خدمة '));

divElement.appendChild(orderBtnSmall);

// إنشاء قائمة الروابط
const navList = document.createElement('ul');
navList.setAttribute('class', 'nav');

// إضافة عنصر رابط الصفحة الرئيسية إلى قائمة الروابط
const homeNavItem = document.createElement('li');
homeNavItem.setAttribute('class', 'nav-item');

const homeNavLink = document.createElement('a');
homeNavLink.setAttribute('href', '../../../../index.html');
homeNavLink.setAttribute('class', 'nav-link');

const homeNavIcon = document.createElement('i');
homeNavIcon.setAttribute('class', 'fa fa-home');

homeNavLink.appendChild(homeNavIcon);
homeNavItem.appendChild(homeNavLink);
navList.appendChild(homeNavItem);

// إضافة عنصر رابط الخدمات المنسدلة إلى قائمة الروابط
const servicesNavItem = document.createElement('li');
servicesNavItem.setAttribute('class', 'nav-item mega-menu-toggler');

const servicesNavLink = document.createElement('a');
servicesNavLink.setAttribute('href', 'javascript:;');
servicesNavLink.setAttribute('class', 'nav-link services-megamenu');

const servicesNavIcon = document.createElement('i');
servicesNavIcon.setAttribute('class', 'fa fa-angle-down');

servicesNavLink.appendChild(document.createTextNode(' خدامتنا '));
servicesNavLink.appendChild(servicesNavIcon);
servicesNavItem.appendChild(servicesNavLink);

// إنشاء الميجا قائمة الخدمات
const megaMenu = document.createElement('div');
megaMenu.setAttribute('class', 'mega-menu container');
megaMenu.setAttribute('id', 'megaMenu');

// إنشاء حاوية الميجا قائمة
const megaMenuContainer = document.createElement('div');
megaMenuContainer.setAttribute('class', 'mega-menu-container container row');

// إضافة عناصر الميجا قائمة إلى حاوية الميجا قائمة
// يمكنك تكرار هذا النمط للأقسام الأخرى في الميجا قائمة

// إضافة عنصر الرابط إعند تشغيل هذا الكود، ستتم إنشاء عناصر DOM المعنية وتهيئتها وترتيبها حسب الهيكل الذي تم تعريفه في الكود HTML. يمكنك بعد ذلك استخدام هذه العناصر DOM لإضافتها إلى أي عنصر في صفحتك HTML الحالية باستخدام أساليب مثل `appendChild()` أو `insertBefore()`.

مثال على ذلك:

```javascript
// احتواء العناصر في الكود HTML
const container = document.getElementById('container');

// إضافة عنصر div الذي يحتوي على العناصر الأخرى إلى احتواء العناصر
container.appendChild(divElement);

// إضافة قائمة الروابط إلى احتواء العناصر
container.appendChild(navList);