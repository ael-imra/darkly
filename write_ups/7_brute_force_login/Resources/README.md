# Brute Force Definition

A brute force attack uses trial-and-error to guess login info, encryption keys, or find a hidden web page. Hackers work through all possible combinations hoping to guess correctly.  
These attacks are done by ‘brute force’ meaning they use excessive forceful attempts to try and ‘force’ their way into your private account(s).

# Steps

We use Burp Suite to brute force and we use a common wordlist of password and check it with username admin  
And we find that the password of admin is `shadow`
After login the page display the flag

# Flag: B3A6E43DDF8B4BBB4125E5E7D23040433827759D4DE1C04EA63907479A80A6B2

# Prevent Brute Force

To prevent this attack:

- add timeout to user after failed login and increase timeout after more failed
- use blacklist for users who make more than a number of failed requests
