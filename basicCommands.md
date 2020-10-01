- [Basic Git Commands](#basic-git-commands)
  - [Advanced Git Commands](#advanced-git-commands)

# Basic Git Commands

1. Initialising a repo
`git init`
2. Checking Status
`git status`
3. Git clone repository
`git clone <ssh>`
4. Add Files
`git add <file_path>`
5. Commit changes
`git commit -m "mmessage here"`
6. Git pull
`git pull <remote> <branch>`
7. Git push
`git push <remote> <branch>`

<br>
## Advanced Git Commands
<br>
<br>
```
QUESTIONS :

1. See what's in a stash without applying it [duplicate]																										'

	To list the stashed modifications
	git stash list

	To show files changed in the last stash
	git stash show

	So, to view the content of the most recent stash, run
	git stash show -p

	To view the content of an arbitrary stash, run something like
	git stash show -p stash@{1}

2. Delete a Local GIT branch
	git branch -D branch_name

	Delete a remote GIT branch
	git push <remote_name> --delete <branch_name>

3. show remotes

	git remote

4. cherry-pick a commit

	Make sure you are on the branch you want to apply the commit to.
	git checkout master

	Execute the following:
	git cherry-pick <commit-hash>


5. Undo git add .

	git reset (if files have not been commited)
	git revert (commit has been shared)

6. How to remove local untracked files from the current Git branch

	If you want to see which files will be deleted you can use the -n option before you run the actual command:
	git clean -n

	Then when you are comfortable (because it will delete the files for real!) use the -f option:
	git clean -f

7. Git pull a certain branch from GitHub

i)	Fast forwarded merge
	git pull origin other-branch

ii)	Not fast frowarded merge
	First fetch the remote branch:

	$ git fetch origin other-branch
	Then merge it into your current branch (I'll assume that's master), and fix any merge conflicts:

	$ git merge origin/other-branch
	# Fix merge conflicts, if they occur
	# Add merge conflict fixes
	$ git commit    # And commit the merge!

8. Squash my last X commits together using Git

i)	Countable no of commits	
	git rebase -i HEAD~N
	where N is the number of commits you want to join
	and replace "pick" on the second and subsequent commits with "squash" or "fixup"

ii)	Large no of commits to Squash
	git rebase -i [commit-hash]
	Where [commit-hash] is the hash of the commit just before the first one you want to rewrite from.

iii)If you want to write the new commit message from scratch, this suffices:

	git reset --soft HEAD~3 &&
	git commit

iv)If you want to start editing the new commit message with a concatenation of the existing commit messages (i.e. similar to what a pick/squash/squash/…/squash git rebase -i instruction list would start you with), then you need to extract those messages and pass them to git commit:

	git reset --soft HEAD~3 && 
	git commit --edit -m"$(git log --format=%B --reverse HEAD..HEAD@{1})"

You can undo the changes by :

	git rebase --hard


9. # If you want to review the history...
	git log --pretty=oneline --abbrev-commit

10. How can I git stash a specific file?
	
	git stash push -m message_here <path>

	Stash all files with message

	git stash save message here

11. How to see code changes after git pull?

	git log --name-status -2
	Will show you the names of the files that changed for the last two commits.

	git log -p -2
	Will show you the changes themselves.

	Before you pull,

	git fetch
	git log --name-status origin/master..
	Will show you what commits you are about to retrieve, along with the names of the files.	

	[See More]

12. See your commits on a branch

https://github.com/Indifi/arya/commits/LoanStatementBullet?author=akvabhi
arya - project name
LoanStatementBullet - BRANCH NAME

ii. See closed PR on a project
https://github.com/Indifi/app-ui/pulls?q=is%3Apr+is%3Aclosed+author%3Aakvabhi

13. How to git-cherry-pick only changes to certain files?

I'd do it with cherry-pick -n (--no-commit) which lets you inspect (and modify) the result before committing:

git cherry-pick -n <commit>

# unstage modifications you don't want to keep, and remove the
# modifications from the work tree as well.
# this does work recursively!
git checkout HEAD <path>

# commit; the message will have been stored for you by cherry-pick
git commit
If the vast majority of modifications are things you don't want, instead of checking out individual paths (the middle step), you could reset everything back, then add in what you want:

# unstage everything
git reset HEAD

# stage the modifications you do want
git add <path>

# make the work tree match the index
# (do this from the top level of the repo)
git checkout .

In addition to git checkout . I would recommend also git clean -f to remove any new but unwanted files introduced by the cherry-picked commit.

14. Decide which changes to add

git add -

15. Rename a local and remote branch in git

If you have named a branch incorrectly AND pushed this to the remote

1. Rename your local branch.

If you are on the branch you want to rename:
git branch -m new-name

If you are on a different branch:
git branch -m old-name new-name

2. Delete the old-name remote branch and push the new-name local branch.
git push origin :old-name new-name

3. Reset the upstream branch for the new-name local branch.

Switch to the branch and then:
git push origin -u new-name

16. How to get git producing output to a file?

git by design does never write to stdout but stderr. So I needed to redirect stderr, too, in order to get the output using
git clone XYZ &> git_clone.file

git clone --progress XYZ &> git_clone.file

17. How to git log from all branches for the author at once?

git log --pretty=format:"%ad:%an:%d:%B" --date=short --reverse --all --since=2.months.ago --author=akvabhi

git log --pretty=format:"%ad:%an:%d:%B" --date=short --reverse --all --author=akvabhi &> commits.md

18. How to see if branch contains a commit ?

git branch $(git symbolic-ref --short HEAD) --contains <COMMIT_ID>

ii. See all branches with given commit 

git branch --contains $COMMIT_ID

19. Create a git patch from the changes in the current working directory

If you haven't yet commited the changes, then:

git diff > mypatch.patch
But sometimes it happens that part of the stuff you're doing are new files that are untracked and won't be in your git diff output. So, one way to do a patch is to stage everything for a new commit (git add each file, or just git add .) but don't do the commit, and then:

git diff --cached > mypatch.patch
Add the 'binary' option if you want to add binary files to the patch (e.g. mp3 files):

git diff --cached --binary > mypatch.patch
You can later apply the patch:

git apply mypatch.patch
Note: You can also use --staged as a synonym of --cached.

20. Personal Git Account
<removed>

21. Remove local changes

To undo the merge, use git reset --hard to reset the local repository to a previous state; use git-reflog to find the SHA-1 of the previous state and then reset to it.

Warning

The commands listed in this section remove all uncommitted changes, potentially leading to a loss of work:

git reset --hard
Alternatively, reset to a particular point in time, such as:

git reset --hard master@{"10 minutes ago"}

22. see all changes from/to a specific branch

is:pr author:@me is:closed head:savingsForeclosure 

opened from -> head
merged into -> base

23. Undo git cherry-pick on local directory

git reset --hard HEAD^

24. Show diff between commits

git diff old^..new > mypatch.patch
Try
git diff k73ud^..dj374
to make sure to include all changes of k73ud in the resulting diff.

And if you need to get only files names (e.g. to copy hotfix them manually):
git diff k73ud dj374 --name-only

https://stackoverflow.com/questions/3368590/show-diff-between-commits

25. [Utility] How to see all work done in a branch between a range of commits

1. IF seperate branch and author use following to see commits
https://github.com/Indifi/arya/commits/sa_verticalization?author=ashu361

2. To see diff in which files use
git diff old^ new --name-only

3. To see actual differences
git difftool old^..new
git diff old^..new > mypatch.patch

4. To see diff in vscode
Git Lens -> compare Working Directory/remote branch with old^



```