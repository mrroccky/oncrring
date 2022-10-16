

//for serverside
$http_origin = $_SERVER['HTTP_ORIGIN'];
$allowed_domains = array(
  'http://localhost:3000',
  'https://yourdomain.app/',
  'https://yourdomain.vercel.app',
  'https://yourdomain-git-main-mrroccky.vercel.app/',
  'https://yourdomain-git-main-mrroccky.vercel.app',
  'http://domain2.com',
);
if (in_array($http_origin, $allowed_domains))
{  
    header("Access-Control-Allow-Origin: $http_origin");
}/*
///for jsx
	let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    headers.append('Origin','http://localhost:3000');

	const [JobPost, setProducrs] = useState([]);
	useEffect(() => {
	 fetch('https://yourdomain+{server.dev.env.endpoint}', {
        method: 'GET',
    mode: 'cors', 
    cache: 'no-cache', 
    }).then(function(response){
		 response.json().then(function(data) {
			 console.log(data);
			 setProducrs(data)
		 });
	 }).catch(function(error) {
		 console.log('Fetch Error:', error);
	 });
	}, [setProducrs]);
 */