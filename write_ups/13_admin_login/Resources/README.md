# Content Discover

When we talk about content discovery, we're not talking about the obvious things we can see on a website; it's the things that aren't immediately presented to us and that weren't always intended for public access.

# Steps

If we visit `http://IP_ADDRESS/robots.txt`, So what's `robots.txt`  
The robots.txt file is a document that tells search engines which pages they are and aren't allowed to show on their search engine results or ban specific search engines from crawling the website altogether
So we see on the page that `/whatever` and `/.hidden` is disallowed, for now we'll discover /whatever and see what's contain  
After visiting `http://IP_ADDRESS/whatever` it's contain file with name `htpasswd`  
The file contain a username and hashed password but we don't now what to do with it  
Bu After using `gobuster` to brute force directories and we find that there's `/admin` directory and contain login page and we use the credential we find in `htpasswd` and it's works we find the flag!!

# Flag: d19b4823e0d5600ceed56d5e896ef328d7a2b9e7ac7e80f4fcdb9b10bcb3e7ff

# Prevent This Vulnerability

To prevent it:

- ban brute force
- add authorization to files

# Resources

### [TryHackMe](https://tryhackme.com/room/contentdiscovery)
