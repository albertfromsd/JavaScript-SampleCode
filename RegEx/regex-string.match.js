// Easy
// https://leetcode.com/problems/student-attendance-record-i/

// You are given a string representing an attendance record for a student. The record only contains the following three characters:
// 'A' : Absent.
// 'L' : Late.
// 'P' : Present.
// A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) 
// or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his attendance record.

// Example 1:
// Input: "PPALLP"
// Output: True
// Example 2:
// Input: "PPALLL"
// Output: False


const checkRecord1 = ( str ) => {
   return str.split('A').length <= 2 && str.indexOf('LLL') === -1;
};

const checkRecord2 = ( str ) => {
   // inside / / is the regex pattern it is checking for
   // if no matches found, it will return null
   // that is why || is used to prevent errors
   return (str.match(/A/g) || []).length < 2 && (str.match(/LLL/g) || []).length < 1;
};


const str1 = 'PPALLP';
const str2 = 'PPALLL';
const str3 = 'APALLL';
const str4 = 'PPALLP';
const str5 = 'LAPPLL';
const str6 = 'LLLLLL';

console.log( checkRecord1(str6) );
console.log( checkRecord2(str6) );