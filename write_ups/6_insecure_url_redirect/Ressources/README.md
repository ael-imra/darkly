# Insecure(Unvalidated) URL Redirect Definition

Unvalidated redirects and forwards are possible when a web application accepts untrusted input that could cause the web application to redirect the request to a URL contained within untrusted input. By modifying untrusted URL input to a malicious site, an attacker may successfully launch a phishing scam and steal user credentials.  
Because the server name in the modified link is identical to the original site, phishing attempts may have a more trustworthy appearance. Unvalidated redirect and forward attacks can also be used to maliciously craft a URL that would pass the application's access control check and then forward the attacker to privileged functions that they would normally not be able to access.

# Steps

we find this particular vulnerability on `http://IP_ADDRESS/index.php?page=redirect&site=facebook`
This link is redirecting as to facebook page  
And when we change value of site to anything we get the flag!

# Flag: B9E775A0291FED784A2D9680FCFAD7EDD6B8CDF87648DA647AAF4BBA288BCAB3

# Prevent Insecure URL Redirect

To prevent insecure url redirect we can add validation to site value by validating value with list of trusted values

# Resources

### [Beaglesecurity](https://beaglesecurity.com/blog/support/vulnerability/2018/06/24/Insecure-Redirection.html)

### [OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html)
