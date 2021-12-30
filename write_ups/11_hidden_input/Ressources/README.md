# Steps

This vulnerability exist in `http://IP_ADDRESS/?page=recover`  
On this page there's hidden input we can change the email and submit we receive mail to recovery password  
If we change email than the page display flag!

# Flag: 1D4855F7337C0C14B6F44946872C4EB33853F40B2D54393FBE94F49F1E19BBB0

# Prevent This Vulnerability

To prevent this vulnerability:

- required to send an valid email (exist in database)
