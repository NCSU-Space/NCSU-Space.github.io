// Daisy-chainable element maker
var fE = function(/*string*/ tagName, /*Object*/ properties, /*Array*/ children) {
  var element = document.createElement(tagName);
  for(var i in properties) {
    element[i] = properties[i];
  }
  if(children) {
    for(var i = 0, endi = children.length; i < endi; ++i) {
      element.appendChild(children[i]);
    }
  }
  return element;
}

document.body.appendChild(fE('div', {id: 'bg'}));

var nav = fE('nav', {className: 'button_nav'}, [
  fE('a', {href: 'index.html', textContent: 'SEDS-NCSU', accessKey: 's', tabIndex: 1}),
  fE('a', {href: 'projects.html', textContent: 'Projects', accessKey: 'r', tabIndex: 2}),
  fE('a', {href: 'opportunities.html', textContent: 'Opportunities', accessKey: 'o', tabIndex: 3}),
  fE('a', {href: 'contact.html', textContent: 'Contact', accessKey: 'c', tabIndex: 4}),
]);

for(var i = 0, endi = nav.children.length; i < endi; ++i) {
  if(window.location == nav.children[i].href) {
    nav.children[i].classList.add('active');
  }
}

if(window.location.pathname == '/') {
  nav.children[0].classList.add('active');
}

document.body.appendChild(nav);

document.body.appendChild(
  fE('a', {id: 'logo', href: 'index.html', tabIndex: 5}, [
    fE('img', {src: 'SEDS_NCSU_Logos-1.svg', alt: 'SEDS-NCSU logo'})
  ])
);
