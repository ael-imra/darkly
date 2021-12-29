# Broken Authentication Definition:

Broken authentication is an umbrella term for several vulnerabilities that attackers exploit to impersonate legitimate users online. Broadly, broken authentication refers to weaknesses in two areas: session management and credential management. Both are classified as broken authentication because attackers can use either avenue to masquerade as a user: hijacked session IDs or stolen login credentials.

# Steps:

### First Step

Check cookie in browser than we'll find sespec word `I_am_admin`  
and we'll the value of it equal `68934a3e9455fa72420237eb05902327` and if we decrypt this word we find out it's equal `false`

### Second Step

We'll try to try to replace value of `I_am_admin` with hash of value `b326b5062b2f0e69046810717534cb09 // b326b5062b2f0e69046810717534cb09 = true`

### Last Step

Refresh page and than it'll alert us with the flag

## Flag : df2eb4ba34ed059a1e3e89ff4dfc13445f104a1a52295214def1c4fb1693a5c3

# Prevent Broken Authentication

To avoid this vulnerability:

- Require Authentication before do anything
