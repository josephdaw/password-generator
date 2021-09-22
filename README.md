# Password Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
This is a basic website that allows a user to create a randomly generated password. The user has the ability to choose whether to include any combination of lowercase, uppercase, numbers, and/or special characters.

You can [view this site](https://josephdaw.github.io/password-generator/) on Github Pages at https://josephdaw.github.io/password-generator/

**NOTE:** *This site does not use crypto quality randomness and therefore I would not recommend using this tool alone to generate passwords.*

## Mock-Up

The following image shows the web application's appearance and functionality:

![The Password Generator application displays a red button to "Generate Password".](assets/img/03-javascript-homework-demo.png)

## Lessons
Creating this project has given me a much better understanding of arrays. I have used 'concat' to create a master array of available characters based on the user's parameter selections.

The password characters are chosen based on a random number generated and then used as the index to select the character out of the available characters array. This is the first time I have used a random number and array in this way.

In order to ensure that the generated password contains at least one of each parameter selected by the user, I have a check at the end. If the generated password fails this check, a new password is generated and then checked. This is probably not the most efficent way of doing the check. For example I could force each character into the password on the user selection. I felt that doing so would make the password less secure. By generating a new password from scratch hopefully it ensures that it is a random as possible.

## Credits
- This project idea is part of the [Adelaide University Coding Boot Camp](https://bootcamps.adelaide.edu.au).
- The function 'findCommonElements(arr1, arr2)' was something I came across on [Geeks for Geeks](https://www.geeksforgeeks.org/how-to-find-if-two-arrays-contain-any-common-item-in-javascript/)

## License
This project is released under the [MIT License](LICENSE).