define(["ext/jade"],function(jade){return function anonymous(locals,attrs,escape,rethrow){var attrs=jade.attrs,escape=jade.escape,rethrow=jade.rethrow,buf=[];with(locals||{}){var interp;buf.push("<div"),buf.push(attrs({id:"copy-modal","class":"modal fade span5"},{})),buf.push("><div"),buf.push(attrs({"class":"modal-header"},{})),buf.push("><button"),buf.push(attrs({"data-dismiss":"modal","class":"close"},{"data-dismiss":!0})),buf.push(">&times;</button><h3>Copy</h3></div><div"),buf.push(attrs({"class":"modal-body copy-body"},{})),buf.push("><div"),buf.push(attrs({id:""+id+"-copy-view","class":"span4 copy-editable"},{id:!0})),buf.push("></div></div></div>")}return buf.join("")}})