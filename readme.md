# Advanced Git Workshop Exercise

## Exercise 1

Clone down [this repo](https://github.com/andrewsunglaekim/advanced_git_workshop_ex) . Open the `index.html` in the browser.

Oh no, all we can see is red. We haven't worked on this code base in forever. We knew at one time this feature had some pretty pertinent text, but now all we can see is red.

You take a look at the commit history of this repo and you are appalled. There's over a hundred commits and they all have the same commit message.

#### Objective:
Pinpoint the commit in which the red background bug first occurs.

#### Directions/Rules:
1. Do not look at the code.
2. Only use browser and terminal.(*hint* refresh your browser after each stage of the bisect)
> If you see a red screen during the bisect, always type in `$ git bisect bad` to denote this commit sha is a "bad" commit

3. Use `$ git log --oneline` to find the first and last commits(`ctrl` + `d/u` will allow you to page down/up your `git log`)
4. Use those commits as the `good`(first) and `bad`(last) commits for your `git bisect`
5. Find the first `bad` commit.
6. Record this commit sha for the following exercises in this workshop


## Exercise 2
Now that we've identified the bug in our application, we want to time travel to the commit previous to the bad commit specified in the `bisect` portion.

#### Objective:
- Execute a hard reset against the parent of the bad commit sha.

> Hint use `~` against the bad commit sha to find that commit.

## Exercise 3
OH. NO. We lost some pretty crucial features when we did that last reset. We need to get that code back.

#### Objective:
- Go back to before the reset on the same branch that you executed the reset on

#### Directions
1. Use `git reflog` to find the gitrevision or commit sha that you need to get back to prior to the reset done earlier in the workshop.  
2. Once on that commit, checkout to a new branch(call it whatever you'd like)

> At this point, you're browser should be red again. As if you had just cloned down the repo.

## Exercise 4
You're back to square 1, everything is red still. Fortunately you still have the commit sha that introduces the bug. You do still have that, right?

#### Objective:
- Revert the bad commit

#### Directions
1. On the branch you created earlier(post reflog), revert the bad commit from the bisection in the first exercise.
3. Inspect the `index.html` in the browser.
