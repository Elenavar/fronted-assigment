<img src="https://user-images.githubusercontent.com/28607713/212879228-3ca54e74-ee8f-485c-a5d2-e54758b471dc.png"
     alt="planet-logo-white-no-bg"
     width="240">


# Planet frontstack-assignment
Front-Stack position skill assessment home assignment.

## Context
As a Front-End developer in Planet Dataset, you will be asked to participate in the design
and implementation of new features that will be used in our price-management platform for
eCommerce.

New features usually involve implementing new views in our platform to allow users configuring
automations, and other interface elements that distributed to the Shopify ecosystem. Therefore,
you can expect to encounter Angular projects, design systems, Liquid source files, HTML and
webcomponents as part of your daily the development process.

## Overview
This assignment is set in a fictitious content management company that provides translation services
to post creators in Reddit. The common workflow is reading through a list of pending posts, creating
a new one based on the original, translate it, and upload it.

You are asked to implement the part of the functionality of a web platform that will allow employees
to manage the work.

The project is already setup with a working API and a web app. Your task is to implement the necessary
interface to list current posts and create a new one based on the original. The scope of the assignment
is limited to this and does not include editing posts.

More specificly, the interface should allow:
- Lists current posts, distinguishing between original and the company's translated ones.
- Looking at specific details of a post (regarding metadata, not the actual content), so that employees
  can prioritize which one to choose next.
- A form to create a new post translation (a new post based on the existing one).

## About this repository
This repository holds the basic project structure of an Angular web app with its corresponding API.
The API is containerized and the front-end is locally developed. We also provide you with Makefiles
to raise each of the services.

The code is organized as follows:

- `services`
     - \ `api` - A NodeJS project with ExpressJS, TypeScript that implements the API.
     - \ `front-end` - An Angular project with TypeScript, SCSS, Material and NgRX to implement the web app. Implementation details can be found in `services/front-end/README.md`.
- `docker-compose.yml` - 
- `data` - The datasource for the project.
- `Makefile` - Makefile for your ease of development, see below.
- `frontend.mk` - Makefile rules for the web app.
- `backend.mk` - Makefile rules for the API.
- `README.md` - This file.
- `LICENSE`


Disclaimer: The purpose and usage of this repo is solely for insight acquisition regarding problem-solving,
and does not represent an existing and ongoing implementation task.

PS: We provide this structure as a starting point but you may discard it and approach the task in
any other way.

## The problem
#### What we want
We provide you with two basic endpoints for retrieving the data and sending post creation requests:

- `[POST] /api/posts` Create a new post from existing one
     
     ```
     HTTP POST Body:
     {
          "author": string!,
          "author_fullname": string?,
          "categroy": string?
          "language": string!
          "originalPostId": string!
          "title": string!
     }
     ```
- `[GET] /api/posts?limit=number&page=number` Get existing posts (supports pagination in the specified format)

We want a view that lists the existing posts with a summary of the details and the possibility of seeing
more information; in addition to this, it should allow creating new posts based on a chosen one.
Here is a mockup of it could look, although you are free to design it however you feel it works best.

![image](https://user-images.githubusercontent.com/28607713/220557194-c60fecd0-74ed-4e51-94f0-6edcfcbfd851.png)



#### What we will evaluate
- Whether the interface fulfills the functional requirements: it shows the posts, distinguishes between original
  and user-created ones, and allows making POST requests for post creation.
- How functionality is organized though components and services.
- Efective use of Angular life cycle hooks to perform data subscription and tearing.
- A coherent implementation of the interface that involves a limited number of spaces, fonts and colors; and the use
  of CSS3 and SCSS features to keep styles easily maintainable.

## How to run the services
We provide you with Makefile rules for you to lift both services or individual ones.
> By default the new `docker compose` api is used. In case that you are using an older version of Docker compose, you
may override the command when invoking make:
```bash
# This would start the services using "docker-compose" instead of "docker compose"
DOCKER_COMPOSE="docker-compose" make start -e
```

- Both the back-end and front-end can be started and stopped using the Makefile targets:
     - `start` Starts both the API and web app in the background.
     - `stop` Stops services running in the background.
     - `build` Uses Docker to build the images for each service.

- The _services/api_ directory holds the code for the API. The following make commands are available:
     - `backend-build` Builds the corresponding Docker images.
     - `backend-up` Raises the platform.
     - `backend-down` Shuts down the platform. _Requires having the platform up (you can use make backend-up)_
     
- The _services/front-end_ directory holds the code for the Front-end. The following make commands are available:
     - `frontend-build` Builds the corresponding docker image.
     - `frontend-up` Runs the front-end service locally (accessible at http://localhost:4200). _It will install the dependencies (requires having a local installation of node)._
     - `frontend-down` Stops the front-end container.

## Data
Data sample was obtained from https://www.reddit.com/r/linux.json
You can find a backup copy at `data/linux.json`.
We have added an additional `original_post_id` that set to the original post for which the translation is created
you can use this to distinguish between original and user-created ones. We also have added `language` which is set to "EN" by default
useful to reference the language in which the post has been written

# frontend-assignment
Front-End position skill assessment home assignment.

**[Place here any extra documentation or comments you want us to have.]**

## Project folder structure

- `src/app/common/layout/post` - Folder with post component.

- `src/app/common/layout/post-detail` - Folder with the component for displaying post details.

- `src/app/common/layout/post-form` - Folder with the component for displaying the form for making requests.

- `src/app/button.actions.ts`, `src/app/button.reducer.ts`, `src/app/button.selectors.ts`, `src/app/button.state.ts` - Files needed to manage the state of the buttons with NgRx.