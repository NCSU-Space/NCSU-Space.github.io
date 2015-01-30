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
  fE('a', {href: 'index.html', textContent: 'SEDS-NCSU'}),
  fE('a', {href: 'projects.html', textContent: 'Projects'}),
  fE('a', {href: 'opportunities.html', textContent: 'Opportunities'}),
  fE('a', {href: 'contact.html', textContent: 'Contact'}),
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

document.body.appendChild(fE('img', {id: 'logo', src: 'SEDS_NCSU_Logos-3.png', alt: 'SEDS-NCSU logo'}));
