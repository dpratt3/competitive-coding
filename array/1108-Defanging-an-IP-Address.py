/*
1108. Defanging an IP Address
https://leetcode.com/problems/defanging-an-ip-address/
26 November 2023
David Pratt
*/

class Solution:
    def defangIPaddr(self, address: str) -> str:
        addArr = address.split(".");
        defangStr = "";
        for i in range(len(addArr)):
            defangStr += addArr[i] + '[.]'
        return defangStr[  :len(defangStr) - 3 ];
