# Cross site request forgery

Cross-site request forgery (also known as CSRF) is a web security vulnerability that allows an attacker to induce users to perform actions that they do not intend to perform. It allows an attacker to partly circumvent the same origin policy, which is designed to prevent different websites from interfering with each other.

# Steps

After visiting `http://IP_ADDRESS/?page=e43ad1fdc54babe674da7c7b8f0127bde61de3fbe01def7d00f151c2fcca6d1c` and inspecting the html with developer tool we find a comment that tell us :

- You must cumming from : "https://www.nsa.gov/" to go to the next step
- Let's use this browser : "ft_bornToSec". It will help you a lot.
  So we gonna use curl to change the Referer and the user-Agent

```
Referer: The Referer HTTP request header contains an absolute or partial address of the page that makes the request
User-Agent: A user agent is a computer program representing a person, for example, a browser in a Web context.
```

`curl --referer https://www.nsa.gov/ -A "ft_bornToSec" http://IP_ADDRESS/\?page\=e43ad1fdc54babe674da7c7b8f0127bde61de3fbe01def7d00f151c2fcca6d1c`

After doing That we find the flag!

# Flag: f2a29020ef3132e01dd61df97fd33ec8d7fcd1388cc9601e7db691d17d4d6188

# Prevent This Vulnerability

The most robust way to defend against CSRF attacks is to include a CSRF token within relevant requests. The token should be:

- Unpredictable with high entropy, as for session tokens in general.
- Tied to the user's session.
- Strictly validated in every case before the relevant action is executed.

# Resources

### [Portswigger](https://portswigger.net/web-security/csrf)
