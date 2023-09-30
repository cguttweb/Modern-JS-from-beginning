let output

// output = document.all // old deprecated property

output = document.documentElement

output = document.body

output = document.head.children // returns HTML collection which are array-like

output = document.doctype
output = document.URL
output = document.characterSet // UTF-8
output = document.contentType // text/html

output = document.forms
output = document.forms[0].id
// output = document.links[0].href

output = document.images // return HTML collection
output = document.images[0].src

const forms = Array.from(document.forms)

forms.forEach(()=> console.log(form))

console.log(output);