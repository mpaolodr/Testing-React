# Testing-React

In this project, you will demonstrate proficiency by writing unit tests for an existing React application. Your tests should verify the behavior listed in the _Minimum Viable Product_ section.

Some of the topics covered were:

- Testing a React application.
- Using the `@testing-library/react` testing framework.
- Testing asynchronous calls made inside your React application

## Instructions

**Read these requirements carefully. Understand exactly what is expected _before_ starting.**

You are allowed, and encouraged, to collaborate with your peers while working on this assignment. Remember to follow the _twenty-minute rule_ and post questions to your cohort's help channel before seeking support from your PM and Instructor.

## Commits

Please push your code often and use descriptive commit messages, this helps you and your project manager.

## Project Description

In this project, you will **write tests** for an existing React application that queries data from the Star Wars API, and renders a list of Star Wars characters. The app also has buttons called `Next` and `Previous` to query the API again for the next or previous data sets. You will need to write tests for those buttons to ensure that they are working as expected.

## Project Set Up

Follow these steps to setup your git _fork_ and _branch_.

- [x] Fork this repository.
- [x] Use GitHub's website to add your project manager as collaborator on **your fork**.
- [x] **Clone your forked version** of the repository (**Not Lambda's**!).
- [x] Create a new branch: `git checkout -b <firstName-lastName>`.
- [x] Commit changes to your `<firstName-lastName>` branch.
- [x] Push often to your branch: `git push origin <firstName-lastName>`.

Follow these steps for completing your project.

- [x] Submit a Pull-Request to merge the `<firstName-lastName>` branch into the master branch on your fork. **Please don't merge your own pull request**
- [x] Use GitHub's website to add your project manager as a reviewer on the pull-request.
- [x] Your project manager will count the project as complete by merging the branch back into the master branch of your forked repository.

## Note

The React app here was created with the latest version of `create-react-app` which now comes with `@testing-library/react` already included. When you create your own apps with the new CRA version, you won't need to add that library anymore!

## Minimum Viable Product

Your job is to write tests to ensure that the application behaves as expected.

## Stretch Problem

This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

- Add a dropdown that has values for these strings: `'people', 'planets', 'starships', 'vehicles', 'species'`. When selected, the URL that is fetched will change to fetch the chosen data. Update your tests to test the dropdown input.
