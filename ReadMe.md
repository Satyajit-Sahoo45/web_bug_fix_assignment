# Documentation for Bug-Finding Exercise in a MERN Stack Project

---

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Project Overview](#project-overview)
4. [Exercise Workflow](#exercise-workflow)
   - [Step 1: Setup](#step-1-setup)
   - [Step 2: Understanding the Correct Workflow](#step-2-understanding-the-correct-workflow)
   - [Step 3: Identifying and Fixing Bugs](#step-3-identifying-and-fixing-bugs)
   - [Step 4: Testing and Validation](#step-4-testing-and-validation)
5. [Resources](#resources)
6. [Submission Guidelines](#submission-guidelines)
7. [FAQ](#faq)

---

## 1. Introduction

Welcome to the Bug-Finding Exercise for the MERN Stack Chat Application! This exercise aims to enhance your debugging skills by identifying and fixing bugs in a chat application that uses the MQTT protocol for lightweight client-to-client message transfer.

## 2. Prerequisites

Before you start, ensure you have the following:

- Basic knowledge of MERN stack (MongoDB, Express.js, React, Node.js)
- Node.js and npm installed on your machine
- Git installed on your machine

## 3. Project Overview

The project is a chat application built with the MERN stack, designed to facilitate lightweight client-to-client messaging using MQTT. The application allows users to create accounts, log in, and chat in real-time. The goal of this exercise is to identify and fix bugs in the provided codebase to match the functionality demonstrated in the final correct working video.

## 4. Exercise Workflow

### Step 1: Setup

1. **Download the code:**
   Download the code from the following github repository link.   [[Link to Repo](https://github.com/UserDipanshu/Web_bug_fixing_assignment)]
2. **Install Dependencies:**
   Navigate to the project directory and install the necessary dependencies for both the backend and frontend.

   ```bash
   cd project-directory
      cd backend
      npm install

      cd frontend
      npm install
   ```

3. **Environment Setup:**
   Set up the environment variables as required. Refer to `.env.example` files in both the backend and frontend directories and create `.env` files with appropriate values.

### Step 2: Understanding the Correct Workflow

1. **Watch the Video:**
   Watch the provided video [[Link](https://mrmprocompl-my.sharepoint.com/:v:/g/personal/dipanshu_mrmprocom_com/EfQobOOiN45HrrAlmqQcLvABYxIRVpFQO293xT98W4Gqxw?e=aOMIDw)] that demonstrates the correct working of the chat application. Pay close attention to the user interactions and expected outcomes.
   This video shows how the chat application is supposed to work when the bugs present in the code are fixed.

2. **Take Notes:**
   Make notes of key functionalities and behaviors demonstrated in the video. This will help you compare and identify discrepancies in the provided codebase.

### Step 3: Identifying and Fixing Bugs

1. **Run the Application:**
   Start both the backend and the frontend.

   ```bash
   # In the backend directory
   npm start

   # In the frontend directory
   npm start
   ```

2. **Compare with the Video:**
   Interact with the application and compare its behavior with the video [[Link]( https://mrmprocompl-my.sharepoint.com/:v:/g/personal/dipanshu_mrmprocom_com/EfEcNQ1y95lOkry8fM0mSWoBtj4kf3GOUbNM_qn-Wxm7Xw?e=1XstmT)] This video shows the issue present in the chat application's code due to bug present in codebase. The bug is causing the New User Registeration form to not work as expected. The aim of this exercise is to identify the bug causing this issue and fix it so that new users can register themself.

3. **Debug and Fix:**
   - Use browser developer tools and server logs to debug issues.
   - Fix the bugs in the codebase. Ensure you document each bug you find and the steps you took to fix it.

### Step 4: Testing and Validation

1. **Test the Application:**
   After fixing the bugs, thoroughly test the application to ensure it matches the correct workflow demonstrated in the video.

2. **Peer Review:**
   Optionally, have a peer review your fixes to ensure no bugs are missed.

## 5. Resources

- **Buggy App Video:** [[Link]( https://mrmprocompl-my.sharepoint.com/:v:/g/personal/dipanshu_mrmprocom_com/EfEcNQ1y95lOkry8fM0mSWoBtj4kf3GOUbNM_qn-Wxm7Xw?e=1XstmT)]
- **Final Working Video:** [[Link](https://mrmprocompl-my.sharepoint.com/:v:/g/personal/dipanshu_mrmprocom_com/EfQobOOiN45HrrAlmqQcLvABYxIRVpFQO293xT98W4Gqxw?e=aOMIDw)]
- **Project Repository:**  [[Link to Repo](https://github.com/UserDipanshu/Web_bug_fixing_assignment)]
- **Documentation Links:**
  - [MongoDB Documentation](https://docs.mongodb.com/)
  - [Express.js Documentation](https://expressjs.com/)
  - [React Documentation](https://react.dev/learn)
  - [Node.js Documentation](https://nodejs.org/docs/latest/api/)
  - [MQTT Documentation](https://mqtt.org/)

## 6. Submission Guidelines

**Share Zip folder:**
   Share your code by making zip folder and email it to ashokgupta@mrmprocom.com (CC: hr-department@mrmprocom.com) with the subject "Take home exercise submission for Fullstack Engineer position".
   Please ensure to add the following in the Zip folder:
1. **Resume**: Your updated resume.
2. **Bug.txt**:
    A text file explaining the bug in the code and how you fixed the code.
3. **Code**:
    A copy of the code with the bug fixed and the chat application working properly. Please commit your changes to git with proper commit messages.

## 7. FAQ

**Q1:** What if I cannot identify a bug?

- **A:** Re-watch the video and compare every small detail. Utilize debugging tools and check the project documentation for potential issues.

**Q2:** Can I use additional libraries or tools?

- **A:** It's recommended to stick with the provided stack. However, if you believe an additional tool is necessary, document your reasoning in the PR.

**Q3:** How will my submission be evaluated?

- **A:** Your submission will be evaluated based on the correctness of the bug fixes, the completeness of your documentation, and the functionality of the application post-fix.

**Q4** How ling will this exercise take?

- **A:** This exercise is expected to take less than 1 hour of time to identify the bug and fix it.
---
