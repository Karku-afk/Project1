const http = require('http');
//moodul URL-i parsimiseks
const url = require("url");

const pageHead = '<!DOCTYPE html>\n<html lang="et">\n<head>\n\t<meta charset="utf-8">\n\t<title>Andrus Rinde, veevbiprogrammeerimine</title>\n</head>\n<body>\n';
const pageBody = '\t<h1>Andrus Rinde, veebiprogrammeerimine</h1>\n\t <p>See leht on loodud veebiprogrammeerimise kursusel <a href="https://www.tlu.ee">Tallinna Ãœlikoolis</a> ning ei sislda tÃµsiseltvÃµetavat sisu!</p>\n\t<p>Esialgu tutvusime lihtsalt HTML keelega, peatselt programmeerime.</p>\n\t<hr>';
const pageFoot = '\n</body>\n</html>';

http.createServer(function(req, res){
	//vaatan URL-i
	console.log("Päring: " + req.url);
	//parsin URL-i
	let currentURL = url.parse(req.url, true);
	console.log("Parsituna: " + currentURL.pathname);
	
	res.writeHead(200,{"Content-type": "text/html"});
	//res.write("Veebiserver käivitus");
	res.write(pageHead);
	res.write(pageBody);
	res.write(pageFoot);
	return res.end();
}).listen(5219);

//res.write("<p>Täna on" + dateTimeET.date() + "</p>");