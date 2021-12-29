# Content Discover

When we talk about content discovery, we're not talking about the obvious things we can see on a website; it's the things that aren't immediately presented to us and that weren't always intended for public access.

# Steps

If we visit `http://IP_ADDRESS/robots.txt`, So what's `robots.txt`  
The robots.txt file is a document that tells search engines which pages they are and aren't allowed to show on their search engine results or ban specific search engines from crawling the website altogether
So we see on the page that `/whatever` and `/.hidden` is disallowed, for now we'll discover /.hidden and see what contain  
After visiting `http://IP_ADDRESS/.hidden` it's contain a lot of folders that have a lot of folders and every folder have a readme file  
So we create script to read all readme, After that we filter all word repeated and we find the flag

# Flag: 99dde1d35d1fdd283924d84e6d9f1d820

# Prevent This Vulnerability

To prevent it:

- ban brute force
- add authorization to files

# Resources

### [TryHackMe](https://tryhackme.com/room/contentdiscovery)
