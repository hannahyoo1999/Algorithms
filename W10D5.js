/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.
Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.
return an array of the song indexes or [-1, -1] if no pair is found.
If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60  : 270
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/


const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40 : 270
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */

function amazonMusicRuntime(busDuration, songDurations) {
    const pairSongDuration = busDuration - 30
    results = [-1, -1]

    for (let i = 0; i < songDurations.length; i++) {
        const song1 = songDurations[i];
        for (let j = i + 1; j < songDurations.length; j++) {
            const song2 = songDurations[j]

            if (song1 + song2 === pairSongDuration) {

                if (results[0] > -1) {
                    const max = Math.max(
                        song1,
                        song2,
                        songDurations[results[0]],
                        songDurations[results[1]])

                    if (max === song1 || max === song2) {
                        results = [i, j]
                    }
                }
                else {
                    results = [i, j]
                }
            }
        }
    }
    return results
}

console.log(amazonMusicRuntime(busDuration1, songDurations1))
console.log(amazonMusicRuntime(busDuration2, songDurations2))
console.log(amazonMusicRuntime(busDuration3, songDurations3))

function amazonMusicRuntime1(busDuration, songDurations) {
    let songPair = [-1, -1];
    const targetPairDuration = busDuration - 30;
    const songTable = {};

    for (let i = 0; i < songDurations.length; i++) {
        // In the case of dupe durations this would overwrite. If that was a
        // problem, we could store an array of indexes at this key.
        songTable[songDurations[i]] = i;
    }

    for (let songAIdx = 0; songAIdx < songDurations.length; songAIdx++) {
        const songA = songDurations[songAIdx];
        const targetSongDuration = targetPairDuration - songA;

        if (targetSongDuration in songTable) {
            const songBIdx = songTable[targetSongDuration];
            const songB = songDurations[songBIdx];

            // Same logic as space optimized solution written differently.
            // No existing song pair.
            if (songPair[0] === -1) {
                songPair = [songAIdx, songBIdx];
                continue;
            }

            // Pair exists, only update if new pair has longer song.
            const max = Math.max(
                songA,
                songB,
                songDurations[songPair[0]],
                songDurations[songPair[1]]
            );

            if (max === songA || max === songB) {
                songPair = [songBIdx, songAIdx];
            }
        }
    }
    return songPair;
}

console.log(amazonMusicRuntime1(busDuration1, songDurations1))
console.log(amazonMusicRuntime1(busDuration2, songDurations2))
console.log(amazonMusicRuntime1(busDuration3, songDurations3))


// https://leetcode.com/problems/compare-version-numbers/

/* 
Given two strings, version1, and version2, both representing version numbers
If version1 > version2 return 1; if version1 < version2 return -1; otherwise return 0.
Helpful methods:
  - .split(characterToSplitOn)
    - returns an array of items: "a-b-c".split("-") returns ["a", "b", "c"]
  - .parseInt
    - given a string, converts it to and returns int or NaN (Not a Number) if conversion fails
Bonus, solve without .split
*/

const test1V1 = "0.1";
const test1V2 = "1.1";
//const expected1 = -1;

const test2V1 = "1.0.1";
const test2V2 = "1"; // 1.0.0
//const expected2 = 1;

const test3V1 = "7.5.2.4";
const test3V2 = "7.5.3";
//const expected3 = -1;

const test4V1 = "7.5.2.4";
const test4V2 = "7.5.2"; // 7.5.2.0
//const expected4 = 1;

const test5V1 = "1.01"; // 1.1
const test5V2 = "1.001"; // 1.1
//const expected5 = 0;
// Explanation: Ignoring leading zeroes, both “01” and “001" represent the same number “1”

const test6V1 = "1.0.1"; // 1.0.1
const test6V2 = "1";// 1.0.0
const expected6 = 1;

/**
 * Determines which version number is greater or if they are equal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} v1
 * @param {string} v2
 * @returns {number} 1 if v1 greater, -1 if v1 smaller, 0 if equal.
 */
function compareVersionNumbers(v1, v2) {
    const v1Split = v1.split(".")
    const v2Split = v2.split(".")

    for (let i = 0; i < v1Split.length; i++) {
        const v1RevisionNum = parseInt(v1Split[i]) || 0;
        const v2RevisionNum = parseInt(v2Split[i]) || 0;

        if (v1RevisionNum > v2RevisionNum) {
            return 1
        }
        else if (v1RevisionNum < v2RevisionNum) {
            return -1
        }
    }
    return 0
}

console.log(compareVersionNumbers(test1V1, test1V2))
console.log(compareVersionNumbers(test2V1, test2V2))
console.log(compareVersionNumbers(test3V1, test3V2))
console.log(compareVersionNumbers(test4V1, test4V2))
console.log(compareVersionNumbers(test5V1, test5V2))
console.log(compareVersionNumbers(test6V1, test6V2))