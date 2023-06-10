String.prototype.filename=function(extension){
	var s= this.replace(/\\/g, '/');
	s= s.substring(s.lastIndexOf('/')+ 1);
	return extension? s.replace(/[?#].+$/, ''): s;
}

// return extension? s.replace(/[?#].+$/, ''): s.split('.')[0];
// $(selector).attr('src').filename();