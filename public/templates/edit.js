define(["ext/jade"],function(jade){return function anonymous(locals,attrs,escape,rethrow){var attrs=jade.attrs,escape=jade.escape,rethrow=jade.rethrow,buf=[];with(locals||{}){var interp;buf.push("<div"),buf.push(attrs({id:"edit-modal","class":"modal fade span8"},{})),buf.push("><div"),buf.push(attrs({"class":"modal-header"},{})),buf.push("><button"),buf.push(attrs({"data-dismiss":"modal","class":"close"},{"data-dismiss":!0})),buf.push(">&times;</button><h3>Edit</h3></div><div"),buf.push(attrs({"class":"modal-body edit-body"},{})),buf.push("><div"),buf.push(attrs({id:""+id+"-edit-view","class":"span7 edit-editable"},{id:!0})),buf.push("></div></div></div>")}return buf.join("")}})