# Better Gov Contributing Guide

<a id="readme-top"></a>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#welcome">Welcome</a>
    </li>
    <li>
      <a href="#better-gov-overview">Better Gov Overview</a>
    </li>
    <li>
      <a href="#ground-rules">Ground Rules</a>
    </li>
    <li>
      <a href="#community-engagement">Community Engagement</a>
    </li>
    <li>
      <a href="#share-ideas">Share Ideas</a>
    </li>
    <li>
      <a href="#before-you-start">Before you start</a>
    </li>
    <li>
      <a href="#environment-setup">Environment setup</a>
    </li>
    <li>
      <a href="#contribution-workflow">Contribution Workflow</a>
      <ul>
        <li><a href="#fork-and-clone-repositories">Fork and clone repositories</a></li>
        <li><a href="#sync-often">Sync often</a></li>
        <li><a href="#commit-messages">Commit messages</a></li>
        <li><a href="#branch-creation">Branch creation</a></li>
        <li><a href="#pull-requests">Pull requests</a></li>
      </ul>
    </li>
    <li><a href="#resources">Resources</a></li>
  </ol>
</details>

## Welcome

Welcome to the Better Gov Contributing Guide and thank you for your interest in supporting the project!

We welcome contributions of all kinds. Whether you are a developer, designer, writer, or just someone with a great idea, there’s a place for you here.

Here are the types of contributions we currently accept and where to learn more in this guide:

- Source Code – Fix bugs, add features, or improve existing code
- Ideas – Share suggestions for improvements or new features
- Bug Reporting – Help us identify and document issues
- Translations – Make the project accessible in different languages
- Documentation – Improve guides, tutorials, or reference docs
- Data Scraping – Contribute data collection scripts or improvements

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Better Gov overview

Better Gov is a community-led initiative to create a better and more usable Philippine national government website.
It is an open-source project dedicated to improving access to government-related information and services through technology, transparency, and collaboration.
To learn more about our purpose and goals, please read the [README](./README.md).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Ground rules

Before contributing, read our [CODE OF CONDUCT](./CODE_OF_CONDUCT.md) to learn more about our community guidelines and expectations.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Community engagement

Refer to the following channels to connect with fellow contributors or to stay up-to-date with news about the Better Gov:

- Join our project contributors on [Discord][discord].

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Share ideas

To share your new ideas for the project, perform the following actions:

1. Reach out via email [volunteers@bettergov.ph](mailto:volunteers@bettergov.ph)
2. Open an issue in this [repository][issues]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Before you start

Before you start contributing, ensure you have the following:

- Node.js (v18 or above recommended)
- npm (v9 or above) or yarn (optional)
- Git
- A code editor like VS Code

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Environment setup

To set up your environment, perform the following actions:

- At the root of the project, create a `.env` file. See [env.example](.env.example) for reference
- Use the Node.js and npm versions declared in `package.json`

- Install the dependencies

  ```sh
  npm install
  ```

- Start the development server
  ```sh
  npm run dev
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- This can be added later -->

<!-- ### Troubleshoot

If you encounter issues as you set up your environment, refer to the following:

- Windows: {share a link to an external page that shares troubleshooting steps or share the procedure as sub-bullets}
- macOS: {share a link to an external page that shares troubleshooting steps or share the procedure as sub-bullets}
- Linux: {share a link to an external page that shares troubleshooting steps or share the procedure as sub-bullets} -->

<!-- This can be added later -->

<!-- ## Best practices -->

<!-- {Option 1} Our project has adopted the following best practices for contributing:

- {Item 1}
- {Item 2}
- {Item 3}

{Option 2} Our project uses the {name and link to resource for best practices, such as a coding style guide or writing style guide} as our parent guide for best practices. Reference the guide to familiarize yourself with the best practices we want contributors to follow. -->

<!-- This can be added later -->
<!--
## Content style guide

Read our {name and link to your style guide} to understand our guidelines for writing and formatting documents. The purpose of our style guide is to ensure consistency in the tone, voice, and structure of our documentation. -->

## Contribution workflow

### Fork and clone repositories

To contribute, first fork the repository to your own GitHub account, then clone your fork to your local machine:

```sh
git clone git@github.com:<your-github-username>/kapwa.git
cd kapwa
```

After cloning your fork, add the main Kapwa repository as `upstream`:

```sh
git remote add upstream git@github.com:bettergovph/kapwa.git
git remote -v
```

You should now have:

- `origin` pointing to your fork
- `upstream` pointing to the main Kapwa repository

Follow this guide for step-by-step instructions:
[Fork a repository][forking]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Sync often

Pull the latest updates from the main repository often, especially before starting new work and before opening a pull request:

```sh
git checkout main
git pull upstream main
git push origin main
```

This keeps your forked `main` branch current with the original repository.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Commit messages

We follow [Conventional Commits][commits] for all commit messages.
This helps keep our history clean and readable.

#### Format

```cpp
<type>[optional scope]: <short description>
```

#### Common Types Used

- feat: → A new feature
- fix: → A bug fix
- docs: → Documentation only changes
- style: → Code style or formatting changes (no logic)
- refactor: → Code refactoring (no feature or fix)
- test: → Adding or updating tests
- chore: → Maintenance tasks (build process, dependencies, etc.)

#### Example

```sh
feat(button): add primary button variant
fix(navbar): correct mobile menu toggle
docs: add CONTRIBUTING.md and CODE_OF_CONDUCT.md
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Branch creation

Create your working branch from your synced `main` branch:

```sh
git checkout main
git pull upstream main
git checkout -b fix/short-description
```

We follow a prefix-based branch naming convention for clarity:

#### Format

```text
<prefix>/<short-description>
```

#### Example

```sh
feature/add-login-form
fix/navbar-responsive-issue
docs/add-contributing-and-code-of-conduct
```

> Tip: Keep branch names short, descriptive, and kebab-case.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Pull requests

We use Pull Requests (PRs) to review and merge changes. Follow these steps when creating a PR:

1. Fork the repository and create a branch from your synced `main`.
2. Make your changes and ensure your code passes linting and tests.
3. Commit your changes following the Conventional Commits
   standard.
4. Push your branch to your forked repository:
   ```sh
   git push -u origin <branch-name>
   ```
5. Open a Pull Request to the main repository:

- Target `bettergovph/kapwa:main` unless maintainers specify a different base branch.
- Provide a clear title and detailed description of your changes.
- Reference any related issues (e.g., Closes #12).

6. If `main` moves while your PR is open, update your branch with the latest upstream changes:

   ```sh
   git checkout <branch-name>
   git pull upstream main
   git push origin <branch-name>
   ```

7. Wait for review:

- Maintain open communication with reviewers.

- Make any requested changes by committing to the same branch. The PR will update automatically.

8. A maintainer will merge your PR once it’s approved.
   **Do not merge your own PR unless explicitly allowed.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Resources

- https://www.thegooddocsproject.dev/template/contributing-guide
- https://www.conventionalcommits.org/en/v1.0.0/
- https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo

<!-- Urls -->

[commits]: https://www.conventionalcommits.org/en/v1.0.0/
[issues]: https://github.com/bettergovph/bettergov/issues/new
[forking]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo
[discord]: https://discord.gg/mHtThpN8bT
