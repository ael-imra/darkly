# Business logic vulnerabilities

Business logic vulnerabilities are flaws in the design and implementation of an application that allow an attacker to elicit unintended
behavior. This potentially enables attackers to manipulate legitimate functionality to achieve a malicious goal. These flaws are generally
the result of failing to anticipate unusual application states that may occur and, consequently, failing to handle them safely.

# Steps

In the survey page.

We are in front of a table, with lots of forms, just change one of the value of a field by a value that we want for example:
10,000 which will give 10,000 points. after submit this value we find the flag!

# Flag: 03A944B434D5BAFF05F46C4BEDE5792551A2595574BCAFC9A6E25F67C382CCAA

# Prevent This Vulnerability

In our case we just have to check the values in the back-end.
