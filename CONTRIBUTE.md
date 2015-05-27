How to contribute
=================

##Clone this repo

Clone this repo (using an url of your choosing), e.g. `git@github.com:Sch3lp/FiAngulartje.git`, and start coding.


##Never forget...

* To work in small commits.
* To branch early and branch often.

##We experimented with pull requests
But decided we wanted to prioritize learning the tech frameworks and coding etc. then to learn Git.

Here are our *Never forgets* for working with pull-requests:
* To sync with master before starting on a new issue/feature. (with `git pull --rebase upstream master` see this [cool article](http://kentnguyen.com/development/visualized-git-practices-for-team/) on the why)
* To rebase your commits into one before submitting pull requests.
* To have fun!

##Setting up your environment
1. Install [nodejs](http://nodejs.org/), which you'll need for [npm](https://www.npmjs.org/). On Ubuntu? Follow [these instructions](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager)
2. After cloning your forked repo, run the following commands
````
  sudo npm install -g yo
  sudo npm install -g generator-angular
  sudo npm install -g bower
  sudo npm install -g grunt-cli
  sudo npm install
  bower install
  grunt serve
````
3. Your default browser should have popped up with a working initial screen of the application. 

##How to contribute
1. Pick up a backlog item at [waffle.io](https://waffle.io/softwaresandbox/fiangulartje) and assign it to yourself
2. Make sure you are in sync with the latest version of the repository:
  `git pull swsb master`
3. create a local branch for the feature you will be implementing (eg feature-branch-{featureId})
  `git checkout -b feature-branch-{featureId}`
4. commit your changes to the local branch + push them to your forked repo
  `git commit -m 'connect #{featureId} {my specific comments}'`
5. push your changes to your forked repo (use -u to push the feature branch)
  `git push -u feature-branch-{featureId}`
6. create a pull request in github
7. [Travis ci](https://travis-ci.org/SoftwareSandbox/FiAngulartje) will automatically pick up your changes and build
8. When the build is green, a contributor will accept/reject your changes + remove the feature-branch in order not to pollute the repo.
9. Remove your feature branch locally (not necessary - but will make your local repo cleaner)
  `git branch -d feature-branch-{featureId}`

##Suggestions
You might want to install the [AngularJS](https://github.com/angular-ui/AngularJS-sublime-package) package if you're using SublimeText
