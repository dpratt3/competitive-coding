/*
1108. Defanging an IP Address
https://leetcode.com/problems/defanging-an-ip-address/
11 April 2023
David Pratt
*/

/**
 * @param {string} address
 * @return {string}
 */

var defangIPaddr = function(address) {
    return address.replaceAll(".", "[.]");
};